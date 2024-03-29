

class Geolocalizacion{
    constructor (){
    navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
}
getPosicion(posicion){
    this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
    this.longitud         = posicion.coords.longitude; 
    this.latitud          = posicion.coords.latitude;  
    this.precision        = posicion.coords.accuracy;
    this.altitud          = posicion.coords.altitude;
    this.precisionAltitud = posicion.coords.altitudeAccuracy;
    this.rumbo            = posicion.coords.heading;
    this.velocidad        = posicion.coords.speed;       
}

cargarDatos(){

    $('p').remove();

   
    var datos='<p>'+ this.mensaje + '</p>'; 
    datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
    datos+='<p>Latitud: '+this.latitud +' grados</p>';
    datos+='<p>Precisión de la longitud y latitud: '+ this.precision +' metros</p>';
    datos+='<p>Altitud: '+ this.altitude +' metros</p>';
    datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
    datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
    datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';

    $('input').before(datos);
    
}
}
var localizacion = new Geolocalizacion();
