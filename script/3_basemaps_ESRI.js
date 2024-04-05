		//---------------------------------------------------------------------------
		//ESRI  ArcGIS
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
		// ArcGIS DeLorme - max zoom=11
/*
		var arcGISDeLormeUrl = '';
		if (localMapTile) {
			arcGISDeLormeUrl = urlLocal + 'ArcGIS_DeLorme_World_Base_Map/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			arcGISDeLormeUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}';
			arcGISDeLormeUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}';
                          https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}';
		}
		var arcGISDeLormeAttrib = 'ArcGIS DeLorme';
		var lyrarcGISDeLorme    = new L.TileLayer(arcGISDeLormeUrl, {minZoom: 1, maxZoom: 11, attribution: arcGISDeLormeAttrib});
*/
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
		// ArcGIS Terrain - https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/8/87/138.jpg
		//                  https://server.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/13/4063/6457 
		//                  https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/10/507/806
		var arcGISTerrainUrl    = '';
		if (localMapTile) {
			arcGISTerrainUrl  = urlLocal + 'ArcGIS_Terrain/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			arcGISTerrainUrl  = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.jpg';
		}
		var arcGISTerrainAttrib = 'ArcGIS Terrain';
		var lyrarcGISTerrain    = new L.TileLayer(arcGISTerrainUrl, {minZoom: 1, maxZoom: 13, attribution: arcGISTerrainAttrib});

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
		// ArcGIS Ocean e.g. ArcGIS - Ocean - https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/7/63/105                                                  
		var arcGISOceanUrl    = '';
		if (localMapTile) {
			arcGISOceanUrl  = urlLocal + 'ArcGIS_Ocean/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			arcGISOceanUrl  = 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}';
		}
		var arcGISOceanAttrib = 'ArcGIS Ocean';
		var lyrarcGISOcean    = new L.TileLayer(arcGISOceanUrl, {minZoom: 1, maxZoom: 10, attribution: arcGISOceanAttrib});
