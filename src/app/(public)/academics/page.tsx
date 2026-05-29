
export default function academicsPage() {
  return (
    <>
      


<div className="container my-5">
    <h1 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">Academics</h1>

    <div className="row">
        <div className="col-md-3" data-aos="fade-right">
            <div className="nav flex-column nav-pills me-3 shadow-sm rounded overflow-hidden" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-pre-primary-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pre-primary" type="button" role="tab">Pre-Primary</button>
                <button className="nav-link" id="v-pills-primary-tab" data-bs-toggle="pill" data-bs-target="#v-pills-primary" type="button" role="tab">Primary (I-V)</button>
                <button className="nav-link" id="v-pills-middle-tab" data-bs-toggle="pill" data-bs-target="#v-pills-middle" type="button" role="tab">Middle (VI-VIII)</button>
                <button className="nav-link" id="v-pills-secondary-tab" data-bs-toggle="pill" data-bs-target="#v-pills-secondary" type="button" role="tab">Secondary (IX-X)</button>
                <button className="nav-link" id="v-pills-senior-tab" data-bs-toggle="pill" data-bs-target="#v-pills-senior" type="button" role="tab">Senior Secondary (XI-XII)</button>
            </div>
        </div>
        <div className="col-md-9" data-aos="fade-left">
            <div className="tab-content p-4 bg-white shadow-sm rounded" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-pre-primary" role="tabpanel">
                    <h3 className="text-school fw-bold mb-3">Pre-Primary (Babyland, Nursery, KG)</h3>
                    <p className="lead">We provide a nurturing environment where learning is fun.</p>
                    <p>Our methodology focuses on play-way techniques, motor skill development, and social interaction to build a strong foundation for future learning.</p>
                </div>
                <div className="tab-pane fade" id="v-pills-primary" role="tabpanel">
                    <h3 className="text-school fw-bold mb-3">Primary (Classes I - V)</h3>
                    <p>The curriculum emphasizes foundational literacy and numeracy. Subjects include English, Hindi, Mathematics, EVS, and Computer Science.</p>
                    <ul>
                        <li>Activity-based learning</li>
                        <li>Focus on language development</li>
                        <li>Introduction to co-curricular activities</li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="v-pills-middle" role="tabpanel">
                     <h3 className="text-school fw-bold mb-3">Middle (Classes VI - VIII)</h3>
                    <p>Transitioning to more structured learning. Subjects expand to include Science (Physics, Chemistry, Biology), Social Science (History, Geography, Civics), and Third Language.</p>
                </div>
                <div className="tab-pane fade" id="v-pills-secondary" role="tabpanel">
                    <h3 className="text-school fw-bold mb-3">Secondary (Classes IX - X)</h3>
                    <p>Rigorous preparation for board examinations following the CBSE curriculum. Focus on conceptual clarity and application of knowledge.</p>
                    <p><strong>Subjects:</strong> English, Hindi/Assamese, Mathematics, Science, Social Science, Information Technology.</p>
                </div>
                <div className="tab-pane fade" id="v-pills-senior" role="tabpanel">
                    <h3 className="text-school fw-bold mb-3">Senior Secondary (Classes XI - XII)</h3>
                    <p>We offer three streams with specialized faculty and well-equipped labs.</p>
                    <div className="row mt-4">
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-success shadow-sm">
                                <div className="card-header bg-success text-white">Science</div>
                                <div className="card-body">
                                    <p>Physics, Chemistry, Mathematics/Biology, English, Physical Education/Computer Science.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-warning shadow-sm">
                                <div className="card-header bg-warning text-dark">Commerce</div>
                                <div className="card-body">
                                    <p>Accountancy, Business Studies, Economics, English, Mathematics/IP/PE.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-secondary shadow-sm">
                                <div className="card-header bg-secondary text-white">Humanities</div>
                                <div className="card-body">
                                    <p>History, Political Science, Sociology/Economics, English, IP/PE.</p>
                                </div>
                            </div>
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
