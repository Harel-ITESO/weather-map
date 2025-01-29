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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/*Componente del mapa*/}
          <Maps onLocationSelect={handleLocationSelect}/>
        </div>

        {/*Componente del clima*/}
        <div>
          {location && (
            <Weather lat={location.lat} lon={location.lng} />
          )}
        </div>
      </div>
    </div>
  );
}
