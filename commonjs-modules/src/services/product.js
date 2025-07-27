// Objeto que representa o tipo de produto e sua taxa
const productTye = {
    version: "digital",
    tax: "x1"
};

async function getFullname(codeID, productName) {
    console.log("product: " + codeID + "--" + productName);
    await doBreakLine();
};

async function getProductLabel(productName) {
    console.log("Product: " + productName);
}

// Função auxiliar, "oculta", não exportada (hidden const)
// usada apenas dentro do módulo
async function doBreakLine() {
    console.log("\n");
}

// Exporta apenas o que deve ser acessado por outros módulos
module.exports = {
    getFullname,
    getProductLabel,
    productTye
};

/**
 * Nota:
 * Uma `async function` em Node.js é uma função assíncrona que retorna uma Promise.
 * Dentro dela, você pode usar `await` para aguardar a resolução de outras Promises,
 * tornando o código assíncrono mais legível e estruturado.
 */
