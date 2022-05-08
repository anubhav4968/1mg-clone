import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML= navbar();
document.getElementById("none").innerHTML=null;

let data = JSON.parse(localStorage.getItem("gotocart"))
    console.log(data)
let container = document.getElementById("append_data")
data.forEach((el)=>{
    let box1 = document.createElement("div");
    box1.setAttribute("id","img");
    let img = document.createElement("img");
    img.src = el.img_url;

    let nme = document.createElement("p")
    nme.innerText = el.name

    box1.append(img,nme);

    let prc = document.createElement("p")
    prc.innerText =  "₹"+el.price;

    let prc1 = document.createElement("p");
    prc1.innerText = "MRP ₹"+el.price_1;

    let box2 = document.createElement("div");
    box2.append(prc,prc1);

    let box3 = document.createElement("div");
    box3.append(box1,box2)

    container.append(box3);

});


//*******addres data */

let add_data = JSON.parse(localStorage.getItem("final_add"));
console.log(add_data)

let append_add = document.getElementById("append_add");
add_data.forEach( (el)=>{
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
    append_add.append(box)
})

document.getElementById("chnge").addEventListener("click",function(){
    window.location.href="address.html"
})

let getData = JSON.parse(localStorage.getItem("store_amt"))


let total_price = getData.reduce(function(sum,el,index,arr){
    sum +=Number(el.price); 
    return sum;
},0);

let total_mrp = getData.reduce(function(sum,el,index,arr){
    sum +=Number(el.price_1);
    return sum;
},0)
console.log(total_mrp)
let mrp = document.getElementById("MRP");
mrp.innerText = "₹ "+total_mrp;
let prc = document.getElementById("total_pay");
prc.innerText ="₹ " +total_price;
let discount = document.getElementById("dct");
discount.innerText ="₹ "+ ((+total_mrp) - Number(total_price));
let saving = document.getElementById("save");
saving.innerText = discount.innerText;


document.getElementById("btn").addEventListener("click",function(){
    window.location.href="payment.html"
})