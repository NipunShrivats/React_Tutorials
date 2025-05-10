import React, { useEffect, useState } from "react";

export default function Cleanup() {
  const [subs, setSubs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubs((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <h1>My Subscribers on Youtube</h1>
        <span>{subs}</span>
        <div>
          <p>
            Subscribers <br />
            Realtime Counter
          </p>
        </div>
      </div>
    </>
  );
}
