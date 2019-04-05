from __future__ import print_function

import tensorflow as tf
import numpy as np
from tensorflow.contrib import rnn
import time
tf.logging.set_verbosity(tf.logging.ERROR)

class TFRecurrentNeuralNetwork():
    def __init__(self, data_X, data_Y):
        self.data_X = data_X
        self.data_Y = data_Y

        # Network Parameters
        self.input_size = self.data_X.shape[1]
        self.timesteps = 1
        self.hidden_size = 2
        self.output_size = 2

        self.x = tf.placeholder("float", [None, self.timesteps, self.input_size])
        self.y = tf.placeholder("float", [None, 1])
        self.w = tf.Variable(tf.random_normal([self.hidden_size, self.output_size]))

        # Unstack to get a list of 'timesteps' tensors of shape (?, n_input)
        inp = tf.unstack(self.x, self.timesteps, 1)

        # Define a lstm cell with tensorflow
        lstm_cell = rnn.BasicLSTMCell(self.hidden_size, forget_bias=1.0, reuse=tf.AUTO_REUSE)

        # Get lstm cell output
        outputs, states = rnn.static_rnn(lstm_cell, inp, dtype=tf.float32)

        # Linear activation, using rnn inner loop last output
        self.logits = tf.matmul(outputs[-1], self.w)
        self.output = tf.nn.softmax(self.logits)
        self.weights = tf.global_variables()
    
    def train(self, learning_rate, epochs, test):
        n_samples = self.data_X.shape[0]

        # Define loss and optimizer
        loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(
            logits=self.logits, labels=self.y))
        optimizer = tf.train.GradientDescentOptimizer(learning_rate=learning_rate)
        train = optimizer.minimize(loss)

        # Initialize the variables
        init = tf.global_variables_initializer()

        # Start training
        sess = tf.Session()
        sess.run(init)

        for step in range(0, epochs):            
            # Reshape data to get 28 seq of 28 elements
            data_X = self.data_X.reshape((n_samples, self.timesteps, self.input_size))
            data_Y = self.data_Y.reshape((n_samples, 1))
            
            # Predict
            _, c = sess.run([train, loss], feed_dict={self.x: data_X, self.y: data_Y})
             # Display Logs
            print("Epoch=", str(step), "Cost=", str(np.amax(c)))

        self.weights = tf.global_variables()
        test = test.reshape((1, self.timesteps, self.input_size))
        pred = sess.run(self.output, feed_dict={self.x: test})
        self.pred = np.amax(pred[pred.shape[0] - 1])

# Intialise TensorFlowRNN
data_X = np.array([[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]])
data_Y = np.array([0, 1, 1, 0])
tf_recurrent_neural_network = TFRecurrentNeuralNetwork(data_X, data_Y)

start = time.time()
tf_recurrent_neural_network.train(0.001, 1, np.array([[1, 0, 0]]))
end = time.time()
print("Ellapsed time: ")
print(end - start)

# Test the recurrent neural network with a new situation.
print("Considering new situation [1, 0, 0] -> ?: ")
print(tf_recurrent_neural_network.pred)