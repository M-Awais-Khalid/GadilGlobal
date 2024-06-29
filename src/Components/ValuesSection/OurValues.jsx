import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./OurValues.module.css";
import { BsLinkedin } from "react-icons/bs";

const OurValues = () => {
  return (
    <div className={Styles.our_values}>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Our Values</h1>
          </Col>
        </Row>
        <Row className={Styles.value_row}>
          <Col md={6} className={Styles.value_col}>
            <img
              src="https://penny.co/wp-content/uploads/2024/05/Component-676.png"
              alt=""
              className={Styles.value_image}
            />
          </Col>
          <Col md={6} className={Styles.value_col}>
            <div className={Styles.value_content}>
              <h1>Simplicity First</h1>
              <p>
                We remove complexity from bureaucracy. We automate first, manual
                second. We are efficient, highly organized, and effective
                collaborators. We’re easy to work with, easy to use, and easy to
                join. We’re minimalist in design and concise in how we speak.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={Styles.value_row}>
          <Col md={6} className={Styles.value_col}>
            <div className={Styles.value_content}>
              <h1>Chase Excellence</h1>
              <p>
                We remove complexity from bureaucracy. We automate first, manual
                second. We are efficient, highly organized, and effective
                collaborators. We’re easy to work with, easy to use, and easy to
                join. We’re minimalist in design and concise in how we speak.
              </p>
            </div>
          </Col>
          <Col md={6} className={Styles.value_col}>
            <img
              src="https://penny.co/wp-content/uploads/2024/05/Component-676.png"
              alt=""
              className={Styles.value_image}
            />
          </Col>
        </Row>
        <Row className={Styles.value_row}>
          <Col md={6} className={Styles.value_col}>
            <img
              src="https://penny.co/wp-content/uploads/2024/05/Component-676.png"
              alt=""
              className={Styles.value_image}
            />
          </Col>
          <Col md={6} className={Styles.value_col}>
            <div className={Styles.value_content}>
              <h1>Always Fair</h1>
              <p>
                We remove complexity from bureaucracy. We automate first, manual
                second. We are efficient, highly organized, and effective
                collaborators. We’re easy to work with, easy to use, and easy to
                join. We’re minimalist in design and concise in how we speak.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={Styles.value_row}>
          <Col md={6} className={Styles.value_col}>
            <div className={Styles.value_content}>
              <h1>Responsibility</h1>
              <p>
                We remove complexity from bureaucracy. We automate first, manual
                second. We are efficient, highly organized, and effective
                collaborators. We’re easy to work with, easy to use, and easy to
                join. We’re minimalist in design and concise in how we speak.
              </p>
            </div>
          </Col>
          <Col md={6} className={Styles.value_col}>
            <img
              src="https://penny.co/wp-content/uploads/2024/05/Component-676.png"
              alt=""
              className={Styles.value_image}
            />
          </Col>
        </Row>
      </Container>
      <div className={Styles.bgc}>
        <Container className={Styles.founder_section}>
          <Row>
            <Col md={8} className={Styles.founder_section_content}>
              <h1>
                “I never understood why B2B platforms have to be dull and
                complicated.”
              </h1>
              <p>
                With all the exposure we have nowadays to consumer apps, B2B
                platforms seem to be stuck decades back. At penny, we believe in
                simplicity, design, and excellence. In short, we chase
                excellence and vow to raise the bar high to truly empower
                organizations around the world. With state-of-the-art
                technologies and world-class industry experts, penny is here to
                set new standards in procurement and spending-management.”
              </p>
            </Col>
            <Col md={4}>
              <div className={Styles.founderCard}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  className={Styles.avatar}
                />
                <div className={Styles.founderText}>
                  <h4>Iyad Aldalooj</h4>
                  <p>
                    CEO & Co-founder
                    <BsLinkedin size={30} className={Styles.linkedinIcon} />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <div className={Styles.founderCard}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                />
                <div className={Styles.founderText}>
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>
                    Architect & Engineer
                    <BsLinkedin size={30} className={Styles.linkedinIcon2} />
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className={Styles.founderCard}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                />
                <div className={Styles.founderText}>
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>
                    Architect & Engineer
                    <BsLinkedin size={30} className={Styles.linkedinIcon2} />
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className={Styles.founderCard}>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                />
                <div className={Styles.founderText}>
                  <h4>
                    <b>John Doe</b>
                  </h4>
                  <p>
                    Architect & Engineer
                    <BsLinkedin size={30} className={Styles.linkedinIcon2} />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurValues;
