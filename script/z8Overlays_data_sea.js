		//---------------------------------------------------------------------------
		//  Data - GeoJSON - POIs - POINT - Sea Ports
		function prettyPrintSeaPort(feature, layer) {
			if (feature.properties) {
				var popupString = '<div class="popup" style="text-align : left">';

				if (feature.properties.images!=null) {
					var images = feature.properties.images;
					popupString += '<img width="300" src="' + dirImageSea + images[0] + '" />';
				}

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr><td width="40%">PORT_NAME</td><td>' + feature.properties.PORT_NAME + '</td></tr>';
				popupString += '<tr><td>COUNTRY</td><td>' + feature.properties.COUNTRY + '</td></tr>';
				popupString += '<tr><td>COMM_RADIO</td><td>' + feature.properties.COMM_RADIO + '</td></tr>';
				popupString += '<tr><td>COMM_VHF</td><td>' + feature.properties.COMM_VHF + '</td></tr>';
				popupString += '<tr><td>CARGOWHARF</td><td>' + feature.properties.CARGOWHARF + '</td></tr>';
				popupString += '<tr><td>FUEL_OIL</td><td>' + feature.properties.FUEL_OIL + '</td></tr>';
				popupString += '<tr><td>CHART</td><td>' + feature.properties.CHART + '</td></tr>';

				// display coordinates
		      	if (feature.geometry) {
					popupString += '<tr><td>Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				if (feature.properties.URL!=null) {
					popupString += '<tr onclick="openURL(\''+ feature.properties.URL +'\');"><td>URL</td><td style="word-wrap: break-word"><u>' + feature.properties.URL + '</u></td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);
			}
		}

		var lyrgeoSeaPort = L.geoJson(geo_port, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: seaportIcon});
			},

			onEachFeature: prettyPrintSeaPort,
		});

		// Tooltip
		lyrgeoSeaPort.on('click',function(e){
			document.getElementById('data_source').innerHTML = 'Data Source - World Port Index';
		});
		// map.addLayer(lyrgeoSeaPort);

		// clustering of Port points
		var markersSeaPort = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 10 });
		markersSeaPort.addLayer(lyrgeoSeaPort);
//		map.addLayer(markersSeaPort);
