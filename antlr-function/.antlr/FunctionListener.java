// Generated from d:/51964/antlr-function/Function.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FunctionParser}.
 */
public interface FunctionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FunctionParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(FunctionParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(FunctionParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(FunctionParser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(FunctionParser.StatContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#sentencia_funcion}.
	 * @param ctx the parse tree
	 */
	void enterSentencia_funcion(FunctionParser.Sentencia_funcionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#sentencia_funcion}.
	 * @param ctx the parse tree
	 */
	void exitSentencia_funcion(FunctionParser.Sentencia_funcionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(FunctionParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(FunctionParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(FunctionParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(FunctionParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#leer}.
	 * @param ctx the parse tree
	 */
	void enterLeer(FunctionParser.LeerContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#leer}.
	 * @param ctx the parse tree
	 */
	void exitLeer(FunctionParser.LeerContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#escribir}.
	 * @param ctx the parse tree
	 */
	void enterEscribir(FunctionParser.EscribirContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#escribir}.
	 * @param ctx the parse tree
	 */
	void exitEscribir(FunctionParser.EscribirContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(FunctionParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(FunctionParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(FunctionParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(FunctionParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(FunctionParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(FunctionParser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(FunctionParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(FunctionParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link FunctionParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(FunctionParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link FunctionParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(FunctionParser.CadenaContext ctx);
}