import { View, Text } from "react-native";

export default MealDetailScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text>{catId}</Text>
    </View>
  );
};
