import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, HStack, VStack, Text, Icon } from "@chakra-ui/react";
import { FC } from "react";

export const HomeContent: FC = () => {
    return     <HStack
    bgColor="white"
    justifyContent="space-between"
    maxH="3rem"
    minH="3rem"
    minW="100vw"
    p="1rem"
    position="fixed"
    top="0"
    zIndex={'docked'}
  >
    <HStack>
      <Text fontWeight="bold" whiteSpace="nowrap">
        みんなのコーヒー
      </Text>
    </HStack>

    <HStack>
        <PlusSquareIcon  />
    </HStack>
  </HStack>
}