import { Box, Flex, HStack, Link, Text, IconButton, Icon } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

const NAV_LINKS = [
  { label: 'Play',    href: '#' },
  { label: 'Learn',   href: '#' },
  { label: 'Puzzles', href: '#' },
  { label: 'Watch',   href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      as="header"
      role="banner"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="banner"
      transition="all 0.3s ease"
      bg={scrolled ? 'rgba(11,16,35,0.95)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(16px)' : 'none'}
      borderBottom={scrolled ? '1px solid rgba(108,99,255,0.15)' : 'none'}
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: '5', md: '8' }}
        py="4"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Flex align="center" gap="3" as="a" href="#" aria-label="XLChess Home" textDecoration="none">
          <Box
            w="38px"
            h="38px"
            bg="linear-gradient(135deg, #6C63FF, #4840c0)"
            rounded="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            shadow="0 0 24px rgba(108,99,255,0.5)"
            flexShrink="0"
          >
            <Text fontSize="xl" lineHeight="1" role="img" aria-label="knight piece">♞</Text>
          </Box>
          <Box>
            <Text fontWeight="black" fontSize="lg" letterSpacing="wider" color="white" lineHeight="1">
              XLCHESS
            </Text>
            <Text fontSize="2xs" color="violet.400" letterSpacing="widest" lineHeight="1.2" mt="0.5">
              Excel at Chess
            </Text>
          </Box>
        </Flex>

        {/* Desktop Nav */}
        <HStack gap="8" display={{ base: 'none', md: 'flex' }} as="nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              color="gray.400"
              fontWeight="medium"
              fontSize="sm"
              letterSpacing="wide"
              _hover={{ color: 'white', textDecoration: 'none' }}
              transition="color 0.2s"
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        {/* Desktop CTAs */}
        <HStack gap="3" display={{ base: 'none', md: 'flex' }}>
          <Link
            href="#"
            color="gray.400"
            fontWeight="medium"
            fontSize="sm"
            px="4"
            py="2"
            rounded="lg"
            _hover={{ color: 'white', bg: 'rgba(108,99,255,0.1)', textDecoration: 'none' }}
            transition="all 0.2s"
          >
            Sign In
          </Link>
          <Box
            as="a"
            href="#"
            bg="linear-gradient(135deg, #6C63FF, #4840c0)"
            color="white"
            fontWeight="semibold"
            fontSize="sm"
            px="5"
            py="2.5"
            rounded="xl"
            shadow="0 4px 18px rgba(108,99,255,0.4)"
            _hover={{ shadow: '0 6px 24px rgba(108,99,255,0.6)', transform: 'translateY(-1px)' }}
            transition="all 0.2s"
            display="inline-block"
            textDecoration="none"
          >
            Get Started
          </Box>
        </HStack>

        {/* Mobile Toggle */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          variant="ghost"
          color="white"
          onClick={() => setMenuOpen((o) => !o)}
          _hover={{ bg: 'rgba(108,99,255,0.15)' }}
        >
          <Icon as={menuOpen ? LuX : LuMenu} boxSize="5" />
        </IconButton>
      </Flex>

      {/* Mobile Drawer */}
      {menuOpen && (
        <Box
          display={{ base: 'block', md: 'none' }}
          bg="rgba(11,16,35,0.98)"
          backdropFilter="blur(16px)"
          borderTop="1px solid rgba(108,99,255,0.15)"
          px="5"
          py="6"
          as="nav"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              display="block"
              color="gray.300"
              fontWeight="medium"
              py="3.5"
              fontSize="md"
              _hover={{ color: 'white', textDecoration: 'none' }}
              borderBottom="1px solid rgba(255,255,255,0.05)"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <HStack gap="3" mt="6">
            <Link
              href="#"
              flex="1"
              textAlign="center"
              color="gray.300"
              fontWeight="medium"
              fontSize="sm"
              py="3"
              rounded="xl"
              border="1px solid rgba(108,99,255,0.3)"
              _hover={{ color: 'white', textDecoration: 'none', borderColor: 'rgba(108,99,255,0.6)' }}
              transition="all 0.2s"
            >
              Sign In
            </Link>
            <Box
              as="a"
              href="#"
              flex="1"
              textAlign="center"
              bg="linear-gradient(135deg, #6C63FF, #4840c0)"
              color="white"
              fontWeight="semibold"
              fontSize="sm"
              py="3"
              rounded="xl"
              textDecoration="none"
              display="block"
            >
              Get Started
            </Box>
          </HStack>
        </Box>
      )}
    </Box>
  )
}
