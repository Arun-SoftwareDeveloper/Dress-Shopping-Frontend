import React, { useState } from "react";

function favFood() {
  const [food, setFood] = useState("Rice");

  return (
    <div>
      <h1>My favorite food is {food}</h1>
      <button onClick={() => setFood("Parotta")}>Parotta</button>
      <button onClick={() => setFood("Chapathi")}>Chapathi</button>
      <button onClick={() => setFood("Poori")}>Poori</button>
      <button onClick={() => setFood("Dosa")}>Dosa</button>
    </div>
  );
}

export default favFood;
