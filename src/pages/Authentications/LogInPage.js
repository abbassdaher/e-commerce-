import React, { Fragment } from "react";
import "./loginStyle.css";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router";

function LogInPage({ title, isLogin }) {
  return (
    <Row className="w-100  justify-content-center ">
      <h2 className="text-center mt-4">{title}</h2>
      <Form className="w-50 mt-2 border p-3">
        {isLogin != true ? (
          <Form.Group className="mb-3" controlId="">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="username" placeholder="UserName" />
          </Form.Group>
        ) : null}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
      {isLogin ? (
        <Form.Text className="text-center">
          Dont Have An Account?
          <Link to="/Registration"> click here to create Account</Link>
        </Form.Text>
      ) : null}
    </Row>
  );
}

export default LogInPage;
