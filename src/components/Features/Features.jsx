import { Box, Container, Grid, Heading, Text, VStack, Flex, Icon } from '@chakra-ui/react'
import {
  LuBrain,
  LuSwords,
  LuPuzzle,
  LuBookOpen,
  LuTrendingUp,
  LuUsers,
} from 'react-icons/lu'

const FEATURES = [
  {
    icon: LuBrain,
    title: 'AI Coach',
    description: 'Get real-time feedback from our AI engine. Analyze mistakes instantly and learn the optimal moves after every game.',
    gradient: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(108,99,255,0.05))',
    iconColor: 'violet.400',
    glow: 'rgba(108,99,255,0.3)',
  },
  {
    icon: LuSwords,
    title: 'Live Matches',
    description: 'Challenge players worldwide in rated games across Bullet, Blitz, Rapid, and Classical time controls.',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))',
    iconColor: 'blue.400',
    glow: 'rgba(59,130,246,0.3)',
  },
  {
    icon: LuPuzzle,
    title: 'Daily Puzzles',
    description: 'Sharpen your tactics with hand-curated puzzles ranging from beginner mate-in-ones to grandmaster-level studies.',
    gradient: 'linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,179,8,0.05))',
    iconColor: 'yellow.400',
    glow: 'rgba(234,179,8,0.3)',
  },
  {
    icon: LuBookOpen,
    title: '500+ Lessons',
    description: 'Master openings, endgames, and positional play through structured video lessons and interactive exercises.',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))',
    iconColor: 'green.400',
    glow: 'rgba(34,197,94,0.3)',
  },
  {
    icon: LuTrendingUp,
    title: 'ELO Tracking',
    description: 'Watch your rating climb with detailed performance graphs, win/loss analytics, and opening repertoire stats.',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
    iconColor: 'orange.400',
    glow: 'rgba(249,115,22,0.3)',
  },
  {
    icon: LuUsers,
    title: 'Community',
    description: 'Join clubs, participate in tournaments, and connect with 25,000+ chess enthusiasts from around the world.',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.05))',
    iconColor: 'pink.400',
    glow: 'rgba(236,72,153,0.3)',
  },
]

function FeatureCard({ icon, title, description, gradient, iconColor, glow }) {
  return (
    <Box
      bg={gradient}
      border="1px solid rgba(255,255,255,0.06)"
      rounded="2xl"
      p={{ base: '6', md: '7' }}
      position="relative"
      overflow="hidden"
      backdropFilter="blur(12px)"
      transition="all 0.3s ease"
      _hover={{
        border: '1px solid rgba(255,255,255,0.12)',
        transform: 'translateY(-4px)',
        shadow: `0 20px 60px ${glow}`,
      }}
      role="article"
    >
      {/* Background glow blob */}
      <Box
        position="absolute"
        top="-30px"
        right="-30px"
        w="120px"
        h="120px"
        rounded="full"
        bg={`radial-gradient(circle, ${glow} 0%, transparent 70%)`}
        pointerEvents="none"
        opacity="0.5"
      />

      <VStack align="flex-start" gap="4" position="relative" zIndex="1">
        <Box
          w="12"
          h="12"
          rounded="xl"
          bg="rgba(255,255,255,0.05)"
          border="1px solid rgba(255,255,255,0.08)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          shadow={`0 0 20px ${glow}`}
        >
          <Icon as={icon} boxSize="5" color={iconColor} />
        </Box>
        <Heading as="h3" fontSize="lg" fontWeight="bold" color="white">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.400" lineHeight="tall">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box
      as="section"
      position="relative"
      py={{ base: '20', md: '28' }}
      overflow="hidden"
      aria-labelledby="features-heading"
    >
      {/* Section background glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="800px"
        h="400px"
        rounded="full"
        bg="radial-gradient(ellipse, rgba(108,99,255,0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="1280px" position="relative" zIndex="1">
        {/* Header */}
        <VStack gap="5" mb={{ base: '14', md: '16' }} textAlign="center">
          <Flex
            align="center"
            gap="2.5"
            px="4"
            py="2"
            rounded="full"
            bg="rgba(108,99,255,0.1)"
            border="1px solid rgba(108,99,255,0.25)"
            display="inline-flex"
          >
            <Text fontSize="xs" fontWeight="semibold" color="violet.300" letterSpacing="wider" textTransform="uppercase">
              Everything You Need
            </Text>
          </Flex>

          <Heading
            id="features-heading"
            as="h2"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="black"
            color="white"
            lineHeight="shorter"
            letterSpacing="tight"
            maxW="600px"
          >
            Built to Make You{' '}
            <Box as="span" bgGradient="to-r" gradientFrom="green.400" gradientTo="purple.300" bgClip="text">
              a Better Player
            </Box>
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400" maxW="500px" lineHeight="tall">
            Every tool you need to go from beginner to grandmaster, all in one place.
          </Text>
        </VStack>

        {/* Feature grid */}
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={{ base: '4', md: '5' }}
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </Grid>

        {/* Bottom CTA strip */}
        <Box
          mt={{ base: '16', md: '20' }}
          p={{ base: '8', md: '10' }}
          rounded="2xl"
          bg="linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(72,64,192,0.08) 100%)"
          border="1px solid rgba(108,99,255,0.2)"
          display="flex"
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          justifyContent="space-between"
          gap="6"
        >
          <Box>
            <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="white" mb="2">
              Ready to Excel at Chess?
            </Heading>
            <Text fontSize="md" color="gray.400">
              Join 25,000+ players. No credit card required.
            </Text>
          </Box>
          <Box
            as="a"
            href="#"
            bg="linear-gradient(135deg, #6C63FF, #4840c0)"
            color="white"
            fontWeight="semibold"
            fontSize="md"
            px="8"
            py="4"
            rounded="xl"
            shadow="0 8px 30px rgba(108,99,255,0.4)"
            _hover={{ shadow: '0 12px 40px rgba(108,99,255,0.6)', transform: 'translateY(-2px)' }}
            transition="all 0.25s"
            textDecoration="none"
            display="inline-block"
            whiteSpace="nowrap"
            flexShrink="0"
          >
            Start for Free →
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
