function toggleMenu(){
    var toggle = document.querySelector('.toggle')
    var navigation = document.querySelector('.navigation')
    var main = document.querySelector('.main')
    var user = document.querySelector('.user')


    user.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
    toggle.classList.toggle('active')
}



function save(){
    var nameproductvalue = document.getElementById('name').value;
    var pricevalue = document.getElementById('price').value;
    var descvalue = document.getElementById('desc').value;
    var quantityvalue = document.getElementById('quantity').value;
    var CateGoryvalue = document.getElementById('cateGory').value;
    var addressvalue = document.getElementById('address').value;
    if(nameproductvalue && pricevalue && descvalue && quantityvalue && CateGoryvalue && addressvalue ){
        let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];

        products.push({
            name:nameproductvalue,
            price:pricevalue,
            desc:descvalue,
            quantity:quantityvalue,
            category:CateGoryvalue,
            address:addressvalue
        });

        localStorage.setItem("products",JSON.stringify(products));
    }
    
}

function renderlist(){
    let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];

if(products.length == 0) return false
let table = ""
products.forEach((product,index)=> {
   
 
    var id = index
    index++
    table += ` 
           <tr>
           <td>${index}</td>
           <td>${product.name}</td>
           <td>${product.price}</td>
           <td>${product.desc}</td>
           <td>${product.quantity}</td>
           <td>${product.category}</td>
           <td>${product.address}</td>
           <td><a href="#" onclick = "deletepro(${id})"><i class="fas fa-trash-alt"></i></a></td>
           <td><a href=""><i class="fas fa-edit"></i></a></td>
       </tr>
           `
});
document.getElementById('listproduct').innerHTML = table;
}


function deletepro(id){
    console.log(id)
    let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];

    products.splice(id,1)
localStorage.setItem('products',JSON.stringify(products));
// console.log(products)
}