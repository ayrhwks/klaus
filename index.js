class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, imagePath, code, stock) {
        // Verificar si ya existe un producto con el mismo código
        if (this.products.some(product => product.codigo === code)) {
            console.log(`Ya existe un producto con el código ${code}. No se agregó el producto.`);
            return;
        }

        const product = {
            titulo: title,
            descripcion: description,
            precio: price,
            imagen: imagePath,
            codigo: code,
            stock: stock
        };
        this.products.push(product);
    }

    removeProduct(code) {
        this.products = this.products.filter(product => product.codigo !== code);
    }

    getProduct(code) {
        return this.products.find(product => product.codigo === code);
    }

    getProductById(id) {
        const product = this.products.find(product => product.codigo === id);
        if (!product) {
            console.log(`Producto con código ${id} no encontrado.`);
        }
        return product;
    }

    updateProduct(code, newData) {
        const product = this.getProduct(code);
        if (product) {
            Object.assign(product, newData);
        }
    }

    listProducts() {
        return this.products;
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Termo Stanley", "Termo Stanley que mantiene el calor por 12 horas", 93.000,img , 1, 100);
productManager.addProduct("Termo flashero", "Termo de acero inoxidable que mantiene el calor por 6 horas", 70.000, "imagen2.jpg", 2, 50);

console.log("Lista de productos:");
console.log(productManager.listProducts());

const productById = productManager.getProductById(3); // Intenta obtener un producto con código 3
