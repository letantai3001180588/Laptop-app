import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { categories, products } from "@/constants/Db";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

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
        {/* <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 55, height: 55 }}
        /> */}
        <Text
          style={{ fontSize: 30, color: "rgb(238, 77, 45)", fontWeight: "700" }}
        >
          LS
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 10,
            backgroundColor: "#f2f2f2",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            Tìm kiếm ...
          </Text>
          <Ionicons name="search-outline" size={20} color={Colors.gray} />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            Hãng nổi tiếng
          </Text>
          <Text style={{ fontSize: 12, color: Colors.lightGray }}>Tất cả</Text>
        </View>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInRight.delay(300).duration(500)}
              style={{
                marginHorizontal: 5,
                padding: 5,
                borderRadius: 10,
                alignItems: "center",
                backgroundColor: Colors.white,
              }}
              key={index}
            >
              <Image
                source={{ uri: item.image }}
                style={{ minWidth: 100, minHeight: 30, resizeMode: "contain" }}
              />
            </Animated.View>
          )}
          contentContainerStyle={{
            marginLeft: 20,
            paddingRight: 20,
            marginBottom: 20,
          }}
        />

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
          <Text style={{ fontSize: 12, color: Colors.lightGray }}>Tất cả</Text>
        </View>

        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Link href={"/productDetail"} asChild>
              <Animated.View
                entering={FadeInRight.delay(300).duration(700)}
                style={{
                  width: Dimensions.get("window").width / 2 - 20,
                  marginHorizontal: 5,
                  backgroundColor: Colors.white,
                  padding: 5,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                key={index}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 150, borderRadius: 8 }}
                />
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
                    đ{item.price}.000
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      backgroundColor: "rgb(253, 224, 218)",
                      marginTop: 5,
                      color: "rgb(238, 77, 45)",
                      fontWeight: "600",
                      borderRadius: 5,
                      paddingVertical: 2.5,
                    }}
                  >
                    -50%
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
                    &nbsp; 4.7
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
          <Text style={{ fontSize: 12, color: Colors.lightGray }}>Tất cả</Text>
        </View>

        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
          renderItem={({ item, index }) => (
            <Link href={"/productDetail"} asChild>
              <Animated.View
                entering={FadeInDown.delay(300 * (index + 1)).duration(
                  500 * (index + 1)
                )}
                style={{
                  width: Dimensions.get("window").width / 2 - 20,
                  // height: 300,
                  marginHorizontal: 10,
                  backgroundColor: Colors.white,
                  padding: 5,
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                key={index}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 150, borderRadius: 8 }}
                />
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
                    đ{item.price}.000
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      backgroundColor: "rgb(253, 224, 218)",
                      marginTop: 5,
                      color: "rgb(238, 77, 45)",
                      fontWeight: "600",
                      borderRadius: 5,
                      paddingVertical: 2.5,
                    }}
                  >
                    -50%
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
                    &nbsp; 4.7
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
      </ScrollView>
    </>
  );
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
    shadowOffset: { width: 0, height: 2 },
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
});
