
// CASOS DE USO
// adicionar item no carinho
async function addItem(userCart, item) {
    userCart.push(item);
    
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = (userCart.reduce((total, item) => total + item.subtotal(), 0));
    console.log("\nShopee Cart Total is:")
    console.log(`\n💲 Total: ${result}`);
}

// deletar item do carrinho
// findItem - percorre o array e, quando encontra o primeiro item que atende à condição e retorna o índice dele
// splice - remove o item somente se ele foi encontrado
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
    
}

// remover item do carrinho - diminuir um item 
/* async function removeItem(userCart, index) {
    
    // transforma o indice visual do usuario, para o indice backend
    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1 );
    }
}
*/

// remover item do carrinho - diminuir um item 
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}


//exibe os itens do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`)
    });
}



export {calculateTotal, addItem, removeItem, deleteItem, displayCart};