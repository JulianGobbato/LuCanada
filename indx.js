const botonJulian = document.getElementById("julian");
const botonLuisina = document.getElementById("luisina");
const h1 = document.getElementById("h1");
const body = document.getElementById("body")

botonLuisina.onclick = moverse ;
botonJulian.onclick = disteClickEnJulian ;

function moverse(){
    let a = Math.floor(Math.random() * 2)
    if (a === 0) {
        a = "+"
    } else {
        a = "-"
    }
    let b = Math.floor(Math.random() * 650)
    let c = Math.floor(Math.random() * (500 - -70)) + -70
    botonLuisina.style.cssText = `left: ${a}${b}px; top: ${c}px;`
}

function disteClickEnJulian (){
    p = botonLuisina.parentNode
    p.removeChild(botonLuisina)
    p2 = botonJulian.parentNode
    p2.removeChild(botonJulian)
    h = h1.parentNode
    h.removeChild(h1)
    htmlBody = `
        <h1 id="h1"> <span class="badge badge-secondary">De quien fue la idea del viaje a Canada ?</span></h1>
        <h2 id="h2"> <span class="badge badge-success">Julian Tenia razón</span></h2>
        <img src="foto 001.jpg" alt="Foto1" style="vertical-align:middle" id="f1">
        <img src="foto 002.jpg" alt="Foto1"  height="556px" style="vertical-align:middle" id="f2">
        `
    body.innerHTML = htmlBody
    function actualizar(){location.reload(true);}
    setTimeout(actualizar, 15000)
}
