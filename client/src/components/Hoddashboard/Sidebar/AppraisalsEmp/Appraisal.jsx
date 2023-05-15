

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AppraisalEmp.css"
import { AiOutlineEye } from "react-icons/ai";


const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [appraisals, setAppraisals] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/validadmin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const admin = response.data.admin;
        const department = admin.department;
        const college = admin.college;

        const employeesResponse = await axios.get('http://localhost:8080/api/fetchappraisalhod', {
          params: {
            department,
            college,
          },
        });

        setEmployees(employeesResponse.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleViewDetails = async (employee, year) => {
    setSelectedEmployee(employee);

    try {
      const appraisalResponse = await axios.get(`http://localhost:8080/api/hodfetchappraisal/${employee._id}`);
      const filter = appraisalResponse.data.appraisals.find((data) => data.year === year);
      setAppraisals(filter);
    } catch (error) {
      setError(error.response.data.message);
    }
  };


  const handleGoBack = () => {
    setSelectedEmployee(null);
  };
  return (
    <div >
      {error && <div className="error">{error}</div>}

      {!selectedEmployee ? (
        <>
          {isLoading ? (
            <div className="loader-container">
              <div className="loaderEmp"></div>
            </div>
          ) : (
            <>
              <h1>Employee Appraisals</h1>
              <div className='cardEmp'>

                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr key={employee._id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>
                          <button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewDetails(employee)} >  <AiOutlineEye /> </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      ) : (

        <div className="containerEmpl">
          <div className="profile">
            <div className="cover-photo">
              {/* <img src={coverPhoto} alt="Cover" /> */}
            </div>
            <div className="profile-details">
              <div className="profile-photo">
                {/* <img src={profilePhoto} alt="Profile" /> */}
              </div>
              <h1>{selectedEmployee.name}</h1>
              <h3>{selectedEmployee.designation}</h3>
              <hr />
              <div className="info">
                <div className="info-item">
                  <h4>College</h4>
                  <p>{selectedEmployee.college}</p>
                </div>
                <div className="info-item">
                  <h4>Department</h4>
                  <p>{selectedEmployee.department}</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>{selectedEmployee.email}</p>
                </div>
                <div className="info-item">
                  <h4>Mobile</h4>
                  <p>{selectedEmployee.mobile}</p>
                </div>
              </div>
            </div>
            {/* <button className='btnZ' onClick={handleGoBack}>Go Back</button> */}
            <label className="department-label">
              <select className="department-select" onChange={(e) => handleViewDetails(selectedEmployee, parseInt(e.target.value))}>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>

            </label>



            <div className="appraisal-details">
              <h2>Appraisal Details</h2>
              {appraisals ? (
                <div className="appraisal-details">
                  <h3>Appraisal Details</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>Employee ID</th>
                        <td>{appraisals.employeeid}</td>
                      </tr>
                      <tr>
                        <th>Appraisal Year</th>
                        <td>{appraisals.year}</td>
                      </tr>
                      <tr>
                        <th>Number of classes taught</th>
                        <td>{appraisals.classesTaught}</td>
                      </tr>
                      <tr>
                        <th>Total classes assigned</th>
                        <td>{appraisals.totalClasses}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teaching load assessment Teaching Engagement</th>
                        <td>{appraisals.totalScore1}</td>
                      </tr>
                      <tr>
                        <th> Paper evaluation duties</th>
                        <td>{appraisals.paperEval}</td>
                      </tr>
                      <tr>
                        <th> Student related activities (clubs, counseling, seminars, etc.)</th>
                        <td>{appraisals.studentActivities}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Examination and evaluation duties assigned by university/institute</th>
                        <td>{appraisals.totalScore2}</td>
                      </tr>
                      <tr><th>a) For FE and SE faculty:</th></tr>
                      <tr>
                        <th>Attendance Record</th>
                        <td>{appraisals.attendanceRecordFESE}</td>
                      </tr>
                      <tr>
                        <th>Meetings Conducted </th>
                        <td>{appraisals.meetingsConductedFESE}</td>
                      </tr>
                      <tr>
                        <th>Phone Calls, Letter Communication and Parent Connect</th>
                        <td>{appraisals.communicationFESE}</td>
                      </tr>
                      <tr>
                        <th>Counseling </th>
                        <td>{appraisals.counselingFESE}</td>
                      </tr>
                      <tr>
                        <th>All clear with first class(%) </th>
                        <td>{appraisals.rankScore}</td>
                      </tr>
                      <tr>
                        <th>Appraisal coCurricularScore </th>
                        <td>{appraisals.coCurricularScore}</td>
                      </tr>
                      <tr>
                        <th>Percentage increase in overall results(%)  </th>
                        <td>{appraisals.percentageIncreaseScore}</td>
                      </tr>

                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teacher Guardian performance for FE and SE faculty: </th>
                        <td>{appraisals.totalScoreFESE}</td>
                      </tr>
                      <tr><th>b) For TE faculty:</th></tr>
                      <tr>
                        <th>Attendance Record</th>
                        <td>{appraisals.attendanceRecordTE}</td>
                      </tr>
                      <tr>
                        <th>Meetings Conducted </th>
                        <td>{appraisals.meetingsConductedTE}</td>
                      </tr>
                      <tr>
                        <th>Phone Calls, Letter Communication and Parent Connect</th>
                        <td>{appraisals.communicationTE}</td>
                      </tr>
                      <tr>
                        <th>Counseling </th>
                        <td>{appraisals.counselingTE}</td>
                      </tr>
                      <tr>
                        <th>Percentage of Adhon courses completed as per guidelines of central/institute T and P department (%)</th>
                        <td>{appraisals.adhonScore}</td>
                      </tr>
                      <tr>
                        <th>Other courses completed/efforts taken as per T.G observation (%)</th>
                        <td>{appraisals.otherScore}</td>
                      </tr>
                      <tr>
                        <th>All clear with first class (%)  </th>
                        <td>{appraisals.allClearScore}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teacher Guardian Performance for TE faculty : </th>
                        <td>{appraisals.totalScoreTE}</td>
                      </tr>
                      <tr><th>c) For BE faculty</th></tr>
                      <tr>
                        <th> Attendance Record</th>
                        <td>{appraisals.attendanceRecordBE}</td>
                      </tr>
                      <tr>
                        <th>Meetings Conducted</th>
                        <td>{appraisals.meetingsConductedBE}</td>
                      </tr>
                      <tr>
                        <th>Phone Calls, Letter Communication and Parent Connect</th>
                        <td>{appraisals.communicationBE}</td>
                      </tr>
                      <tr>
                        <th>Counseling </th>
                        <td>{appraisals.counselingBE}</td>
                      </tr>
                      <tr>
                        <th>Percentage of Add-on courses completed as per guidelines of central / institute T and P department</th>
                        <td>{appraisals.adhonCompleted}</td>
                      </tr>
                      <tr>
                        <th>Percentage of students placed </th>
                        <td>{appraisals.placementPercentage}</td>
                      </tr>
                      <tr>
                        <th>Batch wise evaluation by institute and department T and P coordinator</th>
                        <td>{appraisals.batchEvaluation}</td>
                      </tr>
                      <tr>
                        <th>Action taken based on evaluation report:</th>
                        <td>{appraisals.actionTaken}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teacher Guardian Performance for BE faculty : </th>
                        <td>{appraisals.totalScoreBE}</td>
                      </tr>
                      <tr>
                        <th>  LatestResult </th>
                        <td>{appraisals.latestResult}</td>
                      </tr>
                      <tr>
                        <th> Previous Year Result 1</th>
                        <td>{appraisals.prevYearResult1}</td>
                      </tr>
                      <tr>
                        <th>Previous Year Result 2</th>
                        <td>{appraisals.prevYearResult2}</td>
                      </tr>
                      <tr>
                        <th>Previous Year Result 3</th>
                        <td>{appraisals.prevYearResult3}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>University result analysis</th>
                        <td>{appraisals.totalscore4}</td>
                      </tr>
                      <tr>
                        <th>Internal Feedback Grade Score(%)  </th>
                        <td>{appraisals.internalFeedback}</td>
                      </tr>
                      <tr>
                        <th>External Feedback Grade Score(%) </th>
                        <td>{appraisals.externalFeedback}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Feedback Analysis  </th>
                        <td>{appraisals.totalScore5}</td>
                      </tr>
                      <tr>
                        <th>Handwritten Notes of 03 (three) units*</th>
                        <td>{appraisals.handwrittenNotes}</td>
                      </tr>
                      <tr>
                        <th>Other contents as Accreditation Board</th>
                        <td>{appraisals.otherContents}</td>
                      </tr>
                      <tr>
                        <th>CO-PO-PSO Mapping and Attainment </th>
                        <td>{appraisals.coPoPsoMapping}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Course file and Remedial classes assessment</th>
                        <td>{appraisals.totalScore6}</td>
                      </tr>
                      <tr>
                        <th>Short Term based one time Activity</th>
                        <td>{appraisals.shortTerm7a}</td>
                      </tr>
                      <tr>
                        <th>Semester/ Term based (3 to 6 months)</th>
                        <td>{appraisals.semester7a}</td>
                      </tr>
                      <tr>
                        <th>Academic Year Activity (more than 6 months to one year) </th>
                        <td>{appraisals.academicYear7a}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty contribution at department level</th>
                        <td>{appraisals.totalScore7a}</td>
                      </tr>
                      <tr>
                        <th>Short Term based one time Activity</th>
                        <td>{appraisals.shortTerm7b}</td>
                      </tr>
                      <tr>
                        <th>Semester/ Term based (3 to 6 months)</th>
                        <td>{appraisals.semester7b}</td>
                      </tr>
                      <tr>
                        <th>Academic Year Activity (more than 6 months to one year)</th>
                        <td>{appraisals.academicYear7b}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty contribution at institute level</th>
                        <td>{appraisals.totalScore7b}</td>
                      </tr>
                      <tr>
                        <th>Short Term based one time Activity</th>
                        <td>{appraisals.shortTerm7c}</td>
                      </tr>
                      <tr>
                        <th>Semester/ Term based (3 to 6 months)</th>
                        <td>{appraisals.semester7c}</td>
                      </tr>
                      <tr>
                        <th>Academic Year Activity (more than 6 months to one year)</th>
                        <td>{appraisals.academicYear7c}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty contribution at Campus Level </th>
                        <td>{appraisals.totalScore7c}</td>
                      </tr>
                      <tr><th> Faculty contribution in research and publication:</th></tr>
                      <tr><th> Publication :</th></tr>

                      <tr>
                        <th>International Journal : Scopus, Web of Science, Thomson Router, Clarivate Analytics etc</th>
                        <td>{appraisals.internationalJournal}</td>
                      </tr>
                      <tr>
                        <th>Citation in year </th>
                        <td>{appraisals.citation2022}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Publication</th>
                        <td>{appraisals.totalScore8a}</td>
                      </tr>
                      <tr><th> E-Learning, Books Published and Research Activity :</th></tr>
                      <tr>
                        <th>International Publishers </th>
                        <td>{appraisals.international}</td>
                      </tr>
                      <tr>
                        <th>National Publishers </th>
                        <td>{appraisals.national}</td>
                      </tr>
                      <tr>
                        <th>Chapter in Edited Book</th>
                        <td>{appraisals.chapter}</td>
                      </tr>
                      <tr>
                        <th>Editor of Book by International Publisher</th>
                        <td>{appraisals.editorInternational}</td>
                      </tr>
                      <tr>
                        <th>Editor of Book by National Publisher</th>
                        <td>{appraisals.editorNational}</td>
                      </tr>
                      <tr><th>Translation works in Indian and Foreign Languages by qualified faculties:</th></tr>
                      <tr>
                        <th>Chapter or Research Paper </th>
                        <td>{appraisals.researchPaper}</td>
                      </tr>
                      <tr>
                        <th>Book </th>
                        <td>{appraisals.book}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Books authored which are published by International publishers National Publishers Chapter in Edited Book Editor of Book by International Publisher Editor of Book by National Publisher Chapter or Research paper Book</th>
                        <td>{appraisals.totalScore8b1}</td>
                      </tr>
                      <tr>
                        <th>Development of innovative pedagogy</th>
                        <td>{appraisals.innovativePedagogy}</td>
                      </tr>
                      <tr>
                        <th>Development of E-Content</th>
                        <td>{appraisals.eContentDevelopment}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Creation of ICT mediated Teaching Learning pedagogy and content and development of new and innovative course and curricula</th>
                        <td>{appraisals.totalScore8b2}</td>
                      </tr>

                      <tr>
                        <th>Research guidance Ph.D. (if applicable) </th>
                        <td>{appraisals.phdGuidance}</td>
                      </tr>
                      <tr>
                        <th>P.G. dissertation/ BE project</th>
                        <td>{appraisals.pgDissertation}</td>
                      </tr>
                      <tr><th>Research Projects Completed ( Not Less than 50,000):</th></tr>
                      <tr>
                        <th>More than 10 lakhs</th>
                        <td>{appraisals.completedResearchProjectMoreThan10Lakhs}</td>
                      </tr>
                      <tr>
                        <th>Less than 10 lakhs</th>
                        <td>{appraisals.completedResearchProjectLessThan10Lakhs}</td>
                      </tr>
                      <tr><th>Research Projects Ongoing ( Not Less than 50,000):</th></tr>

                      <tr>
                        <th>More than 10 lakhs</th>
                        <td>{appraisals.ongoingResearchProjectMoreThan10Lakhs}</td>
                      </tr>
                      <tr>
                        <th>Less than 10 lakhs </th>
                        <td>{appraisals.ongoingResearchProjectLessThan10Lakhs}</td>
                      </tr>
                      <tr>
                        <th>In-house Product Development</th>
                        <td>{appraisals.inHouseProductDevelopment}</td>
                      </tr>
                      <tr>
                        <th>Consultancy ( Any Amount) </th>
                        <td>{appraisals.consultancy}</td>
                      </tr>
                      <tr>
                        <th>Editorial Board/Reviewer of Indexed Journals/Solicited Articles </th>
                        <td>{appraisals.editorialBoardReviewer}</td>
                      </tr>
                      <tr>
                        <th>Paper Published with Industry person</th>
                        <td>{appraisals.paperPublishedWithIndustryPerson}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Research and Consultancy</th>
                        <td>{appraisals.totalScore8b3}</td>
                      </tr>
                      <tr>
                        <th>Patents (International) </th>
                        <td>{appraisals.internationalPatents}</td>
                      </tr>
                      <tr>
                        <th>Patents (National)</th>
                        <td>{appraisals.nationalPatents}</td>
                      </tr>
                      <tr>
                        <th>Copyrights</th>
                        <td>{appraisals.copyrights}</td>
                      </tr>
                      <tr>
                        <th>Awards/Fellowship</th>
                        <td>{appraisals.awards}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}> Patents, Copyrights etc.</th>
                        <td>{appraisals.totalScore8b4}</td>
                      </tr>
                      <tr>
                        <th>International (abroad)</th>
                        <td>{appraisals.intlAbroad}</td>
                      </tr>
                      <tr>
                        <th>International (within country) </th>
                        <td>{appraisals.intlWithin}</td>
                      </tr>
                      <tr>
                        <th>National </th>
                        <td>{appraisals.Innational}</td>
                      </tr>
                      <tr>
                        <th>State/ University </th>
                        <td>{appraisals.stateUni}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Invited as Resource Persons for conference, seminar, workshop.</th>
                        <td>{appraisals.totalScore8b5}</td>
                      </tr>
                      <tr >
                        <th>STTP/ QIP/TTTI/Refresher Courses/ Skill Development Programs/ Faculty Development Programs, etc organized (one week/two weeks)</th>
                        <td>{appraisals.sttpOrganized}</td>
                      </tr>
                      <tr>
                        <th> STTP/ QIP/TTTI/Refresher Courses/ Skill Development Programs/ Faculty Development Programs, etc attended (one week/two weeks)</th>
                        <td>{appraisals.sttpAttended}</td>
                      </tr>
                      <tr>
                        <th>Conferences/ Workshops/Symposium/Seminar attended (min. 5 days) </th>
                        <td>{appraisals.conferenceAttended}</td>
                      </tr>
                      <tr>
                        <th> NPTEL or Equivalent Certification or Technical Graded Certification or ATAL FDP or Mooc's Courses </th>
                        <td>{appraisals.nptelCertification}</td>
                      </tr>
                      <tr>
                        <th> Improvement/Enhanced Academic Qualification (e.g. GATE Qualified, Ph.D registration/ Completion) </th>
                        <td>{appraisals.academicQualification}</td>
                      </tr>
                      <tr>
                        <th> Active MoU with Industry/ Recognized Institution / University </th>
                        <td>{appraisals.mouWithIndustry}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty value added courses </th>
                        <td>{appraisals.totalScore9}</td>
                      </tr>
                      <tr style={{ backgroundColor: ' #bf80ff' }} >
                        <th style={{ backgroundColor: ' #bf80ff' }}>Appraisal  Total Score Form A </th>
                        <td>{appraisals.totalScoreformA}</td>
                      </tr>
                      <tr style={{ backgroundColor: ' #bf80ff' }}>
                        <th style={{ backgroundColor: ' #bf80ff' }}>Appraisal  Total Score Form B </th>
                        <td>{appraisals.totalScoreformB}</td>
                      </tr>
                      <tr style={{ backgroundColor: ' #ebccff' }}>
                        <th style={{ backgroundColor: ' #ebccff' }}>Appraisal  Total Score </th>
                        <td>{appraisals.totalScore}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="appraisal-details">
                  <p>No appraisal details available for this employee.</p>
                </div>
              )}
              <br />
              <button className='btnZ' onClick={handleGoBack}>Go Back</button>
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default EmployeeTable;
