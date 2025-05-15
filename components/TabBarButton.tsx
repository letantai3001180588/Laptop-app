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
  badge: number;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName, badge } = props;
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
      {badge !== undefined && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
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
    right: "25%",
    width: "50%",
    height: 2,
    borderRadius: 10,
    zIndex: 10,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: 12,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
