import React, { ReactElement, useState } from "react";
import Student from "./Class/Student";
import Employee from "./Class/Employee";

function App(): ReactElement {
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <form style={{ display: "flex" }} action="">
        {select == "student" && (
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="name" />
            <label htmlFor="">Surname</label>
            <input type="text" placeholder="surname" />
            <label htmlFor="">Age</label>
            <input type="text" placeholder="age" />
            <label htmlFor="">GroupName</label>
            <input type="text" placeholder="groupName" />
            <label htmlFor="">GPA</label>
            <input type="text" placeholder="GPA" />
            <label htmlFor="">Hobbies</label>
            <input type="text" placeholder="Hobbies" />
          </div>
        )}
        {select == "employee" && (
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="name" />
            <label htmlFor="">Surname</label>
            <input type="text" placeholder="surname" />
            <label htmlFor="">Age</label>
            <input type="text" placeholder="age" />
            <label htmlFor="">Salary</label>
            <input type="text" placeholder="Salary" />
            <label htmlFor="">Skils</label>
            <input type="text" placeholder="Skils" />
            <label htmlFor="">Position</label>
            <input type="text" placeholder="Positions" />
          </div>
        )}

        <label htmlFor="">
          <select
            value={select}
            name=""
            id=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
              setSelect(e.target.value);
            }}
          >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={() => {
            if (select == "student") {
              const students = new Student();
              // name,
              // surname,
              // age
              // groupName,
              // GPA,
              // hobbies,
            } else {
              // const employee = new Employee(name,surname,age,salary, skills, position,);
            }
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default App;
