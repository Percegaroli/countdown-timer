import { useEffect, useState } from 'react';

type Resolution = 'Mobile' | 'Desktop';

const useResolution = () => {
  const [resolution, setResolution] = useState<Resolution>('Mobile');

  useEffect(() => {
    window.addEventListener('resize', calculateResolution);
    return () => window.removeEventListener('resize', calculateResolution);
  }, []);

  const calculateResolution = () => {
    if (window.innerWidth >= 992) {
      setResolution('Desktop');
    } else {
      setResolution('Mobile');
    }
  };

  return resolution;
};

export default useResolution;
