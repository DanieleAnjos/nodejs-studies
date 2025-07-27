// importação padrão
//import connectToDatabase from "../utils/database.js";

// importando de forma desestruturada
//import { connectToDatabase } from "../utils/database.js";

//importando todas as funções
import * as database from "../utils/database.js"

import { getDataFroApi } from "../utils/api.js";

database.connectToDatabase("my-database");
database.disconnectToDatabase();
console.log(database.databaseType);
getDataFroApi();