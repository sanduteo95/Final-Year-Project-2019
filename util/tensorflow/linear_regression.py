from __future__ import print_function

import time
import tensorflow as tf
import numpy as np

class TFLinearRegression():
    def __init__(self, data_X, data_Y):
        self.data_X = data_X
        self.data_Y = data_Y

        self.x = tf.placeholder("float")
        self.y = tf.placeholder("float")
        self.w = tf.Variable(0.0,  name="weight")
        self.b = tf.Variable(0.0, name="bias")

        self.output = tf.add(tf.multiply(self.x, self.w), self.b)
        self.weights = tf.global_variables()

    def train(self, learning_rate, epochs, test):
        n_samples = self.data_X.shape[0]

        # Define loss and optimizer
        loss = tf.reduce_sum(tf.pow(self.output - self.y, 2))/(2 * n_samples)
        tf.summary.scalar("cost", loss)
        merged_summary_op = tf.summary.merge_all()
        optimizer = tf.train.GradientDescentOptimizer(learning_rate=learning_rate)
        train = optimizer.minimize(loss)
        
        # Initialize the variables
        init = tf.global_variables_initializer()
        
        # Start training
        sess = tf.Session()
        sess.run(init)
        summary_writer = tf.summary.FileWriter('util/tensorflow', graph=tf.get_default_graph())
    
        for step in range(epochs):
            # Calculate loss
            _, c, summary = sess.run([train, loss, merged_summary_op], feed_dict={self.x: data_X, self.y: data_Y})
            summary_writer.add_summary(summary, 0)

            # Display Logs
            print("Epoch=", str(step), "Cost=", "{:.9f}".format(c))
    
        self.weights = tf.global_variables()
        self.pred = sess.run(self.output, feed_dict={self.x: test})[0]

# Intialise TensorFlowLR
data_X = np.asarray([1, 2, 3, 4, 5, 6])
data_Y = np.asarray([3, 4, 5, 6, 7, 8])
tf_linear_regression = TFLinearRegression(data_X, data_Y)

start = time.time()
tf_linear_regression.train(0.01, 1, np.array([7]))
end = time.time()
print("Ellapsed time: ")
print(end - start)

# Test linear regression with a new situation.
print("Considering new situation 7 -> ?: ")
print(tf_linear_regression.pred)