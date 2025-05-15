import {Link, Stack} from "expo-router"
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {ThemedView} from "@/components/ThemedView"
import {Colors} from "@/constants/Colors"

const imageNotFound = "https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small_2x/404-error-page-not-found-3d-illustration-png.png"

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{headerShown: false, title: "Không tìm thấy!"}} />
      <ThemedView style={styles.container}>
        <Image source={{uri: imageNotFound}} resizeMode="cover" style={{width: 300, height: 200}} />
        <Text style={styles.buttonText}>Không tìm thấy trang</Text>

        <View style={styles.link}>
          <Link href="/">
            <TouchableOpacity style={styles.button}>
              <Text style={{...styles.buttonText, color: "white"}}>Trang chủ</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
    color: "black",
    gap: 20,
  },
  link: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 15,
    // paddingVertical: 15,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
})
