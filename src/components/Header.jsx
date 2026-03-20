function Header({ currentPath, navigate, language, setLanguage, copy }) {
  return (
    <header className="header">
      <div className="header-ribbon">
        <div className="container ribbon-inner">
          <p>{copy.ribbonLeft}</p>
          <p>{copy.ribbonRight}</p>
        </div>
      </div>
      <div className="container nav">
        <a
          href="/"
          className="logo"
          onClick={(event) => {
            event.preventDefault()
            navigate('/')
          }}
        >
          <span className="logo-mark">QC</span>
          <span className="logo-copy">
            <h2>{copy.brandTitle}</h2>
            <p>{copy.brandSubtitle}</p>
          </span>
        </a>

        <div className="nav-actions">
          <nav className="nav-links">
            {copy.nav.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={currentPath === item.path ? 'nav-link active' : 'nav-link'}
                onClick={(event) => {
                  event.preventDefault()
                  navigate(item.path)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="language-switch" aria-label={copy.languageLabel}>
            <button
              type="button"
              className={language === 'en' ? 'language-option active' : 'language-option'}
              onClick={() => setLanguage('en')}
            >
              {copy.languageOptions.en}
            </button>
            <button
              type="button"
              className={language === 'zh' ? 'language-option active' : 'language-option'}
              onClick={() => setLanguage('zh')}
            >
              {copy.languageOptions.zh}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
