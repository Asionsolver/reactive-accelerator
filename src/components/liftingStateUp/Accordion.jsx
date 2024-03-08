import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <>
      <h2>Learn with Ashis</h2>
      <Panel
        title="Paid Course"
        isActive={activeIndex === 0 && true}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstans largest
        city. From 1929 to 1997, it was its capital city.With a population of
        about 2 million, Almaty is Kazakhstans largest city. From 1929 to 1997,
        it was its capital city.With a population of about 2 million, Almaty is
        Kazakhstans largest city. From 1929 to 1997, it was its capital
        city.With a population of about 2 million, Almaty is Kazakhstans largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel
        title="Free Course"
        isActive={activeIndex === 1 && true}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from алма, the Kazakh word for apple and is often
        translated as full of apples. In fact, the region surrounding Almaty is
        thought to be the ancestral home of the apple, and the wild Malus
        sieversiiis considered a likely candidate for the ancestor of the modern
        domestic apple.With a population of about 2 million, Almaty is
        Kazakhstans largest city. From 1929 to 1997, it was its capital
        city.With a population of about 2 million, Almaty is Kazakhstans largest
        city. From 1929 to 1997, it was its capital city.With a population of
        about 2 million, Almaty is Kazakhstans largest city. From 1929 to 1997,
        it was its capital city.
      </Panel>

      <Panel
        title="Unlimited Course"
        isActive={activeIndex === 2 && true}
        onShow={() => setActiveIndex(2)}
      >
        The name comes from алма, the Kazakh word for apple and is often
        translated as full of apples. In fact, the region surrounding Almaty is
        thought to be the ancestral home of the apple, and the wild Malus
        sieversiiis considered a likely candidate for the ancestor of the modern
        domestic apple.With a population of about 2 million, Almaty is
        Kazakhstans largest city. From 1929 to 1997, it was its capital
        city.With a population of about 2 million, Almaty is Kazakhstans largest
        city. From 1929 to 1997, it was its capital city.With a population of
        about 2 million, Almaty is Kazakhstans largest city. From 1929 to 1997,
        it was its capital city.
      </Panel>
    </>
  );
}
