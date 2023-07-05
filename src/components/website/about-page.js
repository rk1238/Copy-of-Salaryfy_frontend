import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import AbOne from "../img/ab-1.png";
import AbTwo from "../img/ab-2.png";
import AbThree from "../img/ab-3.png";
import aboutImg from "../img/icons/about-img.png";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <section className="eligiblity-form-sec student-dashboard select-plan range-slider-plan full_show disclaimerpage-result about_page">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active basket-banner m-auto"
                  id="v-pills-messages-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-2-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="dashboard-content">
                            <h2>About</h2>
                            <p>
                              Salaryfy.com.com is a subsidiary of Data Folkz
                              Pvt. Ltd. which was incorporated under the
                              Companies Act, 2013 (18 of 2013), and the company
                              is limited by shares.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-img">
                            <img src={aboutImg} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="row Three_sectin_about">
                        <div className="col-lg-4">
                          <div className="about_inner">
                            <img src={AbOne} alt="" />
                            <h4>Purpose</h4>
                            <p>
                              We exist to re-define the market value of a job
                              seeker for his betterment
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="about_inner">
                            <img src={AbTwo} alt="" />
                            <h4>Mission</h4>
                            <p>
                            To build an effortless end to end solution for job seekers
& talent hunters
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="about_inner">
                            <img src={AbThree} alt="" />
                            <h4>Vision</h4>
                            <p>
                            Unleash the world of endless opportunities when thinking about getting a job!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="scholarship-test ">
                        <div className="scholarship-test-wrapper">
                          <h6>Introduction</h6>
                          <p>
                            Salaryfy.com is a subsidiary of DATA FOLKZ, a global
                            leader in the field of data science and analytics.
                            Salaryfy.com is a company that specializes in
                            placements and salary hikes, providing comprehensive
                            insights into job trends, placements, job 
                            bench-marking, and salary optimization. The company
                            has a team of experienced professionals that
                            leverage the latest data analytics technologies to
                            bring meaningful insights to their clients. With
                            their insights, clients can improve their salary
                            packages and make better decisions related to salary
                            matters.
                          </p>
                        </div>

                        <div className="scholarship-test-wrapper scholarship_row">
                          <h6>Services</h6>
                          <ul>
                            <li>
                              Salaryfy.com provides a range of services related
                              to salary analytics such as salary benchmarking,
                              salary optimization, salary comparison, and salary
                              trends. All of these services are designed to help
                              clients make informed decisions related to salary
                              management. 
                            </li>
                            <li>
                              For salary benchmarking, Salaryfy.com leverages
                              its proprietary algorithms to compare a company's
                              salary data to the market average. Through this,
                              companies can identify potential areas for
                              improvement and recognition of performance.
                            </li>
                            <li>
                              Through salary optimization, Salaryfy.com helps
                              companies find the optimal salary mix that aligns
                              with their budget and employees' expectations.
                              This helps companies create effective salary
                              structures that are attractive to top talent. 
                            </li>
                            <li>
                              Salary comparison is a service that allows
                              individuals/users to compare their salary data to
                              that of other companies in the same industry or
                              geographic region. This helps them make better
                              decisions related to salary management. 
                            </li>
                            <li>
                              Lastly, Salaryfy.com provides insights into
                              current job trends in order to help
                              organizations/individuals/users stay ahead of the
                              competition and make informed decisions related to
                              market dynamics.
                            </li>
                          </ul>
                        </div>
                        <div className="scholarship-test-wrapper">
                          <h6>Benefits</h6>
                          <p>
                            Salaryfy.com's services provide organizations/
                            individuals with a range of benefits related to
                            placements, job changes, salary hikes, etc. These
                            include improved decision-making related to salary
                            management, more attractive salary packages for top
                            talent, more effective salary structures, and better
                            insights into market dynamics. All of these benefits
                            can help companies/ users to stay ahead of the
                            competition and ensure that their placement services
                            are attractive to the best talent. 
                          </p>

                          <p>
                            Furthermore, Salaryfy.com provides comprehensive and
                            up-to-date data for its clients. This helps
                            organizations/ individuals gain access to reliable
                            and accurate information which is essential for
                            making informed decisions. 
                          </p>

                          <p>
                            Overall, Salaryfy.com is an innovative company that
                            provides organizations/ individuals with a range of
                            services related to providing employment. They
                            leverage the latest data analytics technologies to
                            bring meaningful insights to their clients, helping
                            them make better decisions related to salary
                            matters, placements, job changes, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======mobile-view======== */}

      <section
        className="eligiblity-form-sec student-dashboard select-plan
            range-slider-plan five_show about_page">
      <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 m-auto margin-auto-hide">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active basket-banner m-auto"
                  id="v-pills-messages-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-2-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="dashboard-content">
                            <h2>About</h2>
                            <p>
                              Salaryfy.com.com is a subsidiary of Data Folkz
                              Pvt. Ltd. which was incorporated under the
                              Companies Act, 2013 (18 of 2013), and the company
                              is limited by shares.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-img">
                            <img src={aboutImg} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="row Three_sectin_about">
                        <div className="col-lg-4">
                          <div className="about_inner">
                            <img src={AbOne} alt="" />
                            <h4>Purpose</h4>
                            <p>
                              We exist to re-define the market value of a job
                              seeker for his betterment
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="about_inner">
                            <img src={AbTwo} alt="" />
                            <h4>Mission</h4>
                            <p>
                            To build an effortless end to end solution for job seekers
