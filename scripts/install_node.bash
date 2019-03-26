#!/usr/bin/env bash

# exit if any command fails
set -e

PCKG=""
printf "\nGetting package manager...\n"

OS=$(echo $OSTYPE)
if [[ "$OS" == "linux-gnu" ]]; then
    # could be either debian or ubuntu
    if [[ "$(cat /etc/issue)" == "Ubuntu"* ]]; then
        PCKG="sudo apt-get"
    else
        PCKG="sudo apt-get"
    fi 
elif [[ "$OS" == "darwin"* ]]; then
    PCKG="brew" 
else
    printf "Script not compatible with OS: $OS. Follow the instructions in the README instead. \n";
    exit 1
fi

# check if node 8.15.0 is installed
printf "\nChecking if Node.js is installed and what version.\n"
if [[ "$(which node)" != "" ]]; then
    if [[ "$(node -v)" != *"v8"* ]]; then
        printf "You have a different version of Node.js than the one tested with (8.15.0).\nWill keep going since it might work.\n"
    fi
else
    printf "\nInstalling Node.js...\n"
    # install Node.js
    if [[ "$PCKG" == "brew" ]]; then
        $PCKG install node@8.15.0
    else
        if [[ "$PCKG" == "sudo apt-get" ]]; then
            curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
        else
            curl -sL https://deb.nodesource.com/setup_8.x | bash -
        fi
        $PCKG install -y nodejs
    fi
fi