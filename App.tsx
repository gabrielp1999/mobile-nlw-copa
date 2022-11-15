
import { NativeBaseProvider, StatusBar} from "native-base";
import { THEME } from './src/styles/theme';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';

import { Loading }from './src/Components/Loading';

import { Signin } from "./src/screens/Signin";
import { New } from './src/screens/New';
import { Pools } from './src/screens/Pools';


import { AuthContextProvider } from './src/context/AuthContext';

 function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_500Medium,Roboto_700Bold});


  return (
   <NativeBaseProvider theme={THEME}>
     <AuthContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Pools /> : <Loading /> }
     </AuthContextProvider>
   </NativeBaseProvider> 
  );
}

export default App;