import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
} from "react-native";
type Props = {
  msg: string;
  modalVisible: boolean;
  closeModel: () => void;
};

const ModelAlert = (props: Props) => {
  useEffect(() => {
    if (props.modalVisible) {
      const timer = setTimeout(() => {
        props.closeModel();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [props.modalVisible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.closeModel();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>Thông báo</Text>
          <Text style={styles.modalText}>{props.msg}</Text>
          <TouchableOpacity
            style={styles.modelCancel}
            onPress={props.closeModel}
          >
            <Ionicons
              name="close-circle-outline"
              size={30}
              color={Colors.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    position: "relative",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeader: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 22,
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
  },
  modelCancel: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModelAlert;
