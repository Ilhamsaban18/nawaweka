var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Pelanggan_1 = new ol.format.GeoJSON();
var features_Pelanggan_1 = format_Pelanggan_1.readFeatures(json_Pelanggan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelanggan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelanggan_1.addFeatures(features_Pelanggan_1);
var lyr_Pelanggan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pelanggan_1, 
                style: style_Pelanggan_1,
                interactive: true,
                title: '<img src="styles/legend/Pelanggan_1.png" /> Pelanggan'
            });
var format_JaringanPipa_2 = new ol.format.GeoJSON();
var features_JaringanPipa_2 = format_JaringanPipa_2.readFeatures(json_JaringanPipa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPipa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPipa_2.addFeatures(features_JaringanPipa_2);
var lyr_JaringanPipa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanPipa_2, 
                style: style_JaringanPipa_2,
                interactive: true,
                title: '<img src="styles/legend/JaringanPipa_2.png" /> Jaringan Pipa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Pelanggan_1.setVisible(true);lyr_JaringanPipa_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Pelanggan_1,lyr_JaringanPipa_2];
lyr_Pelanggan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_JaringanPipa_2.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', });
lyr_Pelanggan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_JaringanPipa_2.set('fieldImages', {'id': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Pelanggan_1.set('fieldLabels', {'id': 'inline label - always visible', 'Nama': 'no label', 'Foto': 'no label', });
lyr_JaringanPipa_2.set('fieldLabels', {'id': 'inline label - always visible', 'Panjang': 'inline label - always visible', });
lyr_JaringanPipa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});