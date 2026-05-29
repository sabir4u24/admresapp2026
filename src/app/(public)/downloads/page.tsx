
export default function downloadsPage() {
  return (
    <>
      


<div className="container my-5">
    <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="text-school fw-bold">Downloads & Resources</h1>
        <p className="text-muted lead">Access important documents, circulars, and forms.</p>
    </div>
    
    <div className="row">
        <div className="col-md-8" data-aos="fade-right">
            <div className="card shadow-lg border-0 mb-4">
                <div className="card-header bg-school text-white py-3">
                    <h5 className="mb-0"><i className="fas fa-file-alt me-2"></i> Document List</h5>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="bg-light text-school">
                                <tr>
                                    <th className="py-3 ps-4">Title</th>
                                    <th className="py-3">Category</th>
                                    <th className="py-3">Date</th>
                                    <th className="py-3 text-end pe-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    
                                    <tr className="align-middle">
                                        <td className="ps-4 fw-bold"></td>
                                        <td><span className="badge bg-secondary rounded-pill"></span></td>
                                        <td></td>
                                        <td className="text-end pe-4">
                                            <a href="" className="btn btn-sm btn-warning fw-bold text-dark shadow-sm" download>
                                                <i className="fas fa-download me-1"></i> Download
                                            </a>
                                        </td>
                                    </tr>
                                    
                                
                                    <tr>
                                        <td colSpan={4} className="text-center py-5 text-muted">No documents uploaded yet.</td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 mt-4 mt-md-0" data-aos="fade-left">
            <div className="card shadow-sm border-0 border-start border-4 border-warning mb-4 bg-cream">
                <div className="card-body text-center p-4">
                    <i className="fas fa-file-export fa-3x text-gold mb-3"></i>
                    <h5 className="card-title fw-bold">Need a Transfer Certificate?</h5>
                    <p className="card-text text-muted">Apply online for a TC and track its status.</p>
                    <a href="/apply-tc" className="btn btn-warning w-100 fw-bold shadow-sm">Apply for TC</a>
                </div>
            </div>

            <div className="card shadow-sm border-0 border-start border-4 border-school">
                 <div className="card-body text-center p-4">
                    <i className="fas fa-user-plus fa-3x text-school mb-3"></i>
                    <h5 className="card-title fw-bold">New Admission?</h5>
                    <p className="card-text text-muted">Start your journey with us today.</p>
                    <a href="/apply-admission" className="btn btn-primary text-white w-100 fw-bold shadow-sm">Apply for Admission</a>
                </div>
            </div>
        </div>
    </div>
</div>


    </>
  )
}
