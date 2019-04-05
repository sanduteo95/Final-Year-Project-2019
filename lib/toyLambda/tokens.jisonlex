digit                       [0-9]
id                          [A-Za-z0-9]+

%%
[ \\t]+         /* ignore */
\n              /* ignore */
"let"           return 'let';
"rec"           return 'rec';
"in"            return 'in';
"λ"             return 'λ';
"."             return '.';
"("             return '(';
")"             return ')';
"@"             return '@';
"="             return '=';
"read"          return 'read';
"print"         return 'print';
{digit}+        return 'const';
{id}            return 'id';
"true"          return 'const';
"false"         return 'const';
"+"             return 'plus';
"-"             return 'minus';
"*"             return 'times';
"/"             return 'divide';
"%"             return 'modulus';
"&&"            return 'and';
"||"            return 'or';
"!"             return 'negate';
"<"             return 'less';
">"             return 'greater';
"<="            return 'leq';
">="            return 'geq';
"=="            return 'eq';
"!="            return 'noteq';
<<EOF>>			return 'EOF'; 