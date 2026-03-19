import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WhyChooseUs from './pages/WhyChooseUs'
import Booking from './pages/Booking'

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/access': Services,
  '/why-choose-us': WhyChooseUs,
  '/booking': Booking,
  '/bookings': Booking,
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  const knownPaths = Object.keys(routes).filter((path) => path !== '/')
  const matchedPath = knownPaths.find((path) => pathname === path || pathname.endsWith(path))

  return matchedPath ?? '/'
}

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (normalizePath(window.location.pathname) !== pathname) {
      window.history.replaceState({}, '', pathname)
    }
  }, [pathname])

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath)
    window.history.pushState({}, '', normalized)
    setPathname(normalized)
  }

  const ActivePage = routes[pathname] ?? Home

  return (
    <div className="app">
      <Header currentPath={pathname} navigate={navigate} />
      <main className="page-main">
        <ActivePage navigate={navigate} />
      </main>
      <Footer />
    </div>
  )
}

export default App
