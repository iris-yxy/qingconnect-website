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

const siteUrl = 'https://qingconnectinterpreting.com'

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

const seoConfig = {
  en: {
    '/': {
      title: 'QingConnect | Mandarin-English Interpreting in Australia',
      description:
        'QingConnect provides professional Mandarin-English interpreting and communication support across Australia for healthcare, legal, insurance, NDIS and community services.',
    },
    '/about': {
      title: 'About QingConnect | Mandarin-English Interpreting Support',
      description:
        'Learn about QingConnect and our culturally informed Mandarin-English interpreting and communication support for clients and professionals across Australia.',
    },
    '/services': {
      title: 'Interpreting Services | QingConnect Australia',
      description:
        'Explore QingConnect interpreting services for healthcare, legal, insurance, NDIS, aged care and community support across Australia.',
    },
    '/services/professionals': {
      title: 'For Professionals | QingConnect Interpreting',
      description:
        'QingConnect helps professionals communicate clearly with Mandarin-speaking clients through reliable telephone and video interpreting support.',
    },
    '/services/clients': {
      title: 'For Clients | QingConnect Interpreting',
      description:
        'QingConnect supports Mandarin-speaking clients with clear and respectful communication for appointments, services and important conversations.',
    },
    '/why-choose-us': {
      title: 'Why Choose QingConnect | Mandarin-English Interpreter',
      description:
        'Discover why clients and professionals choose QingConnect for accurate, culturally informed Mandarin-English interpreting support in Australia.',
    },
    '/booking': {
      title: 'Book an Interpreter | QingConnect',
      description:
        'Book Mandarin-English interpreting or send an enquiry to QingConnect for telephone and video support across Australia.',
    },
  },
  zh: {
    '/': {
      title: 'QingConnect | 澳洲中英口译与沟通支持',
      description:
        'QingConnect 为澳洲各地提供专业中英口译与沟通支持，服务涵盖医疗、法律、保险、NDIS 与社区服务等场景。',
    },
    '/about': {
      title: '关于 QingConnect | 澳洲中英口译服务',
      description:
        '了解 QingConnect 的服务背景，以及我们为澳洲客户和专业机构提供的中英双语口译与沟通支持。',
    },
    '/services': {
      title: '服务内容 | QingConnect 澳洲中英口译',
      description:
        '查看 QingConnect 的中英口译服务，覆盖医疗、法律、保险、NDIS、养老与社区支持等场景。',
    },
    '/services/professionals': {
      title: '面向专业机构 | QingConnect 口译服务',
      description:
        'QingConnect 为专业机构提供可靠的电话和视频中英口译支持，帮助与普通话客户实现清晰沟通。',
    },
    '/services/clients': {
      title: '面向客户 | QingConnect 口译服务',
      description:
        'QingConnect 协助普通话客户在预约、咨询和重要沟通场景中获得清晰、尊重且准确的语言支持。',
    },
    '/why-choose-us': {
      title: '为什么选择 QingConnect | 澳洲中英口译',
      description:
        '了解 QingConnect 在准确性、文化理解和沟通支持方面的优势，帮助客户与专业机构建立有效沟通。',
    },
    '/booking': {
      title: '预约口译 | QingConnect',
      description:
        '在线预约 QingConnect 中英口译服务，或提交咨询请求，获得澳洲范围内的电话与视频支持。',
    },
  },
}

function getCanonicalPath(pathname) {
  return pathname === '/' ? siteUrl : `${siteUrl}${pathname}`
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
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
    const routeSeo = seoConfig[language][pathname] ?? seoConfig[language]['/']
    const canonicalUrl = getCanonicalPath(pathname)

    document.title = routeSeo.title

    upsertMeta("meta[name='description']", {
      name: 'description',
      content: routeSeo.description,
    })
    upsertMeta("meta[name='robots']", {
      name: 'robots',
      content: 'index, follow',
    })
    upsertMeta("meta[property='og:type']", {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta("meta[property='og:site_name']", {
      property: 'og:site_name',
      content: 'QingConnect',
    })
    upsertMeta("meta[property='og:title']", {
      property: 'og:title',
      content: routeSeo.title,
    })
    upsertMeta("meta[property='og:description']", {
      property: 'og:description',
      content: routeSeo.description,
    })
    upsertMeta("meta[property='og:url']", {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta("meta[name='twitter:card']", {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertLink("link[rel='canonical']", {
      rel: 'canonical',
      href: canonicalUrl,
    })

    let structuredData = document.getElementById('qingconnect-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'qingconnect-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.appendChild(structuredData)
    }

    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'QingConnect',
      url: siteUrl,
      description: routeSeo.description,
      areaServed: 'Australia',
      availableLanguage: ['English', 'Mandarin Chinese'],
      serviceType: 'Mandarin-English interpreting and communication support',
      email: 'qingconnectinterpreting@gmail.com',
    })
  }, [language, pathname])

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
