

let wallet = document.getElementById("wallets");
let upi = document.getElementById("upi");
let cards = document.getElementById("cards");
let netbanking = document.getElementById("netBanking");
let cod = document.getElementById("cod");

wallet.addEventListener("click",function(){
   
    wallet.style.backgroundColor="white";
    upi.style.backgroundColor="#fff3e3";
    cards.style.backgroundColor ="#fff3e3";
    netbanking.style.backgroundColor ="#fff3e3";
    cod.style.backgroundColor ="#fff3e3";
    // wallet_func();
});
upi.addEventListener("click",function(){
   
    wallet.style.backgroundColor="#fff3e3";
    upi.style.backgroundColor="white";
    cards.style.backgroundColor ="#fff3e3";
    netbanking.style.backgroundColor ="#fff3e3";
    cod.style.backgroundColor ="#fff3e3";
    document.getElementById("append_data").innerHTML=upi_func();
    document.getElementById("verbtn").addEventListener("click",(()=>{
        window.location.href ="success.html";
    }))
});
cards.addEventListener("click",function(){
   
    wallet.style.backgroundColor="#fff3e3";
    upi.style.backgroundColor="#fff3e3";
    cards.style.backgroundColor ="white";
    netbanking.style.backgroundColor ="#fff3e3";
    cod.style.backgroundColor ="#fff3e3";
    document.getElementById("append_data").innerHTML= cards_func();
});
netbanking.addEventListener("click",function(){
   
    wallet.style.backgroundColor="#fff3e3";
    upi.style.backgroundColor="#fff3e3";
    cards.style.backgroundColor ="#fff3e3";
    netbanking.style.backgroundColor ="white";
    cod.style.backgroundColor ="#fff3e3";
});
cod.addEventListener("click",function(){
   
    wallet.style.backgroundColor="#fff3e3";
    upi.style.backgroundColor="#fff3e3";
    cards.style.backgroundColor ="#fff3e3";
    netbanking.style.backgroundColor ="#fff3e3";
    cod.style.backgroundColor ="white";
    document.getElementById("append_data").innerHTML=cod_func();
    document.getElementById("cod_fun").addEventListener("click",function(){
        window.location.href = "success.html"
    })
});


let getData = JSON.parse(localStorage.getItem("store_amt"))


let total_price = getData.reduce(function(sum,el,index,arr){
    sum +=Number(el.price); 
    return sum;
},0);

let total_mrp = getData.reduce(function(sum,el,index,arr){
    sum +=Number(el.price_1);
    return sum;
},0)
let mrp = document.getElementById("MRP");
mrp.innerText = "₹ "+total_mrp;
let prc = document.getElementById("total_pay");
prc.innerText ="₹ " +total_price;
let discount = document.getElementById("dct");
discount.innerText ="₹ "+ (+total_mrp - Number(total_price));
let saving = document.getElementById("save");
saving.innerText = discount.innerText;

let cards_func = ()=>{
    return `<div id="cards" >
    <h3>Credit & Debit Card</h3>
    <p>Add New Card For Payment</p>
    <div>
        <div id="cdNo">
            <p>Card Number</p>
            <input type="number" name="" placeholder="XXXX XXXX XXXX XXXX">

        </div>
        <div id="cardDetails">
            <div id="exbox">
                <p>Expiry Date(MM/YY)</p>
            <input type="number" placeholder="MM">/ <input type="number" placeholder="YY">
            </div>
            <div>
                <p>Security code</p>
                <input type="number" name="" placeholder="CVV" id="">
            </div>
          

        </div> 
        <div>
            <input type="text" name="" placeholder="Name On Card" id="">
        </div>
        <input type="checkbox" name="" id="checkbox2">
        <p>
            Your card details will be saved securely for future transactions, based on the industry standards.
        </p>
        <div id="send_otp_button">
            <button>Send OTP</button>
        </div>
        
        
    
    
    
    </div>



</div>`
}

let cod_func =()=>{
    return ` <div id="cod">
    <div id="cod_fun" >
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png" alt="">
        <h4 >CASH ON DELIVERY</h4>
    </div>
</div>`

}

let upi_func = ()=>{
    return `<div id="upi">
    <div>
        <h4>
            Transfer money from your bank account using your UPI app

        </h4>
        <div id="brand_imgs">
            <p>We Accept</p>
            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595473/marketing/pusi6g59xoxcyevsihmm.png" alt="">
            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595522/marketing/uwfgfsxaq3i9m9aglqsc.png" alt="">
            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595567/marketing/i0yoaxd0mbcc9jdzyjrq.png" alt="">
            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto,w_107,h_57/v1581508161/marketing/zhcu7wuhtxelq710o4bc.jpg" alt="">
        </div>
        <h4>
            Saved UPI ID
        </h4>
        <p>Pay via new UPI ID</p>
        <input type="email" name="" id="ipiId" placeholder="Ex:mobilenumber@upi">
        <h5>The UPI ID is in the format of name/phonenumber@bankname</h5>
        <input type="checkbox" name="" id="checkbox1">
        <span>Securely save this VPA for faster checkout next time</span>
        </p>
        <div>

            <button id="verbtn">VERIFY & PAY</button>
        </div>

    </div>
</div>`
};
document.getElementById("send_otp_button").addEventListener("click", function(){
    window.location.href = "paymentOtp.html";
})

