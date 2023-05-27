import React from 'react'

const Resume = () => {
  return (
    <div>
        <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Summary</h3>
          <div class="resume-item pb-0">
            <h4>Satyam</h4>
            <p><em>Innovative and deadline-driven Web Developer with 1+ years of experience in developing website from initial concept to final, polished deliverable.</em></p>
            <p>
            <ul>
              <li>Dehradun,Uttarakhand,India</li>
              {/* <li>(123) 456-7891</li> */}
              <li>satyamtomar7777@gmail.com</li>
            </ul>
            </p>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>BTECH </h4>
            <h5>2019 - 2023</h5>
            <p><em>National Institute of Technology, Kurukshetra(India)</em></p>
            <p>8.778 CGPA</p>
            <p>pursued Information Technology </p>
          </div>
          {/* <div class="resume-item">
            <h4>12th</h4>
            <h5>2018 - 2019</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div> */}
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Freelance</h4>
            <h5>July 2022 - Present</h5>
            <p><em>Remote </em></p>
            <p>
            <ul>
              <li>have done several small to medium scale projects with my team.</li>
              {/* <li>have delivered most project before deadline. </li> */}
              <li>from debugging some existing apps to delivering small websites. My team has delivered projects before deadline</li>
              
            </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>MERN Stack Developer</h4>
            <h5>Jan 2022 - June 2019</h5>
            <p><em>Seraphic.io, Mohali, Punjab,India</em></p>
            <p>
            <ul>
                
              <li>Worked on several live project both as lead and under seniors .</li>
              <li>Managed up to 3 projects or tasks at a given time while under pressure</li>
              <li>Assisted in developing server-based Node.js applications by providing inputs and insights thereby  acquiring a 20% improvement in the product delivery time and quality of overall work.</li>
              <li>Debugged 10+ existing applications to maintain business productivity</li>
              <li>Tech stack used:Nodejs,Reactjs,Express.js, context api, firebase , tailwind css ,bootstrap, payment gateways including stripe and thawani, twilio, heroku cli, git.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Resume