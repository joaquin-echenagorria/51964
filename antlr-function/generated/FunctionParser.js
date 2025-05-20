// Generated from d:/51964/antlr-function/Function.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import FunctionListener from './FunctionListener.js';
import FunctionVisitor from './FunctionVisitor.js';

const serializedATN = [4,1,15,94,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,38,8,2,10,2,12,2,41,9,
2,3,2,43,8,2,1,2,1,2,1,2,5,2,48,8,2,10,2,12,2,51,9,2,1,2,1,2,1,3,1,3,1,4,
1,4,1,4,3,4,60,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,83,8,8,10,8,12,8,86,9,8,1,9,1,9,1,10,1,
10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,0,91,0,25,1,0,
0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,54,1,0,0,0,8,59,1,0,0,0,10,61,1,0,0,0,12,
67,1,0,0,0,14,73,1,0,0,0,16,84,1,0,0,0,18,87,1,0,0,0,20,89,1,0,0,0,22,91,
1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,
0,0,0,28,1,1,0,0,0,29,30,3,4,2,0,30,3,1,0,0,0,31,32,5,3,0,0,32,33,3,18,9,
0,33,42,5,7,0,0,34,39,3,6,3,0,35,36,5,1,0,0,36,38,3,6,3,0,37,35,1,0,0,0,
38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,42,
34,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,45,5,8,0,0,45,49,5,9,0,0,46,48,
3,8,4,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,
0,0,0,51,49,1,0,0,0,52,53,5,10,0,0,53,5,1,0,0,0,54,55,3,18,9,0,55,7,1,0,
0,0,56,60,3,12,6,0,57,60,3,10,5,0,58,60,3,14,7,0,59,56,1,0,0,0,59,57,1,0,
0,0,59,58,1,0,0,0,60,9,1,0,0,0,61,62,5,5,0,0,62,63,5,7,0,0,63,64,3,18,9,
0,64,65,5,8,0,0,65,66,5,11,0,0,66,11,1,0,0,0,67,68,5,4,0,0,68,69,5,7,0,0,
69,70,3,16,8,0,70,71,5,8,0,0,71,72,5,11,0,0,72,13,1,0,0,0,73,74,3,18,9,0,
74,75,5,14,0,0,75,76,3,16,8,0,76,77,5,11,0,0,77,15,1,0,0,0,78,83,3,20,10,
0,79,83,3,22,11,0,80,83,3,18,9,0,81,83,5,2,0,0,82,78,1,0,0,0,82,79,1,0,0,
0,82,80,1,0,0,0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,
85,17,1,0,0,0,86,84,1,0,0,0,87,88,5,6,0,0,88,19,1,0,0,0,89,90,5,12,0,0,90,
21,1,0,0,0,91,92,5,13,0,0,92,23,1,0,0,0,7,27,39,42,49,59,82,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FunctionParser extends antlr4.Parser {

    static grammarFileName = "Function.g4";
    static literalNames = [ null, "','", "'+'", "'funcion'", "'escribir'", 
                            "'leer'", null, "'('", "')'", "'{'", "'}'", 
                            "';'", null, null, "'='" ];
    static symbolicNames = [ null, null, null, "FUNCTION", "ESCRIBIR", "LEER", 
                             "PALABRAS", "APAR", "CPAR", "ALLAVE", "CLLAVE", 
                             "PUNCOM", "NUMERO", "CADENA", "EQ", "WS" ];
    static ruleNames = [ "prog", "stat", "sentencia_funcion", "parametros", 
                         "instrucciones", "leer", "escribir", "asignacion", 
                         "expresion", "identificador", "numero", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FunctionParser.ruleNames;
        this.literalNames = FunctionParser.literalNames;
        this.symbolicNames = FunctionParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FunctionParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.stat();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FunctionParser.RULE_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.sentencia_funcion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia_funcion() {
	    let localctx = new Sentencia_funcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FunctionParser.RULE_sentencia_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(FunctionParser.FUNCTION);
	        this.state = 32;
	        this.identificador();
	        this.state = 33;
	        this.match(FunctionParser.APAR);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 34;
	            this.parametros();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 35;
	                this.match(FunctionParser.T__0);
	                this.state = 36;
	                this.parametros();
	                this.state = 41;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 44;
	        this.match(FunctionParser.CPAR);
	        this.state = 45;
	        this.match(FunctionParser.ALLAVE);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0)) {
	            this.state = 46;
	            this.instrucciones();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(FunctionParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FunctionParser.RULE_parametros);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FunctionParser.RULE_instrucciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 56;
	            this.escribir();
	            break;
	        case 5:
	            this.state = 57;
	            this.leer();
	            break;
	        case 6:
	            this.state = 58;
	            this.asignacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FunctionParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(FunctionParser.LEER);
	        this.state = 62;
	        this.match(FunctionParser.APAR);
	        this.state = 63;
	        this.identificador();
	        this.state = 64;
	        this.match(FunctionParser.CPAR);
	        this.state = 65;
	        this.match(FunctionParser.PUNCOM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FunctionParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(FunctionParser.ESCRIBIR);
	        this.state = 68;
	        this.match(FunctionParser.APAR);
	        this.state = 69;
	        this.expresion();
	        this.state = 70;
	        this.match(FunctionParser.CPAR);
	        this.state = 71;
	        this.match(FunctionParser.PUNCOM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FunctionParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.identificador();
	        this.state = 74;
	        this.match(FunctionParser.EQ);
	        this.state = 75;
	        this.expresion();
	        this.state = 76;
	        this.match(FunctionParser.PUNCOM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FunctionParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 12356) !== 0)) {
	            this.state = 82;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 12:
	                this.state = 78;
	                this.numero();
	                break;
	            case 13:
	                this.state = 79;
	                this.cadena();
	                break;
	            case 6:
	                this.state = 80;
	                this.identificador();
	                break;
	            case 2:
	                this.state = 81;
	                this.match(FunctionParser.T__1);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FunctionParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(FunctionParser.PALABRAS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FunctionParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(FunctionParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FunctionParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(FunctionParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FunctionParser.EOF = antlr4.Token.EOF;
FunctionParser.T__0 = 1;
FunctionParser.T__1 = 2;
FunctionParser.FUNCTION = 3;
FunctionParser.ESCRIBIR = 4;
FunctionParser.LEER = 5;
FunctionParser.PALABRAS = 6;
FunctionParser.APAR = 7;
FunctionParser.CPAR = 8;
FunctionParser.ALLAVE = 9;
FunctionParser.CLLAVE = 10;
FunctionParser.PUNCOM = 11;
FunctionParser.NUMERO = 12;
FunctionParser.CADENA = 13;
FunctionParser.EQ = 14;
FunctionParser.WS = 15;

FunctionParser.RULE_prog = 0;
FunctionParser.RULE_stat = 1;
FunctionParser.RULE_sentencia_funcion = 2;
FunctionParser.RULE_parametros = 3;
FunctionParser.RULE_instrucciones = 4;
FunctionParser.RULE_leer = 5;
FunctionParser.RULE_escribir = 6;
FunctionParser.RULE_asignacion = 7;
FunctionParser.RULE_expresion = 8;
FunctionParser.RULE_identificador = 9;
FunctionParser.RULE_numero = 10;
FunctionParser.RULE_cadena = 11;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_stat;
    }

	sentencia_funcion() {
	    return this.getTypedRuleContext(Sentencia_funcionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sentencia_funcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_sentencia_funcion;
    }

	FUNCTION() {
	    return this.getToken(FunctionParser.FUNCTION, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	APAR() {
	    return this.getToken(FunctionParser.APAR, 0);
	};

	CPAR() {
	    return this.getToken(FunctionParser.CPAR, 0);
	};

	ALLAVE() {
	    return this.getToken(FunctionParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(FunctionParser.CLLAVE, 0);
	};

	parametros = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametrosContext);
	    } else {
	        return this.getTypedRuleContext(ParametrosContext,i);
	    }
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterSentencia_funcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitSentencia_funcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitSentencia_funcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_parametros;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_instrucciones;
    }

	escribir() {
	    return this.getTypedRuleContext(EscribirContext,0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_leer;
    }

	LEER() {
	    return this.getToken(FunctionParser.LEER, 0);
	};

	APAR() {
	    return this.getToken(FunctionParser.APAR, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	CPAR() {
	    return this.getToken(FunctionParser.CPAR, 0);
	};

	PUNCOM() {
	    return this.getToken(FunctionParser.PUNCOM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_escribir;
    }

	ESCRIBIR() {
	    return this.getToken(FunctionParser.ESCRIBIR, 0);
	};

	APAR() {
	    return this.getToken(FunctionParser.APAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	CPAR() {
	    return this.getToken(FunctionParser.CPAR, 0);
	};

	PUNCOM() {
	    return this.getToken(FunctionParser.PUNCOM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_asignacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	EQ() {
	    return this.getToken(FunctionParser.EQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNCOM() {
	    return this.getToken(FunctionParser.PUNCOM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_expresion;
    }

	numero = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumeroContext);
	    } else {
	        return this.getTypedRuleContext(NumeroContext,i);
	    }
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_identificador;
    }

	PALABRAS() {
	    return this.getToken(FunctionParser.PALABRAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(FunctionParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FunctionParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(FunctionParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FunctionListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FunctionVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FunctionParser.ProgContext = ProgContext; 
FunctionParser.StatContext = StatContext; 
FunctionParser.Sentencia_funcionContext = Sentencia_funcionContext; 
FunctionParser.ParametrosContext = ParametrosContext; 
FunctionParser.InstruccionesContext = InstruccionesContext; 
FunctionParser.LeerContext = LeerContext; 
FunctionParser.EscribirContext = EscribirContext; 
FunctionParser.AsignacionContext = AsignacionContext; 
FunctionParser.ExpresionContext = ExpresionContext; 
FunctionParser.IdentificadorContext = IdentificadorContext; 
FunctionParser.NumeroContext = NumeroContext; 
FunctionParser.CadenaContext = CadenaContext; 
