
export default function aboutPage() {
  return (
    <>
      



<div className="bg-cream py-5">
    <div className="container">
        <h2 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">About Holy Brook</h2>
        
        

        
        <div className="row align-items-center mb-5">
            <div className="col-lg-6" data-aos="fade-right">
                {/* Placeholder for School Image */}
               <div className="text-center mb-5" data-aos="fade-up">
                    <img src="{% static 'images/building1.jpg' %}" alt="School Building" className="img-fluid rounded shadow"  />
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
                <h3 className="mt-3 mt-lg-0 text-rust">Our History</h3>
                <p className="lead">From humble beginnings to a center of excellence.</p>
                <p>HOLY BROOK SCHOOL - We Care to Care, Tinsukia, Assam was established in the year 2005. Starting with a modest strength of only 16 students, we have grown into a premier institution with over 700 students.</p>
                <p>The main objective of establishing this school was not only to impart quality education but to instill higher values like discipline, tidiness, regularity, and punctuality, preparing students for the modern and complex world.</p>
            </div>
        </div>

        <div className="row mb-5">
            <div className="col-md-6 mb-4" data-aos="flip-left" data-aos-delay="100">
                <div className="card h-100 border-0 shadow-sm" >
                    <div className="card-body text-center p-5">
                        <i className="fas fa-eye fa-3x text-school mb-3"></i>
                        <h4 className="fw-bold">Our Vision</h4>
                        <p className="text-muted">To nurture every child carefully so that he or she can blossom to their fullest potential. We believe in recognizing the hidden talent of every child.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="flip-right" data-aos-delay="200">
                <div className="card h-100 border-0 shadow-sm" >
                    <div className="card-body text-center p-5">
                        <i className="fas fa-bullseye fa-3x text-gold mb-3"></i>
                        <h4 className="fw-bold">Our Mission</h4>
                        <p className="text-muted">To provide standard education from Babyland to Class 12 (Science, Commerce & Humanities) while ensuring high standards of morality, discipline, and character formation.</p>
                    </div>
                </div>
            </div>
        </div>

        <h3 className="text-school mb-4 text-center" data-aos="fade-up">Infrastructure & Facilities</h3>
        <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                <ul className="list-group shadow-sm">
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Spacious, airy & bright classrooms</li>
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Physics, Chemistry & Biology Labs</li>
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Computer Lab</li>
                </ul>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                <ul className="list-group shadow-sm">
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Library with vast collection</li>
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Smart Class facilities</li>
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Playground for outdoor games</li>
                </ul>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                <ul className="list-group shadow-sm">
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Clean drinking water (RO)</li>
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Hygienic sanitation facilities</li>
                    <li className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i> Transport facility</li>
                </ul>
            </div>
        </div>
    </div>
</div>


    </>
  )
}
