'use client';
 
import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import NET from 'vanta/dist/vanta.net.min';
 
export default function Default() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
 
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        }),
      );
    }
  }, [vantaEffect]);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js" />
      <div ref={myRef}>Foreground content goes here</div>
    </>
  );
}