import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import axios from "axios";

type Props = {};

const SignUpScreen = (props: Props) => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateAccount = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8080/api/auth/register",
        form
      );
      if (!data) Alert.alert("Thông báo", "Đăng kí thất bại", [{ text: "OK" }]);

      Alert.alert("Thông báo", "Đăng kí thành công", [{ text: "OK" }]);
      router.push("/signin");
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Đăng kí",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Tạo tài khoản mới</Text>
        <InputField
          placeholder="Email"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(value: string) => handleChange("email", value)}
        />
        <InputField
          placeholder="Số điện thoại"
          placeholderTextColor={Colors.gray}
          value={form.phone}
          onChangeText={(value: string) => handleChange("phone", value)}
        />
        <InputField
          placeholder="Mật khẩu"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value: string) => handleChange("password", value)}
        />
        <InputField
          placeholder="Xác nhận mật khẩu"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          value={form.confirmPassword}
          onChangeText={(value: string) =>
            handleChange("confirmPassword", value)
          }
        />

        <TouchableOpacity style={styles.btn} onPress={handleCreateAccount}>
          <Text style={styles.btnTxt}>Tạo tài khoản</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
          Bạn đã có tài khoản chưa? &emsp;
          <Link href={"/signin"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Đăng nhập</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider} />
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
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
