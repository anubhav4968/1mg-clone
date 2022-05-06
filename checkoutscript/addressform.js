import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import { footer } from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();
import {searchPincode} from "./fetch.js"
//const pincode = `https://api.postalpincode.in/pincode/${value}`

document.querySelector("form").addEventListener("submit", getData);

function hello(){
    let radios = document.getElementsByName("home");
    
        for(let i=0; i<radios.length; i++){
           
            if(radios[i].checked){
                console.log(radios[i].checked)
               return radios[i].id;
            }
          
        }

}

         
let add_data = JSON.parse(localStorage.getItem("addData")) ||[];


function getData(){
    event.preventDefault()
        
     let flat = document.getElementById("textarea").value;
     let landmark = document.getElementById("landmark").value;
     let pincode = document.getElementById("pincode").value;
     let locality = document.getElementById("locality").value;
     let city = document.getElementById("city").value;
     let state = document.getElementById("state").value;
     let name = document.getElementById("name").value;
     let mobile= document.getElementById("mobile").value;
     let add_type  = hello();

    if(flat=="" && pincode=="" && mobile=="" && name ==""){
        alert ("Invalid Data");
    }else{
        var addressData = {
            Flat: flat,
            Landmark : landmark,
            Pincode : pincode,
            Locality : locality,
            City : city,
            State :state,
            Name : name,
            Mobile: mobile,
            Add_type: hello(),
        }
        add_data.push(addressData);
        localStorage.setItem("addData", JSON.stringify(add_data));
        window.location.href="../address.html"
    }
    
};

let pin = document.getElementById("pincode");
pin.addEventListener("keydown", myfuc);
function myfuc(e){
    if(e.key==="Tab"){
       if(pin.value.length==6){
        let value = pin.value;
            
            searchPincode(value).then((data) => {
                let city = data[0].District;
                let State = data[0].State;
                // console.log(city)
                // console.log(State)
                // console.log(data);
                let dist = document.getElementById("city");
                dist.value= city;
                let state = document.getElementById("state");
                state.value = State;
            });
           

       }else if(pin.value===""){
        document.getElementById("pincode_error").innerText="Type Correct Pincode"  
       }
       else{
           document.getElementById("pincode_error").innerText="Service Unavailable"
       }
    }
   
};
// let type = document.querySelector("#radio1").in;
// console.log(type);  

