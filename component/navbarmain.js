let navbar = () =>{
  return ` 
  <!-- NAVBAR STARTS HERE. NAVBAR STARTS HERE. NAVBAR STARTS HERE -->
  <div class="navbar">
      <div class="navleft">
          <div>
              <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="Tata 1mg logo">
          </div>

          <div class="links">
              <a style="color: #FF6F61;" href="">MEDICINES</a>
              <a href="">LAB TESTS</a>
              <a href="">ASK DOCTOR</a>
              <a href="covid19.html">COVID-19</a>
              <a href="ayurveda.html">AYURVEDA</a>
              <a href="">CARE PLAN</a>
          </div>
      </div>

      <div class="navright">
        
          <a href="">Offers</a>
          <a href="checkout.html"><i class="fa-solid fa-cart-plus"></i></a>
          <a href="">Need Help?</a>
      </div>
  </div>
  
  <!-- NAVBAR ENDS HERE. NAVBAR ENDS HERE. NAVBAR ENDS HERE -->


  <!-- SEARCH BAR STARTS HERE. SEARCH BAR STARTS HERE. SEARCH BAR STARTS HERE. -->
  <div class="searchdiv">
      <div class="location-btn">
          <button onclick="getLoc()"><i class="fa-solid fa-location-dot"></i><span id="changecity">Get Location</span><i class="fa-solid fa-location-crosshairs"></i></button>
          <input type="text" placeholder="Search for Medicines and Health Products"><i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="upload-btn">
          <p><span><i class="fa-solid fa-bolt"></i></span> QUICK BUY! Flat 25% off*</p>
          <button>Upload</button>
      </div>
  </div>
  <!-- SEARCH BAR ENDS  -->

  <!-- DROPDOWN BOOTSTRAP STARTS HERE  -->
  <div class="drpdwn">
      <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Health Resource Center
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">All Diseases</a></li>
            <li><a class="dropdown-item" href="#">All Medicines</a></li>
            <li><a class="dropdown-item" href="#">Medicines by Therapeutic class</a></li>
          </ul>
        </div>


        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Covid Essentials
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Covid-19 Self test kits</a></li>
            <li><a class="dropdown-item" href="#">Oxygen Cans</a></li>
            <li><a class="dropdown-item" href="#">Mask & Sanitizers</a></li>
            <li><a class="dropdown-item" href="#">Support Your Immunity</a></li>
            <li><a class="dropdown-item" href="#">Thermometers</a></li>
          </ul>
        </div>

        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Featured
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Tata 1mg Health Products</a></li>
            <li><a class="dropdown-item" href="#">Summer Essentials</a></li>
            <li><a class="dropdown-item" href="#">Trending Now</a></li>
            <li><a class="dropdown-item" href="#">New Arrival on Tata 1mg</a></li>
            <li><a class="dropdown-item" href="#">Buy More, save More</a></li>
            <li><a class="dropdown-item" href="#">Combos</a></li>
          </ul>
        </div>

        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Vitamins & Nutrition
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Vitamins & Supplements</a></li>
            <li><a class="dropdown-item" href="#">Nutrition Drinks</a></li>
            <li><a class="dropdown-item" href="#">Health Food and Drinks</a></li>
            <li><a class="dropdown-item" href="#">Protein Supplements</a></li>
            <li><a class="dropdown-item" href="#">Omega & Fish Oils</a></li>
            <li><a class="dropdown-item" href="#">Immunity Boosters</a></li>
            <li><a class="dropdown-item" href="#">Weight Management</a></li>
          </ul>
        </div>


        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Healthcare Devices
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Masks</a></li>
            <li><a class="dropdown-item" href="#">Oxygen</a></li>
            <li><a class="dropdown-item" href="#">BP Monitors</a></li>
            <li><a class="dropdown-item" href="#">Nebulizers & Vaporizers</a></li>
            <li><a class="dropdown-item" href="#">Oximeter & Pedometers</a></li>
            <li><a class="dropdown-item" href="#">Thermometers</a></li>
            <li><a class="dropdown-item" href="#">Body Massager</a></li>
          </ul>
        </div>


        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Personal Care
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Men Care</a></li>
            <li><a class="dropdown-item" href="#">Women Care</a></li>
            <li><a class="dropdown-item" href="#">Baby Care</a></li>
            <li><a class="dropdown-item" href="#">Skin Care</a></li>
            <li><a class="dropdown-item" href="#">Hair Care</a></li>
            <li><a class="dropdown-item" href="#">Oral Care</a></li>
            <li><a class="dropdown-item" href="#">Elderly Care</a></li>
            <li><a class="dropdown-item" href="#">Sexual Wellness</a></li>
          </ul>
        </div>


        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Ayurveda Products
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Top Ayurveda Products</a></li>
            <li><a class="dropdown-item" href="#">Health Concern</a></li>
            <li><a class="dropdown-item" href="#">Top Brands</a></li>
            <li><a class="dropdown-item" href="#">Popular Categories</a></li>
          </ul>
        </div>


        <div  class="dropdown">
          <button id="drop-btn" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Homeopathy
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Homeopathy Top Brands</a></li>
            <li><a class="dropdown-item" href="#">SBL Homoeopathy</a></li>
            <li><a class="dropdown-item" href="#">Homeopathy Popular Categories</a></li>
            <li><a class="dropdown-item" href="#">Homeopathy Wellness Combos</a></li>
          </ul>
        </div>

  </div>
  <!-- DROPDOWN BOOTSTRAP Ends HERE  -->
`
}
export {navbar};