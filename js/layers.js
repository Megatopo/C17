
const clog =console.log;
clog('hola');

var style_barrios = {
    radius: 2, // Tamaño del punto (ajusta según tus preferencias)
    fillColor: 'blue', // Color de relleno del punto
    color: '#600000', // Color del borde del punto
    weight: 0.3, // Grosor del borde del punto
    opacity: 1, // Opacidad del punto
    fillOpacity: 0.6 // Opacidad del relleno del punto
};

var layer_barrios = L.geoJson(barrios, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_barrios)
    }
});

var icono = L.icon({
    iconUrl: 'data/market.png', // Ruta a tu imagen PNG
    iconSize: [20, 20], // Tamaño del icono
});

var layer_barrios_icono = L.geoJson(barrios, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: icono })
    }
});

// Convierte la capa GeoJSON en una capa de calor
var heatLayer = L.heatLayer(layer_barrios.toGeoJSON().features.map(function(feature) {
    return feature.geometry.coordinates.reverse(); // Invertimos las coordenadas
}), {
    radius: 40, // Tamaño del radio del calor
    blur: 15, // Intensidad del efecto de difuminado
    maxZoom: 17 // Nivel de zoom máximo en el que se mostrará el calor
});

var layer_comuna_17=L.geoJson(comuna17);

var datos = [
    [ -76.525259867994677, 3.40173813565175 ] 	,
    [ -76.538016922700649, 3.405531496225813 ] 	,
    [ -76.533396368474158, 3.405506043965781 ] 	,
    [ -76.529592221419875, 3.402170618168023 ] 	,
    [ -76.534907436778397, 3.399726669154748 ] 	,
    [ -76.540047221011136, 3.398539686832347 ] 	,
    [ -76.544578138663113, 3.397138485792167 ] 	,
    [ -76.529790716933874, 3.395069956839313 ] 	,
    [ -76.539318147110279, 3.394012755932611 ] 	,
    [ -76.528436157326524, 3.389958267299678 ] 	,
    [ -76.54187122982519, 3.389435149338148 ] 	,
    [ -76.535648534602473, 3.389590526351684 ] 	,
    [ -76.518340174326511, 3.384343795219964 ] 	,
    [ -76.522407705797065, 3.384923471868491 ] 	,
    [ -76.536074355732183, 3.385842579838649 ] 	,
    [ -76.530564828775454, 3.383162976525127 ] 	,
    [ -76.541557638767031, 3.382453948873502 ] 	,
    [ -76.533098811128056, 3.37469475674181 ] 	,
    [ -76.539092103543723, 3.376674780491963 ] 	,
    [ -76.527059489337546, 3.372415919235187 ] 	,
    [ -76.519616161724514, 3.371337434211568 ] 	
   
];

// Convierte la capa GeoJSON en una capa de calor
var heatLayer = L.heatLayer(layer_barrios.toGeoJSON().features.map(function(feature) {
    return feature.geometry.coordinates.reverse(); // Invertimos las coordenadas
}), {
    radius: 23, // Tamaño del radio del calor
    blur: 10, // Intensidad del efecto de difuminado
    maxZoom: 17 // Nivel de zoom máximo en el que se mostrará el calor
});