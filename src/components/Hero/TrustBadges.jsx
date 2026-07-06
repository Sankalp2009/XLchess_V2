import { Flex, Text, Icon, HStack } from '@chakra-ui/react'
import { memo } from 'react'
import { LuStar, LuUsers, LuBookOpen, LuPuzzle } from 'react-icons/lu'

const BADGES = [
  { icon: LuStar, label: '4.9 Rating', stars: true },
  { icon: LuUsers, label: '25,000+ Players', stars: false },
  { icon: LuBookOpen, label: '500+ Lessons', stars: false },
  { icon: LuPuzzle, label: 'Daily Puzzles', stars: false },
]

function TrustBadges() {
  return (
    <Flex gap={{ base: '2.5', sm: '3' }} flexWrap="wrap" align="center">
      {BADGES.map(({ icon, label, stars }) => (
        <Flex
          key={label}
          align="center"
          gap="2"
          px="3.5"
          py="2"
          rounded="full"
          bg="rgba(108,99,255,0.08)"
          border="1px solid rgba(108,99,255,0.18)"
          backdropFilter="blur(8px)"
          _hover={{
            bg: 'rgba(108,99,255,0.15)',
            borderColor: 'rgba(108,99,255,0.35)',
          }}
          transition="all 0.2s"
          cursor="default"
        >
          <Icon as={icon} boxSize="3.5" color="violet.400" />
          {stars ? (
            <HStack gap="1" display="inline-flex">
              <Text
                as="span"
                color="yellow.300"
                fontSize="2xs"
                letterSpacing="tight"
              >
                ★★★★★
              </Text>
              <Text fontSize="xs" fontWeight="medium" color="gray.300">
                {label}
              </Text>
            </HStack>
          ) : (
            <Text fontSize="xs" fontWeight="medium" color="gray.300">
              {label}
            </Text>
          )}
        </Flex>
      ))}
    </Flex>
  )
}

export default memo(TrustBadges)
