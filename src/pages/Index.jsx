import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, Heading, Text, Button, Image, VStack, useColorModeValue, Container } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

// Simulate a fetch plushies API call
const fetchPlushies = () => {
  return Promise.resolve([{ id: 1, name: "Teddy Bear", price: "29.99", image: "https://images.unsplash.com/photo-1564470939458-1289338e2d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXIlMjBwbHVzaGllfGVufDB8fHx8MTcwOTYzMzEwOHww&ixlib=rb-4.0.3&q=80&w=1080" }]);
};

const login = (username, password) => {
  console.log("Logging in", username, password);
  return Promise.resolve({ token: "fake-jwt-token" });
};

const Index = () => {
  const [plushies, setPlushies] = useState([]);
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");

  useEffect(() => {
    fetchPlushies().then((data) => {
      setPlushies(data);
    });
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={6} textAlign="center">
        Plushie Store
      </Heading>

      <Flex justifyContent="center" mb={6}>
        <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid">
          Search Plushies
        </Button>
      </Flex>

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {plushies.map((plushie) => (
          <Box key={plushie.id} bg={bg} color={color} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={plushie.image} alt={plushie.name} borderRadius="lg" mb={4} />
            <VStack>
              <Heading size="md">{plushie.name}</Heading>
              <Text fontWeight="bold">${plushie.price}</Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="pink" variant="solid">
                Add to Cart
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
