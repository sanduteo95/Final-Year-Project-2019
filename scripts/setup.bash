#!/usr/bin/env bash

# exit if any command fails
set -e

UPDATED=false
read -p "Do you want to update this repo (Y/n) ? " -n 1 -r
echo  
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # pull the latest version of this repo
    git pull
    UPDATED=true
fi

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

# install Node.js dependencies if they aren't already installed
if [ ! -d "node_modules" ]; then
    printf "\nInstalling Node.js dependecies...\n"
    npm install
else
    if [ "$UPDATED" = true ]; then
        printf "\nInstalling Node.js dependecies...\n"
        npm install
    fi
fi

# move in parent directory to clone the other repos needed
printf "\nChanging directory to parent folder.\nCloning EFSD and itf-impl if they don't exist...\n"
cd ../
if [ ! -d "EFSD" ]; then
    git clone https://github.com/sanduteo95/EFSD
fi
if [ ! -d "itf-impl" ]; then
    git clone https://git.cs.bham.ac.uk/wtc488/itf-impl
fi

# change directory to EFSD (OCaml implementation) to install and build project
printf "\nChanging directory to EFSD.\n"
cd EFSD

# pull the latest version of the EFSD repo
read -p "Do you want to update the EFSD repo (Y/n) ? " -n 1 -r
echo  
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # pull the latest version of the EFSD repo
    git pull
fi

# make sure OCaml is installed, if not, install it with Opam
printf "\nChecking if OPAM is installed.\n"

if [ "$(which opam)" != "" ]; then
    printf "OPAM is installed!\n"

    # check version of OCaml
    if [[ "$(ocaml -version)" != *"4.05.0"* ]]; then
        printf "You have a different version of OCaml than the one tested with (4.05.0).\nWill keep going since it might work.\n"
    fi
else  
    printf "Installing Opam and OCaml...\n"
    if [[ "$PCKG" == "brew" ]]; then
        $PCKG install gpatch
    fi
    $PCKG install opam
    opam init
    eval `opam config env`
    opam switch 4.05.0
    eval `opam config env`
    ocaml -version
    opam depext conf-m4.1
fi

# install OCaml packages
opam install utop core
opam install ppx_tools
opam install incremental
opam install js_of_ocaml
opam install js_of_ocaml-ppx
opam install js_of_ocaml-lwt

# run make
printf "\nBuilding OCaml project...\n"
(make clean && make) || make

printf "\nChanging directory to itf-impl.\nSwitching to branch vis-term.\n"
cd ../itf-impl

# pull the latest version of the itf-impl repo
read -p "Do you want to update the itf-impl repo (Y/n) ? " -n 1 -r
echo  
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # pull the latest version of this repo
    git pull
fi

printf "\nInstalling Agda and the standard library...\n"
# make sure Agda and stdlib are installed, if not, install them

if [ "$(which agda)" != "" ]; then
    printf "Agda is installed!\n"
else   
    $PCKG install agda
    if [ "$PCKG" == "brew" ]; then 
        echo "/usr/local/lib/agda/standard-library.agda-lib" > ~/.agda/libraries
        echo "standard-library" > ~/.agda/defaults
    else 
        $PCKG install agda-mode
        $PCKG install agda-stdlib
    fi
fi

# change girectory to itf-impl/Agda and run make
printf "\nBuilding Agda project...\n"
cd Agda
(make clean && make) || make

# change directory to this repo
cd ../../tas458
