/**
 * Em CommonJS (formato padrão em muitos projetos Node.js), usamos `module.exports` ou `exports.nome =`.
 * CommonJS = Sincrono por padrão
 */

// Função assíncrona exportada (promete executar algo que pode levar tempo, como I/O, conexões etc.)
exports.connectToDatabase = async (dataName) => {
    console.log("Conectando ao banco de dados: " + dataName);
};

// Função síncrona exportada (executa instantaneamente, sem `await` ou Promise)
exports.disconnectDatabase = () => {
    console.log("Desconectando do banco de dados...");
};

/**
 * - `exports.nome =` é uma forma encurtada de `module.exports.nome =`.
 * - Para exportação padrão (equivalente a `export default` em ES6), usamos:
 *     module.exports = minhaFuncao;
 */
