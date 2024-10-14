import { Flex, Image } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Flex justifyContent="flex-end" fontFamily="copperplate">
        <Flex flexDirection="column">
          <Flex justifyContent="flex-end">
            <Image src="/cs-dark.png" width={100} />
          </Flex>
          <Flex>Collings And Schutte</Flex>
          <Flex justifyContent="flex-end">Construction Ltd</Flex>
          <Flex justifyContent="flex-end"><Image src="LBP2.png" w={150}/></Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
