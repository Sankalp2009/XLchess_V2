import { Box, Grid, Text } from '@chakra-ui/react'
import { useState } from 'react'

const BOARD = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', null, '♟', '♟', '♟'],
  [null, null, null, null, '♟', null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, '♙', null, null, null],
  [null, null, '♘', null, null, null, null, null],
  ['♙', '♙', null, '♙', null, '♙', '♙', '♙'],
  ['♖', null, '♗', '♕', '♔', '♗', null, '♖'],
]

const LAST_MOVE = [[6, 2], [5, 2]]
const SELECTED = [4, 4]
const POSSIBLE_MOVES = [[3, 4], [3, 3], [3, 5]]

const BLACK_PIECES = new Set(['♜', '♞', '♝', '♛', '♚', '♟'])

function getSquareBg(row, col, hovered) {
  const isLight = (row + col) % 2 === 0
  const isLastMove = LAST_MOVE.some(([r, c]) => r === row && c === col)
  const isSelected = SELECTED[0] === row && SELECTED[1] === col
  const isHovered = hovered && hovered[0] === row && hovered[1] === col

  if (isSelected) return isLight ? 'rgba(250,220,60,0.85)' : 'rgba(200,170,30,0.85)'
  if (isLastMove) return isLight ? 'rgba(240,215,80,0.7)' : 'rgba(185,195,60,0.65)'
  if (isHovered) return isLight ? 'rgba(245,240,170,0.9)' : 'rgba(195,210,100,0.8)'
  return isLight ? 'rgba(238,220,186,0.92)' : 'rgba(105,138,95,0.88)'
}

function isPossibleMove(row, col) {
  return POSSIBLE_MOVES.some(([r, c]) => r === row && c === col)
}

