import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "@/lib/leafletIcon";
import { MapPin } from "lucide-react";

interface Props {
  fullAddress: string;
  lat: number;
  lng: number;
}

export default function MapSection({ fullAddress, lat, lng }: Props) {
  return (
    <section className="mt-6 p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto">
      <h2 className="font-semibold mb-4 text-gray-800 text-xl">Localização</h2>
      <p className="text-gray-600 mb-6">
        <div className="flex items-center gap-2 mb-6 text-gray-700 text-sm md:text-base">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span>Rua Vitorino Nemésio, 90 - 7 andar ctz</span>
        </div>
      </p>

      <div className="h-80 w-full rounded-lg overflow-hidden border border-gray-300 shadow-lg">
        <MapContainer center={[lat, lng]} zoom={15} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>{fullAddress}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
