
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Create iframe for Google Maps
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-122.66482!3d37.77493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus";
    iframe.width = "100%";
    iframe.height = "256";
    iframe.style.border = "0";
    iframe.style.borderRadius = "8px";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current && iframe.parentNode) {
        mapRef.current.removeChild(iframe);
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-64 rounded-lg shadow-lg" />;
};

export default Map;
