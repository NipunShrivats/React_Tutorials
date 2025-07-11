import React, { useState } from "react";

export default function FormButtons() {
  const [gender, setGender] = useState("No data Delected");
  const [cars, setCars] = useState("No data Delected");
  const [course, setCourse] = useState("");

  const handleCourseSubmit = (event) => {
    event.prevetDefault;
    // setCourse(event.target.value, event.target.checked);
    // console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setCourse([...course, event.target.value]);
    } else {
      setCourse([...course.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <>
      {/* ---------- radio Buttons ----------*/}
      <h2>Select any one option</h2>
      <input
        type="radio"
        id="male"
        name="fav_language"
        value={"MALE"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="male">MALE</label>
      <br />
      <input
        type="radio"
        id="female"
        name="fav_language"
        value="FEMALE"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="female">FEMALE</label>
      <br />
      <input
        type="radio"
        id="others"
        name="fav_language"
        value="OTHERS"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="others">OTHERS</label>
      <div>Gender: {gender}</div>
      {/* ---------- Drop Down ----------*/}
      <hr></hr>
      <h3>Select from the drop down menu</h3>
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars" onChange={(e) => setCars(e.target.value)}>
        <option value="volvo">Volvo</option>
        <option value="Saab">Saab</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
      </select>
      <div>Cars: {cars}</div>
      {/* ---------- Check box ----------*/}
      <hr></hr>
      <h3>Select your course</h3>

      <input
        type="checkbox"
        id="html"
        value={"HTML"}
        onChange={handleCourseSubmit}
      />
      <label htmlFor="html">HTML</label>
      <br />
      <input
        type="checkbox"
        id="css"
        value={"CSS"}
        onChange={handleCourseSubmit}
      />
      <label htmlFor="css">CSS</label>
      <br />
      <input
        type="checkbox"
        id="javascript"
        value={"JavaScript"}
        onChange={handleCourseSubmit}
      />
      <label htmlFor="javascript">JavaScript</label>
      <br />

      <div>Course: {course.toString()}</div>
    </>
  );
}
