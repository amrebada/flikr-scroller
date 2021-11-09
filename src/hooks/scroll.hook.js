import { useEffect, useState } from "react";

export function useScroll(bottom = 100) {
  const [reachBottom, setReachBottom] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      const element = e.target.documentElement;

      const isReachBottom =
        element.scrollHeight - element.scrollTop <=
        element.clientHeight + bottom;
      setReachBottom(isReachBottom);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [bottom]);

  return reachBottom;
}
