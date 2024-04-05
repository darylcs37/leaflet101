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


