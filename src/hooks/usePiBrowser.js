// Libraries
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Custom Functions
import { setPiBrowser } from '../redux/piSlice';

const usePiBrowser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'https://app-cdn.minepi.com') {
        dispatch(setPiBrowser(true));
      } else if (event.origin === 'https://sandbox.minepi.com') {
        dispatch(setPiBrowser(false));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return;
};

export default usePiBrowser;
