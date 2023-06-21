import React from 'react';

const image = {
  marginBottom: "30px",
}
export default function AboutMe() {
    return (
        <>
          <h1>About Me</h1>
          <img src={"/images/github-profile.png"} alt={"profile"} height={100} width={100} style={image}/>
          <p>
          I am a full-stack bootcamp student who is learning the fundamentals of JavaScript, CSS, and HTML. My GitHub profile with samples of my work can be found here: https://github.com/mdelmain
          </p>
        </>
      );
    }