import Link from "next/link"
import { prisma } from "@/lib/prisma"

export default async function HomePage() {
  const latest_news = await prisma.website_news.findMany({
    take: 3,
    orderBy: { date: 'desc' }
  });

  const upcoming_events = await prisma.website_event.findMany({
    take: 3,
    orderBy: { date: 'asc' },
    where: {
      date: { gte: new Date() }
    }
  });

  return (
    <>
      <style>{`
        .hero-section {
            position: relative;
            height: 600px;
            background: linear-gradient(rgba(132, 153, 79, 0.8), rgba(13, 44, 84, 0.6)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80') no-repeat center center/cover;
            color: white;
            display: flex;
            align-items: center;
            text-align: center;
        }
        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .news-marquee {
            background-color: var(--highlight-rust);
            color: white;
            padding: 10px 0;
            font-weight: 500;
        }
        .stat-card {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            transition: transform 0.3s;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .stat-card:hover {
            transform: translateY(-10px);
        }
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-sage);
        }
        .section-title {
            position: relative;
            display: inline-block;
            margin-bottom: 50px;
            color: var(--primary-sage);
            font-weight: 700;
        }
        .section-title::after {
            content: '';
            position: absolute;
            width: 60px;
            height: 3px;
            background-color: var(--accent-gold);
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
        }
      `}</style>

      {/* News Marquee */}
      <div className="news-marquee">
          <div className="container d-flex align-items-center">
              <span className="badge bg-warning text-dark me-3">LATEST UPDATE</span>
              {/* @ts-ignore */}
              <marquee scrollamount="6">
                  {latest_news && latest_news.length > 0 ? (
                      latest_news.map((news) => (
                          <span key={news.id} className="me-5">
                              <i className="fas fa-bullhorn me-2"></i> {news.title} - {new Date(news.date).toLocaleDateString()}
                          </span>
                      ))
                  ) : (
                      <span className="me-5">Welcome to Holy Brook School - We Care to Care! Admissions Open for the new session.</span>
                  )}
              </marquee>
          </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
          <div className="container" data-aos="zoom-in" data-aos-duration="1000">
              <div className="hero-content">
                  <h1>Welcome to Holy Brook School</h1>
                  <p className="lead mb-4">Nurturing Excellence, Character & Innovation since 2005</p>
                  <div className="d-flex justify-content-center gap-3">
                      <Link href="/admissions" className="btn btn-warning btn-lg fw-bold shadow">Admissions Open</Link>
                      <Link href="/about" className="btn btn-outline-light btn-lg fw-bold">Discover More</Link>
                  </div>
              </div>
          </div>
      </div>

      {/* Highlights Section */}
      <div className="container my-5 py-5">
          <div className="row text-center g-4">
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
                  <div className="stat-card h-100">
                      <i className="fas fa-graduation-cap fa-3x text-rust mb-3"></i>
                      <h5 className="card-title fw-bold">Academic Excellence</h5>
                      <p className="card-text text-muted">Consistent outstanding results in CBSE Board Examinations.</p>
                  </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                  <div className="stat-card h-100">
                      <i className="fas fa-flask fa-3x text-rust mb-3"></i>
                      <h5 className="card-title fw-bold">Modern Labs</h5>
                      <p className="card-text text-muted">Advanced Physics, Chemistry, Biology & Computer laboratories.</p>
                  </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
                  <div className="stat-card h-100">
                      <i className="fas fa-futbol fa-3x text-rust mb-3"></i>
                      <h5 className="card-title fw-bold">Sports & Activity</h5>
                      <p className="card-text text-muted">Holistic development through extensive sports and arts programs.</p>
                  </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                  <div className="stat-card h-100">
                      <i className="fas fa-chalkboard-teacher fa-3x text-rust mb-3"></i>
                      <h5 className="card-title fw-bold">Expert Faculty</h5>
                      <p className="card-text text-muted">Dedicated team of highly qualified and experienced teachers.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Stats Counter */}
      <div className="bg-school py-5 text-white">
          <div className="container">
              <div className="row text-center">
                  <div className="col-md-3 mb-4 mb-md-0" data-aos="zoom-in">
                      <div className="display-4 fw-bold text-secondary-cream">2005</div>
                      <div className="text-uppercase small letter-spacing-2" style={{letterSpacing: '2px'}}>Established</div>
                  </div>
                  <div className="col-md-3 mb-4 mb-md-0" data-aos="zoom-in" data-aos-delay="100">
                      <div className="display-4 fw-bold text-secondary-cream">700+</div>
                      <div className="text-uppercase small letter-spacing-2" style={{letterSpacing: '2px'}}>Students</div>
                  </div>
                  <div className="col-md-3 mb-4 mb-md-0" data-aos="zoom-in" data-aos-delay="200">
                      <div className="display-4 fw-bold text-secondary-cream">35+</div>
                      <div className="text-uppercase small letter-spacing-2" style={{letterSpacing: '2px'}}>Expert Faculty</div>
                  </div>
                  <div className="col-md-3" data-aos="zoom-in" data-aos-delay="300">
                      <div className="display-4 fw-bold text-secondary-cream">100%</div>
                      <div className="text-uppercase small letter-spacing-2" style={{letterSpacing: '2px'}}>Pass Result</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Principal Message */}
      <div className="bg-cream py-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-4 text-center" data-aos="fade-right">
                      <div className="position-relative d-inline-block">
                          <div style={{width: '250px', height: '300px', backgroundColor: '#ddd', border: '10px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'}} className="d-flex align-items-center justify-content-center">
                              <span className="text-muted">Principal Photo</span>
                          </div>
                      </div>
                      <h5 className="mt-3 fw-bold">Mrs. Shamim M. Hazarika</h5>
                      <p className="text-rust fw-bold">Principal</p>
                  </div>
                  <div className="col-md-8" data-aos="fade-left">
                      <div className="ps-md-4">
                          <h2 className="section-title">Principal's Message</h2>
                          <blockquote className="blockquote bg-white p-4 rounded shadow-sm border-start border-5 border-success">
                              <p className="mb-3 fst-italic">"Every Child is gifted in a different way, and it is very important to discover his or her own special talent, way or gift."</p>
                              <p style={{fontSize: '1rem'}}>We at Holy Brook School believe a child is like a bud and needs to be nurtured carefully so that he or she can blossom to their fullest potential. We focus not only on pure academics but also on discovering each child's own capabilities and areas of interest.</p>
                          </blockquote>
                          <Link href="/about" className="btn btn-primary mt-3">Read Full Message</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* News & Events */}
      <div className="container my-5 py-5">
          <h2 className="text-center section-title w-100" data-aos="fade-up">School Happenings</h2>
          <div className="row">
              <div className="col-md-6 mb-4" data-aos="fade-right">
                  <div className="card h-100 shadow border-0">
                      <div className="card-header bg-school text-white d-flex justify-content-between align-items-center">
                          <h5 className="mb-0"><i className="fas fa-bullhorn me-2"></i> Latest News</h5>
                          <Link href="/news" className="btn btn-sm btn-outline-light">View All</Link>
                      </div>
                      <div className="card-body">
                          {latest_news && latest_news.length > 0 ? (
                              <ul className="list-group list-group-flush">
                                  {latest_news.map((news) => (
                                      <li key={news.id} className="list-group-item border-0 border-bottom py-3">
                                          <h6 className="fw-bold text-primary">{news.title}</h6>
                                          <small className="text-muted d-block mb-2"><i className="far fa-calendar-alt me-1"></i> {new Date(news.date).toLocaleDateString()}</small>
                                          <p className="mb-1 text-truncate" style={{fontSize: '0.9rem'}}>{news.content}</p>
                                          <Link href={`/news/${news.id}`} className="text-decoration-none text-gold small fw-bold">Read More &rarr;</Link>
                                      </li>
                                  ))}
                              </ul>
                          ) : (
                              <p className="text-muted text-center py-5">No news available.</p>
                          )}
                      </div>
                  </div>
              </div>
              <div className="col-md-6 mb-4" data-aos="fade-left">
                  <div className="card h-100 shadow border-0">
                      <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
                          <h5 className="mb-0"><i className="far fa-calendar-check me-2"></i> Upcoming Events</h5>
                      </div>
                      <div className="card-body">
                          {upcoming_events && upcoming_events.length > 0 ? (
                              <ul className="list-group list-group-flush">
                                  {upcoming_events.map((event) => (
                                      <li key={event.id} className="list-group-item border-0 border-bottom py-3 d-flex align-items-center">
                                          <div className="bg-light border rounded text-center p-2 me-3 shadow-sm" style={{minWidth: '70px'}}>
                                              <div className="h4 fw-bold text-rust mb-0">{new Date(event.date).getDate()}</div>
                                              <small className="text-uppercase fw-bold text-muted">{new Date(event.date).toLocaleString('default', { month: 'short' })}</small>
                                          </div>
                                          <div>
                                              <h6 className="mb-1 fw-bold">{event.title}</h6>
                                              <small className="text-muted">{event.description?.substring(0, 50)}...</small>
                                          </div>
                                      </li>
                                  ))}
                              </ul>
                          ) : (
                              <p className="text-muted text-center py-5">No upcoming events.</p>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
