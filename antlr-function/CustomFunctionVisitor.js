import FunctionVisitor from "./generated/FunctionVisitor.js";

export default class CustomFunctionVisitor extends FunctionVisitor {
  constructor() {
    super();
    this.transpilado = [];
  }

  visitProg(ctx) {
    ctx.stat().forEach((stat) => this.visit(stat));
    return this.transpilado;
  }

  visitStat(ctx) {
    return this.visit(ctx.sentencia_funcion());
  }

  visitSentencia_funcion(ctx) {
    const nombre = ctx.identificador().getText();
    this.transpilado.push(`function ${nombre}() {`);
    ctx.instrucciones().forEach((inst) => this.visit(inst));
    this.transpilado.push(`}`);
    this.transpilado.push(`${nombre}();`); // llamar a la función automáticamente
  }

  visitEscribir(ctx) {
    const exprJS = this.expresionToJS(ctx.expresion());
    this.transpilado.push(`  console.log(${exprJS});`);
  }

  visitLeer(ctx) {
    const id = ctx.identificador().getText();
    this.transpilado.push(
      `  let ${id} = prompt("Ingrese valor para ${id}: ");`
    );
  }

  visitAsignacion(ctx) {
    const id = ctx.identificador().getText();
    const exprJS = this.expresionToJS(ctx.expresion());
    this.transpilado.push(`  ${id} = ${exprJS};`);
  }

  expresionToJS(ctx) {
    const partes = ctx.children.map((c) => {
      const text = c.getText();
      if (text === "+") return " + ";
      return text;
    });
    return partes.join("");
  }
}
