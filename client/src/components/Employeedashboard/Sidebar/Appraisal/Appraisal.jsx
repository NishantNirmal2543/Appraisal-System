import React, { useState } from 'react'
import "./Appraisal.css"
const Appraisal = () => {
    //1
    const [classesTaught, setClassesTaught] = useState(0);
    const [totalClasses, setTotalClasses] = useState(0);
    const [totalScore1, setTotalScore1] = useState(0);

    //2
    const [paperEval, setPaperEval] = useState(0);
    const [studentActivities, setStudentActivities] = useState(0);
    const [totalScore2, setTotalScore2] = useState(0);


    //5 
    const [internalFeedback, setInternalFeedback] = useState(0);
    const [externalFeedback, setExternalFeedback] = useState(0);
    const [totalScore5, setTotalScore5] = useState(0);
    //6

    const [handwrittenNotes, setHandwrittenNotes] = useState(0);
    const [otherContents, setOtherContents] = useState(0);
    const [coPoPsoMapping, setCoPoPsoMapping] = useState(0);
    const [totalScore6, setTotalScore6] = useState(0);



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

    //8b.1

    const [international, setInternational] = useState(0);
    const [national, setNational] = useState(0);
    const [chapter, setChapter] = useState(0);
    const [editorInternational, setEditorInternational] = useState(0);
    const [editorNational, setEditorNational] = useState(0);
    const [researchPaper, setResearchPaper] = useState(0);
    const [book, setBook] = useState(0);
    const [totalScore8b1, setTotalScore8b1] = useState(0);


    //8b.2

    const [innovativePedagogy, setInnovativePedagogy] = useState(0);
    const [eContentDevelopment, setEContentDevelopment] = useState(0);
    const [totalScore8b2, setTotalScore8b2] = useState(0);

    //8b.3

    const [phdGuidance, setPhdGuidance] = useState(0);
    const [pgDissertation, setPgDissertation] = useState(0);
    const [completedResearchProjectMoreThan10Lakhs, setCompletedResearchProjectMoreThan10Lakhs] = useState(0);
    const [completedResearchProjectLessThan10Lakhs, setCompletedResearchProjectLessThan10Lakhs] = useState(0);
    const [ongoingResearchProjectMoreThan10Lakhs, setOngoingResearchProjectMoreThan10Lakhs] = useState(0);
    const [ongoingResearchProjectLessThan10Lakhs, setOngoingResearchProjectLessThan10Lakhs] = useState(0);
    const [inHouseProductDevelopment, setInHouseProductDevelopment] = useState(0);
    const [consultancy, setConsultancy] = useState(0);
    const [editorialBoardReviewer, setEditorialBoardReviewer] = useState(0);
    const [paperPublishedWithIndustryPerson, setPaperPublishedWithIndustryPerson] = useState(0);
    const [totalScore8b3, setTotalScore8b3] = useState(0);

    //8b.4

    const [internationalPatents, setInternationalPatents] = useState(0);
    const [nationalPatents, setNationalPatents] = useState(0);
    const [copyrights, setCopyrights] = useState(0);
    const [awards, setAwards] = useState(0);
    const [totalScore8b4, setTotalScore8b4] = useState(0);

    //8b.5
    const [intlAbroad, setIntlAbroad] = useState(0);
    const [intlWithin, setIntlWithin] = useState(0);
    const [Innational, setInNational] = useState(0);
    const [stateUni, setStateUni] = useState(0);
    const [totalScore8b5, setTotalScore8b5] = useState(0);

    //9
    const [sttpOrganized, setSttpOrganized] = useState(0);
    const [sttpAttended, setSttpAttended] = useState(0);
    const [conferenceAttended, setConferenceAttended] = useState(0);
    const [nptelCertification, setNptelCertification] = useState(0);
    const [academicQualification, setAcademicQualification] = useState(0);
    const [mouWithIndustry, setMouWithIndustry] = useState(0);
    const [totalScore9, setTotalScore9] = useState(0);


    //total
    const [totalScoreformB, setTotalScoreformB] = useState(0);

    const calculateScoreB = () => {
        const scoreB = totalScore7a + totalScore7b + totalScore7c + totalScore8a + totalScore8b1 + totalScore8b2 + totalScore8b3 + totalScore8b4 + totalScore8b5 + totalScore9;
        setTotalScoreformB(scoreB);
    };


    //1
    const handleClassesTaughtChange = (event) => {
        setClassesTaught(Number(event.target.value));
    };

    const handleTotalClassesChange = (event) => {
        setTotalClasses(Number(event.target.value));
    };

    const calculateScore1 = () => {
        const percentage = (classesTaught / totalClasses) * 100;
        let score = 0;

        if (percentage >= 80) {
            score = 10;
        } else if (percentage >= 70) {
            score = 5;
        }

        setTotalScore1(score);
    };


    //2

    const handlePaperEvalChange = (event) => {
        setPaperEval(Number(event.target.value));
    };

    const handleStudentActivitiesChange = (event) => {
        setStudentActivities(Number(event.target.value));
    };

    const calculateScore2 = () => {
        const score2 = paperEval + studentActivities;
        setTotalScore2(score2);
    };


    //5

    const handleInternalFeedbackChange = (event) => {
        setInternalFeedback(parseInt(event.target.value));
    };

    const handleExternalFeedbackChange = (event) => {
        setExternalFeedback(parseInt(event.target.value));
    };

    const calculateScore5 = () => {
        let score = 0;

        if (internalFeedback >= 90) {
            score += 10;
        } else if (internalFeedback >= 81) {
            score += 8;
        } else if (internalFeedback >= 71) {
            score += 6;
        } else if (internalFeedback >= 61) {
            score += 4;
        }

        if (externalFeedback >= 90) {
            score += 20;
        } else if (externalFeedback >= 81) {
            score += 16;
        } else if (externalFeedback >= 71) {
            score += 12;
        } else if (externalFeedback >= 61) {
            score += 8;
        }

        setTotalScore5(score);
    };

    //6
    const handleHandwrittenNotesChange = (event) => {
        setHandwrittenNotes(Number(event.target.value));
    };

    const handleOtherContentsChange = (event) => {
        setOtherContents(Number(event.target.value));
    };

    const handleCoPoPsoMappingChange = (event) => {
        setCoPoPsoMapping(Number(event.target.value));
    };

    const calculateScore6 = () => {
        const score6 = handwrittenNotes + otherContents + coPoPsoMapping;
        setTotalScore6(score6);
    };




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

    //8b1

    const handleInternationalChange = (event) => {
        setInternational(Number(event.target.value));
    };

    const handleNationalChange = (event) => {
        setNational(Number(event.target.value));
    };

    const handleChapterChange = (event) => {
        setChapter(Number(event.target.value));
    };

    const handleEditorInternationalChange = (event) => {
        setEditorInternational(Number(event.target.value));
    };

    const handleEditorNationalChange = (event) => {
        setEditorNational(Number(event.target.value));
    };

    const handleResearchPaperChange = (event) => {
        setResearchPaper(Number(event.target.value));
    };

    const handleBookChange = (event) => {
        setBook(Number(event.target.value));
    };

    const calculateScore8b1 = () => {
        const score8b1 = international + national + chapter + editorInternational + editorNational + researchPaper + book;
        setTotalScore8b1(score8b1);
    };

    //8b2

    const handleInnovativePedagogyChange = (event) => {
        setInnovativePedagogy(Number(event.target.value));
    };

    const handleEContentDevelopmentChange = (event) => {
        setEContentDevelopment(Number(event.target.value));
    };

    const calculateScore8b2 = () => {
        const score8b2 = innovativePedagogy + eContentDevelopment;
        setTotalScore8b2(score8b2);
    };

    //8b3

    const handlePhdGuidanceChange = (event) => {
        setPhdGuidance(Number(event.target.value));
    };

    const handlePgDissertationChange = (event) => {
        setPgDissertation(Number(event.target.value));
    };

    const handleCompletedResearchProjectMoreThan10LakhsChange = (event) => {
        setCompletedResearchProjectMoreThan10Lakhs(Number(event.target.value));
    };

    const handleCompletedResearchProjectLessThan10LakhsChange = (event) => {
        setCompletedResearchProjectLessThan10Lakhs(Number(event.target.value));
    };

    const handleOngoingResearchProjectMoreThan10LakhsChange = (event) => {
        setOngoingResearchProjectMoreThan10Lakhs(Number(event.target.value));
    };

    const handleOngoingResearchProjectLessThan10LakhsChange = (event) => {
        setOngoingResearchProjectLessThan10Lakhs(Number(event.target.value));
    };

    const handleInHouseProductDevelopmentChange = (event) => {
        setInHouseProductDevelopment(Number(event.target.value));
    };

    const handleConsultancyChange = (event) => {
        setConsultancy(Number(event.target.value));
    };

    const handleEditorialBoardReviewerChange = (event) => {
        setEditorialBoardReviewer(Number(event.target.value));
    };

    const handlePaperPublishedWithIndustryPersonChange = (event) => {
        setPaperPublishedWithIndustryPerson(Number(event.target.value));
    };

    const calculateScore8b3 = () => {
        const score8b3 =
            phdGuidance +
            pgDissertation +
            completedResearchProjectMoreThan10Lakhs +
            completedResearchProjectLessThan10Lakhs +
            ongoingResearchProjectMoreThan10Lakhs +
            ongoingResearchProjectLessThan10Lakhs +
            inHouseProductDevelopment +
            consultancy +
            editorialBoardReviewer +
            paperPublishedWithIndustryPerson;
        setTotalScore8b3(score8b3);
    };


    //8b4

    const handleInternationalPatentsChange = (event) => {
        setInternationalPatents(Number(event.target.value));
    };

    const handleNationalPatentsChange = (event) => {
        setNationalPatents(Number(event.target.value));
    };

    const handleCopyrightsChange = (event) => {
        setCopyrights(Number(event.target.value));
    };

    const handleAwardsChange = (event) => {
        setAwards(Number(event.target.value));
    };

    const calculateScore8b4 = () => {
        const score8b4 =
            internationalPatents +
            nationalPatents +
            copyrights +
            awards;
        setTotalScore8b4(score8b4);
    };


    //8b5

    const handleIntlAbroadChange = (event) => {
        setIntlAbroad(Number(event.target.value));
    };

    const handleIntlWithinChange = (event) => {
        setIntlWithin(Number(event.target.value));
    };

    const handleInNationalChange = (event) => {
        setInNational(Number(event.target.value));
    };

    const handleStateUniChange = (event) => {
        setStateUni(Number(event.target.value));
    };

    const calculateScore8b5 = () => {
        const score8b5 = intlAbroad + intlWithin + Innational + stateUni;
        setTotalScore8b5(score8b5);
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
            {/* form A */}
            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginTop: "100px" }}>
                <h2 style={{ textAlign: "center" }}>PART-A : Teaching Learning performance</h2>

                <div className="form-group">
                    <u><b>1.Teaching load assessment :</b></u>
                    <p>(Max marks : 10)</p>
                    <label>
                        Number of classes taught:
                        <input type="number" value={classesTaught} onChange={handleClassesTaughtChange} />
                    </label>
                    <br />
                    <label>
                        Total classes assigned:
                        <input type="number" value={totalClasses} onChange={handleTotalClassesChange} />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore1}>Calculate Total Score</button>
                    <p className="total-score">Total Score: {totalScore1}</p>
                </div>
                <div className="form-group">
                    <u><b>2. Examination and evaluation duties assigned by university/institute :</b></u>
                    <p>(Max marks : 2. a- 10, 2. B-20)</p>
                    <label>Involvement in the student related activities :</label>
                    <br />
                    <label>
                        2.a. Paper evaluation duties
                        <input type="number" value={paperEval} onChange={handlePaperEvalChange} />
                    </label>
                    <br />
                    <label>
                        2.b. Student related activities (clubs, counseling, seminars, etc.)
                        <input type="number" value={studentActivities} onChange={handleStudentActivitiesChange} />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore2}>Calculate Total Score</button>
                    <p className="total-score">Total Score: {totalScore2}</p>
                </div>


                <div className="form-group">
                    <u><b>3.Teacher Guardian performance : </b></u>
                    <p>(Max marks 50 for Professor, Senior Professor, Associate Professor and Max marks 65 for Senior Assistant Professor, Assistant Professor- Refer Guideline for same)</p>



                </div>


                <div className="form-group">
                    <u><b>4. University result analysis:  </b></u>
                    <p>(Max marks 80)</p>



                </div>


                
                <div className="form-group">
                    <u><b>5. Course file and Remedial classes assessment : </b></u>
                    <p>(Max marks : 30)</p>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Grade</th>
                                    <th>Score (Internal Feedback)</th>
                                    <th>Score (External Feedback)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A+ (90 & above)</td>
                                    <td>10</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>A (81 to 89)</td>
                                    <td>8</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>B+ (71 to 80)</td>
                                    <td>6</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>B (61 to 70)</td>
                                    <td>4</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>C  (less than 60)</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <br />
                    <label>
                        Internal Feedback Grade Score
                        <input type="number" value={internalFeedback} onChange={handleInternalFeedbackChange} />
                    </label>
                    <br />
                    <label>
                        External Feedback Grade Score
                        <input type="number" value={externalFeedback} onChange={handleExternalFeedbackChange} />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore5}>Calculate Score</button>
                    <p className="total-score">Total Score: {totalScore5}</p>

                </div>
                <div className="form-group">
                    <u><b>6. Course file and Remedial classes assessment :</b></u>
                    <p>(Max marks :30)</p>
                    <label>
                        6.a.Handwritten Notes of 03 (three) units*
                        <input
                            type="number"
                            value={handwrittenNotes}
                            onChange={handleHandwrittenNotesChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        6.b.Other contents as Accreditation Board
                        <input
                            type="number"
                            value={otherContents}
                            onChange={handleOtherContentsChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        6.c.CO-PO-PSO Mapping and Attainment
                        <input
                            type="number"
                            value={coPoPsoMapping}
                            onChange={handleCoPoPsoMappingChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore6}>Calculate Total Score</button>
                    <p className="total-score" >Total Score: {totalScore6}</p>

                </div>
            </div>

            {/* form B */}

            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginTop: "100px" }}>
                <h2 style={{ textAlign: "center" }}>PART-B : Research & Publication</h2>


                <div className="form-group">
                    <u><b>7. Faculty Contribution to Department, Institute and organization:</b></u>
                    <p>(Max marks 30 for Professor, Senior Associate Professor, Associate Professor and Max Marks 40 for Senior Assistant Professor and Assistant Professor - Refer Guideline for same)</p>
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
                    <u><b>8. Faculty contribution in research and publication:</b></u>
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
                <div className="form-group">
                    <h2>8b) E-Learning, Books Published and Research Activity</h2>
                    <p>( Refer Guidelines for Max Marks allotted as per faculty cadre)</p>

                    <p>8.b.1 Books authored which are published by International publishers National Publishers Chapter in Edited Book Editor of Book by International Publisher Editor of Book by National Publisher Chapter or Research paper Book</p>
                    <br />
                    <label>
                        International Publishers
                        <input type="number" value={international} onChange={handleInternationalChange} />
                    </label>
                    <br />
                    <label>
                        National Publishers
                        <input type="number" value={national} onChange={handleNationalChange} />
                    </label>
                    <br />
                    <label>
                        Chapter in Edited Book
                        <input type="number" value={chapter} onChange={handleChapterChange} />
                    </label>
                    <br />
                    <label>
                        Editor of Book by International Publisher
                        <input type="number" value={editorInternational} onChange={handleEditorInternationalChange} />
                    </label>

                    <br />
                    <label>
                        Editor of Book by National Publisher
                        <input type="number" value={editorNational} onChange={handleEditorNationalChange} />
                    </label>
                    <br />
                    <label>Translation works in Indian and Foreign Languages by qualified faculties:
                    </label>
                    <br />
                    <label>
                        Chapter or Research Paper
                        <input type="number" value={researchPaper} onChange={handleResearchPaperChange} />
                    </label>
                    <br />
                    <label>
                        Book
                        <input type="number" value={book} onChange={handleBookChange} />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore8b1}>Calculate Total Score</button>
                    <p className="total-score">Total Score: {totalScore8b1}</p>
                    <br />
                    <p>8.b.2 Creation of ICT mediated Teaching Learning pedagogy and content and development of new and innovative course and curricula</p>
                    <br />
                    <label>
                        Development of innovative pedagogy
                        <input
                            type="number"
                            value={innovativePedagogy}
                            onChange={handleInnovativePedagogyChange}
                        />
                    </label>
                    <br />
                    <label>
                        Development of E-Content
                        <input
                            type="number"
                            value={eContentDevelopment}
                            onChange={handleEContentDevelopmentChange}
                        />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore8b2}>Calculate Total Score</button>
                    <p className="total-score">Total Score: {totalScore8b2}</p>
                    <br />

                    <p>8.b.3 Research and Consultancy</p>
                    <label>
                        Research guidance Ph.D. (if applicable)
                        <input type="number" value={phdGuidance} onChange={handlePhdGuidanceChange} />
                    </label>
                    <br />
                    <label>
                        P.G. dissertation/ BE project
                        <input type="number" value={pgDissertation} onChange={handlePgDissertationChange} />
                    </label>
                    <br />
                    <label>
                        Research Projects Completed ( Not Less than 50,000):
                    </label>
                    <br />
                    <label >
                        More than 10 lakhs
                        <input type="number" value={completedResearchProjectMoreThan10Lakhs} onChange={handleCompletedResearchProjectMoreThan10LakhsChange} />
                    </label>
                    <br />
                    <label>
                        Less than 10 lakhs
                        <input type="number" value={completedResearchProjectLessThan10Lakhs} onChange={handleCompletedResearchProjectLessThan10LakhsChange} />
                    </label>
                    <br />
                    <label>
                        Research Projects Ongoing ( Not Less than 50,000):
                    </label>
                    <br />
                    <label >
                        More than 10 lakhs
                        <input type="number" value={ongoingResearchProjectMoreThan10Lakhs} onChange={handleOngoingResearchProjectMoreThan10LakhsChange} />
                    </label>
                    <br />
                    <label>
                        Less than 10 lakhs
                        <input type="number" value={ongoingResearchProjectLessThan10Lakhs} onChange={handleOngoingResearchProjectLessThan10LakhsChange} />
                    </label>
                    <br />
                    <label>
                        In-house Product Development
                        <input type="number" value={inHouseProductDevelopment} onChange={handleInHouseProductDevelopmentChange} />
                    </label>
                    <br />
                    <label>
                        Consultancy ( Any Amount)
                        <input type="number" value={consultancy} onChange={handleConsultancyChange} />
                    </label>
                    <br />
                    <label>
                        Editorial Board/Reviewer of Indexed Journals/Solicited Articles
                        <input type="number" value={editorialBoardReviewer} onChange={handleEditorialBoardReviewerChange} />
                    </label>
                    <br />
                    <label>
                        Paper Published with Industry person
                        <input type="number" value={paperPublishedWithIndustryPerson} onChange={handlePaperPublishedWithIndustryPersonChange} />
                    </label>
                    <br />
                    <button onClick={calculateScore8b3} className="btn btn-primary">Calculate Total Score</button>
                    <p className="total-score" >Total Score: {totalScore8b3}</p>
                    <br />
                    <p>8.b.4 Patents, Copyrights etc</p>
                    <label>
                        Patents (International)
                        <input
                            type="number"
                            value={internationalPatents}
                            onChange={handleInternationalPatentsChange}
                        />
                    </label>
                    <br />
                    <label>
                        Patents (National)
                        <input
                            type="number"
                            value={nationalPatents}
                            onChange={handleNationalPatentsChange}
                        />
                    </label>
                    <br />
                    <label>
                        Copyrights
                        <input
                            type="number"
                            value={copyrights}
                            onChange={handleCopyrightsChange}
                        />
                    </label>
                    <br />
                    <label>
                        Awards/Fellowship
                        <input
                            type="number"
                            value={awards}
                            onChange={handleAwardsChange}
                        />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore8b4}>Calculate Total Score</button>
                    <p className="total-score">Total Score: {totalScore8b4}</p>
                    <br />
                    <p> 8.b.5 Invited as Resource Persons for conference, seminar, workshop.</p>

                    <label>
                        International (abroad)
                        <input type="number" value={intlAbroad} onChange={handleIntlAbroadChange} />
                    </label>
                    <br />
                    <label>
                        International (within country)
                        <input type="number" value={intlWithin} onChange={handleIntlWithinChange} />
                    </label>
                    <br />
                    <label>
                        National
                        <input type="number" value={Innational} onChange={handleInNationalChange} />
                    </label>
                    <br />
                    <label>
                        State/ University
                        <input type="number" value={stateUni} onChange={handleStateUniChange} />
                    </label>
                    <br />
                    <button className="btn" onClick={calculateScore8b5}>Calculate Total Score</button>
                    <p className="total-score">Total Score: {totalScore8b5}</p>


                </div>

                <div className="form-group">
                    <u><b>9. Faculty value added courses:</b></u>
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

                <br />
                <button className="btn" onClick={calculateScoreB}>Calculate Form B Score</button>
                <br />
                <p className="total-score">Total Score Form B: {totalScoreformB}</p>
            </div>
        </>
    );
}

export default Appraisal;



