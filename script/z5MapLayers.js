// reference
// 1. https://leaflet-extras.github.io/leaflet-providers/preview/
var accessToken = 'pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg';

var BingLayer = L.TileLayer.extend({
    getTileUrl: function (tilePoint) {
//        this._adjustTilePoint(tilePoint);
        return L.Util.template(this._url, {
            s: this._getSubdomain(tilePoint),
            q: this._quadKey(tilePoint.x, tilePoint.y, this._getZoomForUrl())
        });
    },

    _quadKey: function (x, y, z) {
        var quadKey = [];
        for (var i = z; i > 0; i--) {
            var digit = '0';
            var mask = 1 << (i - 1);
            if ((x & mask) != 0) {
                digit++;
            }
            if ((y & mask) != 0) {
                digit++;
                digit++;
            }
            quadKey.push(digit);
        }
        console.log(quadKey);
        return quadKey.join('');
    }
});

		//---------------------------------------------------------------------------
		// Map Layers
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		// ArcGIS World
		var arcGISUrl    = '';
		if (localMapTile) {
			arcGISUrl    = urlLocal + 'ArcGIS_World_Imagery/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			arcGISUrl    = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
		}
		var arcGISAttrib = 'ArcGIS Aerial';
		var lyrarcGIS    = new L.TileLayer(arcGISUrl, {minZoom: 1, maxZoom: 19, attribution: arcGISAttrib});
    //---------------------------------------------------------------------------
    // ArcGIS StreetMap e.g. https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/3/2/6
    var arcGISStreetMapUrl    = '';
    if (localMapTile) {
      arcGISStreetMapUrl  = urlLocal + 'ArcGIS_StreetMap/{z}/{y}/{z}_y{y}_x{x}.jpg';
    }
    else {
      arcGISStreetMapUrl  = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
    }
    var arcGISStreetMapAttrib = 'ArcGIS StreetMap';
    var lyrarcGISStreetMap    = new L.TileLayer(arcGISStreetMapUrl, {minZoom: 1, maxZoom: 16, attribution: arcGISStreetMapAttrib});

		//---------------------------------------------------------------------------
		// ArcGIS Topo
		var arcGISTopoUrl    = '';
		if (localMapTile) {
			arcGISTopoUrl  = urlLocal + 'ArcGIS_Topo/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			arcGISTopoUrl  = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?blankTile=false';
		}
		var arcGISTopoAttrib = 'ArcGIS Topo';
		var lyrarcGISTopo    = new L.TileLayer(arcGISTopoUrl, {minZoom: 1, maxZoom: 16, attribution: arcGISTopoAttrib});

		//---------------------------------------------------------------------------
		// ArcGIS Ocean e.g. ArcGIS - Ocean - https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/7/63/105
		var arcGISOceanUrl    = '';
		if (localMapTile) {
			arcGISOceanUrl  = urlLocal + 'ArcGIS_Ocean/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			arcGISOceanUrl  = 'http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}';
		}
		var arcGISOceanAttrib = 'ArcGIS Ocean';
		var lyrarcGISOcean    = new L.TileLayer(arcGISOceanUrl, {minZoom: 1, maxZoom: 10, attribution: arcGISOceanAttrib});
		//---------------------------------------------------------------------------
		// Bing Aerial
		var bingAerialUrl = '';
		if (localMapTile) {
			bingAerialUrl    = urlLocal + 'Bing_Aerial/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			bingAerialUrl    = 'http://t{s}.tiles.virtualearth.net/tiles/a{q}.jpeg?g=2868';
			bingAerialUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=A,G,RL&shading=hill&n=z&og=746&c4w=1&src=h';
      bingAerialUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=A,G,RL&shading=hill&n=z&og=852&c4w=1&src=h';
		}
		var bingAerialAttrib = 'Microsoft Bing Aerial';
		var lyrBingAerial = new BingLayer(bingAerialUrl, {subdomains: ['0', '1', '2', '3', '4'],attribution: bingAerialAttrib});
		//---------------------------------------------------------------------------
		// Bing Hybrid
		var bingHybridUrl = '';
		if (localMapTile) {
			bingHybridUrl    = urlLocal + 'Bing_Hybrid/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			bingHybridUrl    = 'http://t{s}.tiles.virtualearth.net/tiles/h{q}.jpeg?g=2868';
//                                      http://ak.t0.tiles.virtualearth.net/tiles/a13320.jpeg?g=2868&n=z
		}
		var bingHybridAttrib = 'Microsoft Bing Hybrid';
		var lyrBingHybrid = new BingLayer(bingHybridUrl, {subdomains: ['0', '1', '2', '3', '4'], attribution: bingHybridAttrib});
		//---------------------------------------------------------------------------
		// Bing Road
		var bingRoadUrl = '';
		if (localMapTile) {
			bingRoadUrl    = urlLocal + 'Bing_Road/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			bingRoadUrl    = 'http://ak.dynamic.t{s}.tiles.virtualearth.net/comp/ch/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill&og=57&n=z';
      bingRoadUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=G,BX,RL&shading=hill&n=z&og=852&c4w=1&cstl=vb&src=h';
		}
		var bingRoadAttrib = 'Microsoft Bing Road';
		var lyrBingRoad = new BingLayer(bingRoadUrl, {subdomains: ['0', '1', '2', '3', '4'], attribution: bingRoadAttrib});
		//---------------------------------------------------------------------------
		// BlueMarble
		var blueMarbleUrl    = '';
		if (localMapTile) {
			blueMarbleUrl    = urlLocal + 'BlueMarble/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			blueMarbleUrl    = 'http://s3.amazonaws.com/com.modestmaps.bluemarble/{z}-r{y}-c{x}.jpg';
		}
		var blueMarbleAttrib = 'Blue Marble';
		var lyrblueMarble    = new L.TileLayer(blueMarbleUrl, {minZoom: 2, maxZoom: 9, attribution: blueMarbleAttrib});

		//---------------------------------------------------------------------------
		// cartoDB - Dark - see https://carto.com/help/building-maps/basemap-list/
		var cartoDarkUrl    = '';
		if (localMapTile) {
			cartoDarkUrl = urlLocal + 'BlueMarble/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			cartoDarkUrl = 'https://cartodb-basemaps-b.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png';
			cartoDarkUrl = 'http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png';
		}
		var cartoDarkAttrib = 'Blue Marble';
		var lyrcartoDark    = new L.TileLayer(cartoDarkUrl, {minZoom: 2, maxZoom: 17, attribution: cartoDarkAttrib});

		//---------------------------------------------------------------------------
		// cartoDB - Dark (Labels) - see https://carto.com/help/building-maps/basemap-list/
		var cartoDarkLabelUrl    = '';
		if (localMapTile) {
			cartoDarkLabelUrl    = urlLocal + 'BlueMarble/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			cartoDarkLabelUrl    = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
		}
		var cartoDarkLabelAttrib = 'Blue Marble';
		var lyrcartoDarkLabel    = new L.TileLayer(cartoDarkLabelUrl, {minZoom: 2, maxZoom: 17, attribution: cartoDarkLabelAttrib });
		//---------------------------------------------------------------------------
		// cartoDB - Light - see https://carto.com/help/building-maps/basemap-list/
		var cartoLightUrl    = '';
		if (localMapTile) {
			cartoLightUrl = urlLocal + 'BlueMarble/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			cartoLightUrl = 'https://cartodb-basemaps-b.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png';
			cartoLightUrl = 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png';
		}
		var cartoLightAttrib = 'cartoDB - Light';
		var lyrcartoLight    = new L.TileLayer(cartoLightUrl, {minZoom: 2, maxZoom: 17, attribution: cartoLightAttrib});
		//---------------------------------------------------------------------------
		// cartoDB - Light (Labels) - see https://carto.com/help/building-maps/basemap-list/
		var cartoLightLabelUrl    = '';
		if (localMapTile) {
			cartoLightLabelUrl    = urlLocal + 'BlueMarble/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			cartoLightLabelUrl    = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
		}
		var cartoLightLabelAttrib = 'cartoDB - Light (Labels)';
		var lyrcartoLightLabel    = new L.TileLayer(cartoLightLabelUrl, {minZoom: 2, maxZoom: 17, attribution: cartoLightLabelAttrib});
		//---------------------------------------------------------------------------
		// Mapbox - Black-White e.g. https://a.tiles.mapbox.com/v3/chethrington.map-g63as2k3/7/100/63.png
		var mapBoxBWUrl    = '';
		if (localMapTile) {
			mapBoxBWUrl    = urlLocal + 'Stamen_Toner/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxBWUrl    = 'https://{s}.tiles.mapbox.com/v3/chethrington.map-g63as2k3/{z}/{x}/{y}.png';
		}
		var mapBoxBWAttrib = 'Mapbox BW';
		var lyrmapBoxBW    = new L.TileLayer(mapBoxBWUrl, {minZoom: 1, maxZoom: 17, attribution: mapBoxBWAttrib});
		//---------------------------------------------------------------------------
		// Mapbox - Blue e.g.
		var mapBoxBlueUrl    = '';
		if (localMapTile) {
			mapBoxBlueUrl    = urlLocal + 'Mapbox_Blue/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxBlueUrl    = 'https://{s}.tiles.mapbox.com/v4/zwadia.k5hj7olb/{z}/{x}/{y}.png?access_token='+ accessToken;
		}
		var mapBoxBlueAttrib = 'Mapbox Blue';
		var lyrmapBoxBlue   = new L.TileLayer(mapBoxBlueUrl, {minZoom: 1, maxZoom: 19, attribution: mapBoxBlueAttrib});
		//---------------------------------------------------------------------------
		// Mapbox - Blueprint e.g. https://a.tiles.mapbox.com/v4/laurenancona.lgh0leco/7/100/63.png?access_token=pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg
		var mapBoxBPUrl    = '';
		if (localMapTile) {
			mapBoxBPUrl = urlLocal + 'Mapbox_Blueprint/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxBPUrl = 'https://{s}.tiles.mapbox.com/v4/laurenancona.lgh0leco/{z}/{x}/{y}.png?access_token='+ accessToken;
		}
		var mapBoxBPAttrib = 'Mapbox Color 01';
		var lyrmapBoxBP   = new L.TileLayer(mapBoxBPUrl, {minZoom: 1, maxZoom: 19, attribution: mapBoxBPAttrib});
		//---------------------------------------------------------------------------
		// Mapbox - Sreet e.g. https://api.tiles.mapbox.com/v4/mapbox.streets/7/100/63.png?access_token=pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg
		var mapBoxStreetUrl    = '';
		if (localMapTile) {
			mapBoxStreetUrl = urlLocal + 'Mapbox_Street/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxStreetUrl = 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token='+ accessToken;
		}
		var mapBoxStreetAttrib = 'Mapbox Street';
		var lyrmapBoxStreet   = new L.TileLayer(mapBoxStreetUrl, {minZoom: 1, maxZoom: 19, attribution: mapBoxStreetAttrib});
		//---------------------------------------------------------------------------
		// Mapbox - Sreets v5
		// https://api.mapbox.com/v4/mapbox.mapbox-streets-v5/12/1208/1538.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA
		var mapBoxStreetUrl5    = '';
		if (localMapTile) {
			mapBoxStreetUrl5 = urlLocal + 'Mapbox_Streetv6/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxStreetUrl5 = 'https://api.mapbox.com/v4/mapbox.mapbox-streets-v5/{z}/{x}/{y}.png?access_token='+ accessToken;
		}
		var mapBoxStreetAttrib5 = 'Mapbox Street v5';
		var lyrmapBoxStreet5   = new L.TileLayer(mapBoxStreetUrl5, {minZoom: 1, maxZoom: 19, attribution: mapBoxStreetAttrib5});
		//---------------------------------------------------------------------------
		// Mapbox - Terrain v1
		// https://api.mapbox.com/v4/mapbox.mapbox-terrain-v1/13/1317/2906.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA
		var mapBoxTerrainv1Url    = '';
		if (localMapTile) {
			mapBoxTerrainv1Url = urlLocal + 'Mapbox_Streetv6/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxTerrainv1Url = 'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v1/{z}/{x}/{y}.png?access_token='+ accessToken;
		}
		var mapBoxTerrainv1Attrib = 'Mapbox Terrain v1';
		var lyrmapBoxTerrainv1    = new L.TileLayer(mapBoxTerrainv1Url, {minZoom: 1, maxZoom: 19, attribution: mapBoxTerrainv1Attrib});
		//---------------------------------------------------------------------------
		// Mapbox - Terrain
		var mapBoxTerrainUrl    = '';
		if (localMapTile) {
			mapBoxTerrainUrl = urlLocal + 'Mapbox_Blueprint/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapBoxTerrainUrl = 'https://{s}.tiles.mapbox.com/v4/mgtaylor.e25e78e6/{z}/{x}/{y}.png?access_token='+ accessToken;

		}
		var mapBoxTerrainAttrib = 'Mapbox Terrain';
		var lyrmapBoxTerrain   = new L.TileLayer(mapBoxTerrainUrl, {minZoom: 1, maxZoom: 18, attribution: mapBoxTerrainAttrib});
		//---------------------------------------------------------------------------
		// MapBik
		var mapNikGrayUrl    = '';
		if (localMapTile) {
			mapNikGrayUrl    = urlLocal + 'Stamen_Toner/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			mapNikGrayUrl    = 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
		}
		var mapNikGrayAttrib = 'Stamen Black White Map';
		var lyrmapNikGray    = new L.TileLayer(mapNikGrayUrl, {minZoom: 1, maxZoom: 17, attribution: mapNikGrayAttrib});

		//---------------------------------------------------------------------------
		// Nokia Aerial (key changes everyday)
		var nokiaKey = 'b2f8d737c7';
		var nokiaAerialUrl = '';
		if (localMapTile) {
			nokiaAerialUrl = urlLocal + 'Nokia_Aerial/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			nokiaAerialUrl = 'https://3.aerial.maps.api.here.com/maptile/2.1/maptile/'+ keyNokia +'/hybrid.day/{z}/{x}/{y}/256/png8?app_id=VgTVFr1a0ft1qGcLCVJ6&app_code=LJXqQ8ErW71UsRUK3R33Ow&lg=eng&ppi=72&pview=DEF';

		}
		var nokiaAerialAttrib    = 'Nokia Aerial';
		var lyrNokiaAerial = new L.TileLayer(nokiaAerialUrl, {minZoom: 1, maxZoom: 18, attribution: nokiaAerialAttrib});
		//---------------------------------------------------------------------------
		// Nokia Road (key changes everyday)
		// https://4.base.maps.cit.api.here.com/maptile/2.1/basetile/newest/normal.day/13/6453/4062/256/png8?app_id=oenPwMCqbQkUSqj1WhRx&app_code=kBxLcdTofTHUlsT7tl2X5w&lg=eng
		var nokiaRoadUrl    = '';
		if (localMapTile) {
			nokiaRoadUrl    = urlLocal + 'Nokia_Road/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			nokiaRoadUrl    = 'https://3.base.maps.api.here.com/maptile/2.1/maptile/'+ keyNokia +'/normal.day/{z}/{x}/{y}/256/png8?app_id=VgTVFr1a0ft1qGcLCVJ6&app_code=LJXqQ8ErW71UsRUK3R33Ow&lg=eng';

		}
		var nokiaRoadAttrib = 'Nokia Road';
		var lyrnokiaRoad    = new L.TileLayer(nokiaRoadUrl, {minZoom: 2, maxZoom: 18, attribution: nokiaRoadAttrib});
		//---------------------------------------------------------------------------
		// Nokia Terrain (key changes everyday)
		var nokiaTerrainUrl    = '';
		if (localMapTile) {
			nokiaTerrainUrl    = urlLocal + 'Nokia_Terrain/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
      nokiaTerrainUrl    = 'https://4.aerial.maps.api.here.com/maptile/2.1/maptile/'+ keyNokia +'/terrain.day/{z}/{x}/{y}/256/png8?app_id=VgTVFr1a0ft1qGcLCVJ6&app_code=LJXqQ8ErW71UsRUK3R33Ow&lg=eng&ppi=72&pview=DEF';
		}
		var nokiaTerrainAttrib = 'Nokia Terrain';
		var lyrnokiaTerrain    = new L.TileLayer(nokiaTerrainUrl, {minZoom: 2, maxZoom: 18, attribution: nokiaTerrainAttrib});
		//---------------------------------------------------------------------------
		// Open Street Maps
		var osmUrl    = '';
		if (localMapTile) {
			osmUrl = urlLocal + 'OSM_Cycle/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		}
		var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
		var lyrOSM    = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 18, attribution: osmAttrib});
		//---------------------------------------------------------------------------
		// Open Street Maps - Cycle
		var osmCycleUrl   = '';
		if (localMapTile) {
			osmCycleUrl = urlLocal + 'OSM_Cycle/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmCycleUrl = 'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png';
		}
		var osmCycleAttrib = 'OSM Cycle';
		var lyrosmCycle    = new L.TileLayer(osmCycleUrl, {minZoom: 1, maxZoom: 18, attribution: osmCycleAttrib});
		//---------------------------------------------------------------------------
		// Open Street Maps - Landscape
		var osmLandscapeUrl   = '';
		if (localMapTile) {
			osmLandscapeUrl    = urlLocal + 'OSM_Cycle_Landscape/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmLandscapeUrl    = 'http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png';
		}
		var osmLandscapeAttrib = 'OSM Landscape';
		var lyrosmLandscape    = new L.TileLayer(osmLandscapeUrl, {minZoom: 1, maxZoom: 18, attribution: osmLandscapeAttrib});
		//---------------------------------------------------------------------------
		// Open Street Maps - Transport
		var osmTransportUrl    = '';
		if (localMapTile) {
			osmTransportUrl    = urlLocal + 'OSM_Transport/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmTransportUrl    = 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png';
		}
		var osmTransportAttrib = 'OSM Transport';
		var lyrosmTransport    = new L.TileLayer(osmTransportUrl, {minZoom: 1, maxZoom: 18, attribution: osmTransportAttrib});
		//---------------------------------------------------------------------------
		// Open Street Maps - Sea
		var osmSeaUrl    = '';
		if (localMapTile) {
			osmSeaUrl    = urlLocal + 'OSM_White/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmSeaUrl    = 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png';
		}
		var osmSeaAttrib = 'OSM Sea';
		var lyrosmSea    = new L.TileLayer(osmSeaUrl, {minZoom: 1, maxZoom: 18, attribution: osmSeaAttrib});
		//---------------------------------------------------------------------------
		// Stamen - w/o words - https://stamen-tiles-b.a.ssl.fastly.net/toner-background/5/23/10.png
		var stamenTonerUrl    = '';
		if (localMapTile) {
			stamenTonerUrl    = urlLocal + 'Stamen_Toner/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			stamenTonerUrl    = 'http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png';
		}
		var stamenTonerAttrib = 'Stamen Black White Map';
		var lyrstamenToner    = new L.TileLayer(stamenTonerUrl, {minZoom: 1, maxZoom: 17, attribution: stamenTonerAttrib});
   	// Stamen - Lite - 'https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
		// Stamen - OutLines - 'http://{s}.tile.stamen.com/toner-lines/{z}/{x}/{y}.png';
		//---------------------------------------------------------------------------
		// Stamen - Labels
		var stamenTonerLabelUrl    = '';
		if (localMapTile) {
			stamenTonerLabelUrl    = urlLocal + 'Stamen_Toner/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			stamenTonerLabelUrl    = 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';
		}
		var stamenTonerLabelAttrib = 'Stamen Black White Map';
		var lyrstamenTonerLabel    = new L.TileLayer(stamenTonerLabelUrl, {minZoom: 1, maxZoom: 17, attribution: stamenTonerLabelAttrib});
		//---------------------------------------------------------------------------
		// Stamen - Lite
		var stamenTonerLiteUrl    = '';
		if (localMapTile) {
			stamenTonerLiteUrl    = urlLocal + 'Stamen_Toner/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {

			stamenTonerLiteUrl    = 'https://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
		}
		var stamenTonerLiteAttrib = 'Stamen Black White Map';
		var lyrstamenTonerLite    = new L.TileLayer(stamenTonerLiteUrl, {minZoom: 1, maxZoom: 17, attribution: stamenTonerLiteAttrib});

		// Map Right-Click Context Menu
		function showCoordinates (e) {
			alert(e.latlng);
		}

		var map = L.map('map', {contextmenu: true, layers: [lyrOSM], contextmenuItems: [
			{text: 'Show coordinates',callback: showCoordinates},
		]}).setView([mapCenterLat, mapCenterLon], mapZoom);
		//---------------------------------------------------------------------------
		// Map TOC
		var baseMaps = {
					"ArcGIS Aerial"     : lyrarcGIS,
					"ArcGIS StreetMap"  : lyrarcGISStreetMap,
					"ArcGIS Topo"       : lyrarcGISTopo,
					"ArcGIS Ocean"      : lyrarcGISOcean,

					"Bing Aerial"       : lyrBingAerial,
					"Bing Road"         : lyrBingRoad,

					"Mapbox (Blue)"     : lyrmapBoxBlue,
					"Mapbox Blueprint"  : lyrmapBoxBP,
					"Mapbox Terrain"    : lyrmapBoxTerrain,
					"Mapbox Terrain v1" : lyrmapBoxTerrainv1,
					"Mapbox Street"     : lyrmapBoxStreet,
					"Mapbox Street v5"  : lyrmapBoxStreet5,

					"NASA BlueMarble"         : lyrblueMarble,
					"Open Street Maps"        : lyrOSM,

					"Stamen Toner"            : lyrstamenToner,
					"Stamen Toner (Labels)"   : lyrstamenTonerLabel,
					"Stamen Toner (White)"    : lyrstamenTonerLite,
				};
