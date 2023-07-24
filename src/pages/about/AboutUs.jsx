import Footer from '../share/footer/Footer';
import Header from '../share/header/Header';
import React from 'react';

const AboutUs = () => {
  return (
  <div>
    <Header></Header>
    <div className="container mx-auto pb-24 pt-10 px-16">
  <h2 className="text-center text-teal-400 text-4xl font-bold pb-8">
    About Our College
  </h2>
  <p className="text-base">
    Welcome to PHeroCollege, where we believe in providing a world-class
    education to our students and empowering them to achieve their dreams. Our
    college is committed to excellence in education and fostering a nurturing
    and inclusive learning environment.
  </p>
  <br />
  <br />
  <p className="text-base">
    At PHeroCollege, we strive to provide our students with the best possible
    learning experience. Our dedicated team of educators and staff are
    passionate about teaching and are always there to support and guide our
    students on their academic journey.
  </p>
  <br />
  <br />
  <p className="text-base">
    We offer a wide range of programs and courses that cater to diverse
    interests and career goals. Our state-of-the-art facilities and modern
    infrastructure provide an ideal setting for students to thrive and excel in
    their chosen fields.
  </p>
  <br />
  <br />
  <p className="text-base">
    At PHeroCollege, we believe in holistic development and encourage our
    students to participate in extracurricular activities, sports, and community
    service. We aim to produce well-rounded individuals who are not only
    academically successful but also socially responsible.
  </p>
  <br />
  <br />
  <p className="text-base">
    Our mission is to empower our students to become leaders, innovators, and
    agents of positive change in society. We are proud of our alumni who have
    gone on to make significant contributions in various fields and bring honor
    to our college.
  </p>
  <br />
  <br />
  <p className="text-base">
    Thank you for considering PHeroCollege for your education. We look forward
    to welcoming you to our campus and supporting you in achieving your
    academic and personal goals.
  </p>
</div>

    <Footer></Footer>
  </div>
    
  );
};

export default AboutUs;