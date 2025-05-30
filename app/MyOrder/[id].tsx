import {StyleSheet, Text, View, ScrollView, Image, Dimensions} from "react-native"
import React, {useEffect, useRef, useState} from "react"
import {router, Stack} from "expo-router"
import {Colors} from "@/constants/Colors"
import {useRoute} from "@react-navigation/native"
import {useDispatch} from "react-redux"
import {addProduct} from "@/Reducer/cart"
import {URL} from "@env"
import axios from "axios"
const {width} = Dimensions.get("window")

type Props = {}

const MyOrder = (props: Props) => {
  const route = useRoute<any>()
  const {id} = route.params
  const dispatch = useDispatch()
  const [orders, setOrders] = useState<any>([])

  const handleGetDetailProduct = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/order?phone=" + id)
      setOrders(data.data.data)
      console.log(data.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetDetailProduct()
  }, [])

  return (
    <>
      <Stack.Screen options={{headerShown: true, title: "Đơn hàng của bạn"}} />

      <ScrollView>
        {orders.map((order: any) => (
          <View style={styles.container}>
            <View style={{width: "100%", alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={{fontSize: 18}}>Đơn hàng: #{order?.code}</Text>
              <Text style={{fontSize: 18}}>{order?.methodPay}</Text>
            </View>
            {order?.products?.map((pro: any, index: number) => (
              <View
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
                key={index}
              >
                <Image
                  resizeMode="contain"
                  source={{uri: pro.productId.image}}
                  style={{width: 80, height: 80, borderRadius: 10, backgroundColor: "white"}}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: Colors.gray,
                      marginBottom: 10,
                    }}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {pro.productId.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: Colors.gray,
                      }}
                    >
                      {pro.productId.price.toLocaleString("vi-VN")}đ
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{fontSize: 14, color: Colors.gray}}>x{pro.quantity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  )
}

export default MyOrder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    marginBlock: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
})
