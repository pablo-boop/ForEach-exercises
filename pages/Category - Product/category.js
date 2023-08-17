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
    displayCategoriesAndProducts()
    clearFormFields();
}

function createProduct() {
    const productName = "Bolo";
    const productPrice = 20;
    const productCategory = categoryList.categories[0];
    productList.addProduct(productName, productPrice, productCategory)
    //console.log(productList.products)
    displayCategoriesAndProducts()
    clearFormFields()
}

function clearFormFields() {
    document.getElementById("categoryName").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}

function displayCategoriesAndProducts() {
    let content = "";

    categoryList.categories.forEach((category) => {
        content += `
            <li>
                <div class="categoriesList">
                    <span><b>Categoria: </b>${category.name}</span>
                    <div>
                        <button class="editButton"><i class="fa-solid fa-pencil"></i></button>
                        <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                <ul class="productListByCategory"> `;
                category.products.forEach((product) => {
                    content += `
                        <li>
                            <div class="productsList">
                                <span><b>Produto: </b>${product.name} - <b>Preço: </b> R$${product.price}</span>
                            <div>
                                <button class="editButton"><i class="fa-solid fa-pencil"></i></button>
                                <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
                            </div>
                            </div>`;
                });
                content += `
                    </ul>
                </li>
                `
    });
    document.getElementById("categoriesList").innerHTML = content;
}