

async function connectToDatabase(user, password) {
   if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
    console.log("conexão com banco de dados estabelecida")
   } else {
    console.log("Falha de login, não foi possivel se conectar ao banco de dados. ")
   }
    
}

export default connectToDatabase;