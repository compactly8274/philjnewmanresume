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
            {config.address} {config.phone}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Senior IT Technician with over 6 years of managed service provider
            experience supporting diverse client environments across Windows,
            macOS, and Linux. Specializes in network security, Microsoft 365
            administration, and Windows Server infrastructure. CompTIA A+ and
            Network+ certified. Maintains a personal 5-server home lab for
            continuous learning and experimentation.
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
              <h3 className="mb-0">Senior Technician</h3>
              <div className="subheading mb-3">Empyrion Technologies Inc.</div>
              <p>
                Progressed from Technician to Senior Technician at a managed
                service provider supporting multi-client environments. Current
                focus is security administration, with broad experience spanning
                break-fix support, system deployment, network infrastructure, and
                enterprise integrations.
              </p>
              <ul>
                <li>
                  Deploy and maintain Dell servers and Windows Server environments
                  (2008 through current), including Active Directory, DNS, and
                  associated server roles
                </li>
                <li>
                  Administer Microsoft 365 tenants including Entra ID, Azure,
                  SharePoint, Teams, and licensing
                </li>
                <li>
                  Configure and maintain firewall and network security
                  infrastructure: SonicWall, Sophos, WatchGuard, MikroTik,
                  Ubiquiti UniFi, and OPNsense; Cisco, Aruba, Sophos, and HPE
                  switching
                </li>
                <li>
                  Lead Sophos Central administration including endpoint protection
                  and email gateway; conduct vulnerability assessments using
                  Vulscan
                </li>
                <li>
                  Manage client environments via ConnectWise PSA, ConnectWise
                  Automate RMM, Datto Backup and RMM, and IT Glue
                </li>
                <li>
                  Administer access and privilege management tools including
                  AutoElevate, QuickPass, and Keeper (admin)
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Computer Technician / Sales Associate</h3>
              <div className="subheading mb-3">Mike's Computer Shop</div>
              <p>
                Diagnosed and repaired customer computer systems including
                hardware replacements, software troubleshooting, and performance
                optimization. Advised customers on hardware and software solutions
                tailored to their needs.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2019 - December 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Farm Hand</h3>
              <div className="subheading mb-3">Johnson Farms</div>
              <p>
                Maintained daily barn operations including equipment
                troubleshooting, repair, and upkeep. Managed mechanical and
                operational tasks across a working farm environment.
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
                Performed ultrasonic testing of railroad tracks. Responsible for
                operation and maintenance of testing machinery, reading
                high-speed ultrasonic readouts in real time, and identifying rail
                defects with precision. Built and maintained strong professional
                relationships with railroad personnel at all levels. Obtained
                Ultrasonic Level II certification.
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
                Built and maintained relationships with prospective, existing,
                and future customers. Generated new business opportunities and
                provided clients with detailed insight into vehicle features,
                benefits, and options.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2013 - July 2014</span>
            </div>
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
              <h3 className="mb-0">
                Metalworks Institute of Sound and Music Production
              </h3>
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

          <div className="subheading mb-3">Operating Systems</div>
          <p>Windows 10/11 &middot; Windows Server 2008&ndash;2022 &middot; macOS &middot; Linux</p>

          <div className="subheading mb-3">Networking &amp; Security</div>
          <p>
            SonicWall &middot; Sophos Firewall &middot; WatchGuard &middot;
            MikroTik &middot; Ubiquiti UniFi &middot; OPNsense &middot; Cisco
            &middot; Aruba &middot; HPE Switching &middot; DNS
          </p>

          <div className="subheading mb-3">Microsoft &amp; Cloud</div>
          <p>
            Microsoft 365 Administration &middot; Entra ID &middot; Azure
            &middot; SharePoint &middot; Teams &middot; Microsoft Licensing
          </p>

          <div className="subheading mb-3">Security &amp; Endpoint</div>
          <p>
            Sophos Central &middot; Sophos Endpoint &middot; Sophos Email
            Gateway &middot; Vulscan &middot; AutoElevate &middot; QuickPass
            &middot; Keeper (Admin)
          </p>

          <div className="subheading mb-3">MSP Platforms</div>
          <p>
            ConnectWise PSA &middot; ConnectWise Automate &middot; Datto Backup
            &amp; RMM &middot; IT Glue
          </p>

          <div className="subheading mb-3">Hardware</div>
          <p>
            Dell PowerEdge Servers &middot; iDRAC &middot; Workstation &amp;
            laptop diagnostics and repair
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
            Outside of work I maintain a personal home lab running 5 servers — a
            hands-on environment I use to test configurations, explore new
            technologies, and deepen my understanding of virtualization,
            networking, and server administration.
          </p>
          <p className="mb-0">
            I enjoy spending time outdoors — golfing, hiking, kayaking,
            longboarding, and swimming. Indoors, I'm an avid film fan with a
            background in media production. I also play guitar and piano, enjoy
            reading, and like building things in my workshop.
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
              CompTIA A+ Certification &mdash; with High Score
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CompTIA Network+ Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Level II &mdash; Ultrasonic Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              2&times; Highest Extended Warranty Salesman of the Month
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Fastest Promoted to Chief Operator
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Perfect Score &mdash; CN Rules Course
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export const Head = () => (
  <>
    <title>Philip Newman</title>
    <meta name="description" content="Resume" />
  </>
);

export default IndexPage;
