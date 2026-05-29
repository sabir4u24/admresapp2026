
export default function galleryPage() {
  return (
    <>
      


<div className="container my-5">
    <h1 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">Photo Gallery</h1>
    
    {/* Filter Buttons */}
    <div className="text-center mb-5" data-aos="fade-up">
        <button className="btn btn-outline-success active rounded-pill px-4 mx-1 fw-bold" >All</button>
        <button className="btn btn-outline-success rounded-pill px-4 mx-1 fw-bold" >Campus</button>
        <button className="btn btn-outline-success rounded-pill px-4 mx-1 fw-bold" >Events</button>
        <button className="btn btn-outline-success rounded-pill px-4 mx-1 fw-bold" >Sports</button>
    </div>

    <div className="row g-4" id="gallery-grid">
        
            
            <div className="col-md-4 mb-4 gallery-item" data-category="" data-aos="zoom-in" data-aos-delay="100">
                <div className="gallery-card position-relative overflow-hidden rounded shadow-sm">
                    <img src="" className="img-fluid w-100" alt="image"  data-bs-toggle="modal" data-bs-target="#lightboxModal"  />
                    <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center pointer-events-none">
                        <i className="fas fa-search-plus fa-2x text-white opacity-0 transition-opacity"></i>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h6 className="text-school fw-bold"></h6>
                </div>
            </div>
            
        
            <div className="col-12 text-center py-5">
                <p className="text-muted">No images available in the gallery yet.</p>
            </div>
        
    </div>
</div>

{/* Lightbox Modal */}
<div className="modal fade" id="lightboxModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 bg-transparent">
            <div className="modal-body p-0 position-relative">
                <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal" aria-label="Close"></button>
                <img src="" id="lightboxImage" className="w-100 rounded shadow-lg" alt="Full View" />
                <div className="text-center mt-3">
                    <span id="lightboxCaption" className="badge bg-dark text-white fs-6 px-3 py-2"></span>
                </div>
            </div>
        </div>
    </div>
</div>







    </>
  )
}
