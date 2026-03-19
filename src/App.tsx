import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Blogs from '@/pages/Blogs'
import BlogPost from '@/pages/BlogPost'
import Experience from '@/pages/Experience'
import Certifications from '@/pages/Certifications'
import Projects from '@/pages/Projects'
import ProjectDetail from '@/pages/ProjectDetail'
import Skills from '@/pages/Skills'
import NotFound from '@/pages/NotFound'

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 5, filter: 'blur(5px)' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-5 sm:px-6 min-h-screen flex flex-col pt-8">
        <main className="flex-1 pb-4">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
              <Route path="/blogs/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
              <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/projects/:slug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  )
}
