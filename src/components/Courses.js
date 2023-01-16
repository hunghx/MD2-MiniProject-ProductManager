import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function Courses() {
    // const student = useLocation();
    const [searchParam, setSearchParam] = useSearchParams();
    let id = searchParam.get('id');
    let courseName = searchParam.get('courseName');
    let time = searchParam.get('time');

    return (
        <div>
            Courses
            {/* <p>StudentId: {student.state.studentId} - Student Name: {student.state.studentName}</p> */}
            <table>
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Java Fullstack</td>
                        <td>1200</td>
                        <td><button onClick={() => setSearchParam({ id: 1, courseName: "Java Fullstack", time: 1200 })}>Detail</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Javascript Fullstack</td>
                        <td>1000</td>
                        <td><button onClick={() => setSearchParam({ id: 2, courseName: "Javascript Fullstack", time: 1000 })}>Detail</button></td>
                    </tr>
                </tbody>
            </table>
            <p>Id: {id} - Course Name: {courseName} - Time: {time}</p>
        </div>
    )
}