export default function ChessBoard() {
  const [hovered, setHovered] = useState(null)

  return (
    <Box
      position="relative"
      rounded="2xl"
      overflow="hidden"
      shadow="0 0 80px rgba(108,99,255,0.3), 0 20px 60px rgba(0,0,0,0.5)"
      border="1.5px solid rgba(108,99,255,0.25)"
      transition="box-shadow 0.3s ease, transform 0.3s ease"
      _hover={{ shadow: '0 0 100px rgba(108,99,255,0.45), 0 20px 70px rgba(0,0,0,0.55)', transform: 'scale(1.015)' }}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Window chrome */}
      <Box
        bg="rgba(10,14,30,0.97)"
        px="4"
        py="3"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid rgba(108,99,255,0.12)"
      >
        <Box display="flex" gap="2" alignItems="center">
          <Box w="10px" h="10px" rounded="full" bg="#ff5f57" />
          <Box w="10px" h="10px" rounded="full" bg="#febc2e" />
          <Box w="10px" h="10px" rounded="full" bg="#28c840" />
        </Box>
        <Text fontSize="xs" color="gray.500" fontWeight="medium" letterSpacing="widest" textTransform="uppercase">
          Live Match · Move 18
        </Text>
        <Box
          w="2"
          h="2"
          rounded="full"
          bg="green.400"
          shadow="0 0 6px rgba(74,222,128,0.8)"
          animation="pulse 2s ease infinite"
        />
      </Box>

      {/* Black player */}
      <Box bg="rgba(10,14,30,0.92)" px="4" py="2.5" display="flex" alignItems="center" gap="3">
        <Box
          w="7"
          h="7"
          rounded="full"
          bg="linear-gradient(135deg, #374151, #1f2937)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid rgba(255,255,255,0.1)"
        >
          <Text fontSize="sm" lineHeight="1">♜</Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.300" fontWeight="semibold">Magnus_K</Text>
          <Text fontSize="2xs" color="gray.600">ELO 2847</Text>
        </Box>
        <Box ml="auto" display="flex" alignItems="center" gap="2">
          <Box bg="rgba(108,99,255,0.12)" border="1px solid rgba(108,99,255,0.25)" px="2.5" py="1" rounded="md">
            <Text fontSize="xs" color="violet.300" fontWeight="bold" fontFamily="mono">2:34</Text>
          </Box>
        </Box>
      </Box>

      {/* Board */}
      <Grid
        gridTemplateColumns="repeat(8, 1fr)"
        w={{ base: '280px', sm: '320px', md: '360px' }}
        h={{ base: '280px', sm: '320px', md: '360px' }}
      >
        {BOARD.map((row, rowIdx) =>
          row.map((piece, colIdx) => {
            const bg = getSquareBg(rowIdx, colIdx, hovered)
            const possible = isPossibleMove(rowIdx, colIdx)
            const isBlack = piece && BLACK_PIECES.has(piece)

            return (
              <Box
                key={`${rowIdx}-${colIdx}`}
                bg={bg}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                cursor={piece ? 'pointer' : 'default'}
                transition="background 0.12s"
                onMouseEnter={() => setHovered([rowIdx, colIdx])}
              >
                {/* Coordinate labels */}
                {colIdx === 0 && (
                  <Text
                    position="absolute" top="1px" left="2px"
                    fontSize="6px" fontWeight="bold" lineHeight="1" userSelect="none"
                    color={(rowIdx + colIdx) % 2 === 0 ? 'rgba(105,138,95,0.7)' : 'rgba(238,220,186,0.7)'}
                  >
                    {8 - rowIdx}
                  </Text>
                )}
                {rowIdx === 7 && (
                  <Text
                    position="absolute" bottom="1px" right="2px"
                    fontSize="6px" fontWeight="bold" lineHeight="1" userSelect="none"
                    color={(rowIdx + colIdx) % 2 === 0 ? 'rgba(105,138,95,0.7)' : 'rgba(238,220,186,0.7)'}
                  >
                    {String.fromCharCode(97 + colIdx)}
                  </Text>
                )}

                {/* Piece */}
                {piece && (
                  <Text
                    fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
                    lineHeight="1"
                    userSelect="none"
                    role="img"
                    aria-label={`chess piece`}
                    css={{
                      color: isBlack ? '#1a1a2e' : '#f5f5f5',
                      textShadow: isBlack
                        ? '0 1px 3px rgba(0,0,0,0.7)'
                        : '0 1px 4px rgba(0,0,0,0.9)',
                      filter: hovered && hovered[0] === rowIdx && hovered[1] === colIdx
                        ? 'drop-shadow(0 0 8px rgba(108,99,255,0.9))'
                        : 'none',
                      transition: 'filter 0.12s',
                    }}
                  >
                    {piece}
                  </Text>
                )}

                {/* Possible move dot */}
                {possible && !piece && (
                  <Box
                    w="32%" h="32%"
                    rounded="full"
                    bg="rgba(108,99,255,0.55)"
                    shadow="0 0 10px rgba(108,99,255,0.7)"
                  />
                )}
                {possible && piece && (
                  <Box
                    position="absolute" inset="0"
                    rounded="none"
                    border="3px solid rgba(108,99,255,0.7)"
                    pointerEvents="none"
                  />
                )}
              </Box>
            )
          })
        )}
      </Grid>

      {/* White player */}
      <Box
        bg="rgba(10,14,30,0.92)"
        px="4"
        py="2.5"
        display="flex"
        alignItems="center"
        gap="3"
        borderTop="1px solid rgba(108,99,255,0.1)"
      >
        <Box
          w="7"
          h="7"
          rounded="full"
          bg="linear-gradient(135deg, #e5e7eb, #d1d5db)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid rgba(0,0,0,0.1)"
        >
          <Text fontSize="sm" lineHeight="1" color="gray.800">♔</Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="white" fontWeight="semibold">GrandMaster_V</Text>
          <Text fontSize="2xs" color="gray.600">ELO 2756</Text>
        </Box>
        <Box ml="auto" display="flex" alignItems="center" gap="2">
          <Box
            bg="rgba(108,99,255,0.2)"
            border="1px solid rgba(108,99,255,0.45)"
            px="2.5"
            py="1"
            rounded="md"
            shadow="0 0 12px rgba(108,99,255,0.3)"
          >
            <Text fontSize="xs" color="violet.200" fontWeight="bold" fontFamily="mono">3:12</Text>
          </Box>
          <Box
            w="5"
            h="5"
            rounded="full"
            bg="violet.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            shadow="0 0 10px rgba(108,99,255,0.6)"
          >
            <Text fontSize="8px" color="white" fontWeight="bold">●</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
