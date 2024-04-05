		//---------------------------------------------------------------------------
		// GoogleMap - Aerial
		var gmAerialUrl    = '';
		if (localMapTile) {
			gmAerialUrl    = urlLocal + 'GoogleMap_Aerial/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {

			gmAerialUrl    = 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}';
//			gmAerialUrl    = 'https://khms1.google.com/kh/v='+ keyGoogleAerial +'&src=app&x={x}&y={y}&z={z}&s=Galile';
		}
		var gmAerialAttrib = 'Google Aerial';
		var lyrgmAerial    = new L.TileLayer(gmAerialUrl, {minZoom: 1, maxZoom: 22, attribution: gmAerialAttrib});
		//---------------------------------------------------------------------------
		// GoogleMap - Road
		var gmRoadUrl    = '';
		if (localMapTile) {
			gmRoadUrl    = urlLocal + 'GoogleMap_Road/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
//			gmRoadUrl    = 'http://mt0.google.com/vt/lyrs=m@'+ keyGoogleRoad +'&hl=en&src=app&x={x}&y={y}&z={z}&s=Galileo';
			gmRoadUrl    = 'http://mt1.googleapis.com/vt?x={x}&y={y}&z={z}';
		}
		var gmRoadAttrib = 'Google Road';
		var lyrgmRoad    = new L.TileLayer(gmRoadUrl, {minZoom: 1, maxZoom: 17, attribution: gmRoadAttrib});
		//---------------------------------------------------------------------------
		// GoogleMap - Terrain
		var gmTerrainUrl    = '';
		if (localMapTile) {
			gmTerrainUrl    = urlLocal + 'GoogleMap_Terrain/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
//			gmTerrainUrl    = 'http://mt1.google.com/vt/lyrs=t@131,r@234000000&hl=en&src=api&x={x}&y={y}&z={z}&s=Gal';
			gmTerrainUrl    = 'http://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}';
		}
		var gmTerrainAttrib = 'Google Terrain';
		var lyrgmTerrain    = new L.TileLayer(gmTerrainUrl, {minZoom: 1, maxZoom: 17, attribution: gmTerrainAttrib});
