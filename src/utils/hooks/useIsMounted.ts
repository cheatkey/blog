import { useEffect, useState } from "react";

const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { isMounted: mounted };
};

export default useIsMounted;
