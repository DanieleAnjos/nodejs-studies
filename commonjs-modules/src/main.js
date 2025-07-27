
// Importa funções ou objetos do arquivo dentro da pasta 'services'
const {productTye, getFullname} = require("./services/product");
const config = require("./services/config");
const database = require("./services/database");
//const p = require("./services/product");


async function main(params) {
    // console.log("Carinho compras:\n")
    // p.getFullname(408,"Mousepad")
    // p.getProductLabel("Mousepad")

    console.log(config.devArea)
    console.log(config.cliente)
    console.log(getFullname("523","Mousepad" ))
    database.connectToDatabase("MySQL")

}


main();