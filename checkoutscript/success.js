import { footer } from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

let orderid = document.getElementById("orderNo");
orderid.innerText ="PO"+(Math.random()*100000000000000).toFixed(0);


document.getElementById("home").addEventListener("click",(()=>{
    window.location.href ="product.html";
}))
