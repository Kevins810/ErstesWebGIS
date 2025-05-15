ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([544414.278870, 5801399.828690, 560487.998067, 5810103.828690]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_241211_Geometrien_1 = new ol.format.GeoJSON();
var features_241211_Geometrien_1 = format_241211_Geometrien_1.readFeatures(json_241211_Geometrien_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_241211_Geometrien_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_241211_Geometrien_1.addFeatures(features_241211_Geometrien_1);
var lyr_241211_Geometrien_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_241211_Geometrien_1, 
                style: style_241211_Geometrien_1,
                popuplayertitle: '241211_Geometrien',
                interactive: true,
                title: '<img src="styles/legend/241211_Geometrien_1.png" /> 241211_Geometrien'
            });
var format_Polygone_2 = new ol.format.GeoJSON();
var features_Polygone_2 = format_Polygone_2.readFeatures(json_Polygone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Polygone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygone_2.addFeatures(features_Polygone_2);
var lyr_Polygone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygone_2, 
                style: style_Polygone_2,
                popuplayertitle: 'Polygone',
                interactive: true,
                title: '<img src="styles/legend/Polygone_2.png" /> Polygone'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_241211_Geometrien_1.setVisible(true);lyr_Polygone_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_241211_Geometrien_1,lyr_Polygone_2];
lyr_241211_Geometrien_1.set('fieldAliases', {'fid': 'fid', });
lyr_Polygone_2.set('fieldAliases', {'fid': 'fid', 'Fläche': 'Fläche', });
lyr_241211_Geometrien_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Polygone_2.set('fieldImages', {'fid': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_241211_Geometrien_1.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_Polygone_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_Polygone_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});