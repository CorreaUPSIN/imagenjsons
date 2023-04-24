function peticion(){

    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/photos";
    const fran = document.createDocumentFragment();
    const idtem = document.getElementById("idtem");

http.onreadystatechange = function(){

    // Validar la respuesta de la peticion
    if(this.status == 200 && this.readyState == 4){

        //console.log(this.responseText);

        //Seleccionar y limpiar donde imprimiremos la informacion
        let res = document.getElementById("resultado");
        res.innerHTML = "";

        // Convertir la infomracion XML en un objeto con JSON
        const json = JSON.parse(this.responseText);


        for(const datos of json){
                
            const clone = idtem.content.firstElementChild.cloneNode(true);

            clone.querySelector(".txtTitle").textContent = datos.title;
            clone.querySelector(".imgs").src = datos.thumbnailUrl;
            clone.querySelector("#openModalll").href = "#openModal" + datos.id;
            clone.querySelector(".txtAlbumId").textContent = datos.albumId;
            clone.querySelector(".txtId").textContent = datos.id;
            clone.querySelector("#openModal").id = "openModal" + datos.id;
            clone.querySelector(".ftsarra").src = datos.url;

            console.log(clone.querySelector(".ftsarra").src)


            fran.appendChild(clone)

        }

        res.innerHTML = "";
        res.appendChild(fran);


    }
}


//Esto se usa para imprimir
http.open('GET',url,true);
http.send();


}