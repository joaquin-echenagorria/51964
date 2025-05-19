import antlr4 from "antlr4";
import fs from "fs";
import promptSync from "prompt-sync";

import FunctionLexer from "./generated/FunctionLexer.js";
import FunctionParser from "./generated/FunctionParser.js";
import CustomFunctionVisitor from "./CustomFunctionVisitor.js";

async function main() {
  let input = "";
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (e) {
    console.error("No se pudo leer input.txt");
    return;
  }

  const inputStream = new antlr4.InputStream(input);
  const lexer = new FunctionLexer(inputStream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  tokens.fill();

  const parser = new FunctionParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.prog();

  if (parser._syntaxErrors > 0) {
    console.error("Error de sintaxis");
    return;
  }

  console.log("Entrada válida\n");

  // Tabla de tokens
  console.log("Tabla de tokens:");
  console.log("LEXEMA".padEnd(24) + "TOKEN");
  tokens.tokens
    .filter((t) => t.type > 0)
    .forEach((t) => {
      const name = parser.symbolicNames[t.type];
      console.log(t.text.padEnd(24) + name);
    });

  // Árbol de derivación
  console.log("\nÁrbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));

  // Traducción a JS
  const visitor = new CustomFunctionVisitor();
  await visitor.visit(tree);

  console.log("\nCódigo traducido a JavaScript:\n");
  const jsCode = visitor.transpilado.join("\n");
  console.log(jsCode);

  console.log("\nResultado de la ejecución:");
  try {
    const prompt = promptSync();
    const func = new Function("prompt", jsCode);
    func(prompt);
  } catch (e) {
    console.error("Error al ejecutar JS:", e.message);
  }
}

main();
