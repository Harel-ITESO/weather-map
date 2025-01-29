"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Home() {
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY || ""}>
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: 20.675351823800902, lng: -103.35586036963122 }}
        onClick={(e) => {
          console.log(e.detail);
        }}
      ></Map>
    </APIProvider>
  );
}
