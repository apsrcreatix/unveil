// Making changes in index.html
// declarations
let title = document.getElementById("title");
let fullname = document.getElementById("fullname");
let biography = document.getElementById("biography");
let profile_photo = document.getElementById("user-image");
let allGradientText = document.getElementsByClassName("gradient-text");
let corner_button = document.getElementById("corner-button");
let heading;
const primary_color = user.colors["primary-color"];
const secondary_color = user.colors["secondary-color"];
document.getElementsByTagName("style")[0].innerHTML = `.gradient-text{background:${primary_color}; background:-webkit-linear-gradient(to right, ${primary_color},${secondary_color}); background:linear-gradient(to right,${primary_color},${secondary_color});
 -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color: transparent;}`;
// changing inner html i.e, DOM
title.innerHTML = user.title;
fullname.innerHTML = user.name;
biography.innerHTML = user.biography;
profile_photo.setAttribute('src',user.photo);

profile_photo.style = `-webkit-filter: drop-shadow(0 0 0.75rem ${primary_color});
     filter: drop-shadow(0 0 0.75rem ${primary_color});`;

fullname.style=allGradientText.style=corner_button.style=`background:${primary_color}; background:-webkit-linear-gradient(to right, ${primary_color},${secondary_color}); background:linear-gradient(to right,${primary_color},${secondary_color});
 -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color: transparent;`;


// setting links
 function goToGithub(){
    window.location = user.links.github;
 }
 function goToTwitter(){
    window.location = user.links.twitter;
 }
 function goToFacebook(){
    window.location = user.links.facebook;
 }
 function goToDribble(){
    window.location = user.links.dribble;
 }
 function goToInstagram(){
    window.location = user.links.instagram;
 }
 function goToWhatsapp(){
    window.location = user.links.whatsapp;
 }
 function goToLinkedin(){
    window.location = user.links.linkedin;
 }
 function goToPintrest(){
    window.location = user.links.pintrest;
 }
 function goToYoutube(){
    window.location = user.links.youtube;
 }
