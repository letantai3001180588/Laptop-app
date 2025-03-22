import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const CartScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Giỏ hàng</Text>
      <ScrollView style={{ width: "100%", gap: 10, paddingHorizontal: 10 }}>
        {[1, 2, 3, 4].map((item, index) => (
          <Animated.View
            entering={FadeInDown.delay(300 * (index + 1)).duration(
              500 * (index + 1)
            )}
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
            <Image
              source={{
                uri: "https://anphat.com.vn/media/product/50031_laptop_asus_tuf_gaming_a15_fa506ncr_hn047w___2_.jpg",
              }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View style={{ flex: 1, gap: 2 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: Colors.gray,
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Laptop ASUS TUF Gaming A15 FA506NCR-HN047W
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: Colors.gray,
                }}
              >
                20.000.000đ
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Ionicons name="trash-outline" size={20} color={"red"} />
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#d8d8d8",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="remove-outline"
                      size={18}
                      color={"#d8d8d8"}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 14, color: Colors.gray }}>5</Text>
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#d8d8d8",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="add-outline" size={18} color={"#d8d8d8"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        ))}
      </ScrollView>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: "rgb(228, 228, 228)",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: Colors.black, fontWeight: "500" }}>
          Tổng: 40,000,000đ
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: 5,
            paddingHorizontal: 20,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
