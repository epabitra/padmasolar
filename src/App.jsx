import { Routes, Route } from 'react-router-dom'
import { useLang } from './i18n.jsx'
import { ui } from './data/site'
import UtilityBar from './components/UtilityBar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { tt } = useLang()

  return (
    <>
      <a href="#main" className="skip-link">
        {tt(ui.skip)}
      </a>
      <UtilityBar />
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
