// Reference:
// 1. https://www.wunderground.com/wundermap

		//---------------------------------------------------------------------------
		// GoogleMap Labels - 248000000 - changes periodically
		var gmLabelsUrl    = '';
		if (localMapTile) {
			gmLabelsUrl    = urlLocal + 'Google Labels/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			gmLabelsUrl    = 'https://mts0.google.com/vt/lyrs=h@248000000&hl=en&src=app&x={x}&y={y}&z={z}&s=Galil';
		}
		var gmLabelsAttrib = 'GoogleMap Labels';
		var lyrgmLabels    = new L.TileLayer(gmLabelsUrl, {minZoom: 1, maxZoom: 18, attribution: gmLabelsAttrib});
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		// Google Traffic
		var gmTrafficUrl   = '';
		if (localMapTile) {
			gmTrafficUrl = urlLocal + 'GoogleMap_Traffic/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			gmTrafficUrl = 'http://mt0.google.com/vt?hl=en&src=app&lyrs=m@176115983,traffic|seconds_into_week:-1&style=15&x={x}&y={y}&z={z}';
		}
		var gmTrafficAttrib    = '';
		var lyrgmTraffic = new L.TileLayer(gmTrafficUrl, {minZoom: 1, maxZoom: 20, attribution: gmTrafficAttrib});

		//---------------------------------------------------------------------------
		// Google EarthEngine
		var earthEngineUrl = '';

		if (localMapTile) {
			earthEngineUrl    = urlLocal + 'earthEngine/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			earthEngineUrl    = 'http://earthengine.google.org/static/hansen_2013/loss_forest_gain/{z}/{x}/{y}.png';
		}

		var earthEngineAttrib = 'EarthEngine';
		var lyrearthEngine    = new L.TileLayer(earthEngineUrl, {minZoom: 1, maxZoom: 12, attribution: earthEngineAttrib});

		//---------------------------------------------------------------------------
		// Google Streetview Coverage (GSV) - overlay
		var gsvUrl         = '';
		if (localMapTile) {
			gsvUrl       = urlLocal + 'wheretoSG/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			gsvUrl       = 'https://mts1.googleapis.com/vt?hl=en-US&lyrs=svv|cb_client:apiv3&style=40,18&gl=US&x={x}&y={y}&z={z}';
		}
		var gsvAttrib    = 'Google Streetview Coverage (GSV)';
		var lyrGSVCover = new L.TileLayer(gsvUrl, {minZoom: 10, maxZoom: 18, attribution: gsvAttrib});

