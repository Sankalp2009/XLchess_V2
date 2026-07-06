import { Box, Container, Flex } from '@chakra-ui/react'
import { memo } from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      pt={{ base: '28', md: '24' }}
      pb={{ base: '36', md: '20' }}
      aria-label="Hero section"
    >
      {/* Grid mesh background */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        zIndex="0"
        css={{
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial highlight top-center */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        zIndex="0"
        css={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(108,99,255,0.14) 0%, transparent 65%)',
        }}
      />

      {/* Left side glow */}
      <Box
        position="absolute"
        left="-10%"
        top="20%"
        w="500px"
        h="500px"
        rounded="full"
        bg="radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)"
        pointerEvents="none"
        zIndex="0"
      />

      {/* Bottom fade to next section */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="180px"
        pointerEvents="none"
        zIndex="0"
        css={{
          background: 'linear-gradient(to top, #0B1023 0%, transparent 100%)',
        }}
      />

      <Container maxW="1280px" position="relative" zIndex="1">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: '14', lg: '10' }}
        >
          <HeroContent />
          <HeroImage />
        </Flex>
      </Container>
    </Box>
  )
}

export default memo(Hero)
