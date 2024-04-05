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
		// Terrain - https://maps-for-free.com/layer/relief/z8/row85/8_136-85.jpg
		var mapTerrainSRTMUrl     = '';
		if (localMapTile) {
		      mapTerrainSRTMUrl   = urlLocal + 'Terrain_SRTM/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
		      mapTerrainSRTMUrl   = 'https://maps-for-free.com/layer/relief/z{z}/row{y}/{z}_{x}-{y}.jpg';
		}
		var mapTerrainSRTMAttrib  = 'Terrain - SRTM';
		var lyrmapTerrain_SRTM    = new L.TileLayer(mapTerrainSRTMUrl, {minZoom: 1, maxZoom: 11, attribution: mapTerrainSRTMAttrib});
		//---------------------------------------------------------------------------
		/*
		// Map Right-Click Context Menu
		function showCoordinates (e) {
			console.log(e.latlng.lat +','+ e.latlng.lng);
		}
		*/

		var map = L.map('map', {contextmenu: true, layers: [lyrarcGIS], contextmenuItems: [
			{text: 'Show coordinates',icon: 'images/icon_trafficcamera.png',callback: showCoordinates},
			{text: 'Google Streetview',icon: 'images/icon_360.png',callback: showGSV},
		]}).setView([mapCenterLat, mapCenterLon], mapZoom);

		//---------------------------------------------------------------------------
		// Map TOC
		var baseMaps = {
					"ArcGIS Aerial"     : lyrarcGIS,
					"ArcGIS StreetMap"  : lyrarcGISStreetMap,
					"ArcGIS Terrain"    : lyrarcGISTerrain,
					"ArcGIS Topo"       : lyrarcGISTopo,
					"ArcGIS Ocean"      : lyrarcGISOcean,

					"Bing Aerial"       : lyrBingAerial,
					"Bing Road"         : lyrBingRoad,
					"Bing Road (Names)" : lyrBingRoad_WithName,
					"Bing Road (Dark)"  : lyrBingDarkRoad,

					"GoogleMap Aerial"  : lyrgmAerial,
					"GoogleMap Road"    : lyrgmRoad,
					"GoogleMap Terrain" : lyrgmTerrain,

					"NASA BlueMarble"   : lyrblueMarble,
					"Terrain - SRTM"    : lyrmapTerrain_SRTM,
					"Open Street Maps"  : lyrOSM,
					"OSM - Cycle"       : lyrosmCycle,
					"OSM - Transport"   : lyrosmTransport,
					"OSM - Topo "       : lyrosmTopo,
				};
