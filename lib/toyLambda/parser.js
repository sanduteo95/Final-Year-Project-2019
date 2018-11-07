var Parser = require("jison").Parser;

// the grammar for the parser
const grammar = {
    "operators": [
        ["right", "λ"], 
        ["left", "@"],
        ["left", "and", "or"],
        ["left", "eq", "noteq"],
        ["left", "leq", "geq", "less", "greater"],
        ["left", "plus", "minus"],
        ["left", "times", "divide", "modulus"],
        ["right", "negate"]
    ],
    "bnf": {
        "code": [
            [ "lambda EOF",                                 "return $lambda"],
            [ "lambda ",                                    "return $lambda"]
        ],
        // the lambda caculus can have definitions at the top and a term at the end
        "lambda": [
            [ "let var = term in lambda",                   "$$ = [\"Def\", $var[1], $term, $lambda];" ],
            [ "let rec var = term in lambda",                   "$$ = [\"RecDef\", $var[1], $term, $lambda];" ],
            [ "term",                                       "$$ = $term;" ]
        ],
        // the lambda term can consist of a variable, a constant, an operation, an abstaction or an application
        "term": [
            [ "var",                                        "$$ = [\"Deref\", $var];"],
            [ "const",                                      "$$ = [\"Const\", yytext];" ],
            [ "operation",                                  "$$ = $operation;" ],
            [ "abstraction",                                "$$ = $abstraction;" ],
            [ "application",                                "$$ = $application;" ],
            [ "read",                                       "$$ = [\"Deref\", [\"Identifier\", \"_read\"]];" ],
            [ "( term )",                                   "$$ = $term;" ],
        ],
        "abstraction": [
            [ "λ var . term",                                "$$ = [\"Abstr\", [$var[1], $term]];" ]
        ],
        "var": [
            [ "id",                                         "$$ = [\"Identifier\", yytext];"],
        ],
        "application": [
            [ "term @ term",                                        "$$ = [\"Apply\", [$1, $3]];" ],
            [ "print @ term",                                       "$$ = [\"Apply\", [[\"Abstr\", [\"_print\", [\"Deref\", [\"Identifier\", \"_print\"]]]], $term]];" ],
        ],
        // the operation can consist of integer or boolean operations
        "operation": [
            [ "int_operation",                              "$$ = $int_operation;" ],
            [ "bool_operation",                             "$$ = $bool_operation;" ]
        ],
        // the int operation returns integers only
        "int_operation": [
            [ "term plus term",                             "$$ = [\"Op\", [\"Plus\", $1, $3]];"],
            [ "term minus term",                            "$$ = [\"Op\", [\"Minus\", $1, $3]];" ],
            [ "term times term",                            "$$ = [\"Op\", [\"Times\", $1, $3]];" ],
            [ "term divide term",                           "$$ = [\"Op\", [\"Divide\", $1, $3]];" ],
            [ "term modulus term",                          "$$ = [\"Op\", [\"Modulus\", $1, $3]];" ],
            [ "minus term",                                 "$$ = [\"Op\", [\"Negative\", $term]];" ]
        ],
        // the boolean operation returns on booleans only
        "bool_operation": [
            [ "term leq term",                              "$$ = [\"Op\", [\"Leq\", $1, $3]];" ],
            [ "term less term",                             "$$ = [\"Op\", [\"Less\", $1, $3]];" ],
            [ "term geq term",                              "$$ = [\"Op\", [\"Geq\", $1, $3]];" ],
            [ "term greater term",                          "$$ = [\"Op\", [\"Greater\", $1, $3]];" ],
            [ "term eq term",                               "$$ = [\"Op\", [\"Eq\", $1, $3]];" ],
            [ "term noteq term",                            "$$ = [\"Op\", [\"Noteq\", $1, $3]];" ],
            [ "term and term",                              "$$ = [\"Op\", [\"And\", $1, $3]];" ],
            [ "term or term",                               "$$ = [\"Op\", [\"Or\", $1, $3]];" ],
            [ "negate term",                                "$$ = [\"Op\", [\"Negate\", $term]];" ]
        ]
    }
};

// create the parser for the defined grammar
const parser = new Parser(grammar);

const JSLexer = require("./lexer.js");
const jsLexer = new JSLexer();
// initialise the lexer
jsLexer.initialiseLexer();

parser.lexer = jsLexer.lexer;

module.exports = parser;
