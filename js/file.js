class ProductManager {

    constructor(){
        this.products = [];
        this.id = 1;
    }

addProduct (tittle, description, price, thumbnail, code, stock) {
    for (let i=0; i< this.products.length; i++){
        if(this.products[i]["code" === code]){
            console.log ("El código está repetido");
            return;
        }
    }
    if (!tittle || !description || !price || !thumbnail || !code || !stock){
        console.error ("Los campos son obligatorios");
        return;
    
    }
    const product = {
        id: this.id,
        tittle,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
    
this.products.push (product);
  
console.log ("Producto agregado correctamente");

this.id++;
    }

getProducts () {
    return this.products;
}

getProductById(id) {
    const exist = this.products.find((product) => product.id == id);
    !exist ? console.log("Not Found") : false;
    return exist;
}

}

const products = new ProductManager;

products.addProduct('Producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25);
products.addProduct('Producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25);
products.addProduct('Producto prueba 2', 'Descripcion 2', 200, 'img', 'abcd1234');

console.log('Lista de productos:', products.getProducts());

const productById = products.getProductById(1);
console.log('Producto por ID:', productById);

const nonExistentProduct = products.getProductById(5);