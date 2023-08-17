class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductsId = 1;
    }

    addProduct(name, price, category) {
        const id = this.nextProductsId++;
        const product = new Product(id, name, price, category);
        category.products.push(product)
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryName").value;
    categoryList.addCategory(categoryName);
    //console.log(categoryName);
    console.log(categoryList.categories);
    clearFormFields()
}

function createProduct() {
    const productName = "Bolo";
    const productPrice = 20;
    const productCategory = categoryList.categories[0];

    productList.addProduct(productName, productPrice, productCategory)
    //console.log(productList.products)
}

function clearFormFields() {
    document.getElementById("categoryName").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}