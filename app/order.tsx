import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import React, {useState} from "react"
import {router, Stack} from "expo-router"
import {Ionicons} from "@expo/vector-icons"
import {Colors} from "@/constants/Colors"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {addPayment} from "@/Reducer/payment"
import {ScrollView} from "react-native-gesture-handler"
type Props = {}
import {URL} from "@env"

const paymentMethod = [
  {method: "VNPAY", disable: false, txt: "VNPAY", image: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png"},
  {
    method: "COD",
    disable: false,
    txt: "Thanh toán khi nhận hàng",
    image: "https://static.vecteezy.com/system/resources/previews/030/740/487/non_2x/cash-on-delivery-logo-free-png.png",
  },
  {method: "MOMO", disable: true, txt: "MOMO", image: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"},
]

const OrderScreen = (props: Props) => {
  const [selectedPay, setSelectedPay] = useState<string>("VNPAY")
  const [phone, setPhone] = useState<string>("")
  const [address, setAddress] = useState<string>("")

  const dispatch = useDispatch()
  const productCart = useSelector((state: any) => state.cart.products)
  const total = productCart.reduce((sum: number, item: any) => {
    return sum + item.price * item.quantity
  }, 0)

  const handlePayment = async () => {
    try {
      const products = productCart.map((item: any) => ({quantity: item.quantity, productId: item._id}))
      const data = await axios.post(URL + "/api/payment", {
        amount: total,
        locale: "vn",
        methodPay: selectedPay,
        products,
        address,
        phone,
      })
      const paymentUrl = data.data.paymentUrl
      dispatch(addPayment(paymentUrl))
      router.push("/payment")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Stack.Screen options={{headerShown: true, title: "Tóm tắt yêu cầu"}} />

      <ScrollView>
        <View style={{gap: 10}}>
          <View style={{width: "100%", padding: 10, backgroundColor: "white", flexDirection: "column"}}>
            <Text style={{fontSize: 18, color: Colors.black, fontWeight: "500", paddingBlock: 10}}> Thông tin khách hàng</Text>
            <View>
              <TextInput value={phone} onChangeText={setPhone} style={styles.input} placeholder="Số điện thoại" />
              <Ionicons
                name="phone-portrait-outline"
                size={20}
                color="#888"
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
              />
            </View>
            <View>
              <TextInput value={address} onChangeText={setAddress} style={styles.input} placeholder="Địa chỉ" />
              <Ionicons
                name="location-outline"
                size={20}
                color="#888"
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
              />
            </View>
          </View>

          <View>
            <View style={{width: "100%", padding: 10, backgroundColor: "white"}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: Colors.black,
                }}
              >
                Đơn hàng của bạn
              </Text>
              {productCart.map((item: any, index: number) => (
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
                >
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={{width: 80, height: 80, borderRadius: 10}}
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
                      {item.name}
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
                        {item.price.toLocaleString("vi-VN")}đ
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                          alignItems: "center",
                        }}
                      >
                        <Text style={{fontSize: 14, color: Colors.gray}}>x{item.quantity}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={{width: "100%", padding: 10, backgroundColor: "white", flexDirection: "column"}}>
            <Text style={{fontSize: 18, color: Colors.black, fontWeight: "500", paddingBlock: 10}}>Tóm tắt yêu cầu</Text>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 5}}>
              <Text style={{fontSize: 16}}>Tổng phụ</Text>
              <Text style={{fontSize: 16}}>{total.toLocaleString("vi-VN")}đ</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 5, borderBottomWidth: 1}}>
              <Text style={{fontSize: 16}}>Phí vận chuyển</Text>
              <Text style={{fontSize: 16}}>0đ</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 5}}>
              <Text style={{fontSize: 16}}>Tổng thanh toán</Text>
              <Text style={{fontSize: 16}}>{total.toLocaleString("vi-VN")}đ</Text>
            </View>
          </View>

          <View style={{width: "100%", padding: 10, backgroundColor: "white", flexDirection: "column"}}>
            <Text style={{fontSize: 18, color: Colors.black, fontWeight: "500", paddingBlock: 10}}>Phương thức thanh toán</Text>
            <View style={{flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
              {paymentMethod.map((option) => (
                <TouchableOpacity
                  key={option.method}
                  style={{...styles.radioContainer, backgroundColor: option.disable ? "#ccc" : "white"}}
                  onPress={() => setSelectedPay(option.method)}
                  disabled={option.disable}
                >
                  <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                    <Image source={{uri: option.image}} resizeMode="contain" style={{width: 30, height: 30}} />
                    <Text>{option.txt}</Text>
                  </View>

                  <View style={styles.outerCircle}>{selectedPay === option.method && <View style={styles.innerCircle} />}</View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
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
        <Text style={{fontSize: 16, color: Colors.black, fontWeight: "500"}}>Tổng thanh toán: {total.toLocaleString("vi-VN")}đ</Text>

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
              paddingBlock: 5,
            }}
          >
            Đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  input: {borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10},
  radioContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  outerCircle: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: "#007AFF",
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
})
