import {ScrollView, StyleSheet, Text, View} from "react-native"
import React from "react"
import {Ionicons} from "@expo/vector-icons"

type Props = {}

const dataNotification = [
  {
    typeIcon: "notifications-outline",
    title: "Đặt hàng thành công",
    description: "Đơn hàng của bạn đang vận chuyển",
    date: "10/5/2025",
  },
  {
    typeIcon: "pricetag-outline",
    title: "Khuyến mãi",
    description: "Siêu ưu đãi cuối tháng này! Nhanh tay lên nào.",
    date: "13/5/2025",
  },
  {
    typeIcon: "gift-outline",
    title: "Quà tặng",
    description: "Chúc mùng bạn nhận quà tặng từ chương trình tri ân khách hàng",
    date: "13/5/2025",
  },
]

const NotificationsScreen = (props: Props) => {
  return (
    <>
      <Text style={styles.title}>Thông báo</Text>

      <View style={styles.container}>
        <ScrollView style={{width: "100%", gap: 10}}>
          {dataNotification.map((item: any, index: number) => (
            <View style={styles.boxNoti}>
              <Ionicons name={item?.typeIcon || "notifications-outline"} size={26} />
              <View style={{flex: 1, gap: 2}}>
                <View style={{flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between"}}>
                  <Text style={{fontSize: 16, fontWeight: "500"}}>{item?.title}</Text>
                  <Text style={{fontSize: 12}}>{item.date}</Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 14}}>{item.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {fontSize: 24, fontWeight: "700", textAlign: "center", backgroundColor: "white", padding: 10},
  boxNoti: {
    width: "100%",
    backgroundColor: "#dfdfdf",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    gap: 10,
  },
})
