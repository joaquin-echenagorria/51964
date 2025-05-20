// Generated from d:/51964/antlr-function/Function.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class FunctionLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, FUNCTION=3, ESCRIBIR=4, LEER=5, PALABRAS=6, APAR=7, CPAR=8, 
		ALLAVE=9, CLLAVE=10, PUNCOM=11, NUMERO=12, CADENA=13, EQ=14, WS=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "FUNCTION", "ESCRIBIR", "LEER", "PALABRAS", "APAR", "CPAR", 
			"ALLAVE", "CLLAVE", "PUNCOM", "NUMERO", "CADENA", "EQ", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "'+'", "'funcion'", "'escribir'", "'leer'", null, "'('", 
			"')'", "'{'", "'}'", "';'", null, null, "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "FUNCTION", "ESCRIBIR", "LEER", "PALABRAS", "APAR", 
			"CPAR", "ALLAVE", "CLLAVE", "PUNCOM", "NUMERO", "CADENA", "EQ", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public FunctionLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Function.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000fa\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0005\u0005<\b\u0005\n\u0005"+
		"\f\u0005?\t\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0004\u000bL\b"+
		"\u000b\u000b\u000b\f\u000bM\u0001\f\u0001\f\u0005\fR\b\f\n\f\f\fU\t\f"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0004\u000e\\\b\u000e\u000b"+
		"\u000e\f\u000e]\u0001\u000e\u0001\u000e\u0000\u0000\u000f\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u0001\u0000\u0005\u0003\u0000AZ__az\u0004\u000009AZ__az\u0001\u00000"+
		"9\u0002\u0000\"\"\\\\\u0003\u0000\t\n\r\r  d\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0001"+
		"\u001f\u0001\u0000\u0000\u0000\u0003!\u0001\u0000\u0000\u0000\u0005#\u0001"+
		"\u0000\u0000\u0000\u0007+\u0001\u0000\u0000\u0000\t4\u0001\u0000\u0000"+
		"\u0000\u000b9\u0001\u0000\u0000\u0000\r@\u0001\u0000\u0000\u0000\u000f"+
		"B\u0001\u0000\u0000\u0000\u0011D\u0001\u0000\u0000\u0000\u0013F\u0001"+
		"\u0000\u0000\u0000\u0015H\u0001\u0000\u0000\u0000\u0017K\u0001\u0000\u0000"+
		"\u0000\u0019O\u0001\u0000\u0000\u0000\u001bX\u0001\u0000\u0000\u0000\u001d"+
		"[\u0001\u0000\u0000\u0000\u001f \u0005,\u0000\u0000 \u0002\u0001\u0000"+
		"\u0000\u0000!\"\u0005+\u0000\u0000\"\u0004\u0001\u0000\u0000\u0000#$\u0005"+
		"f\u0000\u0000$%\u0005u\u0000\u0000%&\u0005n\u0000\u0000&\'\u0005c\u0000"+
		"\u0000\'(\u0005i\u0000\u0000()\u0005o\u0000\u0000)*\u0005n\u0000\u0000"+
		"*\u0006\u0001\u0000\u0000\u0000+,\u0005e\u0000\u0000,-\u0005s\u0000\u0000"+
		"-.\u0005c\u0000\u0000./\u0005r\u0000\u0000/0\u0005i\u0000\u000001\u0005"+
		"b\u0000\u000012\u0005i\u0000\u000023\u0005r\u0000\u00003\b\u0001\u0000"+
		"\u0000\u000045\u0005l\u0000\u000056\u0005e\u0000\u000067\u0005e\u0000"+
		"\u000078\u0005r\u0000\u00008\n\u0001\u0000\u0000\u00009=\u0007\u0000\u0000"+
		"\u0000:<\u0007\u0001\u0000\u0000;:\u0001\u0000\u0000\u0000<?\u0001\u0000"+
		"\u0000\u0000=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>\f\u0001"+
		"\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000@A\u0005(\u0000\u0000A\u000e"+
		"\u0001\u0000\u0000\u0000BC\u0005)\u0000\u0000C\u0010\u0001\u0000\u0000"+
		"\u0000DE\u0005{\u0000\u0000E\u0012\u0001\u0000\u0000\u0000FG\u0005}\u0000"+
		"\u0000G\u0014\u0001\u0000\u0000\u0000HI\u0005;\u0000\u0000I\u0016\u0001"+
		"\u0000\u0000\u0000JL\u0007\u0002\u0000\u0000KJ\u0001\u0000\u0000\u0000"+
		"LM\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000"+
		"\u0000N\u0018\u0001\u0000\u0000\u0000OS\u0005\"\u0000\u0000PR\b\u0003"+
		"\u0000\u0000QP\u0001\u0000\u0000\u0000RU\u0001\u0000\u0000\u0000SQ\u0001"+
		"\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000TV\u0001\u0000\u0000\u0000"+
		"US\u0001\u0000\u0000\u0000VW\u0005\"\u0000\u0000W\u001a\u0001\u0000\u0000"+
		"\u0000XY\u0005=\u0000\u0000Y\u001c\u0001\u0000\u0000\u0000Z\\\u0007\u0004"+
		"\u0000\u0000[Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000][\u0001"+
		"\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000"+
		"_`\u0006\u000e\u0000\u0000`\u001e\u0001\u0000\u0000\u0000\u0005\u0000"+
		"=MS]\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}