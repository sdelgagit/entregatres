for(let i = 1; i < 25; i++){
    let img = document.querySelector(`[data-img="${i}"]`);
    let imgSrc = img.src
    
    img.addEventListener("click",function(){
        
        //Agregamos la imagen
        let nuevaImg = document.createElement("IMG");
        nuevaImg.classList.add("imgCentrado")
        nuevaImg.src = imgSrc;
        console.log(nuevaImg)
    
        //Agregamos el DIV donde se alojara la imagen al hacer CLICK
        const fotoClase = document.querySelector(".fotos")
        const nuevaClase=document.createElement("DIV")
        nuevaClase.classList.add("fondo");
        fotoClase.appendChild(nuevaClase)
        nuevaClase.appendChild(nuevaImg)
    
        //Agregamos la X para salir de la galeria.
        const cerrarGaleria = document.createElement("IMG");
        cerrarGaleria.src = '../img/imgProyectos/cerrar.svg';
        cerrarGaleria.classList.add("boton-cerrar");
        nuevaClase.appendChild(cerrarGaleria)
        
        //Sacar la imagen cuando demos click
        cerrarGaleria.onclick = function(){
            nuevaClase.remove()
            }
    })
}

window.addEventListener("scroll", function(){
    const galeria = document.querySelector("#galeria");
    const galeriaId = galeria.getBoundingClientRect().top
    const flecha = document.querySelector(".campoInicio")
    if(galeriaId < 0 ){
        flecha.style.opacity = "1"
    }else{
        flecha.style.opacity = "0";
    }
})