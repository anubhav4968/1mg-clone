
let userSection = document.querySelector(".users-section");
let isShow = true;
function showHideUsers(){
    if(isShow){
        userSection.style.display = "none";
        isShow = false;
    }
    else{
        userSection.style.display = "block";
        isShow = true;
    }
}

