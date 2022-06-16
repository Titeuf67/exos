// Categories list
const categoriesList = ['Vegetable', 'Meat', 'Fish', 'Fruit'];

// DOM : access to the ID category element quickly
const category = document.getElementById('category');
//  id ligne 49

categoriesList.forEach((item) => {
  // 1 // console.log(item);
  // 2 // console.log(`<option>${item}</option>`);

  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  category.add(option);
})
// créer un object
function addNewProduct() {

  // Récupère les valeurs du formulaire
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;

  // Génère un id pour le produit
  const id = new Date().valueOf();

  // Nouveau produit
  const product = {
    id: id,
    name: name,
    category: category,
    price: price,
    quantity: quantity
  }
  // sauvgarder dans le localstorage avec une condition ternaire pour cumuler
  let productsList = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  productsList.push(product);

  // La valeur doit etre convertit en string, (on ne peux pas stocker d'object ni d'array.)
  localStorage.setItem("products", JSON.stringify(productsList));
}
// Récupère le contenu du localStorage
function getProducts() {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}
// Affiche les produits dans le tableau
(
  function showProductsInTable() {
    const products = getProducts();
    const table = document.getElementById('tableContent');

    if (products.length) {
      const message = document.getElementById('message');
      message.style.display = 'none';
    }
    products.forEach((item, index) => { // console.log("items :", item); 
      let row = table.insertRow();
      let id = row.insertCell(0);
      let name = row.insertCell(1);
      let category = row.insertCell(2);
      let price = row.insertCell(3);
      let quantity = row.insertCell(4);
      let action = row.insertCell(5);

      id.innerHTML = index + 1;  // index+1 pour commencer a 1  
      name.innerHTML = item.name;
      category.innerHTML = `<img src ='./images/${item.category.toLowerCase()}.png' /> ${item.category
        }`;  
      price.innerHTML = `${item.price} €`; //mettre une variable dans un string
      quantity.innerHTML = item.quantity;
      action.innerHTML =
        `
      <a onclick="showEditProduct(${item.id})"><i class="fas fa-edit iconEdit"></i></a>
      <a onclick="deleteProduct(${item.id})"><i class="fas fa-trash-alt iconDelete"></i></a>
      
      
    `
    })
  }
)()
// Affiche le formulaire pour éditer
function showEditProduct(id) {
  const products = getProducts();
//const product = products.find( function (element) {return element.id == id})
  const product = products.find( element => element.id == id)
  console.log("product : ", product);
 
  let modalEditProduct = new bootstrap.Modal(document.getElementById("modalEditProduct"));
  modalEditProduct.show();
 
  // name
  let editName = document.getElementById('editName');
  editName.value = product.name;
 
  // price
  let editPrice = document.getElementById('editPrice');
  editPrice.value = product.price;
 
  //  quantity
  let editQuantity = document.getElementById('editQuantity');
  editQuantity.value = product.quantity;
 
  //  category
  const editCategory = document.getElementById('editCategory');
  editCategory.innerHTML = null;

  categoriesList.forEach((item) => {
    let option = document.createElement("option");
    if(product.category == item) {
      option.selected = true
  }
    option.text = item;
    option.value = item;
    editCategory.add(option);
  })
//  id
let editId = document.getElementById('editId');
editId.value = product.id; 
}

function updateProduct() {
 
  let productsList = getProducts();
  const productId = document.getElementById('editId').value;
  console.log(productId);
}



function deleteProduct(id) {
 
  let productsList = getProducts();
  const removeProduct = productsList.findIndex( element => element.id == id );
  console.log(removeProduct);
 
// Supprime un élément de la liste des produits
productsList.splice( removeProduct, 1 );
 
// Mets à jour la liste des produits
localStorage.setItem("products", JSON.stringify(productsList));
location.reload();
}