#!/usr/bin/env bash

STACK_SIZE=100000
HEAP_SIZE=120000
FILE="$2"
LANGUAGE="toyLambda"
EXT="lambda"
INPUT=1

# Get the language
if [[ $FILE == *"efsd"* ]]; then
    LANGUAGE="EFSD"
    EXT="efsd"
fi

# Only get the real time
TIMEFORMAT=%R

if [[ "$1" = "-i" ]]; then
    STACK="$3"  

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
else
    if [[ "$1" = "-f" ]]; then
        STACK="$3"

        # Get the location
        NEW_EXT="js"
        LOCATION="output/$LANGUAGE/${FILE/$EXT/$NEW_EXT}"
        $(node --max-old-space-size=120000 --stack-size=${stackSize} index.js -f input/$LANGUAGE/$FILE -s ${maxTermCall} > /dev/null)
        if [[ $FILE == *"read"* ]]; then
            TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE $LOCATION <<< $INPUT > /dev/null)
        else
            TIME=$(time node --max-old-space-size=$HEAP_SIZE --stack-size=$STACK_SIZE $LOCATION > /dev/null)
        fi
    else
        if [[ "$1" = "-o" ]];
        then
            if [[ $FILE == *"lambda"* ]]; then
                echo $"The -o mode only works on the EFSD."
                exit 1
            fi
            FILE=${FILE/.efsd/}
            echo $FILE
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
        else
            echo $"There are only three modes: -i, -f, and -o."
            exit 1
        fi
    fi
fi

echo $TIME