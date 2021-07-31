const map = new L.Map("my_map", {
	center: [35.422648, 136.143663],
	zoom: 15
});
const baseLayer = new L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
	attribution: "国土地理院"
});
baseLayer.addTo(map);
const mousePositionControl = new MousePosition({
	position: "topright",
});
mousePositionControl.addTo(map);