import {Image, StyleSheet, View, Text, ScrollView, FlatList, Dimensions, Button, TouchableOpacity} from "react-native"

import {Colors} from "@/constants/Colors"
import {Ionicons} from "@expo/vector-icons"
import {Link, Stack} from "expo-router"
import Animated, {FadeInDown, FadeInRight} from "react-native-reanimated"
import {categories, IProduct} from "@/constants/Db"
import {URL} from "@env"
import axios from "axios"
import {useEffect, useState} from "react"
import {TextInput} from "react-native"

export default function HomeScreen() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [brand, setBrand] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleGetProduct = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/product")
      setProducts(data.data.product)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetBrand = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/product?name=" + brand)
      setProducts(data.data.product)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchProduct = async () => {
    try {
      setLoading(true)
      const data = await axios.get("http://localhost:8080/api/product?name=" + search)
      setProducts(data.data.product)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetProduct()
  }, [])

  useEffect(() => {
    if (brand !== "") handleGetBrand()
    else handleGetProduct()
  }, [brand])

  const Nav = () => (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        gap: 10,
      }}
    >
      <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}} onPress={handleGetProduct}>
        <Image source={require("@/assets/images/logo-laptop.png")} style={{width: 35, height: 35}} resizeMode="cover" />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          width: "100%",
          position: "relative",
          flexDirection: "row",
        }}
      >
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 5,
          }}
          placeholder="Tìm kiếm ..."
        />

        <TouchableOpacity
          style={{
            borderRadius: 5,
          }}
          onPress={handleSearchProduct}
          disabled={loading}
        >
          <Ionicons
            name="search-outline"
            size={20}
            color="#888"
            style={{
              position: "absolute",
              right: 10,
              top: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  const Brand = () => (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: Colors.primary,
          }}
        >
          Hãng nổi tiếng
        </Text>
        <Text style={{fontSize: 12, color: Colors.lightGray}}>Tất cả</Text>
      </View>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={{maxHeight: 50}}
        renderItem={({item, index}) => (
          <Animated.View
            entering={FadeInRight.delay(300).duration(500)}
            style={{
              height: 40,
              marginHorizontal: 5,
              padding: 5,
              borderRadius: 10,
              alignItems: "center",
              backgroundColor: Colors.white,
              borderColor: Colors.primary,
              borderWidth: brand === item.txt ? 1 : 0,
            }}
            key={index}
          >
            <TouchableOpacity
              onPress={() => {
                brand === item.txt ? setBrand("") : setBrand(item.txt)
              }}
            >
              <Image source={{uri: item.image}} style={{minWidth: 100, minHeight: 30, resizeMode: "contain"}} />
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </>
  )

  const FlashSale = () => {
    const productsFlashSale = products.filter((item) => item.discount > 0)
    return productsFlashSale.length > 0 ? (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "rgb(238, 77, 45)",
            }}
          >
            Flash Sale
          </Text>
          <Text style={{fontSize: 12, color: Colors.lightGray}}>Tất cả</Text>
        </View>

        <FlatList
          data={productsFlashSale}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item._id}
          renderItem={({item, index}: any) => (
            <Link
              href={{
                pathname: "/ProductDetail/[id]",
                params: {id: item._id},
              }}
              asChild
            >
              <Animated.View
                entering={FadeInRight.delay(300).duration(700)}
                style={{
                  width: Dimensions.get("window").width / 2 - 20,
                  marginHorizontal: 5,
                  backgroundColor: Colors.white,
                  padding: 5,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                key={index}
              >
                <Image source={{uri: item.image}} resizeMode="contain" style={{width: "100%", height: 150, borderRadius: 8}} />
                <Text
                  style={{
                    width: "100%",
                    fontSize: 16,
                    marginTop: 5,
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
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "rgb(238, 77, 45)",
                      marginTop: 5,
                      fontWeight: "600",
                    }}
                  >
                    {item?.price?.toLocaleString("vi-VN")} đ
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      backgroundColor: "rgb(253, 224, 218)",
                      marginTop: 5,
                      color: "rgb(238, 77, 45)",
                      fontWeight: "600",
                      borderRadius: 5,
                      padding: 2.5,
                    }}
                  >
                    -{item.discount}%
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 5,
                      color: Colors.lightGray,
                    }}
                  >
                    <Ionicons name="star" color={"#D4AF37"} size={12} />
                    &nbsp; {item.star}
                  </Text>
                  <Text
                    style={{
                      // width: "100%",
                      fontSize: 12,
                      marginTop: 5,
                      color: Colors.lightGray,
                    }}
                  >
                    <Ionicons name="trending-up-outline" size={12} />
                    &nbsp; Đã bán: 56
                  </Text>
                </View>

                <Text
                  style={{
                    width: "100%",
                    fontSize: 12,
                    color: Colors.lightGray,
                  }}
                >
                  <Ionicons name="location-outline" size={12} />
                  &nbsp; Hồ Chí Minh
                </Text>
              </Animated.View>
            </Link>
          )}
          contentContainerStyle={{
            marginLeft: 10,
            paddingRight: 10,
            marginBottom: 20,
          }}
        />
      </>
    ) : (
      <></>
    )
  }

  const ProductForYou = () => (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "rgb(238, 77, 45)",
          }}
        >
          Dành cho bạn
        </Text>
        <Text style={{fontSize: 12, color: Colors.lightGray}}>Tất cả</Text>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item: any) => item._id}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
        renderItem={({item, index}: any) => (
          <Link
            href={{
              pathname: "/ProductDetail/[id]",
              params: {id: item._id},
            }}
            asChild
          >
            <Animated.View
              entering={FadeInDown.delay(300 * (index + 1)).duration(500 * (index + 1))}
              style={{
                width: Dimensions.get("window").width / 2 - 20,
                marginHorizontal: 10,
                backgroundColor: Colors.white,
                padding: 5,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 5,
                elevation: 5,
              }}
              key={index}
            >
              <Image source={{uri: item.image}} resizeMode="contain" style={{width: "100%", height: 150, borderRadius: 8}} />
              <Text
                style={{
                  width: "100%",
                  fontSize: 16,
                  marginTop: 5,
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
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "rgb(238, 77, 45)",
                    marginTop: 5,
                    fontWeight: "600",
                  }}
                >
                  {item?.price?.toLocaleString("vi-VN")}đ
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    backgroundColor: "rgb(253, 224, 218)",
                    marginTop: 5,
                    color: "rgb(238, 77, 45)",
                    fontWeight: "600",
                    borderRadius: 5,
                    padding: 2.5,
                    display: item.discount > 0 ? "flex" : "none",
                  }}
                >
                  -{item.discount}%
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 5,
                    color: Colors.lightGray,
                  }}
                >
                  <Ionicons name="star" color={"#D4AF37"} size={12} />
                  &nbsp;{item.star}
                </Text>
                <Text
                  style={{
                    // width: "100%",
                    fontSize: 12,
                    marginTop: 5,
                    color: Colors.lightGray,
                  }}
                >
                  <Ionicons name="trending-up-outline" size={12} />
                  &nbsp; Đã bán: 56
                </Text>
              </View>

              <Text
                style={{
                  width: "100%",
                  fontSize: 12,
                  color: Colors.lightGray,
                }}
              >
                <Ionicons name="location-outline" size={12} />
                &nbsp; Hồ Chí Minh
              </Text>
            </Animated.View>
          </Link>
        )}
      />
    </>
  )

  return (
    <>
      <Stack.Screen options={{headerShown: false}} />

      {Nav()}

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {Brand()}
        {FlashSale()}
        {ProductForYou()}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "column",
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgb(241 243 242)",
    borderRadius: 10,
    height: 50,
  },
  search: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingLeft: 15,
    borderColor: "#ccc",
  },
  iconSearch: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  banner: {
    flex: 1,
    marginBottom: 90,
  },
  scrollView: {
    width: "100%",
  },
  containerProduct: {
    // padding: 2,
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  category: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "auto",
    height: 30,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 14,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  lastItem: {
    flex: 0.5,
    marginRight: 30,
  },
})
