import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { loginUser, loginInfo, loginError, isLoginLoading, updateLoginInfo } = useContext(AuthContext);
    return (
        <>
            <Form onSubmit={loginUser}>
                <Row
                    style={{
                        height: "100vh",
                        justifyContent: "center",
                        paddingTop: "10%",
                    }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <Form.Control type='email' placeholder='Email' onChange={(e)=>{
                                updateLoginInfo({
                                    ...loginInfo,email:e.target.value
                                })
                            }}/>
                            <Form.Control type='password' placeholder='Password' onChange={(e)=>{
                                updateLoginInfo({
                                    ...loginInfo,password:e.target.value
                                })
                            }} />
                            <Button variant='primary' type='submit'>
                                Login
                            </Button>
                            <Alert variant='danger'>
                                <p>An error occured while register</p>
                            </Alert>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default Login;
