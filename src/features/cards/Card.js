import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCardById } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector(selectCardById(id)); // store data for a card with the given ID
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
