// Reference:
// 1. https://www.wunderground.com/wundermap
	  //---------------------------------------------------------------------------
		// OpenWeather - Cloud e.g. https://c.sat.owm.io/vane/2.0/weather/CL/3/0/5?appid=9de243494c0b295cca9337e1e96b00e2
		// WindSpeed e.g. https://c.sat.owm.io/vane/2.0/weather/WS10/3/5/6?appid=9de243494c0b295cca9337e1e96b00e2
		var weatherCloudUrl    = '';
		if (localMapTile) {
			weatherCloudUrl    = urlLocal + 'Weather Cloud/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			weatherCloudUrl    = 'http://undefined.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png';
			weatherCloudUrl    = 'https://c.sat.owm.io/vane/2.0/weather/CL/{z}/{x}/{y}?appid=9de243494c0b295cca9337e1e96b00e2';
		}
		var weatherCloudAttrib = 'http://openweathermap.org/';
		var lyrweatherCloud    = new L.TileLayer(weatherCloudUrl, {minZoom: 4, maxZoom: 10, attribution: weatherCloudAttrib});
		//---------------------------------------------------------------------------
		// OpenWeather - Pressure e.g. https://a.sat.owm.io/vane/2.0/weather/APM/3/7/6?appid=9de243494c0b295cca9337e1e96b00e2
		var weatherPressureUrl    = '';
		if (localMapTile) {
			weatherPressureUrl    = urlLocal + 'Weather Pressure/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			weatherPressureUrl    = 'http://undefined.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png';
			weatherPressureUrl    = 'https://a.sat.owm.io/vane/2.0/weather/APM/{z}/{x}/{y}?appid=9de243494c0b295cca9337e1e96b00e2';
		}
		var weatherPressureAttrib = 'http://openweathermap.org/';
		var lyrweatherPressure    = new L.TileLayer(weatherPressureUrl, {minZoom: 4, maxZoom: 10, attribution: weatherPressureAttrib });
		//---------------------------------------------------------------------------
		// OpenWeather - Precipitation e.g. https://g.sat.owm.io/vane/2.0/weather/PA0/3/0/6?appid=9de243494c0b295cca9337e1e96b00e2&palette=0.9:00fa96;1.8:00fa64;2.4:00e600;3:00d300;4.5:00ba00;6:00a000;9:008c00;10.5:007800;11.1:006400;12:005a00;15:005000;18:004600;21:eff800;24:f3eb00;27:fadc00;30:ffcd00;36:ff9600;42:ff5b00;48:ff0000;72:ff0064;96:ff0092;192:aa2bc3;300:7609a4&opacity=0.8
		var weatherPrecipitationUrl    = '';
		if (localMapTile) {
			weatherPrecipitationUrl = urlLocal + 'Weather Precipitation/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			weatherPrecipitationUrl = 'https://g.sat.owm.io/vane/2.0/weather/PA0/{z}/{x}/{y}?appid=9de243494c0b295cca9337e1e96b00e2&palette=0.9:00fa96;1.8:00fa64;2.4:00e600;3:00d300;4.5:00ba00;6:00a000;9:008c00;10.5:007800;11.1:006400;12:005a00;15:005000;18:004600;21:eff800;24:f3eb00;27:fadc00;30:ffcd00;36:ff9600;42:ff5b00;48:ff0000;72:ff0064;96:ff0092;192:aa2bc3;300:7609a4&opacity=0.8';
		}
		var weatherPrecipitationAttrib = 'openweathermap';
		var lyrweatherPrecipitation    = new L.TileLayer(weatherPrecipitationUrl, {minZoom: 4, maxZoom: 10, attribution: weatherPrecipitationAttrib});


		//---------------------------------------------------------------------------
		// Weather.com - Precipitation e.g. https://g.sat.owm.io/vane/2.0/weather/PA0/3/0/6?appid=9de243494c0b295cca9337e1e96b00e2&palette=0.9:00fa96;1.8:00fa64;2.4:00e600;3:00d300;4.5:00ba00;6:00a000;9:008c00;10.5:007800;11.1:006400;12:005a00;15:005000;18:004600;21:eff800;24:f3eb00;27:fadc00;30:ffcd00;36:ff9600;42:ff5b00;48:ff0000;72:ff0064;96:ff0092;192:aa2bc3;300:7609a4&opacity=0.8
		var weatherSatUrl    = '';
		if (localMapTile) {
			weatherSatUrl = urlLocal + 'Weather Precipitation/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			weatherSatUrl = 'https://api1.weather.com/v3/TileServer/tile?product=thermalSat&ts=1588214700&xyz={x}:{y}:{z}&apiKey=6532d6454b8aa370768e63d6ba5a832e';
		}
		var weatherSatAttrib = 'weather.com';
		var lyrweatherSat    = new L.TileLayer(weatherSatUrl, {minZoom: 4, maxZoom: 10, attribution: weatherSatAttrib});


		//---------------------------------------------------------------------------
		<!-- oneMap.SG https://maps-c.onemap.sg/v3/Default_HD/17/103344/65048.png -->
		var onemapsgUrl       = '';
		if (localMapTile) {
			onemapsgUrl       = urlLocal + 'OneMap.sg/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			onemapsgUrl       = 'https://maps-c.onemap.sg/v3/Default_HD/{z}/{x}/{y}.png';
		}

		var onemapsgAttrib    = 'OneMap.SG';
		var lyrOneMap = new L.TileLayer(onemapsgUrl, {minZoom: 12, maxZoom: 18, attribution: onemapsgAttrib});

		//---------------------------------------------------------------------------
		<!-- oneMap.SG - Color https://maps-b.onemap.sg/v3/Original_HD/19/413384/260189.png -->
		var onemapsgColorUrl       = '';
		if (localMapTile) {
			onemapsgColorUrl       = urlLocal + 'OneMap.sg_Color/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			onemapsgColorUrl       = 'https://maps-b.onemap.sg/v3/Original_HD/{z}/{x}/{y}.png';
		}

		var onemapsgColorAttrib    = 'OneMap.SG - Color';
		var lyrOneMapColor = new L.TileLayer(onemapsgColorUrl, {minZoom: 12, maxZoom: 18, attribution: onemapsgColorAttrib});


		//---------------------------------------------------------------------------
		<!-- oneMap.SG - Satellite https://maps-b.onemap.sg/v3/Satellite/14/12916/8133.png -->
		var onemapsgSatelliteUrl       = '';
		if (localMapTile) {
			onemapsgSatelliteUrl = urlLocal + 'OneMap.sg_Satellite/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			onemapsgSatelliteUrl = 'https://maps-b.onemap.sg/v3/Satellite/{z}/{x}/{y}.png';
		}

		var onemapsgSatelliteAttrib    = 'OneMap.SG - Satellite';
		var lyrOneMapSatellite = new L.TileLayer(onemapsgSatelliteUrl, {minZoom: 12, maxZoom: 19, attribution: onemapsgSatelliteAttrib});

		//---------------------------------------------------------------------------
		<!-- URA - Landuse -->
		var uralanduseUrl       = '';
		if (localMapTile) {
			uralanduseUrl       = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uralanduseUrl       = 'https://www.ura.gov.sg/ArcGis/rest/services/maps2/Updated_Gaz_MP14_Land_Use_Maps/MapServer/tile/{z}/{y}/{x}';
		}

		var uralanduseAttrib    = 'URA.sg - Landuse';
		var lyrURALandUse = new L.TileLayer(uralanduseUrl, {minZoom: 12, maxZoom: 17, attribution: uralanduseAttrib});

		//---------------------------------------------------------------------------
		<!-- URA - Parks & Waterbodies -->
		var urapwUrl    = '';
		if (localMapTile) {
			urapwUrl  = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			urapwUrl  = 'https://www.ura.gov.sg/ArcGis/rest/services/maps2/MP14_PW_gaz_maps/MapServer/tile/{z}/{y}/{x}';
		}

		var uraPWAttrib = 'URA.sg - Parks & Waterbodies';
		var lyrURAPW    = new L.TileLayer(urapwUrl, {minZoom: 12, maxZoom: 17, attribution: uraPWAttrib});
		//---------------------------------------------------------------------------
		<!-- URA - Landed Housing ->
		var uralhaUrl   = '';
		if (localMapTile) {
			uralhaUrl = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uralhaUrl = 'https://www.ura.gov.sg/ArcGis/rest/services/maps2/MP14_LHA_gaz_maps/MapServer/tile/{z}/{y}/{x}';
		}

		var uraLHAttrib = 'URA.sg - Landed Housing';
		var lyrURALHA   = new L.TileLayer(uralhaUrl, {minZoom: 12, maxZoom: 17, attribution: uraLHAttrib});

		//---------------------------------------------------------------------------
		<!-- URA - Activity -->
		var uraaguUrl   = '';
		if (localMapTile) {
			uraaguUrl = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uraaguUrl = 'https://www.ura.gov.sg/ArcGis/rest/services/maps2/MP14_AGU_gaz_maps/MapServer/tile/{z}/{y}/{x}';
		}

		var uraAGUttrib = 'URA.sg - Activity';
		var lyrURAAGU   = new L.TileLayer(uraaguUrl, {minZoom: 12, maxZoom: 17, attribution: uraAGUttrib});

		//---------------------------------------------------------------------------
		<!-- URA - Conservation -->
		var uraconsvUrl   = '';
		if (localMapTile) {
			uraconsvUrl = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uraconsvUrl = 'https://www.ura.gov.sg/ArcGis/rest/services/maps2/MP14_SBUD_gaz_maps/MapServer/tile/{z}/{y}/{x}';
		}

		var uraConsvttrib  = 'URA.sg - Conversation';
		var lyrURAConserve = new L.TileLayer(uraconsvUrl, {minZoom: 12, maxZoom: 17, attribution: uraConsvttrib});


		//---------------------------------------------------------------------------
		<!-- URA - Height -->
		var uraheightUrl       = '';
		if (localMapTile) {
			uraheightUrl       = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uraheightUrl       = 'https://www.ura.gov.sg/ArcGis/rest/services/maps2/MP14_BLDG_HT_gaz_maps/MapServer/tile/{z}/{y}/{x}';
		}

		var uraheightAttrib    = 'URA.sg - Bldg Height';
		var lyrURAHeight = new L.TileLayer(uraheightUrl, {minZoom: 12, maxZoom: 17, attribution: uraheightAttrib});
		//---------------------------------------------------------------------------
		// Strava - Zoom 12 onwards require sign-in
		var stravaUrl = '';

		if (localMapTile) {
			stravaUrl    = urlLocal + 'strava/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			stravaUrl    = 'https://heatmap-external-a.strava.com/tiles/all/blue/{z}/{x}/{y}.png?v=19'; // https://heatmap-external-b.strava.com/tiles/all/hot/{z}/{x}/{y}.png?v=19';
		}

		var stravaAttrib = 'Strava';
		var lyrStrava    = new L.TileLayer(stravaUrl, {minZoom: 1, maxZoom: 11, attribution: stravaAttrib});
		//---------------------------------------------------------------------------
		// Population Density
		var lyrPopulation = L.esri.dynamicMapLayer({
			url: 'http://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/',
			layers: [16],
			opacity: 0.5,
		}); // .addTo(map);
		//---------------------------------------------------------------------------
		var overlayMaps = {
					"OSM - Sea"               : lyrosmSea,

					"OneMap.sg"               : lyrOneMap,
					"OneMap.sg (Color)"       : lyrOneMapColor,
					"OneMap.sg (Satellite)"   : lyrOneMapSatellite,
					"URA - Landuse"           : lyrURALandUse,
					"URA - Parks & Waterbody" : lyrURAPW,
					"URA - Land Housing"      : lyrURALHA,
					"URA - Activity Use"      : lyrURAAGU,
					"URA - Conservation"      : lyrURAConserve,
					"URA - Bldg Height"       : lyrURAHeight,

					"Population Density"      : lyrPopulation,
          "Strava"                  : lyrStrava,

 					"Weather - Cloud"         : lyrweatherCloud,
 					"Weather - Precipitation" : lyrweatherPrecipitation,
					"Weather - Satellite"     : lyrweatherSat,
// 					"Weather - Pressure"      : lyrweatherPressure,

					"Air - Runway_L (ICAO)"   : lyrgeoRunway,
					"Air - Tracks"            : groupAirDynamic_P,

					"Sea - Port_P"            : markersSeaPort,
					"Land - SG OneService"    : markersSGOneService,
					"Land - SG Outline"       : lyrgeoSGOutline,
		}
