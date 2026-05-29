
export default function applyadmissionPage() {
  return (
    <>
      


<div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-md-8" data-aos="zoom-in">
            <div className="card shadow-lg border-0 rounded-3">
                <div className="card-header bg-school text-white p-4 text-center">
                    <h3 className="mb-0 fw-bold">Online Admission Application</h3>
                    <p className="mb-0 text-white-50">Join the Holy Brook family</p>
                </div>
                <div className="card-body p-5">
                    <p className="text-muted text-center mb-4">Please fill in the details below. Our team will contact you shortly.</p>
                    
                    <form method="post">
                        
                        <div className="mb-3">
                            <label htmlFor="student_name" className="form-label fw-bold">Student Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control form-control-lg bg-light" id="student_name" name="student_name" required />
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="father_name" className="form-label fw-bold">Father's Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control bg-light" id="father_name" name="father_name" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="class_applying_for" className="form-label fw-bold">Class Applying For <span className="text-danger">*</span></label>
                                <select className="form-select bg-light" id="class_applying_for" name="class_applying_for" required>
                                    <option value="" selected disabled>Select Class</option>
                                    <option value="Play House">Play House</option>
                                    <option value="Nursery">Nursery</option>
                                    <option value="KG">KG</option>
                                    <option value="1">Class 1</option>
                                    <option value="2">Class 2</option>
                                    <option value="3">Class 3</option>
                                    <option value="4">Class 4</option>
                                    <option value="5">Class 5</option>
                                    <option value="6">Class 6</option>
                                    <option value="7">Class 7</option>
                                    <option value="8">Class 8</option>
                                    <option value="9">Class 9</option>
                                    <option value="11">Class 11</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="contact_number" className="form-label fw-bold">Contact Number <span className="text-danger">*</span></label>
                                <input type="text" className="form-control bg-light" id="contact_number" name="contact_number" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                                <input type="email" className="form-control bg-light" id="email" name="email" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label fw-bold">Address</label>
                            <textarea className="form-control bg-light" id="address" name="address" rows={3}></textarea>
                        </div>

                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-warning btn-lg fw-bold shadow-sm text-white">Submit Application</button>
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
