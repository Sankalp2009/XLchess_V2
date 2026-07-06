import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <Box bg="#0B1023" minH="100vh" color="white">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </Box>
  )
}
