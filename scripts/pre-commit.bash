#!/usr/bin/env bash

echo "Regression tests before commit"
npm t

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "Make sure the regression tests pass before committing!"
 exit 1
fi