import { View, Text, Pressable } from "react-native";

export default MealItem = ({ title }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
