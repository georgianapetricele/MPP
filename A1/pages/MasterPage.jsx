import React from "react"; 
import { students } from "../constants"; 
import { Link } from "react-router-dom";
import "../css/master.css";
import {Table,Button} from 'react-bootstrap';

const MasterPage = () => {
    return (
        <div className="centerContainer">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>
                                <Link to={`/${student.id}`} className="link">
                                    {student.name}
                                </Link>
                            </td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
    );
}

export default MasterPage;