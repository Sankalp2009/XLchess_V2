import { Box, Container, Flex, Grid, Heading, Text, Link, VStack, HStack, Icon, Separator } from '@chakra-ui/react'
import { LuGithub, LuTwitter, LuYoutube, LuTwitch } from 'react-icons/lu'

const LINKS = {
  Play: ['Quick Game', 'vs Computer', 'Tournaments', 'Puzzles'],
  Learn: ['Lessons', 'Openings', 'Endgames', 'Video Library'],
  Community: ['Forums', 'Clubs', 'Leaderboard', 'Blog'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
}

const SOCIALS = [
  { icon: LuTwitter,  href: '#', label: 'Twitter'  },
  { icon: LuYoutube,  href: '#', label: 'YouTube'  },
  { icon: LuTwitch,   href: '#', label: 'Twitch'   },
  { icon: LuGithub,   href: '#', label: 'GitHub'   },
]

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      borderTop="1px solid rgba(108,99,255,0.12)"
      pt={{ base: '14', md: '20' }}
      pb="10"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle top glow */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="600px"
        h="1px"
        bg="linear-gradient(90deg, transparent, rgba(108,99,255,0.4), transparent)"
        pointerEvents="none"
      />

      <Container maxW="1280px">
        <Grid
          templateColumns={{ base: '1fr', md: 'auto 1fr' }}
          gap={{ base: '10', md: '16' }}
          mb={{ base: '12', md: '16' }}
        >
          {/* Brand */}
          <VStack align="flex-start" gap="5" maxW="260px">
            <Flex align="center" gap="3" as="a" href="#" textDecoration="none" aria-label="XLChess">
              <Box
                w="38px"
                h="38px"
                bg="linear-gradient(135deg, #6C63FF, #4840c0)"
                rounded="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                shadow="0 0 20px rgba(108,99,255,0.4)"
                flexShrink="0"
              >
                <Text fontSize="xl" role="img" aria-label="chess knight">♞</Text>
              </Box>
              <Box>
                <Text fontWeight="black" fontSize="lg" letterSpacing="wider" color="white" lineHeight="1">XLCHESS</Text>
                <Text fontSize="2xs" color="violet.400" letterSpacing="widest" lineHeight="1.2" mt="0.5">Excel at Chess</Text>
              </Box>
            </Flex>
            <Text fontSize="sm" color="gray.500" lineHeight="tall">
              The world's most advanced chess training platform, powered by AI.
            </Text>
            <HStack gap="3">
              {SOCIALS.map(({ icon, href, label }) => (
                <Box
                  key={label}
                  as="a"
                  href={href}
                  aria-label={label}
                  w="9"
                  h="9"
                  rounded="lg"
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(255,255,255,0.07)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                  _hover={{ color: 'white', bg: 'rgba(108,99,255,0.15)', borderColor: 'rgba(108,99,255,0.35)' }}
                  transition="all 0.2s"
                >
                  <Icon as={icon} boxSize="4" />
                </Box>
              ))}
            </HStack>
          </VStack>

          {/* Link columns */}
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
            gap={{ base: '8', md: '6' }}
          >
            {Object.entries(LINKS).map(([category, items]) => (
              <VStack key={category} align="flex-start" gap="3">
                <Heading as="h4" fontSize="xs" fontWeight="semibold" color="gray.300" letterSpacing="wider" textTransform="uppercase">
                  {category}
                </Heading>
                {items.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ color: 'gray.300', textDecoration: 'none' }}
                    transition="color 0.2s"
                  >
                    {item}
                  </Link>
                ))}
              </VStack>
            ))}
          </Grid>
        </Grid>

        <Separator borderColor="rgba(255,255,255,0.06)" mb="6" />

        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align="center"
          justify="space-between"
          gap="4"
          textAlign={{ base: 'center', sm: 'left' }}
        >
          <Text fontSize="xs" color="gray.700">
            © {new Date().getFullYear()} XLChess. All rights reserved.
          </Text>
          <HStack gap="6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                fontSize="xs"
                color="gray.700"
                _hover={{ color: 'gray.400', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {item}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
