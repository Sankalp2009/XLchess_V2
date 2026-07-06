import { Box, Grid, Text, Flex, Button  } from '@chakra-ui/react'
import { useState, memo, useMemo, useCallback, useEffect } from 'react'

const INITIAL_BOARD = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', null, '♟', '♟', '♟'],
  [null, null, null, null, '♟', null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, '♙', null, null, null],
  [null, null, '♘', null, null, null, null, null],
  ['♙', '♙', null, '♙', null, '♙', '♙', '♙'],
  ['♖', null, '♗', '♕', '♔', '♗', null, '♖'],
]

const BLACK_PIECES = new Set(['♜', '♞', '♝', '♛', '♚', '♟'])

const getRandomMove = (board) => {
  const possibleFrom = []
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (board[r][c]) {
        possibleFrom.push([r, c])
      }
    }
  }
  if (possibleFrom.length === 0) return null
  const [fr, fc] = possibleFrom[Math.floor(Math.random() * possibleFrom.length)]
  const possibleTo = []
  for (let r = Math.max(0, fr - 2); r <= Math.min(7, fr + 2); r++) {
    for (let c = Math.max(0, fc - 2); c <= Math.min(7, fc + 2); c++) {
      if ((r !== fr || c !== fc) && !board[r][c]) {
        possibleTo.push([r, c])
      }
    }
  }
  if (possibleTo.length === 0) return null
  const [tr, tc] = possibleTo[Math.floor(Math.random() * possibleTo.length)]
  return [
    [fr, fc],
    [tr, tc],
  ]
}

const makeMove = (board, from, to) => {
  const newBoard = board.map((row) => [...row])
  newBoard[to[0]][to[1]] = newBoard[from[0]][from[1]]
  newBoard[from[0]][from[1]] = null
  return newBoard
}

const getSquareBg = (row, col, lastMove, selected, hovered) => {
  const isLight = (row + col) % 2 === 0
  const isLastMove =
    lastMove &&
    ((lastMove[0][0] === row && lastMove[0][1] === col) ||
      (lastMove[1][0] === row && lastMove[1][1] === col))
  const isSelected = selected && selected[0] === row && selected[1] === col
  const isHovered = hovered && hovered[0] === row && hovered[1] === col

  if (isSelected)
    return isLight ? 'rgba(250,220,60,0.85)' : 'rgba(200,170,30,0.85)'
  if (isLastMove)
    return isLight ? 'rgba(240,215,80,0.7)' : 'rgba(185,195,60,0.65)'
  if (isHovered)
    return isLight ? 'rgba(245,240,170,0.9)' : 'rgba(195,210,100,0.8)'
  return isLight ? 'rgba(238,220,186,0.92)' : 'rgba(105,138,95,0.88)'
}

const ChessBoardSquare = memo(
  ({
    rowIdx,
    colIdx,
    piece,
    hovered,
    setHovered,
    lastMove,
    selected,
    onClick,
  }) => {
    const bg = useMemo(
      () => getSquareBg(rowIdx, colIdx, lastMove, selected, hovered),
      [rowIdx, colIdx, lastMove, selected, hovered]
    )
    const isBlack = piece && BLACK_PIECES.has(piece)
    const handleMouseEnter = useCallback(
      () => setHovered([rowIdx, colIdx]),
      [rowIdx, colIdx, setHovered]
    )

    return (
      <Box
        bg={bg}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        cursor={piece ? 'pointer' : 'default'}
        transition="background 0.12s"
        onMouseEnter={handleMouseEnter}
        onClick={() => onClick([rowIdx, colIdx])}
      >
        {colIdx === 0 && (
          <Text
            position="absolute"
            top="1px"
            left="2px"
            fontSize="6px"
            fontWeight="bold"
            lineHeight="1"
            userSelect="none"
            color={
              (rowIdx + colIdx) % 2 === 0
                ? 'rgba(105,138,95,0.7)'
                : 'rgba(238,220,186,0.7)'
            }
          >
            {8 - rowIdx}
          </Text>
        )}
        {rowIdx === 7 && (
          <Text
            position="absolute"
            bottom="1px"
            right="2px"
            fontSize="6px"
            fontWeight="bold"
            lineHeight="1"
            userSelect="none"
            color={
              (rowIdx + colIdx) % 2 === 0
                ? 'rgba(105,138,95,0.7)'
                : 'rgba(238,220,186,0.7)'
            }
          >
            {String.fromCharCode(97 + colIdx)}
          </Text>
        )}
        {piece && (
          <Text
            fontSize={{ base: '2xl', sm: '2xl', md: '3xl' }}
            lineHeight="1"
            userSelect="none"
            role="img"
            aria-label="chess piece"
            css={{
              color: isBlack ? '#1a1a2e' : '#f5f5f5',
              textShadow: isBlack
                ? '0 1px 3px rgba(0,0,0,0.7)'
                : '0 1px 4px rgba(0,0,0,0.9)',
              filter:
                hovered && hovered[0] === rowIdx && hovered[1] === colIdx
                  ? 'drop-shadow(0 0 8px rgba(108,99,255,0.9))'
                  : 'none',
              transition: 'filter 0.12s',
            }}
          >
            {piece}
          </Text>
        )}
      </Box>
    )
  }
)

