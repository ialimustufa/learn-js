function startSearch(){
    let brand = document.getElementById("brand").value;
    let search; 
    switch (brand){
        case "Bugatti":
            search = "Veyron , Chiron , Mystral";
            break;
        case "Koenigsegg":
            search = "Agera , Jesko , Gemera";
            break;
        case "Porsche":
            search = "911 , Panemera , Carrera GT";
            break;
        default:
        search = "Invalid Brand";
    }
    document.getElementById("search").innerHTML = "Search Results: " + search;
    document.getElementById("message").innerHTML = "Good Choice!";
    document.getElementById("search").classList.add("highlight");
}