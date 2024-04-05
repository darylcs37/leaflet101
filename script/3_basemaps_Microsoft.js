  var BingLayer = L.TileLayer.extend({
    getTileUrl: function (tilePoint) {
      //        this._adjustTilePoint(tilePoint);
      return L.Util.template(this._url, {
        s: this._getSubdomain(tilePoint),
        q: this._quadKey(tilePoint.x, tilePoint.y, this._getZoomForUrl())
      });
    },

    _quadKey: function (x, y, z) {
      var quadKey = [];
      for (var i = z; i > 0; i--) {
        var digit = '0';
        var mask = 1 << (i - 1);
        if ((x & mask) != 0) {
          digit++;
        }
        if ((y & mask) != 0) {
          digit++;
          digit++;
        }
        quadKey.push(digit);
      }
      // console.log(quadKey);
      return quadKey.join('');
    }
  });

  //---------------------------------------------------------------------------
  // Map Layers
  //---------------------------------------------------------------------------
  // Bing Aerial
  var bingAerialUrl = '';
  if (localMapTile) {
    bingAerialUrl    = urlLocal + 'Bing_Aerial/{z}/{y}/{z}_y{y}_x{x}.jpg';
  }
  else {
    bingAerialUrl    = 'http://t{s}.tiles.virtualearth.net/tiles/a{q}.jpeg?g=2868';
    bingAerialUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=A,G,RL&shading=hill&n=z&og=746&c4w=1&src=h';
    bingAerialUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=A,G,RL&shading=hill&n=z&og=852&c4w=1&src=h';
    bingAerialUrl    = 'https://t.ssl.ak.tiles.virtualearth.net/tiles/a{q}.jpeg?g=10510&n=z&prx=1';
  }
  var bingAerialAttrib = 'Microsoft Bing Aerial';
  var lyrBingAerial = new BingLayer(bingAerialUrl, {subdomains: ['0', '1', '2', '3', '4'],attribution: bingAerialAttrib});
  //---------------------------------------------------------------------------
  // Bing Hybrid
  var bingHybridUrl = '';
  if (localMapTile) {
    bingHybridUrl    = urlLocal + 'Bing_Hybrid/{z}/{y}/{z}_y{y}_x{x}.jpg';
  }
  else {
    bingHybridUrl    = 'http://t{s}.tiles.virtualearth.net/tiles/h{q}.jpeg?g=2868';
    bingHybridUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=A,G,RL&shading=t&n=z&og=1429&o=webp';
    //                                      http://ak.t0.tiles.virtualearth.net/tiles/a13320.jpeg?g=2868&n=z
  }
  var bingHybridAttrib = 'Microsoft Bing Hybrid';
  var lyrBingHybrid = new BingLayer(bingHybridUrl, {subdomains: ['0', '1', '2', '3', '4'], attribution: bingHybridAttrib});
  //---------------------------------------------------------------------------
  // Bing Road
  var bingRoadUrl = '';
  if (localMapTile) {
    bingRoadUrl    = urlLocal + 'Bing_Road/{z}/{y}/{z}_y{y}_x{x}.jpg';
  }
  else {
    bingRoadUrl    = 'http://ak.dynamic.t{s}.tiles.virtualearth.net/comp/ch/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill&og=57&n=z';
    bingRoadUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=G,BX,RL&shading=hill&n=z&og=852&c4w=1&cstl=vb&src=h';
  }
  var bingRoadAttrib = 'Microsoft Bing Road';
  var lyrBingRoad = new BingLayer(bingRoadUrl, {subdomains: ['0', '1', '2', '3', '4'], attribution: bingRoadAttrib});

  //---------------------------------------------------------------------------
  // Bing DarkRoad (Dark)
  var bingRoadDarkUrl = '';
  if (localMapTile) {
    bingRoadDarkUrl    = urlLocal + 'Bing_RoadDark/{z}/{y}/{z}_y{y}_x{x}.jpg';
  }
  else {
    bingRoadDarkUrl    = 'https://t.ssl.ak.dynamic.tiles.virtualearth.net/comp/ch/{q}?mkt=en-SG&it=G,LC,BX,RL&n=z&og=1453&cstl=vbd';
  }
  var bingRoadDarkAttrib = 'Microsoft Bing Road (Dark)';
  var lyrBingDarkRoad = new BingLayer(bingRoadDarkUrl, {subdomains: ['0', '1', '2', '3', '4'], attribution: bingRoadDarkAttrib});
