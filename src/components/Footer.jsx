function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content footer-content-simple">
        <div className="footer-brand">
          <span className="footer-mark">QC</span>
          <div>
            <h3>QingConnect</h3>
            <p>
              Professional Mandarin-English interpreting and communication
              support across Australia.
            </p>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-contact-inline">
            <span>Contact</span>
            <a className="footer-email" href="mailto:christinacq2010@hotmail.com">
              christinacq2010@hotmail.com
            </a>
          </div>

          <div className="footer-meta">
            <span>Australia-wide</span>
            <span>Telephone & video conferencing</span>
            <span>Mandarin-English support</span>
          </div>
        </div>

        <div className="footer-bottom footer-bottom-simple">
          <p>© 2026 QingConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
