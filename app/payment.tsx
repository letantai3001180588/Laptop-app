import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";

const Payment = () => {
  const payment = useSelector((state: any) => state.payment);
  console.log(payment);
  const paymentURL = payment.payment || "";

  useEffect(() => {
    if (Platform.OS === "web" && paymentURL) {
      window.location.href = paymentURL;
    }
  }, [paymentURL]);

  return (
    <View style={{ flex: 1 }}>
      {/* <WebView source={{ uri: payment.payment }} /> */}
      <iframe
        src={payment.payment}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </View>
  );
};

export default Payment;
