import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Driven IT Professional with high desire to grow, learn and maximize potential.
			CompTIA A+ Certified
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Computer Technician/Sales Associate</h3>
              <div className="subheading mb-3">Mike's Computer Shop'</div>
              <p>
              	Repair, build and optimize computer systems. Recommend solutions
				for customers and ensure full satisfaction. Use my diverse 
				knowledge of computers and their components to quickly and 
				efficiently find a path back to full functionality. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Farm Hand</h3>
              <div className="subheading mb-3">Johnson Farms</div>
              <p>
                Responsible for the continuing operation of the barn. Includes 
				assisting barn owner, daily tasks, repairing, troubleshooting, 
				building and cleaning of barn machinery.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2017 - March 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Chief Operator</h3>
              <div className="subheading mb-3">Herzog Services of Canada</div>
              <p>
                Ultrasonic testing of railroad tracks. Responsible for operation 
				and maintenance of the testing machinery, reading the high-speed 
				ultrasonic readout in real time, determining defects in the rail 
				with expertise, and managing exceptional relationships with direct 
				and higher level railroad employees. Obtained Ultrasonic Level II 
				Training and Certificate.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2014 - March 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Sales Associate</h3>
              <div className="subheading mb-3">Kia Canada</div>
              <p>
                Maintain relationships with possible, existing and future customers. 
				Create new business opportunities and seek out possible clients while 
				providing insight into features, benefits and options of the models.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2013 - July 2014</span>
            </div>
          </div>
        </div>
			
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Territory Business Manager</h3>
              <div className="subheading mb-3">STG Canada</div>
              <p>
				Maintain company relationship for over 250 stores, and visit them under 
				a personal schedule to ensure vendor and customer satisfaction with our 
				product. Activate retail specials and maintain both personal and corporate 
				budgets to ensure profitability. Retain and expand distribution of products 
				in stores. Launch products with programs tailored to vendor involvement and 
				follow up to ensure consumer activation
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Nov 2011 - June 2013</span>
            </div>
          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Metalworks Institute of Sound and Music Production</h3>
              <div className="subheading mb-3">Diploma</div>
              <div>Sound and Music Production</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2006 - January 2007</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Chippewa High School</h3>
              <div className="subheading mb-3">High School Diploma</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2002 - June 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

		  <p>
				Fast learner. Very adept at analyzing a problem and applying
				a solution.
					
				A dynamic array of knowledge in many facets. Able to utilize
				that knowledge to see a unique perspective on situations.
					
				Customer service. Many years of experience and a friendly,
				approachable demeanor that leads to a good repoire with 
				clients and co-workers alike.
					
				Drive. A constant thirst for knowledge, and drive to improve
				myself and my abilities. Always looking for ways to keep busy
				and streamline future projects.
		  </p>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a computer technician, I also like to spend time
			outside. Whether it's golfing, hiking, kayaking, longboarding, or
			swimming, I like to take in all that nature has to offer.
          </p>
          <p className="mb-0">
            While inside, I am a movie buff. Coming from a world of media
			I like to watch, study and discuss films. I also play guitar, 
			piano, and sing. I enjoy reading, especially if I'm learning 
			something new, and building stuff with my hands in my workshop. I
			also enjoy working on my own computers and looking into new
			programs that can help with my workflow.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CompTIA A+ Certification - with High Score
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Level II - Ultrasonic Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
			  2x Highest Extended Warranty Salesman of the Month
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
			  Fastest Promoted to Chief Operator
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
			  Perfect Score - CN Rules Course
            </li>
            <li>
              Working on CCNA Certification
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
