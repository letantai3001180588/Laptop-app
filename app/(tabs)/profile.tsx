import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import React from "react"
import {Ionicons} from "@expo/vector-icons"
import {ScrollView} from "react-native-gesture-handler"
import Animated, {FadeInDown} from "react-native-reanimated"
import {Colors} from "@/constants/Colors"
import {router} from "expo-router"
import {useSelector} from "react-redux"

type Props = {}

interface IFeature {
  id: string
  icon: keyof typeof Ionicons.glyphMap
  text: string
  handle?: () => void
}

const imageUser = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HmAlYRaMiTx6PqSGcL9ifkAFxWHVPvhiHQ&s"

const ProfileScreen = (props: Props) => {
  const user = useSelector((state: any) => state.auth.user)
  const feature: IFeature[] = [
    {
      id: "1",
      icon: "reader-outline",
      text: "Đơn hàng của bạn",
      handle: () => {
        router.push({
          pathname: "/MyOrder/[id]",
          params: {id: user.phone || ""},
        })
      },
    },
    {
      id: "2",
      icon: "help-circle-outline",
      text: "Hỗ trợ",
    },
    {
      id: "3",
      icon: "person-circle-outline",
      text: "Sửa hồ sơ",
    },
    {
      id: "4",
      icon: "settings-outline",
      text: "Cài đặt",
    },
    {
      id: "5",
      icon: "log-out-outline",
      text: "Đăng xuất",
      handle: () => {
        router.push("/")
      },
    },
  ]
  console.log(user)

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: "700"}}>Hồ sơ</Text>

      <View style={{marginVertical: 30, alignItems: "center", gap: 10}}>
        <Image resizeMode="contain" source={{uri: imageUser}} style={{width: 100, height: 100, borderRadius: 50}} />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: Colors.gray,
          }}
        >
          {user.email}
        </Text>
      </View>

      <ScrollView style={{width: "100%", gap: 10, paddingHorizontal: 10}}>
        {feature.map((item: IFeature, index) => (
          <TouchableOpacity onPress={item?.handle}>
            <View
              key={item.id}
              style={{
                width: "100%",
                borderColor: "#dfdfdf",
                borderWidth: 2,
                flexDirection: "row",
                padding: 10,
                borderRadius: 10,
                marginVertical: 5,
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <Ionicons name={item.icon} size={22} color={Colors.gray} />

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: Colors.gray,
                }}
              >
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
})
