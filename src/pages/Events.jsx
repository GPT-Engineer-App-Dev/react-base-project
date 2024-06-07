import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Events = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Events</Heading>
        <Button as="a" href="/" colorScheme="teal" variant="outline">Home</Button>
      </Flex>
      {/* Add your events content here */}
    </Box>
  );
};

export default Events;