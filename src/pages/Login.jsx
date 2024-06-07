import { Container, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  if (session) {
    navigate("/");
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Login</Heading>
        <Box width="100%">
          <SupabaseAuthUI />
        </Box>
        <Button as={Link} to="/" variant="link">Go to Home</Button>
      </VStack>
    </Container>
  );
};

export default Login;