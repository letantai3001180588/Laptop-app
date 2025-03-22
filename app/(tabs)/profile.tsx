import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

type Props = {};

interface IProfile {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}

const profile: IProfile[] = [
  {
    id: "1",
    icon: "reader-outline",
    text: "Đơn hàng của bạn",
  },
  {
    id: "2",
    icon: "list-outline",
    text: "Lịch sử đơn hàng",
  },
  {
    id: "3",
    icon: "help-circle-outline",
    text: "Hỗ trợ",
  },
  {
    id: "4",
    icon: "person-circle-outline",
    text: "Sửa hồ sơ",
  },
  {
    id: "5",
    icon: "settings-outline",
    text: "Cài đặt",
  },
  {
    id: "6",
    icon: "log-out-outline",
    text: "Đăng xuất",
  },
];

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Hồ sơ</Text>

      <View style={{ marginVertical: 30, alignItems: "center", gap:10 }}>
        <Image
          source={{
            uri: "https://anphat.com.vn/media/product/50031_laptop_asus_tuf_gaming_a15_fa506ncr_hn047w___2_.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: Colors.gray,
          }}
        >
          John
        </Text>
      </View>

      <ScrollView style={{ width: "100%", gap: 10, paddingHorizontal: 10 }}>
        {profile.map((item: IProfile, index) => (
          <Animated.View
            entering={FadeInDown.delay(300 * (index + 1)).duration(
              500 * (index + 1)
            )}
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
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
