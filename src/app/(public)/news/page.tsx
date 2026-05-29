
export default function newsPage() {
  return (
    <>
      


<div className="container my-5">
    <h1 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">News & Events</h1>
    
    <div className="row">
        
            
            <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card h-100 shadow-sm border-0 overflow-hidden card-hove-effect">
                    <div className="row g-0 h-100">
                        <div className="col-md-4">
                             
                                <img src="" className="img-fluid rounded-start h-100 w-100"  alt="image" />
                            
                                <div className="bg-school text-white d-flex align-items-center justify-content-center h-100 w-100 rounded-start" >
                                    <i className="fas fa-newspaper fa-3x opacity-50"></i>
                                </div>
                            
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column h-100">
                                <h5 className="card-title fw-bold text-school"></h5>
                                <p className="card-text text-gold mb-2"><small><i className="far fa-calendar-alt me-1"></i> </small></p>
                                <p className="card-text text-muted flex-grow-1"></p>
                                <div className="text-end">
                                    <a href="/news_detail" className="btn btn-sm btn-outline-warning text-dark fw-bold stretched-link">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
            <div className="col-12 text-center py-5">
                <p className="text-muted">No news updates at this time.</p>
            </div>
        
    </div>
</div>


    </>
  )
}
