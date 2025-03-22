import React from "react";
import { Text } from "@react-navigation/elements";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { icon, IconName } from "@/constants/Icon";
import { Colors } from "@/constants/Colors";

type Props = {
  onPress: any;
  onLongPress: any;
  isFocused: boolean;
  label: string;
  routeName: IconName;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      <View
        style={{ ...styles.badgeWrapper, display: isFocused ? "flex" : "none" }}
      ></View>
      {icon[routeName]({ color: isFocused ? Colors.primary : Colors.black })}
      <Text style={{ color: isFocused ? Colors.primary : Colors.black }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeWrapper: {
    position: "absolute",
    backgroundColor: Colors.primary,
    top: -10,
    right: '25%',
    width: "50%",
    height: 2,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeText: {
    color: Colors.black,
    fontSize: 12,
  },
});
