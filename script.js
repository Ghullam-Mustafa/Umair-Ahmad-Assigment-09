function fillCity() {
    var cityName;
    var zipEntered = document.getElementById('zip').value

    switch (zipEntered) {
        case "38000":
            cityName = "Faisalabad";
            break;
        case "40000":
            cityName = "Lahore";
            break;
        case "50000":
            cityName = "Karachi";
            break;
        
        default:
            cityName = "";
        
    }
    console.log(cityName);
city.value = cityName
}