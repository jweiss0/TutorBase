import React from "react";
import {Button, Col, Container, Row,} from "reactstrap";
import {Link} from "react-router-dom";
import rpi_logo from "./login_images/rpi_logo.png"
import tb_logo from "./login_images/tutorbase_logo.png"
import '../../styles/Login.css';
import {ApiBaseAddress} from "../../utils/Environment";

export function LoginPage() {
    const CASRedirect = () => {
        window.location.href = ApiBaseAddress + '/api/login';
    }

    return (
        <body className={"loginBody"}>
        <Container style={{maxWidth: "45em", paddingTop: "5em"}}>
            <div className="loginContainer">
                <Row>
                    <Col style={{textAlign: "center", paddingTop: "3em"}}>
                        <img src={tb_logo} style={{maxWidth: "100%"}} alt="Rensselaer"/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        A better system to connect students and tutors at RPI.
                    </Col>
                </Row>
                <Row>
                    <Col xs="4"/>
                    <Col xs="4">
                        <Button onClick={() => CASRedirect()} color="danger" size="lg"
                                className="signInButton">Login</Button>
                    </Col>
                    <Col xs="4"/>
                </Row>
                {/*<Row>*/}
                {/*    <Col style={{textAlign: "center"}}>*/}
                {/*        <div className="signUpDiv">*/}
                {/*            Don't have an account? <Link to="/signup">*/}
                {/*            &nbsp;Sign up</Link>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row style={{marginTop: "150px"}}>
                    <Col style={{textAlign: "center"}}>
                        An <a href="https://rcos.io/"> RCOS</a> project. &nbsp;
                        <a href="https://github.com/DangItJason/TutorBase">
                            <img style={{width: "32px", height: "32px"}}
                                 src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                 alt="GitHub"/>
                        </a>
                    </Col>
                </Row>
            </div>
            <Row style={{paddingTop: "10%", paddingBottom: "30%"}}>
                <Col style={{textAlign: "center"}}>
                    <a href="https://www.rpi.edu">
                        <img src={rpi_logo} style={{maxWidth: "100%"}} alt="Rensselaer"/>
                    </a>
                </Col>
            </Row>
        </Container>
        </body>
    );
}
