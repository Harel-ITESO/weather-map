"use client";
import Maps from "@/components/Maps";
import Weather from "@/components/Weather";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  //Ubicacion
  const handleLocationSelect = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  //HTML
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {/*Componente del mapa*/}
          <Maps onLocationSelect={handleLocationSelect}/>
        </div>

        {/*Componente del clima*/}
        <div className="flex justify-start items-center">
          {location && (
            <Weather lat={location.lat} lon={location.lng} />
          )}
        </div>
      </div>
    </div>
  );
}
