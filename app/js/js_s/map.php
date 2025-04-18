 
function init() {
    var e = new google.maps.LatLng(48.856614, 2.352222),
        s = $(document).width() > 1024,
        l = {
            backgroundColor: "rgba(43,43,43,1)",
            zoom: 3,
            scrollwheel: !1,
            draggable: s,
            center: e,
            streetViewControl: !0,
            mapTypeControl: !1,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            zoomControl: !0,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: !0,
            streetViewControl: !0,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            styles: [{
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#000000"
                }, {
                    lightness: 40
                }]
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }]
            }]
        },
        o = new google.maps.Map(document.getElementById("map"), l, e),
        t = [
            ['<h6>LONDON <small>England</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 51.507351, -.127758, 1],
            ['<h6>PARIS <small>France</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 48.856614, 2.352222, 2],
            ['<h6>ROME <small>Italy</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 41.902783, 12.496366, 3],
            ['<h6>SYDNEY <small>Australia</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', -33.86882, 151.209296, 4],
            ['<h6>NEW YORK <small>United-states</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 40.712784, -74.005941, 5],
            ['<h6>KINGSTON <small>Jamaica</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 18.017874, -76.809904, 6],
            ['<h6>BERLIN <small>Germany</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 52.520007, 13.404954, 7],
            ['<h6>LOS ANGELES <small>United-states</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 34.052234, -118.243685, 8],
            ['<h6>TOKYO <small>Japan</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 35.689487, 139.691706, 9],
            ['<h6>MOSCOW <small>Russia</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 55.755826, 37.6173, 10],
            ['<h6>DOHA <small>Qatar</small></h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-calendar"></i> Present from Nov 8 – Dec 5</p>', 25.285447, 51.53104, 11]
        ],
        r = new google.maps.InfoWindow,
        a, n, i = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 3,
            fillColor: "white",
            fillOpacity: 1,
            strokeColor: "white"
        };
    for (n = 0; n < t.length; n++) a = new google.maps.Marker({
        position: new google.maps.LatLng(t[n][1], t[n][2]),
        map: o,
        icon: i
    }), google.maps.event.addListener(a, "click", function (e, s) {
        return function () {
            r.setContent(t[s][0]), r.open(o, e)
        }
    }(a, n)), a.addListener("mouseover", function (e, s) {
        return function () {
            r.setContent(t[s][0]), r.open(o, e)
        }
    }(a, n))
}
google.maps.event.addDomListener(window, "load", init), google.maps.event.addDomListener(window, "resize", init);