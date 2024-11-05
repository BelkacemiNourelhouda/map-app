import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const center = [36.5236, 2.8618];  
const car1=[36.5266, 2.8618];
const car2=[36.5266, 2.8628];
const car3=[36.5266, 2.8608];
const car4=[36.5216, 2.8618];
const car5=[36.5216, 2.8608];
const car6=[36.5230, 2.8610];

const carIcon = new L.Icon({
    iconUrl: '/caricon.png', 
    iconSize: [40, 40], 
    iconAnchor: [20, 40], 
  });
export default function Mapage() {
  return (
    <div className="mapage-container" style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div className="sidebar" style={{ width: '200px', height: '560px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h3>Cars</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {Array.from({ length: 9 }, (_, i) => (
            <li key={i} style={{ margin: '10px 0' }}>
              Car {i + 1}, Driver {i+1}
            </li>
          ))}
        </ul>
      </div>

      {/* Map Container */}
      <div className="map-content" style={{ height: '560px', width: '100%' }}>
        <MapContainer center={center} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>Your location</Popup>
          </Marker>
          <Marker position={car1} icon={carIcon}>
            <Popup>driver1</Popup>
          </Marker>
          <Marker position={car2} icon={carIcon}>
            <Popup>driver2</Popup>
          </Marker>
          <Marker position={car3} icon={carIcon}>
            <Popup>driver3</Popup>
          </Marker>
          <Marker position={car4} icon={carIcon}>
            <Popup>driver4</Popup>
          </Marker>
          <Marker position={car5} icon={carIcon}>
            <Popup>driver5</Popup>
          </Marker>
          <Marker position={car6} icon={carIcon}>
            <Popup>driver6</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
