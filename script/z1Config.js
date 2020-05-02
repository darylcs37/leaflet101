	var urlKML       = 'http://192.168.123.100:8080'; // '127.0.0.1:8080';
	var urlLocal     = '../data/';
	var mapCenterLat = 1.35119; // 39.72409; // 1.36835;    // 3.44278;
	var mapCenterLon = 103.81531; // -104.98535; // 103.76999;  // 101.92421;
	var mapZoom      = 12;
	var localMapTile = false;

	var dirFloodCam   = 'data/geojson/flood_cam/';
	var dirTrafficCam = 'data/geojson/traffic_cam/';
	var dirPanoromio  = 'data/geojson/panoromio/';
	var dirImageAir   = 'data/geojson/images_air/';
	var dirImageSea   = 'data/geojson/images_sea/';

	var dirHADRImage  = 'data/geojson/hadr_images/';

	/* map tile keys -  */
	// https://3.base.maps.api.here.com/maptile/2.1/maptile/844fb05a40/normal.day/7/101/62/512/png8?app_id=VgTVFr1a0ft1qGcLCVJ6&app_code=LJXqQ8ErW71UsRUK3R33Ow&lg=eng&ppi=72&pview=DEF
	var keyNokia        = '844fb05a40'; // change everyday
