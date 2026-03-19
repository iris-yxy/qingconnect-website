const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Access Our Services' },
  { path: '/why-choose-us', label: 'Why Choose Us' },
  { path: '/booking', label: 'Bookings & Enquiries' },
]

function Header({ currentPath, navigate }) {
  return (
    <header className="header">
      <div className="header-ribbon">
        <div className="container ribbon-inner">
          <p>NAATI Certified Mandarin-English Interpreting</p>
          <p>Australia-wide by telephone and video</p>
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
            <h2>QingConnect</h2>
            <p>Interpreting & Communication Support</p>
          </span>
        </a>

        <nav className="nav-links">
          {navItems.map((item) => (
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
      </div>
    </header>
  )
}

export default Header
