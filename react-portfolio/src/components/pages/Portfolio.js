import React from "react";
import ProjectCard from "../ProjectCard";

const container = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "40px 40px",
  justifyContent: "center",
  backgroundColor: "#203354",
  color: "#000000",
};

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div style={container}>
        <ProjectCard
          image="/images/password.png"
          title="Password Generator"
          text="JavaScript"
          siteLink="https://mdelmain.github.io/password-generator-lTOcqbAD/"
          githubLink="https://github.com/mdelmain/password-generator-lTOcqbAD"
        />
        <ProjectCard
          image="/images/weather4.png"
          title="Weather Dashboard"
          text="JavaScript"
          siteLink="https://mdelmain.github.io/weather-dashboard-sISvhpsH/"
          githubLink="https://github.com/mdelmain/weather-dashboard-sISvhpsH"
        />
        <ProjectCard
          image="/images/regex.png"
          title="Regex Tutorial"
          text="Regex"
          siteLink="https://gist.github.com/mdelmain/44c674201595e4d7bee5b66bc303b3ec"
          githubLink="https://gist.github.com/mdelmain/44c674201595e4d7bee5b66bc303b3ec"
        />
        <ProjectCard
          image="/images/orm.png"
          title="Object-Relational-Mapping"
          text="JavaScript, MYSQL"
          siteLink="https://drive.google.com/file/d/1gwiRXqaJVjnSc-nXhSeg8-LZm2XFGVDu/view"
          githubLink="https://github.com/mdelmain/ORM-MpgwZmJL"
        />
        <ProjectCard
          image="/images/employee-tracker-2.png"
          title="Employee Tracker"
          text="JavaScript, MYSQL"
          siteLink="https://drive.google.com/file/d/1lmHHUdttrpCwnjJ6D9-raFWV9wHvpCvH/view"
          githubLink="#https://github.com/mdelmain/employee-tracker-vlfHrCLC"
        />
        <ProjectCard
          image="/images/svg.png"
          title="SVG Logo Maker"
          text="JavaScript"
          siteLink="https://drive.google.com/file/d/1VXII5r-Szw5PaaXYeyOzPzqxXsSnuqpg/view"
          githubLink="https://github.com/mdelmain/svg-logo-maker-wpGVWoCZ"
        />
      </div>
    </>
  );
}
