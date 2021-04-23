function fetchApiData(api,callBack){
    let response = "";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            callBack(this.responseText,this.status);
          }else{
            callBack(this.responseText,this.status);
          }
        };
        xhttp.open("GET", api, true);
        xhttp.send();
}



function setData(country){
  fetchApiData("https://corona-api.com/countries/"+country,(response,status)=>{
    if(status == 200){
        response = JSON.parse(response);
        document.querySelector("#title").innerText = response["data"]["name"];
        document.querySelector("#deaths").innerText = response["data"]["latest_data"]["deaths"];
        document.querySelector("#case-confirmed").innerText = response["data"]["latest_data"]["confirmed"];
        document.querySelector("#recovered").innerText = response["data"]["latest_data"]["recovered"];
        document.querySelector("#population").innerText = response["data"]["population"];
        document.querySelector("#time").innerText = response["data"]["timeline"][0]["date"];
        document.querySelector("#new-deaths").innerText = response["data"]["timeline"][0]["new_deaths"];
        document.querySelector(".card").style.display = "flex";
        document.querySelector(".card.notfound").style.display = "none";
    }else{
        document.querySelector(".card").style.display = "none";
        document.querySelector(".card.notfound").style.display = "flex";
    }
});
}