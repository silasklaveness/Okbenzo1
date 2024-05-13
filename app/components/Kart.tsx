"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Kart = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const locationInMap = {
        lat: 59.13220550041372,
        lng: 10.221601665890866,
      };

      //MARKER
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      const marker = new Marker({
        map: map,
        position: locationInMap,
      });
    };
    initializeMap();
  }, []);
  return (
    <div className="h-[400px] w-[400px]" ref={mapRef}>
      Google maps
    </div>
  );
};

export default Kart;
function initializeMap() {
  throw new Error("Function not implemented.");
}