& talent hunters
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="about_inner">
                            <img src={AbThree} alt="" />
                            <h4>Vision</h4>
                            <p>
                            Unleash the world of endless opportunities when thinking about getting a job!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="scholarship-test ">
                        <div className="scholarship-test-wrapper">
                          <h6>Introduction</h6>
                          <p>
                            Salaryfy.com is a subsidiary of DATA FOLKZ, a global
                            leader in the field of data science and analytics.
                            Salaryfy.com is a company that specializes in
                            placements and salary hikes, providing comprehensive
                            insights into job trends, placements, job 
                            bench-marking, and salary optimization. The company
                            has a team of experienced professionals that
                            leverage the latest data analytics technologies to
                            bring meaningful insights to their clients. With
                            their insights, clients can improve their salary
                            packages and make better decisions related to salary
                            matters.
                          </p>
                        </div>

                        <div className="scholarship-test-wrapper scholarship_row">
                          <h6>Services</h6>
                          <ul>
                            <li>
                              Salaryfy.com provides a range of services related
                              to salary analytics such as salary benchmarking,
                              salary optimization, salary comparison, and salary
                              trends. All of these services are designed to help
                              clients make informed decisions related to salary
                              management. 
                            </li>
                            <li>
                              For salary benchmarking, Salaryfy.com leverages
                              its proprietary algorithms to compare a company's
                              salary data to the market average. Through this,
                              companies can identify potential areas for
                              improvement and recognition of performance.
                            </li>
                            <li>
                              Through salary optimization, Salaryfy.com helps
                              companies find the optimal salary mix that aligns
                              with their budget and employees' expectations.
                              This helps companies create effective salary
                              structures that are attractive to top talent. 
                            </li>
                            <li>
                              Salary comparison is a service that allows
                              individuals/users to compare their salary data to
                              that of other companies in the same industry or
                              geographic region. This helps them make better
                              decisions related to salary management. 
                            </li>
                            <li>
                              Lastly, Salaryfy.com provides insights into
                              current job trends in order to help
                              organizations/individuals/users stay ahead of the
                              competition and make informed decisions related to
                              market dynamics.
                            </li>
                          </ul>
                        </div>
                        <div className="scholarship-test-wrapper">
                          <h6>Benefits</h6>
                          <p>
                            Salaryfy.com's services provide organizations/
                            individuals with a range of benefits related to
                            placements, job changes, salary hikes, etc. These
                            include improved decision-making related to salary
                            management, more attractive salary packages for top
                            talent, more effective salary structures, and better
                            insights into market dynamics. All of these benefits
                            can help companies/ users to stay ahead of the
                            competition and ensure that their placement services
                            are attractive to the best talent. 
                          </p>

                          <p>
                            Furthermore, Salaryfy.com provides comprehensive and
                            up-to-date data for its clients. This helps
                            organizations/ individuals gain access to reliable
                            and accurate information which is essential for
                            making informed decisions. 
                          </p>

                          <p>
                            Overall, Salaryfy.com is an innovative company that
                            provides organizations/ individuals with a range of
                            services related to providing employment. They
                            leverage the latest data analytics technologies to
                            bring meaningful insights to their clients, helping
                            them make better decisions related to salary
                            matters, placements, job changes, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
