import { View, Text, StyleSheet } from "react-native";

export default Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
