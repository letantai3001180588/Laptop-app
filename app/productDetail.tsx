import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
type Props = {};

const ProductDetailScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: "Thông tin sản phẩm" }}
      />

      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://anphat.com.vn/media/product/50031_laptop_asus_tuf_gaming_a15_fa506ncr_hn047w___2_.jpg",
              }}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: Colors.lightGray,
              }}
            >
              <Ionicons name="star" color={"#D4AF37"} size={12} />
              &nbsp; 4.7
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Colors.lightGray,
              }}
            >
              <Ionicons name="trending-up-outline" size={12} />
              &nbsp; Đã bán: 56
            </Text>
          </View>

          <Text
            style={{
              fontSize: 22,
              marginTop: 5,
              color: Colors.black,
              fontWeight: "500",
            }}
          >
            Laptop ASUS TUF Gaming A15 FA506NCR-HN047W
          </Text>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "rgb(238, 77, 45)",
                marginTop: 5,
                fontWeight: "600",
              }}
            >
              20.000.000đ &emsp;
            </Text>

            <Text
              style={{
                fontSize: 16,
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

          <Text
            style={{
              width: "100%",
              fontSize: 20,
              marginTop: 5,
              fontWeight: "600",
              justifyContent: "flex-start",
            }}
          >
            Bài viết đánh giá
          </Text>

          <Text
            style={{
              fontSize: 18,
              marginTop: 5,
              borderRadius: 5,
              paddingVertical: 2.5,
            }}
          >
            Laptop Asus Vivobook Go 15 E1504FA R5 7520U (NJ776W) được trang bị
            vi xử lý AMD Ryzen 7000 Series mới, giúp người dùng hoàn thành tác
            vụ một cách nhanh chóng và hiệu quả. Nhiều tính năng hiện đại giúp
            khẳng định cá tính riêng, sẵn sàng đồng hành để bạn luôn linh hoạt
            và chủ động trong công việc. • Laptop này sử dụng bộ vi xử lý AMD
            Ryzen 5 7520U với tốc độ cơ bản 2.80 GHz và khả năng tăng tốc lên
            đến 4.3 GHz khi sử dụng chế độ Turbo Boost. CPU này cung cấp khả
            năng xử lý đa nhiệm tốt, thích hợp cho các tác vụ văn phòng, duyệt
            web, và ứng dụng đồ họa cơ bản. • Laptop Asus được trang bị card đồ
            họa tích hợp AMD Radeon Graphics, hỗ trợ trong việc xử lý đồ họa cơ
            bản và giải trí đa phương tiện. Người dùng cũng có thể thoải mái
            chiến những tựa game thịnh hành như LOL, CS:GO,... với mức cấu hình
            trung bình. • Bộ nhớ RAM 16 GB LPDDR5 với tốc độ Bus 5500 MHz, cung
            cấp khả năng xử lý đa nhiệm mượt mà và cho phép mở nhiều ứng dụng và
            tab trình duyệt cùng một lúc mà không gặp trễ. • Với ổ cứng SSD NVMe
            PCIe dung lượng 512 GB hỗ trợ khởi động nhanh chóng các ứng dụng và
            tải tài liệu một cách hiệu quả. Laptop Asus VivoBook cũng cung cấp
            không gian lưu trữ đủ cho các tập tin cá nhân và ứng dụng, và có khả
            năng nâng cấp lên đến 1 TB nếu cần thiết. • Vivobook Go 15 chứng
            minh thiết kế đơn giản, trẻ trung và hướng đến sự tiện lợi cho người
            dùng di động với khối lượng chỉ 1.63 kg. Một tính năng tiện ích của
            chiếc laptop học tập - văn phòng này là bản lề có thể mở 180 độ, cho
            phép bạn điều chỉnh góc mở màn hình một cách linh hoạt, rất hữu ích
            khi bạn cần chia sẻ nội dung màn hình với người khác hoặc làm việc
            trong các vị trí không tiện lợi. • Laptop có cổng USB Type-C, USB
            2.0, USB 3.2, Jack tai nghe 3.5 mm và cổng HDMI, đáp ứng nhu cầu kết
            nối với các thiết bị và phụ kiện khác. • Để đảm bảo tính riêng tư và
            bảo mật cho người dùng, Asus Vivobook Go 15 còn có công tắc khóa
            camera giúp đóng mở thủ công webcam khi không sử dụng và tính năng
            bảo mật vân tay giúp bạn dễ dàng mở khóa máy một cách nhanh chóng và
            an toàn. • Màn hình kích thước 15.6 inch mang lại trải nghiệm xem
            rộng rãi và thoải mái. Độ phân giải Full HD (1920 x 1080) giúp hiển
            thị hình ảnh sắc nét, chi tiết và rõ ràng, phù hợp cho việc xem
            phim, duyệt web, làm việc văn phòng và các tác vụ thông thường. •
            Laptop còn có công nghệ chống chói Anti Glare giảm bớt ánh sáng phản
            chiếu từ nguồn sáng xung quanh giúp giảm mỏi mắt và cải thiện trải
            nghiệm xem khi làm việc trong điều kiện ánh sáng mạnh. • Thiết bị
            hoàn thiện khi được trang bị công nghệ SonicMaster tối ưu hóa chất
            âm và cải thiện trải nghiệm nghe nhạc, xem phim và chơi game.
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          gap: 10,
          paddingHorizontal: 10,
          backgroundColor: Colors.white,
        }}
      >
        <TouchableOpacity
          style={{
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
          }}
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons
            name="cart-outline"
            size={20}
            color={Colors.primary}
            style={{ marginRight: 5 }}
          />
          <Text
            style={{ color: Colors.primary, fontWeight: "500", fontSize: 16 }}
          >
            Thêm giỏ hàng
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: Colors.primary,
            paddingVertical: 14,
            paddingHorizontal: 18,
            alignSelf: "stretch",
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 10,
          }}
          onPress={() => {
            router.back();
          }}
        >
          <Text
            style={{ color: Colors.white, fontWeight: "500", fontSize: 16 }}
          >
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
});
