import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    // Lấy dữ liệu tham số trên url
    let params = useParams();
    return (
        <div>
            CourseDetail
            <p>Id:{params.id} - Course Name:{params.courseName}</p>
        </div>
    )
}
