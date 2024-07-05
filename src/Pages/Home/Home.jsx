import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import desktop from '../../Assets/English-Desktop.png'
import { Image } from 'react-bootstrap';
import bgMainPic from '../../Assets/soloutions-removebg-preview.png';
import styles from "./home.module.css";
import DemoBtn from '../../Components/DemoBtn/DemoBtn';
import FaqSection from '../../Components/FaqSection/FaqSection';
import HeroSection from '../../Components/HeroSection/HeroSection'
import Subscribe from '../../Components/Subscribe/Subscribe';
const Home = () => {
  return (
    <>
    <HeroSection/> 
    <Container className='lg:p-5'>
      <Row  className={styles.heroSection}>
        <Col md={6}>
            <h1 className='fw-bold'>eProcurement <br/> Solutions</h1>
            <p className='lg:pr-6'>Penny offers a comprehensive and intelligent cloud-based procurement solution 
            helping businesses streamline their procurement processes, expending resources
            more wisely by promoting user adoption, supplier engagement, expenditure management,
            and more.</p>
            <DemoBtn/>
        </Col>
        <Col>
          <Image src={bgMainPic} width={550}/>
          <div className={styles.blur}></div>
        </Col>
      </Row>
      <Row>
        <Col>
            <h3 className='text-center py-5 md:p-5'>In an era where the average procurement department only handles 63% of
             expenditure management, in today's tech-driven world, businesses require 
             cloud procurement processes to fully control their spending,
              establish communication with suppliers, and optimize their ordering procedures.</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6} className='p-4'>
            <Image src={desktop} width={550} rounded />
        </Col>
        <Col className={`py-4 ${styles.listIntro}`}>
            <h4>Instead of relying 
            on manual, error-prone practices, cloud procurement software 
            can help a company:</h4>
            <ul>
                <li>Sourcing Cut down costs and boost reliability by creating an established customer base</li>
                <li>Increase savings by preventing maverick purchases</li>
                <li>Obtain discounts by bundling orders</li>
                <li>Secure favorable rates from strategic suppliers</li>
                <li>Protect themselves against risks and supply chain crises</li>
            </ul>
        </Col>
      </Row>
      <Row className='py-5 g-5'>
        <Col>
          <div className={styles.ProcedureCard}>
            <h3>Request</h3>
            <p>The first step is where you issue a purchase order. This would generally be done by email or via the vendor’s website.</p>
          </div>
        </Col>
        <Col><div className={styles.ProcedureCard}>
            <h3>Approval</h3>
            <p>After receiving the PO, the vendor provides the approval, rejection, or reopens the negotiation process.</p>
          </div></Col>
        <Col><div className={styles.ProcedureCard}>
            <h3>Purchase</h3>
            <p>Once the buyer receives the vendor’s confirmation, they’ll create and send out the finalized purchase order to the vendor.</p>
          </div></Col>
        <Col><div className={styles.ProcedureCard}>
            <h3>Receive</h3>
            <p>Now, the vendor dispatches the goods (or service) from their end to the buyer for verification.</p>
          </div></Col>
        <Col><div className={styles.ProcedureCard}>
            <h3>Match & Pay</h3>
            <p>The buyer verifies whether the quality and specifications are in line with previous discussions. If the buyer is satisfied with the order, the invoice will be processed, and the payment will be made.</p>
          </div></Col>
      </Row>
      </Container>
      <Container fluid className={`bg-[#F2F4FF] ${styles.bgintro}`}>
      <Row className='p-5'>
        <Col className={`text-center ${styles.bgintrobody}`}>
           <h4 className='fw-bold pb-3'>Why Penny for eProcurement Software</h4>
           <p>With such a vast range of cloud-based procurement solutions on the market, it’s crucial to find one that’s both affordable and flexible enough to meet specific requirements.</p>
           <p>Powerful, user-friendly e-sourcing, cloud-based procurement, and procure-to-pay Saas solutions for companies intent on automating their procurement procedures, improving expenditure management, reducing processing costs, and promoting supplier collaboration.</p>
           <p>Penny’s solutions are so simple and intuitive that businesses deploy them not just out of necessity but because they happen to offer the shortest route toward achieving their objectives.</p>
           <DemoBtn/>
        </Col>
      </Row>
      </Container>
      <Container className='px-5'>
        <Row className='p-3 pt-5'>
        <Col className={`text-center ${styles.Benif}`}>
        <h3 className='fw-bold'>Manage your spend, manage your business</h3>
        <p>Procurement departments with obsolete solutions cannot clearly oversee their procurement process or limit rogue spending. Penny’s e-sourcing and procure-to-pay software can help you handle everything from getting order approvals, customizing budgets, designing procurement
         processes and making well-informed decisions in one single comprehensive solution.</p>
        </Col>
        </Row>
        <Row className='g-5 pb-5'>
        <Col><div className={`text-center ${styles.ProceedCard}`}>
            <h3>Customizable Approvals</h3>
            <p>Make purchase approvals from one centralized location.</p>
          </div></Col>
          <Col><div className={`text-center  ${styles.ProceedCard}`}>
            <h3>Real-time customizable budgets</h3>
            <p>Make purchase approvals from one centralized location.</p>
          </div></Col>
          <Col><div className={`text-center  ${styles.ProceedCard}`}>
            <h3>Purchasing Workflows</h3>
            <p>Create painless procurement processes and regain your time</p>
          </div></Col>
          <Col><div className={`text-center ${styles.ProceedCard}`}>
            <h3>Vendor/Catalog Insights</h3>
            <p>Make smarter purchasing and business decisions.</p>
          </div></Col>
        </Row>
        <div className={`${styles.mailSub} bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800`}>
          <h2 className=' text-white'>Subscribe to get updated</h2>
          <Subscribe/>
        </div>
      </Container>
      <Container className="bg-[#F2F4FF] " fluid>
         <FaqSection/>
      </Container>
      </>
  )
}

export default Home