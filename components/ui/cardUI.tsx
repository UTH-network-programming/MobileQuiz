import React from "react";
import { Card, IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CardUI = ({
  title,
  subtitle = "",
  icon,
  border,
  onPress,
  alignIcon = "right",
  iconSize = 24,
  view,
}: {
  title: string;
  subtitle?: string;
  icon?: string;
  border?: string;
  onPress?: () => void;
  alignIcon?: "left" | "right";
  iconSize?: number;
  view?: React.ReactNode;
  width?: number;
}) => {
  return (
    <Card
      style={[
        styles.body,
        border == null
          ? { borderColor: "#EAEAEA" }
          : {
              borderColor: border,
            },
      ]}
      onPress={onPress}
    >
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={
          alignIcon === "left" && icon
            ? (props) => <Icon name={icon} size={iconSize} />
            : undefined
        }
        right={
          alignIcon === "right" && icon
            ? (props) => <Icon name={icon} size={iconSize} />
            : undefined
        }
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      {view}
    </Card>
  );
};

const styles = StyleSheet.create({
  body: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "white",
    marginVertical: 5,
  },
  title: { fontSize: 25, fontWeight: "bold" },
  subtitle: { fontSize: 15, color: "gray" },
});

export default CardUI;
