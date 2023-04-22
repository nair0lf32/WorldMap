// determine what country is clicked and show it's tooltip
window.onclick = ev => {
    let country = ev.target;
    let country_name = "";

    let country_name_msg = document.getElementById("countryNameMsg");

    country.getAttribute('name') !== null ?
        country_name = country.getAttribute('name') :
        country_name = country.className.baseVal;
    console.log(country_name);
    country_name_msg.innerHTML = country_name;

}



