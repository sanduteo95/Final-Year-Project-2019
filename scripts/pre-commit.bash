#!/usr/bin/env bash

echo "Command line tool regression tests before commit"
npm run test-cli

if [ $? -ne 0 ]; then
 echo "\nMake sure the command line tool tests pass before committing!"
 exit 1
fi

echo "Lambda regression tests before commit"
npm run test-lambda

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "\nMake sure the lambda regression tests pass before committing!"
 exit 1
fi

echo "SSD regression tests before commit"
npm run test-ssd

git checkout output

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "\nMake sure the SSD regression tests pass before committing!"
 exit 1
fi