const boton=document.querySelector('.boton');
const contador=0
const contador1=0
const letra=''
const letraActual=''
const no=""
boton.addEventListener('click',(e) =>{
e.preventDefault;
const email1=document.querySelector('.email').value;
console.log(email1);
emailvalido= correo(email1);
console.log(emailvalido);
if(!emailvalido)
{
alert('E-mail incorrecto')
email1.focus;
return;
}
const pass=document.querySelector('.contra').value;
console.log(pass);
passw=passwod(pass)

if(!passw)
{
alert('Contrasena incorrecto')
pass.focus;
return;
}
mayus1=mayus2(pass)
if(!mayus1)
{
    {
        alert('Faltan Mayusculas o minusculas')
        pass.focus;
        return;
}
}
}
);

function correo(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

 function passwod(psw){
        if(psw.length >=8)
       {
        return true;
}
else
return false;

        
    }

function mayus2(may){
        {
        console.log(may)
    for( index = 0; index < may.length; index++)
{
    letraActual =may.charAt(index);
    if(esMayuscula(letraActual))
    {
        contador+=1;
        console.log(letraActual)
    }
    if(esMinuscula(letraActual))
    {
        contador1+=1;
        console.log(letraActual)
    }       
}
if(contador>=2){
    if(contador1>=1)
    return true    
}
else 
return false
}}

    function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}   