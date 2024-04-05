		var osmAPIToken = '?apikey=db5ae1f5778a448ca662554581f283c5';
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
		//                    https://c.tile.thunderforest.com/cycle/11/1613/1014.png?apikey=db5ae1f5778a448ca662554581f283c5  
		//                    https://b.tile.thunderforest.com/cycle/6/34/23.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb
		var osmCycleUrl   = '';
		if (localMapTile) {
			osmCycleUrl = urlLocal + 'OSM_Cycle/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmCycleUrl = 'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' + osmAPIToken;
		}
		var osmCycleAttrib = 'OSM Cycle';
		var lyrosmCycle    = new L.TileLayer(osmCycleUrl, {minZoom: 1, maxZoom: 18, attribution: osmCycleAttrib});
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
		// Open Street Maps - Topo
		var osmTopoUrl    = '';
		if (localMapTile) {
			osmTopoUrl    = urlLocal + 'OSM_Topo/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmTopoUrl   = 'https://{s}.tile.opentopomap.org//{z}/{x}/{y}.png';
		}
		var osmTopoAttrib = 'OSM Topo';
		var lyrosmTopo    = new L.TileLayer(osmTopoUrl, {minZoom: 1, maxZoom: 18, attribution: osmTopoAttrib});
		//---------------------------------------------------------------------------
		// Open Street Maps - Transport
		//                    https://c.tile.thunderforest.com/transport/11/1613/1014.png?apikey=db5ae1f5778a448ca662554581f283c5
		var osmTransportUrl    = '';
		if (localMapTile) {
			osmTransportUrl    = urlLocal + 'OSM_Transport/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			osmTransportUrl    = 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png' + osmAPIToken;
		}
		var osmTransportAttrib = 'OSM Transport';
		var lyrosmTransport    = new L.TileLayer(osmTransportUrl, {minZoom: 1, maxZoom: 18, attribution: osmTransportAttrib});

