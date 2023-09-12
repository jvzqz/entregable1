class ProductManager {

    constructor(){
        this.products = [];
    }

static id = 0

addProduct (tittle, description, price, thumbnail, code, stock, id) {
    for (let i=0; i< this.products.length; i++){
        if(this.products[i.code === code]){
            console.log ("El código está repetido");
            break;
        }
    }
    if (!products.tittle || !products.description || !products.price || !products.thumbnail || !products.code || !products.stock || !products.id){
        console.error ('Los campos son obligatorios')
    } else {
    ProductManager.id ++
    this.products.push (tittle, description, price, thumbnail, code, stock, id=ProductManager.id)};  
}

getProducts () {
    return this.products;
}

existe (id) {
    return this.products.find((products) => products.id === id)
}

getProductsById (id) {
  !this.existe(id) ? console.log("Not Found") : console.log (this.existe(id));
}

}

const products = new ProductManager;

console.log (products.getProducts());

products.addProduct ('producto prueba', 'Este es un producto prueba', '200', 'Sin imagen', 'abc123','25');

console.log (products.getProducts());

console.log (products.getProductsById(1));