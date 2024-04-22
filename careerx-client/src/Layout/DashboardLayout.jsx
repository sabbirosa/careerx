import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/css/wrappers/Dashboard";

import axios from "axios";
import Swal from "sweetalert2";
import { DashboardNavbar, LargeSidebar, SmallSidebar } from "../components";
import { useUserContext } from "../context/UserContext";

const DashboardContext = createContext();

const DashboardLayout = () => {
    const { handleFetchMe, user } = useUserContext();
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                "https://careerx-server.vercel.app/api/v1/auth/logout",
                { withCredentials: true }
            );
            Swal.fire({
                icon: "success",
                title: "Logout...",
                text: response?.data?.message,
            });
            handleFetchMe();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.response?.data,
            });
        }
    };

    // passing values
    const values = { handleLogout, showSidebar, setShowSidebar };
    return (
        <DashboardContext.Provider value={values}>
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <LargeSidebar />
                    <div className="">
                        <DashboardNavbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
