import { Box, Text, Icon } from '@chakra-ui/react'
import { memo } from 'react'
import { LuPlay } from 'react-icons/lu'

function CTAButton({
  children,
  variant = 'primary',
  href = '#',
  icon = false,
  onClick,
}) {
  const isPrimary = variant === 'primary'

  return (
    <Box
      as="a"
      href={href}
      onClick={onClick}
      role="button"
      display="inline-flex"
      alignItems="center"
      gap="2.5"
      px={{ base: '6', md: '7' }}
      py={{ base: '3.5', md: '4' }}
      rounded="xl"
      fontWeight="semibold"
      fontSize={{ base: 'sm', md: 'md' }}
      letterSpacing="wide"
      textDecoration="none"
      transition="all 0.25s cubic-bezier(0.4,0,0.2,1)"
      cursor="pointer"
      position="relative"
      overflow="hidden"
      {...(isPrimary
        ? {
            bg: 'linear-gradient(135deg, #6C63FF 0%, #4840c0 100%)',
            color: 'white',
            shadow: '0 8px 32px rgba(108,99,255,0.4)',
            _hover: {
              shadow: '0 14px 44px rgba(108,99,255,0.65)',
              transform: 'translateY(-3px)',
            },
            _active: { transform: 'translateY(0px)' },
          }
        : {
            bg: 'transparent',
            color: 'white',
            border: '1.5px solid rgba(108,99,255,0.4)',
            backdropFilter: 'blur(8px)',
            _hover: {
              borderColor: 'rgba(108,99,255,0.8)',
              bg: 'rgba(108,99,255,0.1)',
              shadow: '0 6px 24px rgba(108,99,255,0.2)',
              transform: 'translateY(-3px)',
            },
            _active: { transform: 'translateY(0px)' },
          })}
      focusVisibleRing="outside"
    >
      {icon && (
        <Box
          w="7"
          h="7"
          rounded="full"
          bg="rgba(255,255,255,0.15)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink="0"
        >
          <Icon as={LuPlay} boxSize="3" fill="currentColor" />
        </Box>
      )}
      <Text as="span">{children}</Text>
    </Box>
  )
}

export default memo(CTAButton)
