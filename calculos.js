var calificacion=0;
const materias=document.getElementsByClassName('calmat');
var container = document.getElementById('calculosDinamicos');
const alumnosRegistrados = [];

function Promedio()
{
    var calificaciones=[];
    container.innerHTML="";
    //console.log('Suma es: '+calificacion);

    //alert('Promedio: '+ resultado);

    usuario = document.getElementById('nombre').value;
    carrera = document.getElementById('carrera').value;
    var materias2=document.getElementsByClassName('calmat');

    
    for(var x=0;materias2[x];x++)
    {
        calificacion+=parseInt(materias2[x].value);
        calificaciones[x]=parseInt(materias2[x].value);
    }
    
    const resultado=calificacion/materias2.length;
    alumnoNuevo={usuario,carrera,resultado,calificaciones};
    
    alumnosRegistrados.push(alumnoNuevo);
    alumnosRegistrados.forEach(alumno =>{
            const content='<div class="p-2"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Nombre: '+alumno.usuario+'</h5><h6 class="card-subtitle mb-2 text-muted" id="p2">Carrera: '+alumno.carrera+'</h6><p class="card-text" id="p3">Redes: '+alumno.calificaciones[0]+'</p><p class="card-text" id="p3">Matematicas: '+alumno.calificaciones[1]+'</p><p class="card-text" id="p3">Historia: '+alumno.calificaciones[2]+'</p><p class="card-text" id="p3">Base de datos: '+alumno.calificaciones[3]+'</p><p class="card-text" id="p3">Moviles: '+alumno.calificaciones[4]+'</p><p class="card-text" id="p3">Promedio: '+alumno.resultado+'</p><a href="#" class="card-link">Revisar</a></div></div></div>'
            container.innerHTML+=content    
        });
    
    calificacion=0;
    calificaciones=0;
    resultado=0;
    calificaciones=[];
}