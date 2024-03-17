import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal.jsx";
import { ModalEdit } from "./ModalEdit.jsx";
import "../css/master.css";
import { students as initialStudents } from "../constants.js";

const MasterPage = () => {
    const [students, setStudents] = useState(() => {
        const savedStudents = localStorage.getItem("students");
        return savedStudents ? JSON.parse(savedStudents) : initialStudents;
    });

    const [studentToEdit, setStudentToEdit] = useState(null); // State to store the index of the student being edited
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const handleSubmit = (newStudent) => {
        setStudents([newStudent, ...students]);
    };

    const handleEdit = (updatedStudent) => {
        const updatedStudents = students.map((student, index) =>
            index === studentToEdit ? updatedStudent : student
        );
        setStudents(updatedStudents);
        setModalEditOpen(false); // Close the modal after editing
        setStudentToEdit(null); // Reset the studentToEdit state
    };

    const handleDelete = (studentId) => {
        const newData = students.filter((entity) => entity.id !== studentId);
        setStudents(newData);
    };

    return (
        <div className="centerContainer">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th colSpan={2}>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>
                                <Link to={`/${student.id}`} className="link">
                                    {student.name}
                                </Link>
                            </td>
                            <td>{student.age}</td>
                            <td>
                                <button className="btn" onClick={() => {
                                    setModalEditOpen(true);
                                    setStudentToEdit(index); // Set the index of the student being edited
                                }}>Update</button>
                            </td>
                            <td>
                                <button className="btn" onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn" onClick={() => setModalAddOpen(true)}>Add</button>
            {modalEditOpen && (
                <ModalEdit
                    closeModal={() => {
                        setModalEditOpen(false);
                        setStudentToEdit(null); // Reset the studentToEdit state when closing the modal
                    }}
                    onSubmit={handleEdit}
                    defaultValue={studentToEdit !== null ? students[studentToEdit] : null} // Pass the student to be edited as defaultValue
                />
            )}
            {modalAddOpen && (
                <Modal
                    closeModal={() => setModalAddOpen(false)}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default MasterPage;