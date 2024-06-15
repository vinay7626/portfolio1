/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk1.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dribbble",
    description:
      "This is a Full stack MERN web app I designed where the user can register by filling up a registration form.",
    url: "https://dribbblevinay.netlify.app/",
    stack: "Tech used: MERN, Cloudinary image API, Resend email API, TailwindCSS, Mongoose",
  },
  {
    title: "Employee Management System",
    description:
      "A MERN stack CRUD application designed to streamline the storage and retrieval of the Employee Information with in the organization.",
    url: "https://github.com/vinay7626/MERN-stack-CRUD-application",
    stack: "Tech used: MERN, ChakraUI, Bootstrap, Mongoose",
  },
  {
    title: "Learning Bootstrap",
    description:
      "This is a landing page I designed using bootstrap Grid layout. It is fully responsive for all devices and screen sizes.",
    url: "https://github.com/vinay7626/HTML_Bootstrap_project",
    stack: "Tech used: HTML, CSS, Bootstrap",
  },
  {
    title: "Realtime Chat App (Ongoing project)",
    description:
      "This is a Chat application that i will be hosting where the user can create an account and then chat with anyone else in real time using socket.io",
    url: "#",
    stack: "Tech used: MERN, TailwindCSS, DaisyUI, Socket.io",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "70%", width: "80%", objectFit: "cover", marginLeft: "15%", borderRadius: "5%" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <abbr title={project.stack} style={{textDecoration: "none"}}>
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </abbr>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
