import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { useState } from "react";
import { Stack } from "expo-router";
import React from "react";
import Button from "@components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  // Si no existe, muestra un mensaje de error
  if (!product) {
    return <Text>Product not found</Text>;
  }

  const addToCart = () => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log(`Product ${product.name} with size ${selectedSize} added to cart`);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={{ fontWeight: "bold" }}>Select Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              { backgroundColor: selectedSize === size ? "#5454ff8f" : "#eee" },
            ]}
            key={size}
            onTouchEnd={() => setSelectedSize(size)}
          >
            <Text
              style={[
                { color: selectedSize === size ? "#fff" : "#000" },
                { fontWeight: selectedSize === size ? "bold" : "normal" },
              ]}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>{product.price}€</Text>
      <Button text="Add to cart" onPress={addToCart}/>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sizeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  size: {
    backgroundColor: "#5454ff8f",
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
