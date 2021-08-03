const { series, dest, src } = require('gulp');
const imagemin = require('gulp-imagemin');
const imgWebp = require('gulp-webp');

//funcion para comprimir imagenes
function imagenes(){
    return src('./img/imgProyectos/*')
    .pipe( imagemin())
    .pipe( dest ('./img/imagemin'))
}
// function webp(){
//     return src('./img/*')
//     .pipe( imgWebp() )
//     .pipe( dest( './img/imgWebp') )
// }
exports.imagenes = imagenes;
// exports.webp = webp;
