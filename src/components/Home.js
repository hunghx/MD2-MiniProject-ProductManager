import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            Home
            {/* useNavigate với 1 tham số - thay đổi đường dẫn URL */}
            <button onClick={() => navigate("courses")}>Go to Courses</button>
            {/* useNavigate với history - back hoặc forward trang */}
            <button onClick={() => navigate(-1)}>Back page</button>
            <button onClick={() => navigate(-2)}>Back two page</button>
            <button onClick={() => navigate(1)}>Forward page</button>
            <button onClick={() => navigate(2)}>Forward two page</button>
            {/* useNavigate với thuộc tính replace = true */}
            <button onClick={() => navigate("courses", { replace: true })}>Go to Course with replace</button>
            {/* useNavigate với thuộc tính state --> truyền dữ liệu khi chuyển trang */}
            <button onClick={() => navigate("courses", { state: { studentId: "SV001", studentName: "Nguyễn Văn A" } })}> Go to Course with data</button>
        </div >
    )
}
