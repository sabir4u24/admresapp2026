
export default function applytcPage() {
  return (
    <>
      


<div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-md-8" data-aos="zoom-in">
            <div className="card shadow-lg border-0 rounded-3">
                <div className="card-header bg-danger text-white p-4 text-center" >
                     <h3 className="mb-0 fw-bold">Transfer Certificate Application</h3>
                     <p className="mb-0 text-white-50">Request for School Leaving Certificate</p>
                </div>
                <div className="card-body p-5">
                    <p className="text-center text-muted mb-4 lead">Please ensure all school dues are cleared before submitting this request.</p>
                    
                    <form method="post">
                        
                        <div className="mb-3">
                            <label htmlFor="student_name" className="form-label fw-bold">Student Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control form-control-lg bg-light" id="student_name" name="student_name" required />
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="class_name" className="form-label fw-bold">Class & Section <span className="text-danger">*</span></label>
                                <input type="text" className="form-control bg-light" id="class_name" name="class_name" placeholder="e.g., IX-A" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="parent_contact" className="form-label fw-bold">Parent's Contact Number <span className="text-danger">*</span></label>
                                <input type="text" className="form-control bg-light" id="parent_contact" name="parent_contact" required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="reason" className="form-label fw-bold">Reason for Leaving <span className="text-danger">*</span></label>
                            <textarea className="form-control bg-light" id="reason" name="reason" rows={3} required placeholder="Reason for applying for TC..."></textarea>
                        </div>
                        
                        <div className="form-check mb-4 p-3 bg-light rounded border">
                            <input className="form-check-input ms-1" type="checkbox" value="" id="duesCheck" required />
                            <label className="form-check-label fw-bold ms-2" htmlFor="duesCheck">
                                I confirm that all school dues including tuition fees have been cleared.
                            </label>
                        </div>

                        <div className="d-grid mt-4">
                             <button type="submit" className="btn btn-danger btn-lg fw-bold shadow-sm" >Submit Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


    </>
  )
}
