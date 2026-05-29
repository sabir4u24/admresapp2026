
export default function admissionsPage() {
  return (
    <>
      


<div className="container my-5">
    <h1 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">Admissions</h1>
    
    <div className="row">
        <div className="col-md-8" data-aos="fade-right">
            <h3 className="text-school fw-bold">Admission Process</h3>
            <p className="lead">We welcome you to the Holy Brook family.</p>
            <p>The Registration form can be procured from the school reception counter (Na-Pukhri Office). Admissions are open for classes Pre-Primary to Class IX & XI.</p>
            
            <h4 className="mt-4 text-rust">Eligibility Criteria (as on 1st April)</h4>
            <div className="bg-light p-3 rounded border-start border-4 border-warning mb-4">
                <ul className="mb-0">
                    <li><strong>Play House:</strong> 2.5 to 4 years</li>
                    <li><strong>Class I:</strong> 6+ years</li>
                </ul>
            </div>

            <h4 className="mt-4 text-rust">Documents Required</h4>
            <div className="alert alert-info shadow-sm">
                <ul className="mb-0">
                    <li>Passport Size Photograph (3 Copies)</li>
                    <li>Photocopy of Birth Certificate</li>
                    <li>Transfer Certificate (original) from previous school</li>
                    <li>Report Card of the last class passed</li>
                </ul>
            </div>
        </div>
        <div className="col-md-4" data-aos="fade-left">
            <div className="card shadow border-0 border-top border-4 border-warning mb-4">
                 <div className="card-body text-center p-4">
                    <h4 className="card-title fw-bold">Ready to Apply?</h4>
                    <p className="card-text text-muted">You can apply for admission online from the comfort of your home.</p>
                    <a href="/apply-admission" className="btn btn-warning w-100 fw-bold shadow-sm">Apply Online Now</a>
                </div>
            </div>
            
            <div className="card shadow border-0 border-top border-4 border-school">
                 <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Contact Support</h5>
                    <p><i className="fas fa-phone me-2 text-school"></i> 0374-2330044</p>
                    <p><i className="fas fa-envelope me-2 text-school"></i> holy_brook@yahoo.com</p>
                </div>
            </div>
        </div>
    </div>
</div>


    </>
  )
}
