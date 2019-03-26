# Signal-less Synchronous Dataflow 
Bundles the online visualiser implemented in [this](https://git.cs.bham.ac.uk/wtc488/itf-impl/tree/vis-term/Visualiser)branch, which is the simplified, non-UI version of the [master](https://git.cs.bham.ac.uk/wtc488/itf-impl/tree/master/Visualiser) branch. Takes in the `Require.js` framework used to implement the visualiser of the Signal-less Synchronous Dataflow paradigm and uses `Webpack` to convert it into `commonjs2` compatible code, which can be run from a terminal.

## About the language
For a description of the language syntax read [this](https://git.cs.bham.ac.uk/wtc488/itf-impl/tree/master/Visualiser/README.md) README. Modifications have been made to the original visualiser to allow linking between compiled abstractions and constants, as well as the addition of trampolines to speed up the interpreter and avoid stack overflows.

To be able to run the visualiser, clone the mentioned repository in the same folder you have cloned this repository. You may also need [SSD](https://github.com/sanduteo95/EFSD), the OCaml implementation of the Signal-less Synchronous Dataflow (formerly known as Event-free Synchronous Dataflow) language, and [itf-impl/Agda](https://git.cs.bham.ac.uk/wtc488/itf-impl/tree/vis-term/Agda), if you plan on running the benchmarks. Make sure to follow the instructions in those repos and run `make` in the cloned folders to build the library if so.

Amongst the examples available in the `../input/SSD` folder there are seventeen "simple" programs displaying the capabilities of the SSD paradigm, as well as implementations of Machine Learnging tasks and a reimplementation of the examples available in [this](https://github.com/DecML/decml-ppx). The latter set of examples can be found in folder `../input/SSD/ML` and display the capabilities of the Machine Learning functionality of the SSD framework.

## CLI functionality
1. Interpreter: `-i <filePath> -g`.
2. Compiler: `-c <filePath> -g [-s value]`.
3. Generate specialised interpreter with the help of the First Futamura Projection: `-1 <filePath> -g [-s value]`.
4. Generate a compiler with the help of the Second Futamura Projection: `-2 -g -o`.