import "./App.css";
// import {Home} from "./Pages/home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {useCallback, useContext, useEffect} from "react";
// import {Compare} from "./Pages/compare";
import {Login} from "./Pages/login";

import {Register} from "./Pages/register";

// import {Company} from "./Pages/company";

// import {Profilesection} from "./Pages/profilesection";
// import {Admin_aaditya} from "./Pages/admin_aaditya";
// import {Dashboardlogin} from "./Pages/Components/admin_aaditya/A_dashboardlogin"
import {UserContext} from "./hooks/userContext";

// import {Guidance} from "./Pages/Components/compare/guidance";
// import StudentResume from "./Pages/Components/resume/studentResume";
// import ResumeHeading from "./Pages/Components/resume/ResumeHeading";
// import WorkHistory from "./Pages/Components/resume/workHistory";
// import Education from "./Pages/Components/resume/Education";
// import {EducationList} from "./Pages/Components/resume/educationList";
// import {WorkHistoryList} from "./Pages/Components/resume/workHistoryList";
//
// import {Login_company} from "./Pages/Components/company/login";
// import {Companyprofile} from "./Pages/companyprofile";
// import {Resume} from "./Pages/Components/resume/template/resume1";
// import {Resume2} from "./Pages/Components/resume/template/resume2";
// import {A_Dashboard} from "./Pages/Components/admin_aaditya/A_dashboard";
// import {Registrations} from "./Pages/registrations_aaditya";
// import {Notifications} from "./Pages/Notifications";
import {Registerc} from "./Pages/Components/company/register"
import {Logincompany} from "./Pages/Components/company/login"
import {LandingPage} from "./Pages/grandfinale/landingPage";
import {AddJob} from "./Pages/grandfinale/addJob";
import {JobsList} from "./Pages/grandfinale/jobList";
import {JobListView} from "./Pages/grandfinale/jobs/jobListView";
import {Company} from "./Pages/company";
import {A_Dashboard} from "./Pages/Components/admin_aaditya/A_dashboard";
import {Dashboardlogin} from "./Pages/Components/admin_aaditya/A_dashboardlogin";
import {Admin_aaditya} from "./Pages/admin_aaditya";


// import {Admin} from "./Pages/admin";
const ProtectedRoute = ({user, children}) => {
    if (!user.companyLogin) {
        return <Navigate to="/login" replace/>;
    }
    return children;
}

function App() {
    const [userContext, setUserContext] = useContext(UserContext)
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/addJob" element={<AddJob/>}/>
                <Route path={'/jobListView'} element={<JobListView/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/register" element={<Register/>}/>
                {/*<Route path="/profile" element={<Profilesection/>}/>*/}
                <Route path="/admin_aaditya" element={<Admin_aaditya/>}/>
                {/*<Route path="/registrations_aaditya" element={<Registrations/>}/>*/}
                <Route path="/company/register" element={<Registerc/>}/>
                <Route path="/ministry/login" element={<Logincompany/>}/>
                {/*<Route path="/compare" element={<Compare/>}/>*/}
                <Route path="/addJob" element={<ProtectedRoute user={userContext}>
                    <AddJob/>
                </ProtectedRoute>
                }

                />
                <Route path={'/jobList'} element={<JobsList/>}/>
                {/*<Route path={'/resume'} element={<StudentResume/>}/>*/}
                {/*<Route path={'resume/heading'} element={<ResumeHeading/>}/>*/}
                {/*<Route path={'resume/workHistory'} element={<WorkHistory/>}/>*/}
                {/*<Route path={'resume/education'} element={<Education/>}/>*/}
                {/*<Route path={'resume/educationList'} element={<EducationList/>}/>*/}
                {/*<Route path={'resume/workHistoryList'} element={<WorkHistoryList/>}/>*/}
                {/*<Route path={'guidance'} element={<Guidance/>}/>*/}
                <Route path="/admin/login" element={<Dashboardlogin/>}/>
                <Route path="/admin/dashboard" element={<A_Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