ChessBoardSquare.displayName = 'ChessBoardSquare'

function ChessBoard() {
  const [hovered, setHovered] = useState(null)
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [selected, setSelected] = useState(null)
  const [lastMove, setLastMove] = useState(null)
  const [isAutomatic, setIsAutomatic] = useState(true)
  const [moveCount, setMoveCount] = useState(18)

  const handleMouseLeave = useCallback(() => setHovered(null), [])

  const handleSquareClick = useCallback(
    (pos) => {
      if (isAutomatic) return
      if (board[pos[0]][pos[1]]) {
        setSelected(pos)
      } else if (selected) {
        const newBoard = makeMove(board, selected, pos)
        setBoard(newBoard)
        setLastMove([selected, pos])
        setSelected(null)
        setMoveCount(moveCount + 1)
      }
    },
    [board, selected, isAutomatic, moveCount]
  )

  useEffect(() => {
    if (!isAutomatic) return
    const interval = setInterval(() => {
      const move = getRandomMove(board)
      if (move) {
        const newBoard = makeMove(board, move[0], move[1])
        setBoard(newBoard)
        setLastMove(move)
        setMoveCount((c) => c + 1)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [isAutomatic, board])

  return (
    <Box
      position="relative"
      rounded="2xl"
      overflow="hidden"
      shadow="0 0 80px rgba(108,99,255,0.3), 0 20px 60px rgba(0,0,0,0.5)"
      border="1.5px solid rgba(108,99,255,0.25)"
      transition="box-shadow 0.3s ease, transform 0.3s ease"
      _hover={{
        shadow: '0 0 100px rgba(108,99,255,0.45), 0 20px 70px rgba(0,0,0,0.55)',
        transform: 'scale(1.015)',
      }}
      onMouseLeave={handleMouseLeave}
    >
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
        <Text
          fontSize="xs"
          color="gray.500"
          fontWeight="medium"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          Live Match · Move {moveCount}
        </Text>
        <Flex gap="2" align="center">
          <Button
            size="xs"
            variant="ghost"
            colorScheme={isAutomatic ? 'green' : 'gray'}
            onClick={() => setIsAutomatic(!isAutomatic)}
            fontSize="10px"
            px="2"
            py="1"
            h="auto"
          >
            {isAutomatic ? '● Auto' : '○ Manual'}
          </Button>
        </Flex>
      </Box>

      <Box
        bg="rgba(10,14,30,0.92)"
        px="4"
        py="2.5"
        display="flex"
        alignItems="center"
        gap="3"
      >
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
          <Text fontSize="sm" lineHeight="1">
            ♜
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="gray.300" fontWeight="semibold">
            Magnus_K
          </Text>
          <Text fontSize="2xs" color="gray.600">
            ELO 2847
          </Text>
        </Box>
        <Box ml="auto" display="flex" alignItems="center" gap="2">
          <Box
            bg="rgba(108,99,255,0.12)"
            border="1px solid rgba(108,99,255,0.25)"
            px="2.5"
            py="1"
            rounded="md"
          >
            <Text
              fontSize="xs"
              color="violet.300"
              fontWeight="bold"
              fontFamily="mono"
            >
              2:34
            </Text>
          </Box>
        </Box>
      </Box>

      <Grid
        gridTemplateColumns="repeat(8, 1fr)"
        w={{ base: '280px', sm: '320px', md: '360px' }}
        h={{ base: '280px', sm: '320px', md: '360px' }}
      >
        {board.map((row, rowIdx) =>
          row.map((piece, colIdx) => (
            <ChessBoardSquare
              key={`${rowIdx}-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              piece={piece}
              hovered={hovered}
              setHovered={setHovered}
              lastMove={lastMove}
              selected={selected}
              onClick={handleSquareClick}
            />
          ))
        )}
      </Grid>

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
          <Text fontSize="sm" lineHeight="1" color="gray.800">
            ♔
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" color="white" fontWeight="semibold">
            GrandMaster_V
          </Text>
          <Text fontSize="2xs" color="gray.600">
            ELO 2756
          </Text>
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
            <Text
              fontSize="xs"
              color="violet.200"
              fontWeight="bold"
              fontFamily="mono"
            >
              3:12
            </Text>
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
            <Text fontSize="8px" color="white" fontWeight="bold">
              ●
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(ChessBoard)
