import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import React, {useState} from "react"
import {ScrollView} from "react-native-gesture-handler"
import Animated, {FadeInDown} from "react-native-reanimated"
import {Ionicons} from "@expo/vector-icons"
import {Colors} from "@/constants/Colors"
import {useDispatch, useSelector} from "react-redux"
import {decreaseQuantityProduct, increaseQuantityProduct, removeProduct} from "@/Reducer/cart"
import axios from "axios"
import {router} from "expo-router"
import {addPayment} from "@/Reducer/payment"
import {BoxEmpty} from "@/assets/icons/boxEmpty"

type Props = {}

const CartScreen = (props: Props) => {
  const dispatch = useDispatch()
  const productCart = useSelector((state: any) => state.cart.products)
  const total = productCart.reduce((sum: number, item: any) => {
    return sum + item.price * item.quantity
  }, 0)

  const handleDecreaseQty = (id: string) => {
    dispatch(decreaseQuantityProduct(id))
  }

  const handleIncreaseQty = (id: string) => {
    dispatch(increaseQuantityProduct(id))
  }

  const handleDeletePro = (id: string) => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn xoá sản phẩm này?",
      [
        {
          text: "Huỷ",
          onPress: () => console.log("Huỷ"),
          style: "cancel",
        },
        {
          text: "Xoá",
          onPress: () => dispatch(removeProduct(id)),
          style: "destructive",
        },
      ],
      {cancelable: true}
    )
  }

  const handlePayment = async () => {
    router.push("/order")
  }

  return (
    <>
      <Text style={{fontSize: 24, fontWeight: "700", padding: 10, backgroundColor: "white", textAlign: "center"}}>Giỏ hàng</Text>
      <View style={styles.container}>
        {productCart.length > 0 ? (
          <ScrollView style={{width: "100%", gap: 10, paddingHorizontal: 10}}>
            {productCart.map((item: any, index: number) => (
              <Animated.View
                entering={FadeInDown.delay(300 * (index + 1)).duration(500 * (index + 1))}
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
                  source={{uri: item.image}}
                  resizeMode="contain"
                  style={{width: 100, height: 100, borderRadius: 10, backgroundColor: "white"}}
                />
                <View style={{flex: 1, gap: 2}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: Colors.gray,
                    }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: Colors.gray,
                    }}
                  >
                    {item.price.toLocaleString("vi-VN")}đ
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="trash-outline" size={20} color={"red"} onPress={() => handleDeletePro(item.id)} />
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
                        onPress={() => handleDecreaseQty(item.id)}
                      >
                        <Ionicons name="remove-outline" size={18} color={"#d8d8d8"} />
                      </TouchableOpacity>
                      <Text style={{fontSize: 14, color: Colors.gray}}>{item.quantity}</Text>
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
                        onPress={() => handleIncreaseQty(item.id)}
                      >
                        <Ionicons name="add-outline" size={18} color={"#d8d8d8"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Animated.View>
            ))}
          </ScrollView>
        ) : (
          <BoxEmpty width={350} height={350} />
        )}

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            backgroundColor: "rgb(228, 228, 228)",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
            display: total > 0 ? "flex" : "none",
          }}
        >
          <Text style={{fontSize: 16, color: Colors.black, fontWeight: "500"}}>Tổng: {total.toLocaleString("vi-VN")}đ</Text>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: 5,
              paddingHorizontal: 20,
              alignItems: "center",
              borderRadius: 5,
            }}
            onPress={() => handlePayment()}
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
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
})
