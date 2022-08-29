import { View, Text, Pressable, Image } from "react-native";

export default MealItem = ({ title, imageUrl }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
