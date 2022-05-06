let searchPincode =  async (value)=>{
    try{
        let res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        let data = await res.json();
    //    console.log("data:",data[0].PostOffice[0].District)
        let pincode = data[0].PostOffice;
        // console.log(pincode);
        return pincode;
        return "hello world"
    }catch(err){
        console.log(err)
    }
} 


export {searchPincode};