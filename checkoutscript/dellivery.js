
let final_add = JSON.parse(localStorage.getItem("final_add"));

let append = document.getElementById("append_add");
document.getElementById("continue").addEventListener("click",function(){
    window.location.href="orderSummary.html"
})

document.getElementById("change").addEventListener("click",function(){
    window.location.href="address.html"
})

final_add.forEach(el => {
    let box = document.createElement("div")

    // let radio = document.createElement("input");
    // radio.type = "radio";
    // radio.setAttribute("name", "radio")
   
    let label = document.createElement("label");
    label.innerText = el.Add_type;
    label.setAttribute("for","radio");
    let box1 = document.createElement("div");
    box1.append(label)

    let nme = document.createElement("p");
     nme.innerText=el.Name;
    let num = document.createElement("p");
    num.innerText = el.Mobile; 
    let address = document.createElement("p");
    address.innerText= el.Flat +" , "+el.Landmark+" , "+el.Locality; 

    let city = document.createElement("p");
    city.innerText = el.City+" , "+ el.State+" - "+el.Pincode
    box.append(box1,nme,num,address,city) 
    append.append(box);
})

// window.onload= addDateTolocalStrg();
let del_speed = document.getElementById("speed");

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const data = new Date();


del_speed.innerText = "Between "+(Number(data.getDate())+2)+"-"+(Number(data.getDate())+4)+" "+monthNames[data.getMonth()]