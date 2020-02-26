var store = [];

var getData = function(){
    var name=document.getElementById("name").value;
    var addr=document.getElementById("addr").value;
    var tel=document.getElementById("tel").value;
    var age=document.getElementById("age").value;
    var mail=document.getElementById("mail").value;
    var city=document.getElementById("city").value;
    console.log(name+" "+addr+" "+tel+" "+age+" "+mail+" "+city);
    let obj = {name: name, addr: addr, tel: tel, age: age, mail: mail, name: city}
    store.push(obj)
    console.log(store)
        
         for(let pos of store){
             console.log(pos)
             
                    document.getElementById("variable").insertAdjacentHTML("beforebegin", 'Nombre:'+ pos.name + "<br>" + pos.addr + "<br>");     
         }
    
     store.pop();
    
    window.location.href = "formsend.html";
    
}

