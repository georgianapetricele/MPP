import React from "react"; 
import { useParams } from "react-router-dom";
import { students } from "../constants.js";
import "../css/details.css"; 

const DetailsPage = () =>{
    const { studentId } = useParams();

    // Find the student with the matching studentId
    const student = students.find(student => student.id === studentId);

    return (
        <div className="detailsContainer">
            <div className="detailsContent">
                {student ? (
                    <>
                        <div className="detailsHeader">Student Details</div>
                        <div className="detailsBody">
                            <div className="detailsItem">
                                <span className="detailsLabel">Name:</span>
                                <span className="detailsText">{student.name}</span>
                            </div>
                            <div className="detailsItem">
                                <span className="detailsLabel">Age:</span>
                                <span className="detailsText">{student.age}</span>
                            </div>
                            <div className="detailsItem">
                                <span className="detailsLabel">Courses:</span>
                                {student.courses && student.courses.length > 0 ? (
                                    <ul>
                                        {student.courses.map(course => (
                                            <li key={course} className="detailsText">{course}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="detailsText">No courses</div>
                                )}
                            </div>
                            <div className="detailsItem">
                                <span className="detailsLabel">Major:</span>
                                <span className="detailsText">{student.major}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="detailsText">Teapa</div>
                )}
            </div>
        </div>
    );
}

export default DetailsPage;