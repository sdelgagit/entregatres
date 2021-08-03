window.addEventListener("scroll",function(){
    let servicios = document.querySelector("#Nosotros");
    let posicion = servicios.getBoundingClientRect().top;
    const flecha = document.querySelector(".campoInicio")
    if(posicion < 0 ){
        flecha.style.opacity = "1"
    }else{
        flecha.style.opacity = "0"
    } 
    //video
    const video = document.querySelector("#video");
    const videoAparacion = video.getBoundingClientRect().top;
    if(videoAparacion < 1100){
        video.style.transform = "translate(-50%,-50%)";
    }
})


