import Course from "./Course";

function Courses({ courses ,removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2 className="courseMainDiv" >Kurslarım</h2>
        <div className="cardDiv">
          {courses.map((course ,index) => {
            return <Course key={index} {...course} removeOneCourse={removeCourse} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
