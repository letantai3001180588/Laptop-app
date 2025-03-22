import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const NotificationsScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Thông báo</Text>
      <ScrollView style={{ width: "100%", gap: 10 }}>
        {[1, 2, 3, 4].map((item, index) => (
          <Animated.View
            entering={FadeInDown.delay(300 * (index + 1)).duration(
              500 * (index + 1)
            )}
            style={{
              width: "100%",
              backgroundColor: "#dfdfdf",
              flexDirection: "row",
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons name="notifications-outline" size={26} />
            <View style={{ flex: 1, gap: 2 }}>
              <View style={{ flexDirection: "row", alignItems:'flex-end',justifyContent:'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  Đặt hàng thành công
                </Text>

                <Text style={{ fontSize: 12 }}>5 ngày trước</Text>
              </View>
              <Text style={{ fontSize: 14 }}>
                Đơn hàng của bạn đang vận chuyển
              </Text>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
});
