 const descripcion = {
     daman: true,
     alias: 'd',
     des: 'Descripción de la tarea por hacer'
 };

 const completado = {
     alias: 'c',
     default: true,
     des: 'Marca como completado o pendite la tarea'
 };

 const argv = require('yargs')
     .command('crear', 'Crear un elmento por hacer', {
         descripcion
     })
     .command('actualizar', 'Actualizar el estado completado de una tarea', {
         descripcion,
         completado
     })

 .command('borrar', 'Borra una tarea', {
         descripcion
     })
     .help()
     .argv;

 module.exports = {
     argv
 }