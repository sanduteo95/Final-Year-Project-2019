#!/usr/bin/env bash

# Global variables
STACK_SIZE=100000
HEAP_SIZE=120000

# Default langauge and extension
LANGUAGE="toyLambda"
EXT="lambda"
INPUT=1

# Check the numberof parameters
if [ "$#" -ne 3 ]; then
    if [ "$#" -ne 2 ]; then
        echo "Illegal number of parameters"
        exit 1
    fi
fi

# Assign the parameters
MODE="$1"
FILE="$2"
if [ "$#" -ne 3 ]; then
    STACK=125  
else
    STACK="$3"  
fi

# Get the language and extension
if [[ $FILE == *"efsd"* ]]; then
    LANGUAGE="EFSD"
    EXT="efsd"
fi

case "$MODE" in
    "-i")
        # Get the location
        LOCATION="input/$LANGUAGE/$FILE"
        if [[ "$EXT" = "efsd" ]]; then
            LOCATION="$LOCATION -g"
        fi
        # todo
        ;;
    "-f")
        # Get the location
        NEW_EXT="js"
        LOCATION="input/$LANGUAGE/$FILE"
        OUTPUT_LOCATION="output/$LANGUAGE/${FILE/$EXT/$NEW_EXT}"
        if [[ "$EXT" = "efsd" ]]; then
            LOCATION="$LOCATION -g"
        fi
        node --max-old-space-size=120000 --stack-size=$STACK_SIZE index.js -f $LOCATION -s $STACK > /dev/null
        # todo
        ;;
    "-o")
        if [[ $FILE == *"lambda"* ]]; then
            echo $"The OCaml mode only works on the EFSD."
            exit 1
        fi
        FILE=${FILE/.efsd/}
        # if running in Ubuntu/Debian, we cannot use sh
        if [[ "$OSTYPE" == "linux-gnu" ]]; then
            cd ../EFSD; ./build_example.sh $FILE
        else
            cd ../EFSD; sh build_example.sh $FILE
        fi
        ocamlfind ocamlopt -p -thread -I ../EFSD/lib/ -I ../EFSD/lib/plain -w -10 -linkpkg -package lwt,lwt.unix -o ../EFSD/example_build/"$FILE".o ../EFSD/lib/heterolist.ml ../EFSD/lib/plain/syncdf.ml ../EFSD/example_build/"$FILE"_syncdf.ml

        case "$FILE" in
            "incremental")
                INPUT="100"
                ;;
            "light_control")
                INPUT="100"
                ;;
            "cellular_automata")
                INPUT="10 100"
                ;;
            "planets")
                INPUT="10 100"
                ;;
            *)
        esac
        # RESULT=$(ocamlprof ../EFSD/ocamlprof.dump)
        # rm ../EFSD/ocamlprof.dump
        ;;
    "-h")
        echo "Not implemented yet."
        exit 1
        ;;
    "-a")
        if [[ $FILE == *"lambda"* ]]; then
            echo $"The Agda mode only works on the EFSD."
            exit 1
        fi
        FILE=${FILE/.efsd/}
        cd ../itf-impl/Agda 
        FILE=`echo ${FILE:0:1} | tr '[a-z]' '[A-Z]'`${FILE:1}
        RESULT=$(agda -v profile:8 ../Agda/Examples/$FILE.agda)
        ;;
    *)
esac
echo "$RESULT"
