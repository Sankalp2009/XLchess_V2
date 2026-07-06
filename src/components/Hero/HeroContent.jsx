import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { memo } from 'react'
import CTAButton from './CTAButton'
import TrustBadges from './TrustBadges'

function HeroContent() {
  return (
    <VStack
      align="flex-start"
      gap={{ base: '7', md: '8' }}
      maxW={{ base: 'full', lg: '580px' }}
      animation="slideUp 0.6s ease both"
      style={{ willChange: 'transform' }}
    >
      {/* Eyebrow badge */}
      <Flex
        align="center"
        gap="2.5"
        px="4"
        py="2"
        rounded="full"
        bg="rgba(108,99,255,0.1)"
        border="1px solid rgba(108,99,255,0.3)"
        backdropFilter="blur(8px)"
        animation="fadeIn 0.5s ease both"
        display="inline-flex"
        w="fit-content"
        style={{ willChange: 'opacity' }}
      >
        <Box
          w="6px"
          h="6px"
          rounded="full"
          bg="violet.400"
          shadow="0 0 10px rgba(108,99,255,0.9)"
          animation="pulse 2s ease infinite"
          flexShrink="0"
          style={{ willChange: 'box-shadow' }}
        />
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color="violet.300"
          letterSpacing="wider"
          textTransform="uppercase"
        >
          AI-Powered Chess Training
        </Text>
      </Flex>

      {/* Main Heading */}
      <Heading
        as="h1"
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
        fontWeight="black"
        lineHeight="shorter"
        letterSpacing="tight"
        color="white"
        animation="slideUp 0.6s ease both"
        style={{ willChange: 'transform' }}
      >
        Master The Future of Chess
        <Box
          as="span"
          display="block"
          bgGradient="to-r"
          gradientFrom="violet.400"
          gradientTo="purple.300"
          bgClip="text"
        >
          Smarter Faster
        </Box>
      </Heading>

      {/* Description */}
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        color="gray.400"
        lineHeight="tall"
        maxW="460px"
        animation="fadeIn 0.5s ease 0.1s both"
        style={{ willChange: 'opacity' }}
      >
        Learn, compete, solve puzzles, and improve with AI-powered training.
        Join{' '}
        <Box as="span" color="violet.300" fontWeight="semibold">
          25,000+ players
        </Box>{' '}
        who leveled up their game on XLChess.
      </Text>

      {/* CTA Row */}
      <Flex
        gap={{ base: '3', sm: '4' }}
        flexWrap="wrap"
        align="center"
        animation="fadeIn 0.5s ease 0.15s both"
        style={{ willChange: 'opacity' }}
      >
        <CTAButton variant="primary">Start Playing Free</CTAButton>
        <CTAButton variant="secondary" icon>
          Watch Demo
        </CTAButton>
      </Flex>

      {/* Trust Badges */}
      <Box animation="slideUp 0.7s ease 0.45s both">
        <TrustBadges />
      </Box>
    </VStack>
  )
}

export default memo(HeroContent)
