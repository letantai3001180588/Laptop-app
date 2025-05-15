import {useFonts} from "expo-font"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import {useEffect} from "react"
import "react-native-reanimated"

import {Provider} from "react-redux"
import store from "@/store/store"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          <Stack.Screen name="signin" options={{headerShown: false, presentation: "modal"}} />
          <Stack.Screen name="productDetail" options={{headerShown: false, presentation: "card"}} />
          <Stack.Screen name="signup" options={{headerShown: false, presentation: "modal"}} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Provider>
    </>
  )
}
