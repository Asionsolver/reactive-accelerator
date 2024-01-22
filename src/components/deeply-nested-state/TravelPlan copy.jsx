import { useState } from "react";
import { initialTravelPlan } from "../../data/place/places-normalization";
import PlaceTree from "./PlaceTree";

export default function NormalizeTravelPlan() {
  const [plan, setPlane] = useState(initialTravelPlan);

  const planets = plan.childPlaces;
  console.log(planets);
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
