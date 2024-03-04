import { useEffect, useRef } from "react";

const useScrollToElementView = <T extends HTMLElement>() => {
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", inline: "end" });
  });

  return scrollRef;
};

export default useScrollToElementView;