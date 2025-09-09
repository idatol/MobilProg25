import { View } from "react-native";
import { productStyles } from "./styles";
import { Image } from "expo-image";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";
const image = "../assets/image.png";

export const ProductCard = () => {
  return (
    <View style={productStyles.card}>
      <ProductName />
      <ProductPrice />
      <Image source={image} style={{ width: 200, height: 200 }} />
      <BuyButton />
    </View>
  );
};