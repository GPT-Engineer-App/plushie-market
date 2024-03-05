import React from "react";
import { Box, Flex, Grid, Heading, Text, Button, Image, VStack, useColorModeValue, Container } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const plushies = [
  { id: 1, name: "Teddy Bear", price: "29.99", image: 'https://images.unsplash.com/photo-1564470939458-1289338e2d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXIlMjBwbHVzaGllfGVufDB8fHx8MTcwOTYzMzEwOHww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: "Rabbit", price: "19.99", image: 'https://images.unsplash.com/photo-1652636347412-46f47856f540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBwbHVzaGllfGVufDB8fHx8MTcwOTYzMzEwOXww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 3, name: "Unicorn", price: "24.99", image: 'https://images.unsplash.com/photo-1564470939458-1289338e2d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bmljb3JuJTIwcGx1c2hpZXxlbnwwfHx8fDE3MDk2MzMxMDl8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 4, name: "Dragon", price: "34.99", image: 'https://images.unsplash.com/photo-1616262373426-18bfa28bafab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBwbHVzaGllfGVufDB8fHx8MTcwOTYzMzEwOXww&ixlib=rb-4.0.3&q=80&w=1080' },
  // ... add more plushies as needed
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");

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
