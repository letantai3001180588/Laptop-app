import React, {useState} from "react"
import {View, TextInput, Button, Text, ScrollView, StyleSheet, TouchableOpacity, Image} from "react-native"
import axios from "axios"
import {Ionicons} from "@expo/vector-icons"
import {API_GERMINI} from "@env"
import {IChat} from "@/constants/Db"

const API_KEY = API_GERMINI!
const txtError = "Đã có lỗi xảy ra. Vui lòng kiểm tra internet!"
const imagesAI = "https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg"

const chatAI = async (messages: any) => {
  try {
    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
      {
        contents: [
          {
            parts: [{text: messages}],
          },
        ],
      },
      {
        headers: {"Content-Type": "application/json"},
        params: {
          key: API_KEY,
        },
      }
    )

    const text = res.data.candidates?.[0]?.content?.parts?.[0]?.text || txtError
    return text
  } catch (err) {
    console.error(err)
  }
}

const Assistant = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<IChat[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    try {
      if (!input.trim()) return

      const newMessages = [...messages, {role: "user", content: input}]
      setMessages(newMessages)
      setInput("")
      setLoading(true)
      const reply = await chatAI(input)

      setMessages([...newMessages, {role: "assistant", content: reply || txtError}])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setMessages([...messages, {role: "assistant", content: txtError}])
      setLoading(false)
    }
  }

  return (
    <>
      <Text style={styles.title}>Trợ lý ảo</Text>
      <View style={styles.container}>
        <ScrollView style={styles.chatBox}>
          {messages.map((msg: any, index: number) => (
            <View
              style={{
                width: "100%",
                flexDirection: msg.role !== "user" ? "row" : "row-reverse",
                gap: 5,
                marginBlock: 5,
              }}
            >
              <Image source={{uri: imagesAI}} style={styles.avatar} />
              <Text key={index} style={msg.role === "user" ? styles.user : styles.bot}>
                {msg.content}
              </Text>
            </View>
          ))}

          {loading && (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Image source={{uri: imagesAI}} style={styles.avatar} />
              <Text style={{...styles.bot, width: 100}}>...</Text>
            </View>
          )}
        </ScrollView>
      </View>

      <View
        style={{
          width: "100%",
          position: "relative",
          flexDirection: "row",
          padding: 5,
        }}
      >
        <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Nhập tin nhắn..." />

        <TouchableOpacity
          style={{
            borderRadius: 5,
          }}
          onPress={sendMessage}
          disabled={loading}
        >
          <Ionicons
            name="send-outline"
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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: "#ebecf0",
  },
  chatBox: {flex: 1, marginBottom: 10},
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  user: {
    backgroundColor: "#dbebff",
    padding: 8,
    borderRadius: 10,
    marginVertical: 2,
    fontSize: 16,
  },
  bot: {
    fontSize: 16,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    marginVertical: 2,
  },
  title: {fontSize: 24, fontWeight: "700", textAlign: "center", backgroundColor: "white", padding: 10},
  avatar: {width: 30, height: 30, borderRadius: 50, marginBlock: 8},
})

export default Assistant
