var url = window.location.href;
var urlobj = new URL(url);
var idtmp = urlobj.searchParams.get("id");
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


function renderlist(){
    let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];

if(products.length == 0) return false
let table = ""
products.forEach((product,index)=> {
    var id = index
    index++
    table += ` 
           <tr>
           <td>${product.name}</td>
           <td>${product.price}</td>
           <td>${product.desc}</td>
           <td>${product.quantity}</td>
           <td>${product.category}</td>
           <td>${product.address}</td>
           <td><a href="#" onclick = "deletepro(${id})"><i class="fas fa-trash-alt"></i></a></td>

    <td><a href="addproduct.html?id=${id}" Onupdate()" ><i class="fas fa-edit"></i></a></td>
       </tr>
           `
});
document.getElementById('listproduct').innerHTML = table;

}


function deletepro(id){
    idtmp = idtmp;
    console.log(id)
    let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];

    products.splice(id,1)
localStorage.setItem('products',JSON.stringify(products));
renderlist();
}

function Onupdate(){
let id = idtmp
if(idtmp){
    let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];
        document.getElementById('name').value = products[idtmp].name;
        document.getElementById('price').value =products[idtmp].price;
        document.getElementById('desc').value = products[idtmp].desc;
        document.getElementById('quantity').value = products[idtmp].quantity;
        document.getElementById('cateGory').value = products[idtmp].category;
        document.getElementById('address').value = products[idtmp].address;
        document.getElementById("addbtn").innerText = "Cật Nhật";
        document.getElementById("addbtn").setAttribute("onclick","update()");
}
else{
    document.getElementById("addbtn").setAttribute("onclick","save()");
    document.getElementById("addbtn").innerText = "Thêm Mới";


}

}


function update(){
checkInput()


    let  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];

    var nameproductvalue = document.getElementById('name').value;
    var pricevalue = document.getElementById('price').value;
    var descvalue = document.getElementById('desc').value;
    var quantityvalue = document.getElementById('quantity').value;
    var CateGoryvalue = document.getElementById('cateGory').value;
    var addressvalue = document.getElementById('address').value;
    if(nameproductvalue && pricevalue && descvalue && quantityvalue && CateGoryvalue && addressvalue ){
products[idtmp]=({
    name:nameproductvalue,
    price:pricevalue,
    desc:descvalue,
    quantity:quantityvalue,
    category:CateGoryvalue,
    address:addressvalue

});
localStorage.setItem('products',JSON.stringify(products));
alert("Cật Nhật Thành Công")

}



}

function checkInput(){
    var nameproductvalue = document.getElementById('name').value;
    var pricevalue = document.getElementById('price').value;
    var descvalue = document.getElementById('desc').value;
    var quantityvalue = document.getElementById('quantity').value;
    var CateGoryvalue = document.getElementById('cateGory').value;
    var addressvalue = document.getElementById('address').value;
if(nameproductvalue === ""){

    setErrorFor(document.getElementById('name'),"Please Fill In This Field")   
}else{
    setSuccessFor(document.getElementById('name'))
}
if(pricevalue === "")
{

    setErrorFor(document.getElementById('price'),"Please Fill In This Field")   
}else{
    setSuccessFor(document.getElementById('price'))
}
if(quantityvalue === ""){

    setErrorFor(document.getElementById('quantity'),"Please Fill In This Field")   
}else{
    setSuccessFor(document.getElementById('quantity'))
}
if(descvalue === ""){

    setErrorFor(document.getElementById('desc'),"Please Fill In This Field")   
}else{
    setSuccessFor(document.getElementById('desc'))
}
if(CateGoryvalue === ""){

    setErrorFor(document.getElementById('cateGory'),"Please Fill In This Field")   
}else{
    setSuccessFor(document.getElementById('cateGory'))
}
if(addressvalue === ""){

    setErrorFor(document.getElementById('address'),"Please Fill In This Field")   
}else{
    setSuccessFor(document.getElementById('address'))
}
}

function save(){
    
    var nameproductvalue = document.getElementById('name').value;
    var pricevalue = document.getElementById('price').value;
    var descvalue = document.getElementById('desc').value;
    var quantityvalue = document.getElementById('quantity').value;
    var CateGoryvalue = document.getElementById('cateGory').value;
    var addressvalue = document.getElementById('address').value;
checkInput()

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
        document.getElementById('name').value = "";
        document.getElementById('price').value ="";
        document.getElementById('desc').value = "";
        document.getElementById('quantity').value = "";
        document.getElementById('cateGory').value = "";
        document.getElementById('address').value = "";
        alert("Thêm Mới Thành Công")
    }
}

function setErrorFor(input,message){

    const form = input.parentElement;
    const small = form.querySelector('small');
    small.innerText = message
    form.className = "input-box error"
}

function setSuccessFor(input){
    const form = input.parentElement;
    form.className = "input-box success"
}