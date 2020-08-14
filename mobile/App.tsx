import { StatusBar } from "expo-status-bar";
import React from "react";
import Landing from "./src/pages/Landing";
import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // não é usado <View> para não criar um elemento visual na tela
      // <></> - fragment (como se fosse uma div mas não é passado pra tela)
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
