import React, { useState } from 'react'
import "./Appraisal.css"
const Appraisal = () => {

    //7a
    const [shortTerm7a, setShortTerm7a] = useState(0);
    const [semester7a, setSemester7a] = useState(0);
    const [academicYear7a, setAcademicYear7a] = useState(0);
    const [totalScore7a, setTotalScore7a] = useState(0);

    //7b
    const [shortTerm7b, setShortTerm7b] = useState(0);
    const [semester7b, setSemester7b] = useState(0);
    const [academicYear7b, setAcademicYear7b] = useState(0);
    const [totalScore7b, setTotalScore7b] = useState(0);

    //7c
    const [shortTerm7c, setShortTerm7c] = useState(0);
    const [semester7c, setSemester7c] = useState(0);
    const [academicYear7c, setAcademicYear7c] = useState(0);
    const [totalScore7c, setTotalScore7c] = useState(0);
    //8a

    const [internationalJournal, setInternationalJournal] = useState(0);
    const [citation2022, setCitation2022] = useState(0);
    const [totalScore8a, setTotalScore8a] = useState(0);

    //9
    const [sttpOrganized, setSttpOrganized] = useState(0);
    const [sttpAttended, setSttpAttended] = useState(0);
    const [conferenceAttended, setConferenceAttended] = useState(0);
    const [nptelCertification, setNptelCertification] = useState(0);
    const [academicQualification, setAcademicQualification] = useState(0);
    const [mouWithIndustry, setMouWithIndustry] = useState(0);
    const [totalScore9, setTotalScore9] = useState(0);

    //7
    const handleShortTermChange7a = (event) => {
        setShortTerm7a(Number(event.target.value));
    };

    const handleSemesterChange7a = (event) => {
        setSemester7a(Number(event.target.value));
    };

    const handleAcademicYearChange7a = (event) => {
        setAcademicYear7a(Number(event.target.value));
    };

    const calculateScore7a = () => {
        const score7a = shortTerm7a + semester7a + academicYear7a;
        setTotalScore7a(score7a);
    };


    const handleShortTermChange7b = (event) => {
        setShortTerm7b(Number(event.target.value));
    };

    const handleSemesterChange7b = (event) => {
        setSemester7b(Number(event.target.value));
    };

    const handleAcademicYearChange7b = (event) => {
        setAcademicYear7b(Number(event.target.value));
    };

    const calculateScore7b = () => {
        const score7b = shortTerm7b + semester7b + academicYear7b;
        setTotalScore7b(score7b);
    };


    const handleShortTermChange7c = (event) => {
        setShortTerm7c(Number(event.target.value));
    };

    const handleSemesterChange7c = (event) => {
        setSemester7c(Number(event.target.value));
    };

    const handleAcademicYearChange7c = (event) => {
        setAcademicYear7c(Number(event.target.value));
    };

    const calculateScore7c = () => {
        const score7c = shortTerm7c + semester7c + academicYear7c;
        setTotalScore7c(score7c);
    };
    //8a
    const handleInternationalJournalChange = (event) => {
        setInternationalJournal(Number(event.target.value));
    };

    const handleCitation2022Change = (event) => {
        setCitation2022(Number(event.target.value));
    };

    const calculateScore8a = () => {
        const score8a = internationalJournal + citation2022;
        setTotalScore8a(score8a);
    };
    //9
    const handleSttpOrganizedChange = (event) => {
        setSttpOrganized(Number(event.target.value));
    };

    const handleSttpAttendedChange = (event) => {
        setSttpAttended(Number(event.target.value));
    };

    const handleConferenceAttendedChange = (event) => {
        setConferenceAttended(Number(event.target.value));
    };

    const handleNptelCertificationChange = (event) => {
        setNptelCertification(Number(event.target.value));
    };

    const handleAcademicQualificationChange = (event) => {
        setAcademicQualification(Number(event.target.value));
    };

    const handleMouWithIndustryChange = (event) => {
        setMouWithIndustry(Number(event.target.value));
    };

    const calculateScore9 = () => {
        const score9 =
            sttpOrganized +
            sttpAttended +
            conferenceAttended +
            nptelCertification +
            academicQualification +
            mouWithIndustry;
        setTotalScore9(score9);
    };


    return (
        <>
            <h2 style={{ textAlign: "center" }}>PART-B : Research & Publication</h2>

            <div>
                <b>7. Faculty Contribution to Department, Institute and organization:</b>
                <p>(Max marks 30 for Professor, Senior Associate Professor, Associate Professor and Max Marks 40 for Senior Assistant Professor and Assistant Professor - Refer Guideline for same)</p>
            </div>
            <div className="form-group">
                <h2>7a) Faculty contribution at department level</h2>
                <label>
                    Short Term based one time Activity:
                    <input type="number" value={shortTerm7a} onChange={handleShortTermChange7a} />
                </label>
                <br />
                <label>
                    Semester/ Term based (3 to 6 months):
                    <input type="number" value={semester7a} onChange={handleSemesterChange7a} />
                </label>
                <br />
                <label>
                    Academic Year Activity (more than 6 months to one year):
                    <input type="number" value={academicYear7a} onChange={handleAcademicYearChange7a} />
                </label>
                <br />
                <button className="btn" onClick={calculateScore7a}>Calculate Score</button>
                <br />
                <p className="total-score">Total Score: {totalScore7a}</p>
            </div>
            <div className="form-group">
                <h2>7b) Faculty contribution at institute level</h2>
                <label>
                    Short Term based one time Activity:
                    <input type="number" value={shortTerm7b} onChange={handleShortTermChange7b} />
                </label>
                <br />
                <label>
                    Semester/ Term based (3 to 6 months):
                    <input type="number" value={semester7b} onChange={handleSemesterChange7b} />
                </label>
                <br />
                <label>
                    Academic Year Activity (more than 6 months to one year):
                    <input type="number" value={academicYear7b} onChange={handleAcademicYearChange7b} />
                </label>
                <br />
                <button className="btn" onClick={calculateScore7b}>Calculate Score</button>
                <br />
                <p className="total-score">Total Score: {totalScore7b}</p>
            </div >
            <div className="form-group">
                <h2>7c) Faculty contribution at Campus Level </h2>
                <label>
                    Short Term based one time Activity:
                    <input type="number" value={shortTerm7c} onChange={handleShortTermChange7c} />
                </label>
                <br />
                <label>
                    Semester/ Term based (3 to 6 months):
                    <input type="number" value={semester7c} onChange={handleSemesterChange7c} />
                </label>
                <br />
                <label>
                    Academic Year Activity (more than 6 months to one year):
                    <input type="number" value={academicYear7c} onChange={handleAcademicYearChange7c} />
                </label>
                <br />
                <button className="btn" onClick={calculateScore7c}>Calculate Score</button>
                <br />
                <p className="total-score">Total Score: {totalScore7c}</p>
            </div>
            <div className="form-group">
                <b>8. Faculty contribution in research and publication:</b>
                <h2>8a) Publication</h2>
                <p>(Max marks 60 - Refer Guideline for same)</p>
                <label>
                    International Journal : Scopus, Web of Science, Thomson Router, Clarivate Analytics etc
                    <input
                        type="number"
                        value={internationalJournal}
                        onChange={handleInternationalJournalChange}
                    />
                </label>
                <br />
                <label>
                    Citation in year :
                    <input type="number" value={citation2022} onChange={handleCitation2022Change} />
                </label>

                <br />
                <button className="btn" onClick={calculateScore8a}>Calculate Total Score</button>
                <p className="total-score">Total Score: {totalScore8a}</p>
            </div>
            {/* <div>
                <h2>8b) E-Learning, Books Published and Research Activity</h2>
                <p>( Refer Guidelines for Max Marks allotted as per faculty cadre)</p>
            </div> */}






            <div className="form-group">
                <b>9. Faculty value added courses:</b>
                <h1></h1>
                <p>( Refer Guidelines for Max Marks allotted as per faculty cadre)</p>
                <label>
                    9.a. STTP/ QIP/TTTI/Refresher Courses/ Skill Development Programs/ Faculty Development Programs, etc organized (one week/two weeks)
                    <input
                        type="number"
                        value={sttpOrganized}
                        onChange={handleSttpOrganizedChange}
                    />
                </label>
                <br />
                <label>
                    9.b. STTP/ QIP/TTTI/Refresher Courses/ Skill Development Programs/ Faculty Development Programs, etc attended (one week/two weeks)
                    <input
                        type="number"
                        value={sttpAttended}
                        onChange={handleSttpAttendedChange}
                    />
                </label>
                <br />
                <label>
                    9.c. Conferences/ Workshops/Symposium/Seminar attended (min. 5 days)
                    <input
                        type="number"
                        value={conferenceAttended}
                        onChange={handleConferenceAttendedChange}
                    />
                </label>
                <br />
                <label>
                    9.d. NPTEL or Equivalent Certification or Technical Graded Certification or ATAL FDP or Mooc's Courses
                    <input
                        type="number"
                        value={nptelCertification}
                        onChange={handleNptelCertificationChange}
                    />
                </label>
                <br />
                <label>
                    9.e. Improvement/Enhanced Academic Qualification (e.g. GATE Qualified, Ph.D registration/ Completion)
                    <input
                        type="number"
                        value={academicQualification}
                        onChange={handleAcademicQualificationChange}
                    />
                </label>
                <br />
                <label>
                    9.f. Active MoU with Industry/ Recognized Institution / University
                    <input
                        type="number"
                        value={mouWithIndustry}
                        onChange={handleMouWithIndustryChange}
                    />
                </label>
                <br />
                <button className="btn" onClick={calculateScore9}>Calculate Total Score</button>
                <p className="total-score">Total Score: {totalScore9}</p>


            </div>

        </>
    );
}

export default Appraisal



