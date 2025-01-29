"use client";
import { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

//Interfaz del mapa
interface MapsProps {
    onLocationSelect: (lat: number, lng: number) => void;
}

export default function Maps({ onLocationSelect }: MapsProps) {
    //Estado del centro del mapa
    const [mapCenter, setMapCenter] = useState({ lat: 19.432608, lng: -99.133209 });
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

    //Funcion para Leer el evento de click en el mapa
    const handleMapClick = (event: any) => {
        if (event.detail?.latLng) {
            const { lat, lng } = event.detail.latLng;
            setSelectedLocation({ lat, lng });
            onLocationSelect(lat, lng);
        }
    };

    // Función para actualizar la posición del centro cuando el usuario arrastra
    const handleCenterChanged = (event: any) => {
        if (event.detail?.center) {
            const { lat, lng } = event.detail.center;
            setMapCenter({ lat, lng });
        }
    };

    //HTML
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
            <div style={{ height: "400px", width: "100%" }}>
                {/*Propiedades del mapa*/}
                <Map
                    zoom={10}
                    center={mapCenter}
                    onClick={handleMapClick}
                    onIdle={handleCenterChanged}
                    gestureHandling="auto"
                    disableDefaultUI={false}
                    zoomControl={true}
                    mapId={process.env.NEXT_PUBLIC_MAP_ID}
                >
                    {selectedLocation && <Marker position={selectedLocation} />}
                </Map>
            </div>
        </APIProvider>
    );
}