import React, { Component } from "react";
import classNames from "classnames";
import { Navbar, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarToggled } from "../../store/ClientFlowData/selectors";
import { actions } from "../../store/ClientFlowData/slice";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import TutorSettings from "../../components/tutorComponents/TutorSettings";

export const TutorPanel = () => {
    let dispatch = useDispatch();
    let sidebarToggled = useSelector(selectSidebarToggled);

    let params : string = useLocation().pathname;
    params = params.split('/')[2];

    let body = (
        <div className="container-fluid">
            <h5 className={classNames("mt-4", "hr")}>Courses</h5>
            <p>This is where the tutor will be able to add or drop classes they are tutoring for.</p>
            <Button variant="danger">Add New Course</Button>
            <Button variant="danger">Drop Course</Button>
        </div>
    );

    if (params === 'analytics')
        body = <div>Insert analytics here</div>
    else if (params === 'settings')
        body = <TutorSettings />
    else if (params === 'history')
        body = <div>Insert history here</div>  

    return (
        <div id="panel-wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>TutorBase - Tutor Dashboard</title>
            </Helmet>

            <Navbar className={classNames("navbar-expand-lg", "navbar-light", "bg-light", "border-bottom", "shadow")}>
                <Button className="btn-red" id="menu-toggle" onClick={() => {
                    dispatch(actions.toggleSidebar());
                }}>☰</Button>
            </Navbar>
            <div className="container-fluid">
                <h2 className={classNames("mt-4", "hr")}>Tutor Dashboard</h2>
            </div>

            <div className="container-fluid">{body}</div>
        </div>
    );
}

export default TutorPanel;
