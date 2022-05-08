

let getData = JSON.parse(localStorage.getItem("gotocart")) ||[];

let container = document.getElementById("container");



let addressData = JSON.parse(localStorage.getItem("addData")) 
document.querySelector("#checkout_btn").addEventListener("click",function(){
if(addressData==undefined || addressData.length===0){
    total_ammount();
    window.location.href="addressform.html"
   
}else{
    total_ammount();
    window.location.href="address.html"
}
    
})

let append = document.getElementById("append");
if(getData.length===0){
    // container.innerHTML =null;
    let img = document.createElement("img");
    img.src = "https://www.1mg.com/images/online_consultation/empty-cart-icon.svg";
    let h2 = document.createElement("h2");
    h2.innerText = "Oops!"
    let p = document.createElement("p");
    p.innerText="Looks like there is no item in your cart Yet."
    let btn = document.createElement("button");
    btn.addEventListener("click",function(){
        btnfun();
    })
    btn.innerText = "ADD MEDICINES"
    let div = document.createElement("div");
    div.append(img,h2,p,btn)
    div.setAttribute("id","addData")
    container.append(div)
    container.style.display="flex";
    container.style.justifyContent="center";
    container.style.alignItems="center";
}else{
   
getData.forEach((el,index)=>{
    
    let box1 = document.createElement("div");
    let nme = document.createElement("p");
    nme.innerText = el.name;

    let prc = document.createElement("p");
    prc.innerText = "₹"+el.price;

    let prc1 = document.createElement('p');
    prc1.innerText ="MRP "+ el.price_1;

    let box2 = document.createElement("div");
    box2.append(prc,prc1);

    box1.append(nme,box2);

    let icon = document.createElement("i");
    icon.setAttribute("class","fa-solid fa-trash-can")

    let remove_btn = document.createElement("button");
    remove_btn.innerText = "Remove"
    let box5 = document.createElement("div")
    box5.append(icon,remove_btn)
    box5.addEventListener("click", function(){
        remove_item(el,1);
    })

    let qty = document.createElement("span")
    qty.innerText= 1;

    let icon1 = document.createElement("i");
    icon1.setAttribute("class","fa-solid fa-circle-minus");
    icon1.addEventListener("click",function(){
        if(qty.innerText==1){
            remove_item(el,1)
        }
        decrease(qty,el.price,el.price_1);
    })

    let icon2 = document.createElement("i");
    icon2.setAttribute("class","fa-solid fa-circle-plus")
    icon2.addEventListener("click",function(){
        increase(qty,el.price,el.price_1);
    })
    
    let box3 = document.createElement("div");
    box3.append(icon1,qty,icon2)

    let box4 = document.createElement("div");
    box4.append(box5,box3);
    append.append(box1,box4)
})
}


//*******************Ammot Calculation*******************/
let total_price = getData.reduce(function(sum,el,index,arr){
    sum +=Number(el.price); 
    return sum;
},0);

let total_mrp = getData.reduce(function(sum,el,index,arr){
    sum +=Number(el.price_1);
    return sum;
},0)
let mrp = document.getElementById("MRP");
mrp.innerText ="₹ "+ total_mrp;
let prc = document.getElementById("total_pay");
prc.innerText = "₹ "+ total_price;
let discount = document.getElementById("dct");
discount.innerText = "₹ "+(+total_mrp - Number(total_price));
let saving = document.getElementById("save");
saving.innerText = dct.innerText;




// **************************functions******************/

let total_ammount = ()=>{
    let store_amt = [];
    let obj = {
       
        price : total_price,
        price_1 :total_mrp,
    }
    store_amt.push(obj)
    localStorage.setItem("store_amt",JSON.stringify(store_amt))
 }





let btnfun =()=>{
    window.location.href="./product.html"
}

// *****************remove fucn**********
let remove_item =(data,index)=> {
    if(getData.length>1){
        getData.splice(index,1);
        localStorage.setItem("pdata",JSON.stringify("getData"))
    }else{
        getData.splice(index,1);
        localStorage.setItem("pdata",null);
    }
    
   window.location.reload();
}

//************increment fucn***********

let decrease = (qty,price,price_1)=>{
    let quantity = +qty.innerText 
   
    if(quantity>1){
        quantity--;
        total_price -= Number(price) 
        total_mrp -= Number(price_1)
      qty.innerText=quantity;  
      mrp.innerText = total_mrp;
      prc.innerText = total_price;
      dct.innerText = +total_mrp - Number(total_price)
      saving.innerText = dct.innerText;
      ;
    }
    qty.innerText=quantity; 
    // console.log(total_price)
    // console.log(total_mrp)
}
let increase = (qty,price,price_1)=>{
    let quantity = +qty.innerText;
    quantity++;
    total_price += Number(price);
    total_mrp += Number(price_1);

    qty.innerText=quantity;
    mrp.innerText = total_mrp;
    prc.innerText = total_price;
    dct.innerText = +total_mrp - Number(total_price)
     saving.innerText = dct.innerText;
    // console.log(total_price)
    // console.log(total_mrp)
}