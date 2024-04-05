		//---------------------------------------------------------------------------
		// Data - GeoJSON - Air - POLYGON
		function prettyPrintRunway(feature, layer) {
			if (feature.properties) {
				if (feature.properties.LENGTH.length>0) {
					var popupString = '<div class="popup" style="text-align : left">';

					if (feature.properties.images!=null) {
						var images = feature.properties.images;
						popupString += '<img width="300" src="' + dirImageAir + images[0] + '" />';
					}

					popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';

//					var popupString = '<div class="popup" style="text-align : left; width: 250px;"><table width="100%" border="1" cellpadding="1" cellspacing="0">';
					popupString += '<tr><td>ARPT ID</td><td>' + feature.properties.ARPT_IDENT + '</td></tr>';
					popupString += '<tr><td>Surface Type</td><td>' + feature.properties.SURFACE + '</td></tr>';
					popupString += '<tr><td>Runway ID</td><td>' + feature.properties.RWY + '</td></tr>';
					popupString += '<tr><td>Length (in feet)</td><td>' + feature.properties.LENGTH + '</td></tr>';
					popupString += '<tr><td>Width (in feet)</td><td>' + feature.properties.RWY_WIDTH+ '</td></tr>';
					popupString += '<tr><td>Heading</td><td>' + feature.properties.LOW_HDG + '</td></tr>';

					// display first coordinate of runway polygon
					popupString += '<tr><td>Coordinates</td><td>' + feature.geometry.coordinates[0][0] + '</td></tr>';

					if (feature.properties.NOTAM!=null) {
						popupString += '<tr onclick="openURL(\''+ feature.properties.NOTAM +'\');"><td>NOTAM</td><td><u>Click to show</u></td></tr>';
					}

					popupString += '</table></div>';

					layer.bindPopup(popupString);
				}
				else {
					var popupString = '<div class="popup" style="text-align : left"><table border="1" cellpadding="1" cellspacing="0">';
					popupString += '<tr><td>FID</td><td>' + feature.properties.FID+ '</td></tr>';
					popupString += '<tr><td>CYCLE_DATE</td><td>' + feature.properties.CYCLE_DATE+ '</td></tr>';
					popupString += '</table></div>';

					layer.bindPopup(popupString);
				}
			}
		}

		var lyrgeoRunway = L.geoJson(airRunway, {
			color: "#ff3333",
			"weight": 4,
			opacity: 0.8,

			onEachFeature: prettyPrintRunway,
		}).addTo(map);

		// Tooltip
		lyrgeoRunway.on('click',function(e){
			document.getElementById('data_source').innerHTML = 'Data Source - International Civil Aviation Organization';
		});
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
//  Dynamic Aircraft Tracks - FlightRadar24 (include aircraft images)
//---------------------------------------------------------------------------
function prettyPrintAircraft(feature, layer) {
			if (feature.properties) {

		var popupString = '<div class="popup" style="text-align : left">';

		popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
		popupString += '<tr><td colspan="2" style="text-align:center"><img src="./data/images/' + feature.properties.AIRCRAFTTYPE + '.png" with="150"/></td></tr>';
		popupString += '<tr><td width="40%">Callsign/Flight No.</td><td width="70%">' + feature.properties.CALLSIGN +' ('+ feature.properties.FLIGHT + ')</td></tr>';
		popupString += '<tr><td>Heading</td><td>' + feature.properties.HEADING + '</td></tr>';
		popupString += '<tr><td>Aircraft Type</td><td>' + feature.properties.AIRCRAFTTYPE + '</td></tr>';
		popupString += '<tr><td>Radar</td><td>' + feature.properties.RADAR + '</td></tr>';
		popupString += '<tr><td>Speed (in Knots)</td><td>' + feature.properties.SPEEDINKNOTS + '</td></tr>';
		popupString += '<tr><td>Start-End</td><td>' + feature.properties.LOCATIONSTART +'->'+ feature.properties.LOCATIONEND +'</td></tr>';

		/* display coordinates */
				if (feature.geometry) {
			popupString += '<tr><td width="40%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
		}

		popupString += '</table></div>';

		layer.bindPopup(popupString);

	}
}

var lyrgeoAirDynamic = L.geoJson(geoAirDynamic_P, {
		pointToLayer: function (feature, latlng) {
			var rotAngle = feature.properties.HEADING +'deg';
//				return L.marker(latlng, {icon: aircraftIcon});
			return L.marker(latlng, {icon: L.divIcon({
					className: 'dummy', // remove white square
html:'<img src="images/icon_aircraft.png" style="-webkit-transform: rotate('+ rotAngle +'); -moz-transform:rotate('+ rotAngle +');" />'}) } );

	},

	onEachFeature: prettyPrintAircraft,
});
var groupAirDynamic_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
groupAirDynamic_P.addLayer(lyrgeoAirDynamic);
