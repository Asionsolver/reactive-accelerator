import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function VideoPlayer({ src, isPlaying }) {
  
  const ref = useRef(null);

 useEffect(() => {
    console.log("I am called");
    if (isPlaying) {
        console.log("Calling video.play() method");
      ref.current.play();
    } else {
        console.log("Calling video.pause() method");
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video src={src} ref={ref} />;
}
