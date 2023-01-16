import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Abouts() {
    return (
        <div>
            Abouts
            {/* Định nghĩa khu vực hiển thị component thi định tuyến lồng */}
            <Outlet />
        </div>
    )
}
