
export default function contactPage() {
  return (
    <>
      


<div className="container my-5">
    <h1 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">Contact Us</h1>

    <div className="row mb-5 justify-content-center">
        <div className="col-md-4 text-center mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="p-4 bg-white shadow-sm rounded h-100 border-top border-4 border-school">
                 <i className="fas fa-map-marker-alt fa-3x text-school mb-3"></i>
                 <h4 className="fw-bold">Visit Us</h4>
                 <p className="text-muted">Holy Brook School<br />Near St. Luke's Hospital, Pakharijan<br />Tinsukia, Assam - 786146</p>
            </div>
        </div>
        <div className="col-md-4 text-center mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="p-4 bg-white shadow-sm rounded h-100 border-top border-4 border-gold">
                 <i className="fas fa-phone fa-3x text-gold mb-3"></i>
                 <h4 className="fw-bold">Call Us</h4>
                 <p className="text-muted">0374-2330044<br />0374-2338597</p>
            </div>
        </div>
        <div className="col-md-4 text-center mb-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="p-4 bg-white shadow-sm rounded h-100 border-top border-4 border-rust">
                 <i className="fas fa-envelope fa-3x text-rust mb-3"></i>
                 <h4 className="fw-bold">Email Us</h4>
                 <p className="text-muted">holy_brook@yahoo.com</p>
            </div>
        </div>
    </div>
    
    <div className="row">
        {/* Google Map */}
        <div className="col-lg-6 mb-4" data-aos="fade-right">
            <div className="card h-100 shadow-sm border-0 overflow-hidden">
                <div className="card-body p-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.698380369865!2d95.36216217618956!3d27.46712017632665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f6afacd919625%3A0xc5df5837521ff983!2sHoly%20Brook%20Sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1709121234567!5m2!1sen!2sin"  height="450"  allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>

        {/* Contact Forms */}
        <div className="col-lg-6" data-aos="fade-left">
            <ul className="nav nav-tabs mb-3 border-bottom-0" id="contactTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active fw-bold text-school" id="enquiry-tab" data-bs-toggle="tab" data-bs-target="#enquiry" type="button" role="tab">General Enquiry</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold text-rust" id="feedback-tab" data-bs-toggle="tab" data-bs-target="#feedback" type="button" role="tab">Feedback</button>
                </li>
            </ul>
            
            <div className="tab-content" id="contactTabsContent">
                {/* Enquiry Form */}
                <div className="tab-pane fade show active" id="enquiry" role="tabpanel">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-4">
                            <form method="post">
                                
                                <input type="hidden" name="form_type" value="enquiry" />
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-bold">Name</label>
                                    <input type="text" className="form-control bg-light" id="name" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                                    <input type="email" className="form-control bg-light" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label fw-bold">Phone</label>
                                    <input type="text" className="form-control bg-light" id="phone" name="phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-bold">Message</label>
                                    <textarea className="form-control bg-light" id="message" name="message" rows={4} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 fw-bold shadow-sm">Send Enquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                {/* Feedback Form */}
                <div className="tab-pane fade" id="feedback" role="tabpanel">
                    <div className="card shadow-lg border-0 border-top border-4 border-rust">
                        <div className="card-body p-4">
                            <form method="post">
                                
                                <input type="hidden" name="form_type" value="feedback" />
                                <div className="mb-3">
                                    <label htmlFor="fb_name" className="form-label fw-bold">Your Name</label>
                                    <input type="text" className="form-control bg-light" id="fb_name" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fb_role" className="form-label fw-bold">I am a...</label>
                                    <select className="form-select bg-light" id="fb_role" name="role" required>
                                        <option value="Parent">Parent</option>
                                        <option value="Student">Student</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fb_message" className="form-label fw-bold">Your Feedback / Suggestion</label>
                                    <textarea className="form-control bg-light" id="fb_message" name="message" rows={4} required placeholder="How can we improve?"></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger w-100 fw-bold shadow-sm" >Submit Feedback</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    </>
  )
}
