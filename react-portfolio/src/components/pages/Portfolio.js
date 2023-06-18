import React from "react";
import ProjectCard from "../ProjectCard";

const container = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "20px 20px",
  justifyContent: "center",
  // minWidth: '800px',
};
export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <div style={container}>
        <ProjectCard
          image="https://placehold.co/600x400/png"
          title="cardcap"
          text="MERN stack"
          siteLink="#"
          githubLink="#"
        />
        <ProjectCard
          image="https://placehold.co/600x400/png"
          title="cardcap"
          text="MERN stack"
          siteLink="#"
          githubLink="#"
        />
        <ProjectCard
          image="https://placehold.co/600x400/png"
          title="cardcap"
          text="MERN stack"
          siteLink="#"
          githubLink="#"
        />
        <ProjectCard
          image="https://placehold.co/600x400/png"
          title="cardcap"
          text="MERN stack"
          siteLink="#"
          githubLink="#"
        />
        <ProjectCard
          image="https://placehold.co/600x400/png"
          title="cardcap"
          text="MERN stack"
          siteLink="#"
          githubLink="#"
        />
        <ProjectCard
          image="https://placehold.co/600x400/png"
          title="cardcap"
          text="MERN stack"
          siteLink="#"
          githubLink="#"
        />
      </div>
    </>
  );
}
