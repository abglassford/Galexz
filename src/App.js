import { Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Flex
      justify="center"
      bgColor="gray.800"
      height="100vh"
      direction="column"
      align="center"
    >
      <Card width="30rem" height="18rem" align="center">
        <Heading
          color="white"
          size="4xl"
          bgColor="red"
          width="100%"
          align="center"
          borderTopRadius="5px"
        >
          Hello!
        </Heading>
        <Heading
          color="white"
          size="l2"
          bgColor="red"
          width="100%"
          align="center"
        >
          my name is
        </Heading>
        <CardBody padding={2}>
          <Heading
            fontFamily="Reydex"
            fontSize="7em"
            className="-skew-y-6 transform-gpu"
          >
            Alex G.
          </Heading>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default App;
