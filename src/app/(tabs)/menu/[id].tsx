import { View, Text, Image, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const  {id} = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

  // Si no existe, muestra un mensaje de error
  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.price}>{product.price}€</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {},
});