	//---------------------------------------------------------------------------
	// outline_A
	var lyrgeoSGOutline = L.geoJson(landSGOutline, {
		color: "#d95f0e",
		"weight": 3,
		opacity: 0.4,
	});
// .addTo(map);
//	map.addLayer(lyrgeoSGOutline);

	// Tooltip
	lyrgeoSGOutline.on('click',function(e){
		document.getElementById('data_source').innerHTML = 'Data Source - SLA OneMap.sg';
	});

	//---------------------------------------------------------------------------
	// SG MSO OneService incidents_P
	//---------------------------------------------------------------------------
	//  Data - GeoJSON - POINT - OneService
	function prettyPrintOneService(feature, layer) {
		if (feature.properties) {
			var popupString = '<div class="popup" style="text-align : left">';

			if (feature.properties.images!=null) {
				var images = feature.properties.images;
				popupString += '<img width="300" src="' + dirImageSea + images[0] + '" />';
			}

			popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
			// popupString += '<table width="100%" border="1" cellpadding="1" cellspacing="0">';
			popupString += '<tr><td width="40%">ID</td><td>' + feature.properties.ID + '</td></tr>';
			popupString += '<tr><td>NAME</td><td>' + feature.properties.name + '</td></tr>';
			popupString += '<tr><td>CATEGORY</td><td>' + feature.properties.Category +'-'+ feature.properties.CategorySub+ '</td></tr>';
			popupString += '<tr><td>ADDRESS</td><td>' + feature.properties.StreetNo +', '+ feature.properties.StreetName +' S('+ feature.properties.PostalCode + ')</td></tr>';
			popupString += '<tr><td>CREATEDATETIME</td><td>' + feature.properties.CreateDateTime + '</td></tr>';

			// display coordinates
		      	if (feature.geometry) {
				popupString += '<tr><td>Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
			}

			popupString += '</table></div>';

			layer.bindPopup(popupString);
		}
	}

	var lyrgeoSGOneService = L.geoJson(landSGOneService, {
			pointToLayer: function (feature, latlng) {
				switch (feature.properties.Category) {
					case "Animals": return L.marker(latlng, {icon: msoAnimalsIcon});
					case "Cleanliness": return L.marker(latlng, {icon: msoCleanlinessIcon});
					case "Construction Sites": return L.marker(latlng, {icon: msoConstructionIcon});

					case "Drains and Sewers": return L.marker(latlng, {icon: msoDrainsIcon});
					case "Drinking Water": return L.marker(latlng, {icon: msoDrinkingIcon});

					case "Pests": return L.marker(latlng, {icon: msoPestsIcon});
					case "Roads and Footpaths": return L.marker(latlng, {icon: msoRoadsIcon});
					case "Road Incidents": return L.marker(latlng, {icon: msoRoadsIcon});
					case "Trees and Greenery": return L.marker(latlng, {icon: msoTreesIcon});

					default : return L.marker(latlng, {icon: seaportIcon});
				}
		},

		onEachFeature: prettyPrintOneService,
	});

	// Tooltip
	lyrgeoSGOneService.on('click',function(e){
		document.getElementById('data_source').innerHTML = 'Data Source - SG MSO OneService';
	});

	// clustering of OneService Incident points
	var markersSGOneService = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 10 });
	markersSGOneService.addLayer(lyrgeoSGOneService);
//	map.addLayer(markersSGOneService);
