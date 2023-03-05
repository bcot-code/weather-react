import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

export default function HeaderLoad(props) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <RingLoader color="#36d7b7" loading size={20} speedMultiplier={1} />
    </div>
  );
}
