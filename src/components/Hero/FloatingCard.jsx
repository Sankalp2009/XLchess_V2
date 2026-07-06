import { Box, Flex, Text, Icon } from '@chakra-ui/react'

export default function FloatingCard({ icon, title, value, color = 'violet.400', delay = '0s', position = {} }) {
  return (
    <Box
      position="absolute"
      {...position}
      bg="rgba(10,14,30,0.82)"
      backdropFilter="blur(20px)"
      border="1px solid rgba(108,99,255,0.22)"
      rounded="2xl"
      px="4"
      py="3.5"
      shadow="0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
      animation={`floatCard 4.5s ease-in-out ${delay} infinite`}
      zIndex="2"
      minW="148px"
      transition="border-color 0.2s, transform 0.2s"
      _hover={{ borderColor: 'rgba(108,99,255,0.5)', transform: 'scale(1.04)' }}
    >
      <Flex align="center" gap="3">
        <Box
          w="9"
          h="9"
          rounded="xl"
          bg="rgba(108,99,255,0.12)"
          border="1px solid rgba(108,99,255,0.25)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink="0"
        >
          <Icon as={icon} boxSize="4" color={color} />
        </Box>
        <Box>
          <Text fontSize="2xs" color="gray.600" fontWeight="medium" letterSpacing="wide" textTransform="uppercase">
            {title}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="white" lineHeight="1.3" mt="0.5">
            {value}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
