#!/usr/bin/env bash

echo "Lambda regression tests before commit"
npm run test-lambda

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "\nMake sure the lambda regression tests pass before committing!"
 exit 1
fi

echo "EFSD regression tests before commit"
npm run test-efsd

git checkout output

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "\nMake sure the EFSD regression tests pass before committing!"
 exit 1
fi