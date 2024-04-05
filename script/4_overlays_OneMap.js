// Reference:
// 1. https://www.wunderground.com/wundermap

		//---------------------------------------------------------------------------
		<!-- oneMap.SG https://maps-c.onemap.sg/v3/Default_HD/17/103344/65048.png -->
		var onemapsgUrl       = '';
		if (localMapTile) {
			onemapsgUrl       = urlLocal + 'OneMap.sg/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			onemapsgUrl       = 'https://maps-c.onemap.sg/v3/Default_HD/{z}/{x}/{y}.png';
			onemapsgUrl       = 'https://www.onemap.gov.sg/maps/tiles/Default_HD/{z}/{x}/{y}.png';
		}

		var onemapsgAttrib    = 'OneMap.SG';
		var lyrOneMap = new L.TileLayer(onemapsgUrl, {minZoom: 12, maxZoom: 18, attribution: onemapsgAttrib});

		//---------------------------------------------------------------------------
		// https://maps-c.onemap.sg/v3/Default/12/3234/2033.png
		<!-- oneMap.SG - Color https://maps-b.onemap.sg/v3/Original_HD/19/413384/260189.png -->
		var onemapsgColorUrl       = '';
		if (localMapTile) {
			onemapsgColorUrl       = urlLocal + 'OneMap.sg_Color/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			onemapsgColorUrl       = 'https://maps-c.onemap.sg/v3/Default/{z}/{x}/{y}.png';
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
			onemapsgSatelliteUrl = 'https://www.onemap.gov.sg/maps/tiles/OrthoJPG/{z}/{x}/{y}.jpg';
		}

		var onemapsgSatelliteAttrib    = 'OneMap.SG - Satellite';
		var lyrOneMapSatellite = new L.TileLayer(onemapsgSatelliteUrl, {minZoom: 12, maxZoom: 19, attribution: onemapsgSatelliteAttrib});

		//---------------------------------------------------------------------------
		// URA Landuse = https://maps.ura.gov.sg/arcgis/rest/services/MP19/Updated_Landuse_gaz/MapServer/tile/15/16262/25840
		<!-- URA - Landuse -->
		var uralanduseUrl       = '';
		if (localMapTile) {
			uralanduseUrl       = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uralanduseUrl       = 'https://maps.ura.gov.sg/arcgis/rest/services/MP19/Updated_Landuse_gaz/MapServer/tile/{z}/{y}/{x}';
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
		// URA Landlot - https://maps-b.onemap.sg/v3/LandLot/14/12912/8128.png
		var uraLandlotUrl   = '';
		if (localMapTile) {
			uraLandlotUrl = urlLocal + 'URAMap.sg/Landuse/{z}/{y}/{z}_y{y}_x{x}.jpg';
		}
		else {
			uraLandlotUrl = 'https://maps-b.onemap.sg/v3/LandLot/{z}/{x}/{y}.png';
			uraLandlotUrl = 'https://www.onemap.gov.sg/maps/tiles/LandLot/{z}/{x}/{y}.png';
		}

		var uraConsvttrib  = 'URA.sg - Land Lot';
		var lyrURALandlot = new L.TileLayer(uraLandlotUrl, {minZoom: 12, maxZoom: 17, attribution: uraConsvttrib});


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
