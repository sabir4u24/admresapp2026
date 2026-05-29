import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Holy Brook School</h5>
            <p style={{ fontSize: '0.9em', opacity: 0.9 }}>We Care to Care. Established in 2005, we are committed to providing quality education with a focus on moral values and discipline.</p>
            <div className="mt-3">
              <a href="#" className="me-2"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="me-2"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="me-2"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/about"><i className="fas fa-chevron-right me-2 text-warning"></i>About Us</Link></li>
              <li><Link href="/admissions"><i className="fas fa-chevron-right me-2 text-warning"></i>Admissions</Link></li>
              <li><Link href="/academics"><i className="fas fa-chevron-right me-2 text-warning"></i>Academics</Link></li>
              <li><Link href="/gallery"><i className="fas fa-chevron-right me-2 text-warning"></i>Gallery</Link></li>
              <li><Link href="/contact"><i className="fas fa-chevron-right me-2 text-warning"></i>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Important Links</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.cbse.gov.in/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt me-2 text-warning"></i>CBSE Official</a></li>
              <li><a href="https://ncert.nic.in/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt me-2 text-warning"></i>NCERT</a></li>
              <li><a href="https://assam.gov.in/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt me-2 text-warning"></i>Assam Government</a></li>
              <li><a href="https://www.india.gov.in/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt me-2 text-warning"></i>Government of India</a></li>
              <li><a href="https://diksha.gov.in/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt me-2 text-warning"></i>DIKSHA Portal</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Info</h5>
            <p className="mb-2"><i className="fas fa-map-marker-alt me-2 text-warning"></i> Near St. Luke's Hospital, Pakharijan, Tinsukia, Assam - 786146</p>
            <p className="mb-2"><i className="fas fa-phone me-2 text-warning"></i> 0374-2330044</p>
            <p className="mb-2"><i className="fas fa-envelope me-2 text-warning"></i> holy_brook@yahoo.com</p>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="text-center">
          <p className="mb-0 text-white-50">&copy; {currentYear} Holy Brook School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
