import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServicesProfessionals from './pages/ServicesProfessionals'
import ServicesClients from './pages/ServicesClients'
import WhyChooseUs from './pages/WhyChooseUs'
import Booking from './pages/Booking'
import { translations } from './content/translations'
import brandImage from './assets/image.png'
import { getTransparentBrandLogo } from './utils/brandLogo'

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/services/professionals': ServicesProfessionals,
  '/services/clients': ServicesClients,
  '/access': Services,
  '/why-choose-us': WhyChooseUs,
  '/booking': Booking,
  '/bookings': Booking,
}

const routeCopyKeys = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/services/professionals': 'servicesProfessionals',
  '/services/clients': 'servicesClients',
  '/access': 'services',
  '/why-choose-us': 'why',
  '/booking': 'booking',
  '/bookings': 'booking',
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
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('qingconnect-language')
    return savedLanguage === 'zh' ? 'zh' : 'en'
  })

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

  useEffect(() => {
    window.localStorage.setItem('qingconnect-language', language)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  useEffect(() => {
    let active = true

    getTransparentBrandLogo(brandImage).then((logoSource) => {
      if (!active) {
        return
      }

      let favicon = document.querySelector("link[rel='icon']")
      if (!favicon) {
        favicon = document.createElement('link')
        favicon.setAttribute('rel', 'icon')
        document.head.appendChild(favicon)
      }

      favicon.setAttribute('href', logoSource)
    })

    return () => {
      active = false
    }
  }, [])

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath)
    window.history.pushState({}, '', normalized)
    setPathname(normalized)
  }

  const ActivePage = routes[pathname] ?? Home
  const copy = translations[language]
  const pageCopy =
    pathname === '/services/professionals'
      ? copy.services.professionals
      : pathname === '/services/clients'
        ? copy.services.clients
        : copy[routeCopyKeys[pathname] ?? 'home']

  return (
    <div className="app">
      <Header
        currentPath={pathname}
        navigate={navigate}
        language={language}
        setLanguage={setLanguage}
        copy={copy.header}
      />
      <main className="page-main">
        <ActivePage navigate={navigate} copy={pageCopy} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  )
}

export default App
