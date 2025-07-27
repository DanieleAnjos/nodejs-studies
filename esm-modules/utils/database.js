

const databaseType = {
    userType: "admin",
    typeData: "datalocal"
};

async function connectToDatabase(dataName) {
    console.log(`Conectado ao banco de dados ${dataName}`)
}

async function disconnectToDatabase() {
    console.log("Desconectando do banco de dados.")
    
}

//exportação por padrão
//export default connectToDatabase;

export { connectToDatabase, disconnectToDatabase, databaseType}