const salones=
[
    {
        nombreAula:'B1',capacidadAula:30,grupoAsginado: 'ISDI'
    },
    {
        nombreAula:'B2',capacidadAula:20,grupoAsginado: 'ISDI'
    },
    {
        nombreAula:'B3',capacidadAula:25,grupoAsginado: 'ISDI'
    },
    {
        nombreAula:'B4',capacidadAula:25,grupoAsginado: 'ISDI'
    }
];

var asd="A";
const alumnosRegistrados = [];
var container = document.getElementById('tarjetasDinamicas');
var container2 = document.getElementById('alumnosDinamicos');

function Saludos(name)
{
    var checkvalue="";
    if(document.getElementById('r1').checked)
    {
        valor=document.getElementById('r1').value;
    }
    else
    {
        valor=document.getElementById('r2').value;
    }

    var clasesEscuela = document.getElementsByClassName('clasesEscuela');

    for (var x=0;clasesEscuela[x];++x)
    {
        if(clasesEscuela[x].checked)
        {
            checkvalue=checkvalue+clasesEscuela[x].value+", ";
        }
    }

    if(asd=="A")
    {
        salones.forEach(salon =>
        {
            const content='<div class="p-2"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Salón: '+salon.nombreAula+'</h5><h6 class="card-subtitle mb-2 text-muted" id="p2">Grupo asignado: '+salon.grupoAsginado+'</h6> <p class="card-text" id="p3">Capacidad del salón: '+salon.capacidadAula+'</p><a href="#" class="card-link">Revisar</a></div></div></div>'
            container.innerHTML+=content
        });
        asd="B"
    }

    document.getElementById('p1').innerHTML='Hola '+name;
    document.getElementById('p2').innerHTML='Tu eres '+valor;
    document.getElementById('p3').innerHTML='Tus clases son '+checkvalue;
    usuario=true;
}

function Registrar()
{
    bandera=false;
    var checkvalue2="";
    usuario = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    var materias = document.getElementsByClassName('clasesEscuela');
    
    for (var x=0;materias[x];++x)
    {
        if(materias[x].checked)
        {
            checkvalue2=checkvalue2+materias[x].value+", ";
        }
    }


    alumnoNuevo={usuario,email,password,checkvalue2}
    alumnosRegistrados.push(alumnoNuevo);
    container2.innerHTML="";

    alumnosRegistrados.forEach(alumno =>
    {
        const content='<div class="p-2"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Nombre: '+alumno.usuario+'</h5><h6 class="card-subtitle mb-2 text-muted" id="p2">Email: '+alumno.email+'</h6> <p class="card-text" id="p3">Materias seleccionadas: '+alumno.checkvalue2+'</p><a href="#" class="card-link">Revisar</a></div></div></div>'
        container2.innerHTML+=content    
    });
}