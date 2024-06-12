function changeContent(){
    const character =  document.getElementById("char").value;
    let task;
    let imgsrc;

    switch(character){
        case "Harry Potter":
            task = "Finding and destroying Horcruxes to defeat Voldemort.";
            imgsrc = "https://qph.cf2.quoracdn.net/main-qimg-bd4d1698556d08f3aa2422c1e56a4613-lq"
            break;
        case "ACP Pradyuman (CID)":
            task = "Solving intricate criminal cases and ensuring justice is served.";
            imgsrc = "https://indianmemetemplates.com/wp-content/uploads/tumhe-to-fansi-hogi-fansi.jpg"
            break;
        case "Guddu Pandit (Mirzapur)":
            task = "Seeking vengeance against his enemies and aiming to take control of Mirzapur.";
            imgsrc = "https://qph.cf2.quoracdn.net/main-qimg-c96f6220f32b9201be27ebf5718c1af7-lq"
            break;
        case "Srikant Tiwari (The Family Man)":
            task = "Balancing his duties as a secret agent working to prevent terrorist attacks with his responsibilities as a family man.";
            imgsrc= " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rixKu3uwzbVSJp7DDblrxCeBsX8FcLrKgV25GdCu_EhMgkOhC3rqVHOLCZudFGqFJf4&usqp=CAU"
            break;
        default:
            task = "Select a character to know their task"
    }
    document.getElementById("change").innerHTML = `<p>${task}</p> <img src="${imgsrc}" alt="${character}" srcset="" />`
}