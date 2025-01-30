import { useEffect, useState, RefObject } from "react";

export const useGoogleMaps = (
    mapRef: React.RefObject<HTMLDivElement | null>,
    onLocationSelect: (lat: number, lng: number) => void
) => {
    //Mapa
    const [map, setMap] = useState<google.maps.Map | null>(null);
    //Marcador
    const [marker, setMarker] = useState<google.maps.Marker | null>(null);

    // Inicializar el mapa
    useEffect(() => {
        if (!mapRef.current) return;

        const googleMapsScript = document.createElement("script");
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        googleMapsScript.async = true;
        googleMapsScript.onload = initializeMap;
        document.head.appendChild(googleMapsScript);

        return () => {
            document.head.removeChild(googleMapsScript);
        };
    }, []);

    const initializeMap = () => {
        if (!mapRef.current) return;

        const newMap = new google.maps.Map(mapRef.current, {
            center: { lat: 19.432608, lng: -99.133209 },
            zoom: 10,                           //  zoom default
            gestureHandling: "greedy",          //  Permite mover mapa y hacer zoom
            disableDefaultUI: false,            //  Intefaz
            zoomControl: true,                  //  controles de zoom
        });

        setMap(newMap);

        // Funcion para Añadir listener al hacer clic en el mapa
        newMap.addListener("click", (event: google.maps.MapMouseEvent) => {
            if (event.latLng) {
                //latitud y Longitud
                const lat = event.latLng.lat();
                const lng = event.latLng.lng();

                // limpiar marcador si ya existe 1
                if (marker) {
                    marker.setMap(null);
                }

                // Añadir marcador
                const newMarker = new google.maps.Marker({
                    position: { lat, lng },
                    map: newMap,
                });

                setMarker(newMarker);
                onLocationSelect(lat, lng);
            }
        });
    };

    // Función para buscar una ubicacion especifica
    const searchLocation = (query: string) => {
        if (!map) return;

        const service = new google.maps.places.PlacesService(map);
        service.textSearch({ query }, (results, status) => {

            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                const location = results[0].geometry?.location;

                if (location) {
                    map.setCenter(location);

                    if (marker) {
                        marker.setMap(null);
                    }

                    const newMarker = new google.maps.Marker({
                        position: location,
                        map: map,
                    });

                    setMarker(newMarker);
                    onLocationSelect(location.lat(), location.lng());
                }
            }
        });
    };

    return { searchLocation };
};