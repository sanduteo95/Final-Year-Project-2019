#!/usr/bin/env bash

# exit if any command fails
set -e

# change directory to EFSD (OCaml implementation) to install and build project
printf "\nChanging directory to EFSD.\n"
cd ../EFSD

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

printf "\nChanging directory to itf-impl."
cd ../itf-impl

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
