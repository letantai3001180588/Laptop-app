import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, FlatList, Dimensions, Animated, Linking} from "react-native"
import React, {useEffect, useRef, useState} from "react"
import {router, Stack} from "expo-router"
import {Ionicons} from "@expo/vector-icons"
import {Colors} from "@/constants/Colors"
import {useRoute} from "@react-navigation/native"
import {useDispatch} from "react-redux"
import {addProduct} from "@/Reducer/cart"
import {URL} from "@env"
import axios from "axios"
const {width} = Dimensions.get("window")

type Props = {}

const ProductDetailScreen = (props: Props) => {
  const scrollX = useRef<any>(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const route = useRoute<any>()
  const {id} = route.params
  const dispatch = useDispatch()
  const [detailProduct, setDetailProducts] = useState<any>([])

  const handleGetDetailProduct = async () => {
    try {
      const data = await axios.get(URL + "/api/product/" + id)
      setDetailProducts(data.data.product)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetDetailProduct()
  }, [])

  const handleScroll = Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
    useNativeDriver: false,
    listener: (e: any) => {
      const offsetX = e.nativeEvent.contentOffset.x
      const index = Math.round(offsetX / width)
      setCurrentIndex(index)
    },
  })

  const handleAddToCart = () => {
    dispatch(addProduct({...detailProduct, quantity: 1}))
  }

  return (
    <>
      <Stack.Screen options={{headerShown: true, title: "Thông tin sản phẩm"}} />

      <ScrollView>
        <FlatList
          data={detailProduct?.banner}
          horizontal
          pagingEnabled
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Image source={{uri: item}} resizeMode="contain" style={styles.slider} />}
          style={{width, maxHeight: 300}}
          onScroll={handleScroll}
        />

        <View style={styles.dotsContainer}>
          {detailProduct?.banner?.map((item:any, index:number) => <View key={item._id} style={[styles.dot, currentIndex === index && styles.dotActive]} />)}
        </View>

        <View style={styles.container}>
          <View style={styles.productInfo}>
            <View style={styles.headingProductInfo}>
              <Text style={styles.txtHeadingProductInfo}>
                <Ionicons name="star" color={"#D4AF37"} size={12} />
                &nbsp; 4.7
              </Text>
              <Text style={styles.txtHeadingProductInfo}>
                <Ionicons name="trending-up-outline" size={12} />
                &nbsp; Đã bán: 56
              </Text>
            </View>

            <Text style={styles.productName}>{detailProduct?.name}</Text>

            <View style={styles.boxPrice}>
              <Text style={styles.price}>{detailProduct?.price?.toLocaleString("vi-VN")}đ &emsp;</Text>
              <Text style={styles.discount}>-50%</Text>
            </View>
          </View>

          <View style={styles.boxPost}>
            <Text style={styles.titlePost}>Bài viết đánh giá</Text>
            {detailProduct?.post?.map((item: string) => {
              return <Text style={styles.itemPost}>- {item}</Text>
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.boxAction}>
        <TouchableOpacity
          style={styles.btnCart}
          onPress={() => {
            router.back()
            handleAddToCart()
          }}
        >
          <Ionicons name="cart-outline" size={20} color={Colors.primary} style={{marginRight: 5}} />
          <Text style={{...styles.txtBtnAction, color: Colors.primary}}>Thêm giỏ hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnPay}
          onPress={() => {
            router.back()
          }}
        >
          <Text style={{...styles.txtBtnAction, color: "white"}}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginTxt: {
    marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "30%",
    marginBottom: 30,
  },
  slider: {
    width,
    height: 300,
    resizeMode: "cover",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 20,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#007bff",
    width: 30,
    height: 5,
  },
  productInfo: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginBlock: 10,
  },
  productName: {
    width: "100%",
    fontSize: 18,
    marginTop: 5,
    color: Colors.black,
    fontWeight: "500",
  },
  headingProductInfo: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtHeadingProductInfo: {
    fontSize: 16,
    color: Colors.lightGray,
  },
  boxPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 20,
    color: Colors.primary,
    marginTop: 5,
    fontWeight: "600",
  },
  discount: {
    fontSize: 16,
    backgroundColor: "rgb(253, 224, 218)",
    marginTop: 5,
    color: Colors.primary,
    fontWeight: "600",
    borderRadius: 5,
    padding: 5,
  },
  boxPost: {backgroundColor: "white", padding: 5, borderRadius: 5},
  titlePost: {
    width: "100%",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "600",
    justifyContent: "flex-start",
  },
  itemPost: {
    fontSize: 16,
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 2.5,
  },
  boxAction: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  btnCart: {
    flex: 1,
    flexDirection: "row",
    borderColor: Colors.primary,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  btnPay: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  txtBtnAction: {fontWeight: "500", fontSize: 16},
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
})
