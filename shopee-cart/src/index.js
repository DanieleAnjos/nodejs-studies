
import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

console.log("Welcome to the your Shoppee Cart!")


const myCart = [];
const myWhislist = [];

//criando dois itens
const item1 = await createItem("Colônia Granado", 69.99, 1);
const item2 = await createItem("Body splash Eudora", 32.90, 2 );

//adicionando dois itens no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.deleteItem(myCart, item2.name)


//removendo item do carrinho
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, item2.name)

await cartService.calculateTotal(myCart);
