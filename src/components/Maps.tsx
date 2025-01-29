"use client";
import { useEffect, useRef, useState } from "react";
import { useGoogleMaps } from "../services/googleMaps";

interface CustomMapProps {
    onLocationSelect: (lat: number, lng: number) => void;
}

export default function CustomMap({ onLocationSelect }: CustomMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const { searchLocation } = useGoogleMaps(mapRef, onLocationSelect);

    // Manejar la búsqueda de ubicación
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        searchLocation(searchQuery);
    };

    //HTML
    return (
        <div>
            {/* Input para buscar ubicación */}
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar ubicación..."
                    className="p-2 border border-gray-300 rounded-lg w-full"
                />
                <button
                    type="submit"
                    className="mt-2 p-2 bg-blue-500 text-white rounded-lg w-full"
                >
                    Buscar
                </button>
            </form>

            {/* Mapa */}
            <div ref={mapRef} style={{ height: "400px", width: "100%" }} />
        </div>
    );
}