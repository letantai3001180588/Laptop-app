import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import React, {useState} from "react"
import {Link, router, Stack} from "expo-router"
import {Colors} from "@/constants/Colors"
import InputField from "@/components/InputField"
import axios from "axios"
import {useDispatch} from "react-redux"
import {addToken, addUser} from "@/Reducer/auth"
import ModelAlert from "@/components/ModalAlert"
import * as SecureStore from "expo-secure-store"
type Props = {}

const SignInScreen = (props: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalMsg, setModalMsg] = useState<string>("")
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({...prev, [field]: value}))
  }

  const closeModel = () => {
    setModalVisible(!modalVisible)
  }

  const handleSignIn = async () => {
    try {
      const data = await axios.post("http://localhost:8080/api/auth/login", form) 
      setModalMsg("Đăng nhập thành công")
      setModalVisible(true)

      router.dismissAll()
      router.push("/(tabs)/home")

      dispatch(addToken(data.data.token))
      dispatch(addUser(data.data.user))

      await SecureStore.setItemAsync("accessToken", data.data.token)
    } catch (error) {
      console.log(error)
      setModalMsg("Đăng nhập thất bại")
      setModalVisible(true)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>
        <InputField
          placeholder="Email"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(value: string) => handleChange("email", value)}
        />
        <InputField
          placeholder="Mật khẩu"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value: string) => handleChange("password", value)}
        />

        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
          <Text style={styles.btnTxt}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
          Bạn không có tài khoản? &emsp;
          <Link href={"/signup"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Đăng kí</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider} />
        <ModelAlert msg={modalMsg} modalVisible={modalVisible} closeModel={closeModel} />
      </View>
    </>
  )
}

export default SignInScreen

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
})
