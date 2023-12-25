import React from "react";

// make list of education objects
const educationList = [
  {
    school: "University of Lagos",
    degree: "Bachelor's Degree, Computer Engineering",
    year: "2018 - 2024",
  },
  {
    school: "Bammy Collge - High School",
    degree: "O-Level Certificate",
    year: "2013 - 2016",
  },
];


const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="education-container">
        {educationList.map((education) => (
          <div className="education-box" key={education.school}>
            <h3>{education.school}</h3>
            <h4>{education.degree}</h4>
            <p className="small">{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
