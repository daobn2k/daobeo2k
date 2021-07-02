var Inputsearch = document.getElementById("Inputsearch")

var  products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :[];


Inputsearch.onkeyup = (e) =>{
    
    let proData = e.target.value;
   var data =  searchTable(proData,products)
 
    search(data)

  
   
}

function searchTable(value,data){
    
    var fitlerdata = []

    for(var i=0; i < data.length;i++){
            value = value.toLowerCase();
            var name =  data[i].name.toLowerCase();
            if(name.includes(value)){
                fitlerdata.push(data[i])
            }
    }

    return fitlerdata
}

function search(data){


    var table = ""
 for(var i = 0 ; i < data.length;i++)  
    {
        var id=0;
        id++;
        table += ` 
               <tr>
               <td>${data[i].name}</td>
               <td>${data[i].price}</td>
               <td>${data[i].desc}</td>
               <td>${data[i].quantity}</td>
               <td>${data[i].category}</td>
               <td>${data[i].address}</td>
               <td><a href="#" onclick = "deletepro(${id})"><i class="fas fa-trash-alt"></i></a></td>
               <td><a href=""><i class="fas fa-edit"></i></a></td>
           </tr>
               `
    };

    document.getElementById('listproduct').innerHTML = table;

}