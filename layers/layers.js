ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([478498.381257, 5671765.947607, 501819.103728, 5683850.479370]);
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
var format_gadm41_deu__adm_adm_4_EPSG_25832_2 = new ol.format.GeoJSON();
var features_gadm41_deu__adm_adm_4_EPSG_25832_2 = format_gadm41_deu__adm_adm_4_EPSG_25832_2.readFeatures(json_gadm41_deu__adm_adm_4_EPSG_25832_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_gadm41_deu__adm_adm_4_EPSG_25832_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_deu__adm_adm_4_EPSG_25832_2.addFeatures(features_gadm41_deu__adm_adm_4_EPSG_25832_2);
var lyr_gadm41_deu__adm_adm_4_EPSG_25832_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_deu__adm_adm_4_EPSG_25832_2, 
                style: style_gadm41_deu__adm_adm_4_EPSG_25832_2,
                popuplayertitle: 'gadm41_deu__adm_adm_4_EPSG_25832',
                interactive: true,
                title: '<img src="styles/legend/gadm41_deu__adm_adm_4_EPSG_25832_2.png" /> gadm41_deu__adm_adm_4_EPSG_25832'
            });
var format_6_EEG_Flchenanteil_rev01_3 = new ol.format.GeoJSON();
var features_6_EEG_Flchenanteil_rev01_3 = format_6_EEG_Flchenanteil_rev01_3.readFeatures(json_6_EEG_Flchenanteil_rev01_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_6_EEG_Flchenanteil_rev01_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_EEG_Flchenanteil_rev01_3.addFeatures(features_6_EEG_Flchenanteil_rev01_3);
var lyr_6_EEG_Flchenanteil_rev01_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6_EEG_Flchenanteil_rev01_3, 
                style: style_6_EEG_Flchenanteil_rev01_3,
                popuplayertitle: '§6_EEG_Flächenanteil_rev01',
                interactive: false,
                title: '<img src="styles/legend/6_EEG_Flchenanteil_rev01_3.png" /> §6_EEG_Flächenanteil_rev01'
            });
var format_250524_WEA_4 = new ol.format.GeoJSON();
var features_250524_WEA_4 = format_250524_WEA_4.readFeatures(json_250524_WEA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_250524_WEA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250524_WEA_4.addFeatures(features_250524_WEA_4);
var lyr_250524_WEA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250524_WEA_4, 
                style: style_250524_WEA_4,
                popuplayertitle: '250524_WEA',
                interactive: true,
                title: '<img src="styles/legend/250524_WEA_4.png" /> 250524_WEA'
            });
var format_Polygone_5 = new ol.format.GeoJSON();
var features_Polygone_5 = format_Polygone_5.readFeatures(json_Polygone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Polygone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygone_5.addFeatures(features_Polygone_5);
var lyr_Polygone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygone_5, 
                style: style_Polygone_5,
                popuplayertitle: 'Polygone',
                interactive: true,
                title: '<img src="styles/legend/Polygone_5.png" /> Polygone'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_241211_Geometrien_1.setVisible(true);lyr_gadm41_deu__adm_adm_4_EPSG_25832_2.setVisible(true);lyr_6_EEG_Flchenanteil_rev01_3.setVisible(true);lyr_250524_WEA_4.setVisible(true);lyr_Polygone_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_241211_Geometrien_1,lyr_gadm41_deu__adm_adm_4_EPSG_25832_2,lyr_6_EEG_Flchenanteil_rev01_3,lyr_250524_WEA_4,lyr_Polygone_5];
lyr_241211_Geometrien_1.set('fieldAliases', {'fid': 'fid', });
lyr_gadm41_deu__adm_adm_4_EPSG_25832_2.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_6_EEG_Flchenanteil_rev01_3.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'fid_2': 'fid_2', 'Fläche in m²': 'Fläche in m²', 'Flächenanteil ': 'Flächenanteil ', });
lyr_250524_WEA_4.set('fieldAliases', {'fid': 'fid', });
lyr_Polygone_5.set('fieldAliases', {'fid': 'fid', 'Fläche': 'Fläche', });
lyr_241211_Geometrien_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_gadm41_deu__adm_adm_4_EPSG_25832_2.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_6_EEG_Flchenanteil_rev01_3.set('fieldImages', {'fid': '', 'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', 'fid_2': '', 'Fläche in m²': '', 'Flächenanteil ': '', });
lyr_250524_WEA_4.set('fieldImages', {'fid': '', });
lyr_Polygone_5.set('fieldImages', {'fid': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_241211_Geometrien_1.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_gadm41_deu__adm_adm_4_EPSG_25832_2.set('fieldLabels', {'fid': 'hidden field', 'GID_4': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'GID_3': 'hidden field', 'NAME_3': 'hidden field', 'NAME_4': 'header label - visible with data', 'VARNAME_4': 'hidden field', 'TYPE_4': 'hidden field', 'ENGTYPE_4': 'hidden field', 'CC_4': 'hidden field', });
lyr_6_EEG_Flchenanteil_rev01_3.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'fid_2': 'no label', 'Fläche in m²': 'no label', 'Flächenanteil ': 'no label', });
lyr_250524_WEA_4.set('fieldLabels', {'fid': 'no label', });
lyr_Polygone_5.set('fieldLabels', {'fid': 'header label - always visible', 'Fläche': 'header label - visible with data', });
lyr_Polygone_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});