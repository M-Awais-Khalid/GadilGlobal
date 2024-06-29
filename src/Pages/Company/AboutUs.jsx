import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./AboutUs.module.css";
import OurValues from "../../Components/ValuesSection/OurValues";
import textureImg from "../../Assets/aboutbgpattren.jpg";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const [excellenceValues, setExcellenceValues] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  });

  useEffect(() => {
    const animateValues = () => {
      // Set intervals for continuous animation
      const intervals = [
        setInterval(() => {
          setExcellenceValues((prevValues) => ({
            ...prevValues,
            value1: prevValues.value1 < 20 ? prevValues.value1 + 1 : 20,
          }));
        }, 100),
        setInterval(() => {
          setExcellenceValues((prevValues) => ({
            ...prevValues,
            value2: prevValues.value2 < 70 ? prevValues.value2 + 1 : 70,
          }));
        }, 120),
        setInterval(() => {
          setExcellenceValues((prevValues) => ({
            ...prevValues,
            value3: prevValues.value3 < 20 ? prevValues.value3 + 1 : 20,
          }));
        }, 140),
        setInterval(() => {
          setExcellenceValues((prevValues) => ({
            ...prevValues,
            value4: prevValues.value4 < 200 ? prevValues.value4 + 1 : 200,
          }));
        }, 160),
      ];

      // Clear intervals once desired values are reached
      setTimeout(() => {
        intervals.forEach((interval) => clearInterval(interval));
      }, 3000); // Adjust timing as needed
    };

    animateValues();

    // Clean up intervals on component unmount
    return () => {
      clearInterval(animateValues);
    };
  }, []);

  return (
    <div>
      {/* <AboutHero /> */}
      <div className="qoute">
        <div className={Styles.qoute_container}>
          <img
            src={textureImg}
            alt="Snow"
            style={{ width: "100%", height: "50%" }}
          />

          <div className={Styles.qoute_container_text}>
            Gadil is a <span> cloud-based Source-to-Pay system.</span>
            Gadil helps you{" "}
            <span>digitise and manage your full procurement cycle</span> from
            request to approval. Manage RFQs to vendors, compare quotations,
            send POs and even payment. Gadil was designed to make things easy
            and <span>consolidate all of your organisation</span>’s spending
            needs into one intelligent system.
          </div>
        </div>
      </div>
      <Container className={Styles.introSection}>
        <Row>
          <Col md={4} className={Styles.introImg}>
            <img
              src="https://images.unsplash.com/photo-1470311500468-0179201f7499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <div className={Styles.content}>
                  <h3>
                    <span className={Styles.sideBar}></span>Mission
                  </h3>
                  <p>
                    We are committed to the technological automation that
                    fosters seamless connectivity and collaboration, enabling
                    businesses and individuals to thrive in a digital world.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div className={Styles.content}>
                  <h3>
                    <span className={Styles.sideBar}></span>Vision
                  </h3>
                  <p>
                    We envision becoming a trusted global partner that can
                    create opportunities for 10,000 visionary minds to drive
                    unparalleled software excellence by 2030.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div className={Styles.content}>
                  <h3>
                    <span className={Styles.sideBar}></span>Values
                  </h3>
                  <p>Trust, commitment, collaboration, Innovation</p>
                </div>
              </Col>
              <Col md={12}>
                <Link to="/ContactUs"><button className={Styles.touchBtn}>Get In Touch</button></Link>
                <button className={Styles.compBtn}>Company Profile</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={Styles.excellenceRow}>
          <Col md={3} className={Styles.excellence}>
            <h1>{excellenceValues.value1}B+</h1> USD
          </Col>
          <Col md={3} className={Styles.excellence}>
            <h1>{excellenceValues.value2}Countries</h1>
            Used in more than 75 countries
          </Col>
          <Col md={3} className={Styles.excellence}>
            <h1>{excellenceValues.value3}%</h1>
            Cost reduction
          </Col>
          <Col md={3} className={Styles.excellence}>
            <h1>{excellenceValues.value4}</h1>
            Satisfied Clients
          </Col>
        </Row>
      </Container>
      <OurValues />

      <div className={Styles.inverster_section}>
        <h1 className="ml-3">Investor</h1>
        <Container>
          <Row className="justify-content-between">
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
            <Col md={2} className="mb-3">
              <div
                className={`d-flex justify-content-center ${Styles.invester_holder}`}
              >
                <img
                  src="https://penny.co/wp-content/uploads/2024/06/image-684.svg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
