grammar Function;
prog: stat+;

stat: sentencia_funcion;

sentencia_funcion: FUNCTION identificador APAR (parametros (',' parametros)*)? CPAR ALLAVE instrucciones* CLLAVE; 
parametros: identificador; 
instrucciones: (escribir | leer | asignacion);

leer: LEER APAR identificador CPAR PUNCOM;
escribir: ESCRIBIR APAR expresion CPAR PUNCOM;
asignacion: identificador EQ expresion PUNCOM;
expresion: (numero | cadena | identificador | '+')*;
identificador: PALABRAS;
numero: NUMERO;
cadena: CADENA;

// lexemas
FUNCTION: 'funcion';
ESCRIBIR: 'escribir';
LEER: 'leer';
PALABRAS: [a-zA-Z_][a-zA-Z0-9_]*;
APAR: '(';
CPAR: ')';
ALLAVE: '{';
CLLAVE: '}';
PUNCOM: ';';
NUMERO: [0-9]+;
CADENA: '"' (~["\\])* '"'; 
EQ: '=';

WS: [ \t\r\n]+ -> skip;