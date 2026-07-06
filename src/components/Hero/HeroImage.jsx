import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { LuTrendingUp, LuBrain, LuPuzzle, LuFlame, LuZap } from 'react-icons/lu'
import { memo } from 'react'
import ChessBoard from './ChessBoard'
import FloatingCard from './FloatingCard'

const CARDS = [
  {
    icon: LuTrendingUp,
    title: 'Rating Gain',
    value: '+120 ELO',
    color: 'green.400',
    delay: '0s',
    position: { top: '-24px', left: '-52px' },
  },
  {
    icon: LuBrain,
    title: 'AI Coach',
    value: 'Active Now',
    color: 'violet.400',
    delay: '0.3s',
    position: { top: '20px', right: '-58px' },
  },
  {
    icon: LuPuzzle,
    title: 'Daily Puzzle',
    value: 'Solved! ✓',
    color: 'yellow.400',
    delay: '0.6s',
    position: { bottom: '90px', right: '-62px' },
  },
  {
    icon: LuFlame,
    title: 'Win Streak',
    value: '7 Games',
    color: 'orange.400',
    delay: '0.2s',
    position: { bottom: '20px', left: '-52px' },
  },
  {
    icon: LuZap,
    title: 'Live Match',
    value: 'In Progress',
    color: 'cyan.400',
    delay: '0.4s',
    position: { top: '42%', left: '-58px' },
  },
]

function HeroImage() {
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      animation="fadeIn 0.8s ease both"
      w={{ base: 'full', lg: 'auto' }}
      style={{ willChange: 'opacity' }}
    >
      {/* Outer glow ring */}
      <Box
        position="absolute"
        w={{ base: '340px', md: '460px' }}
        h={{ base: '340px', md: '460px' }}
        rounded="full"
        bg="radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)"
        animation="pulseGlow 6s ease infinite"
        pointerEvents="none"
        zIndex="0"
        style={{ willChange: 'opacity, transform' }}
      />
      {/* Inner glow */}
      <Box
        position="absolute"
        w={{ base: '220px', md: '280px' }}
        h={{ base: '220px', md: '280px' }}
        rounded="full"
        bg="radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)"
        animation="pulseGlow 6s ease 1.5s infinite"
        pointerEvents="none"
        zIndex="0"
        style={{ willChange: 'opacity, transform' }}
      />

      {/* Board wrapper with float animation */}
      <Box
        position="relative"
        animation="floatUp 5s ease-in-out infinite"
        zIndex="1"
        mt={{ base: '8', lg: '0' }}
        mx={{ base: '8', lg: '14' }}
        style={{ willChange: 'transform' }}
      >
        <ChessBoard />

        {/* Floating cards - desktop only */}
        <Box display={{ base: 'none', xl: 'block' }}>
          {CARDS.map((card) => (
            <FloatingCard key={card.title} {...card} />
          ))}
        </Box>
      </Box>

      {/* Mobile mini-cards row */}
      <Flex
        display={{ base: 'flex', xl: 'none' }}
        position="absolute"
        bottom="-56px"
        left="0"
        right="0"
        justifyContent="center"
        gap="2.5"
        flexWrap="wrap"
        px="4"
      >
        {CARDS.slice(0, 3).map((card) => (
          <Flex
            key={card.title}
            align="center"
            gap="2"
            px="3"
            py="2"
            bg="rgba(10,14,30,0.85)"
            backdropFilter="blur(12px)"
            border="1px solid rgba(108,99,255,0.2)"
            rounded="xl"
            animation={`floatCard 4s ease-in-out ${card.delay} infinite`}
            style={{ willChange: 'transform' }}
          >
            <Icon as={card.icon} boxSize="3.5" color={card.color} />
            <Text fontSize="2xs" color="gray.300" fontWeight="semibold">
              {card.value}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}

export default memo(HeroImage)
