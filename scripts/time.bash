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
    echo "Illegal number of parameters"
    exit 1
fi

# Assign the parameters
MODE="$1"
FILE="$2"
STACK="$3"  

# Get the language and extension
if [[ $FILE == *"efsd"* ]]; then
    LANGUAGE="EFSD"
    EXT="efsd"
fi

# Only get the real time
TIMEFORMAT=%R

case "$MODE" in
    "-i")
        # Get the location
        LOCATION="input/$LANGUAGE/$FILE"
        if [[ "$EXT" = "efsd" ]]; then
            LOCATION="$LOCATION -g"
        fi
        if [[ $FILE == *"read"* ]]; then
            TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE index.js -i $LOCATION -s $STACK <<< $INPUT > /dev/null)
        else
            TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE index.js -i $LOCATION -s $STACK > /dev/null)
        fi
        ;;
    "-f")
        # Get the location
        NEW_EXT="js"
        LOCATION="input/$LANGUAGE/$FILE"
        OUTPUT_LOCATION="output/$LANGUAGE/${FILE/$EXT/$NEW_EXT}"
        if [[ "$EXT" = "efsd" ]]; then
            LOCATION="$LOCATION -g"
        fi
        $(node --max-old-space-size=120000 --stack-size=$STACK_SIZE index.js -f $LOCATION -s $STACK > /dev/null)
        if [[ $FILE == *"read"* ]]; then
            TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE $OUTPUT_LOCATION <<< $INPUT > /dev/null)
        else
            TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE $OUTPUT_LOCATION > /dev/null)
        fi
        ;;
    "-o")
        if [[ $FILE == *"lambda"* ]]; then
            echo $"The -o mode only works on the EFSD."
            exit 1
        fi
        FILE=${FILE/.efsd/}
        $(cd ../EFSD; sh build_example.sh ${FILE/.efsd/} -js > /dev/null)
        
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
        TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE ../EFSD/example_build/js/$FILE.js $INPUT)
        ;;
    "-h")
        echo "Not implemented yet."
        exit 1
        ;;
    "-a")
        echo "Not implemented yet."
        exit 1
        ;;
    *)
esac
echo $TIME