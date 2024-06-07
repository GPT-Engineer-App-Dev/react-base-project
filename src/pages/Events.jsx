import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  if (!session) {
    navigate("/login");
    return null;
  }

  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Events</Heading>
        <Button onClick={logout} colorScheme="teal" variant="outline">Logout</Button>
      </Flex>
    </Box>
  );
};

export default Events;