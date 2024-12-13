import SplashScreen from './screens/SplashScreenView';
import CreateAccount from './screens/CreateAccountScreen';
import { useEffect, useState } from 'react';

/**
 * This component is used to render every other major components
 * 
 * @returns {component} The SplashScreen and after 3 seconds returns the CreateAccount screen
 */
export default function App() {

  /**
   * This hook sets the initial value of isShowSplash to true
   * making the SplashScreen to display first when the application loads
   */
  const [isShowSplash, setIsShowSlash] = useState(true);

  /**
   * This hook changes the value of isShowSplash to false after 3 seconds
   * making it possible for the CreateAccount screen to be displayed
   */
  useEffect( () => {
    setTimeout(() => {
      setIsShowSlash(false);
    }, 3000);
  });

  return (
    <>{isShowSplash ? <SplashScreen /> : <CreateAccount />}</>
  );
}

