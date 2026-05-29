
export default function mandatorydisclosurePage() {
  return (
    <>
      


<div className="container my-5">
    <h1 className="text-center text-school mb-5 fw-bold" data-aos="fade-down">Mandatory Public Disclosure</h1>
    
    <div className="bg-white p-5 rounded shadow-lg border-top border-4 border-school" data-aos="fade-up">
        
        {/* Section A */}
        <h3 className="text-school border-bottom pb-2 mb-4 fw-bold">A. General Information</h3>
        <table className="table table-bordered mb-5 table-hover">
            <tbody className="align-middle">
                <tr>
                    <th  className="bg-light ps-4">NAME OF THE SCHOOL</th>
                    <td className="ps-4 fw-bold">Holy Brook School</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">AFFILIATION NO.</th>
                    <td className="ps-4">230143</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">SCHOOL CODE</th>
                    <td className="ps-4">35228</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">COMPLETE ADDRESS</th>
                    <td className="ps-4">Near St. Luke's Hospital, Pakharijan Gaon, Tinsukia, Pin - 786146, Assam, India.</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">PRINCIPAL NAME & QUALIFICATION</th>
                    <td className="ps-4">SHAMIM MUMTAZ HAZARIKA, M.A., B.Ed.</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">SCHOOL EMAIL ID</th>
                    <td className="ps-4">holy_brook@yahoo.com</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">CONTACT DETAILS</th>
                    <td className="ps-4">0374-2338597</td>
                </tr>
            </tbody>
        </table>

        {/* Section B */}
        <h3 className="text-school border-bottom pb-2 mb-4 fw-bold">B. Documents and Information</h3>
        <ul className="list-group mb-5 shadow-sm">
             <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                <span className="fw-bold"><i className="fas fa-file-alt text-warning me-2"></i> Copy of Upgradation Letter</span>
                <a href="#" className="btn btn-sm btn-outline-secondary disabled rounded-pill px-3">View PDF</a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                <span className="fw-bold"><i className="fas fa-file-alt text-warning me-2"></i> Extension of General Affiliation</span>
                <a href="#" className="btn btn-sm btn-outline-secondary disabled rounded-pill px-3">View PDF</a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                <span className="fw-bold"><i className="fas fa-building text-warning me-2"></i> Building Safety Certificate</span>
                <a href="#" className="btn btn-sm btn-outline-secondary disabled rounded-pill px-3">View PDF</a>
            </li>
             <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                <span className="fw-bold"><i className="fas fa-tint text-warning me-2"></i> Water, Health and Sanitation Certificate</span>
                <a href="#" className="btn btn-sm btn-outline-secondary disabled rounded-pill px-3">View PDF</a>
            </li>
        </ul>

        {/* Section C */}
        <h3 className="text-school border-bottom pb-2 mb-4 fw-bold">C. Result and Academics</h3>
         <table className="table table-bordered mb-5 table-hover">
            <tbody className="align-middle">
                <tr>
                    <th  className="bg-light ps-4">Fees Structure</th>
                    <td className="ps-4"><a href="#" className="btn btn-sm btn-outline-primary fw-bold text-decoration-none rounded-pill px-3">View Details</a></td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">Annual Academic Calendar</th>
                    <td className="ps-4"><a href="#" className="btn btn-sm btn-outline-primary fw-bold text-decoration-none rounded-pill px-3">View Calendar</a></td>
                </tr>
            </tbody>
        </table>

        {/* Section D */}
         <h3 className="text-school border-bottom pb-2 mb-4 fw-bold">D. Staff (Teaching)</h3>
         <table className="table table-bordered mb-5 table-hover">
            <tbody className="align-middle">
                <tr>
                    <th  className="bg-light ps-4">Principal</th>
                    <td className="ps-4 fw-bold">Shamim Mumtaz Hazarika</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">Total No. of Teachers</th>
                    <td className="ps-4">34 <span className="text-muted small ms-2">[PGT: 21, TGT: 08, PRT: 05]</span></td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">Teachers Section Ratio</th>
                    <td className="ps-4">30:1</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">Special Educator</th>
                    <td className="ps-4">Ms. Anku Kalar</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">Counsellor and Wellness Teacher</th>
                    <td className="ps-4">Mrs. Runa Laila Begum</td>
                </tr>
            </tbody>
        </table>
        
        {/* Section E */}
        <h3 className="text-school border-bottom pb-2 mb-4 fw-bold">E. School Infrastructure</h3>
        <table className="table table-bordered table-hover">
            <tbody className="align-middle">
                 <tr>
                    <th  className="bg-light ps-4">Total Campus Area</th>
                    <td className="ps-4">8030 Sq. Mtrs.</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">No. and Size of Class Rooms</th>
                    <td className="ps-4">31 Nos. (52 Sq. Mtrs. each)</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">No. and Size of Laboratories</th>
                    <td className="ps-4">04 Nos. (50 Sq. Mtrs. each)</td>
                </tr>
                <tr>
                    <th className="bg-light ps-4">Internet Facility</th>
                    <td className="ps-4"><span className="badge bg-success rounded-pill px-3">Yes</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


    </>
  )
}
