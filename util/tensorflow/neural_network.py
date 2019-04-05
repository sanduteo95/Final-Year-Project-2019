from __future__ import print_function

import numpy as np 
import time
import tensorflow as tf
tf.logging.set_verbosity(tf.logging.ERROR)

class TFNeuralNetwork():
    def __init__(self, data_X, data_Y):
        self.data_X = data_X
        self.data_Y = data_Y

        # Network Parameters
        input_size = self.data_X.shape[1]
        hidden_size = 2
        output_size = 2

        self.x = tf.placeholder(tf.float32, [None, input_size])
        self.y = tf.placeholder(tf.int32, data_Y.shape)
        
        # neural network layers
        hidden = tf.layers.dense(self.x, hidden_size, tf.nn.sigmoid)          # hidden layer
        self.output = tf.layers.dense(hidden, output_size, tf.nn.softmax)     # output layer
        self.weights = tf.global_variables()
        
    def train(self, learning_rate, epochs, test):
        # Set up the optimizer
        loss = tf.nn.sparse_softmax_cross_entropy_with_logits(labels=self.y, logits=self.output)
        optimizer = tf.train.GradientDescentOptimizer(learning_rate=learning_rate)
        train = optimizer.minimize(loss)
        init = tf.group(tf.global_variables_initializer(), tf.local_variables_initializer())
        
        # Start training
        sess = tf.Session()
        sess.run(init)
        for step in range(epochs):
            _, c = sess.run([train, loss], feed_dict={self.x: data_X, self.y: data_Y})
            # Display Logs
            print("Epoch=", str(step), "Cost=", str(np.amax(c)))

        self.weights = tf.global_variables()

        print("New weights after training: ")
        print(sess.run(self.weights))

        # Predict value for test
        self.pred = np.amax(sess.run(self.output, {self.x: test}))

# Intialise TensorFlowNN
data_X = np.array([[0, 0, 1], [1, 1, 1], [1, 0, 1], [0, 1, 1]])
data_y = np.array([0, 1, 1, 0])
tf_neural_network = TFNeuralNetwork(data_X, data_y)

start = time.time()
tf_neural_network.train(0.00001, 1, np.array([[1, 0, 0]]))
end = time.time()
print("Ellapsed time: ")
print(end - start)

# Test the neural network with a new situation.
print("Considering new situation [1, 0, 0] -> ?: ")
print(tf_neural_network.pred)