import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const PassBehaviours = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 lg:px-72 px-8 bg-rose-100 h-fit pb-20 ">
      <button
        className="flex gap-2 p-2 bg-white rounded-sm font-bold mb-10 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        <span>Back</span>
      </button>
      <div>
        <h1 className="lg:text-5xl w-[15rem] lg:w-[35rem] text-lg lg:font-light font-bold mb-3">
          Pass Behaviours Not Values
        </h1>
        <p className="lg:font-bold font-medium lg:mb-14 mb-6 w-[15rem] lg:w-[35rem]">
          Jan 1, 2025
        </p>
        <h5 className="text-lg text-gray-800 mb-6 font-light lg:w-full w-[20rem]">
          In the software world, the demands of a customer is ever-changing. As
          a software developer, it’s of importance to develop alongside the idea
          of having change as an inevitable companion.
        </h5>

        <h5 className="text-lg lg:w-full w-[15rem] font-light">
          A way to make your software flexible like play dough is to:
        </h5>

        <h2 className="lg:p-8 p-1 mt-8 lg:text-lg lg:mb-6 mb-2 w-[25rem] lg:w-[35rem] font-bold text-[0.9rem]">
          Pass Behaviours Not Values
        </h2>

        <h6 className="text-lg mb-6  lg:w-full w-[20rem] font-light">
          Passing behaviours simply implies the ability to pass methods as
          arguments to other methods. Doing this, somewhat kills the dread of
          change to your software whilst making it flexible.
        </h6>
        <h6 className="text-lg mb-6 font-light lg:w-full w-[20rem]">
          Instead of creating multiple functions with different parameters for
          filtering students based on various conditions, we can pass behaviours
          as arguments. Which makes our software flexible and adaptable to
          changing requirements.
        </h6>

        <p className="text-lg mb-8  font-light lg:w-full w-[20rem]">
          Let’s dive into a practical example:
        </p>
      </div>

      <div>
        <h2 className="text-3xl lg:mb-6 mb-3 w-[15rem]">Case Study</h2>

        <p className="text-lg mb-6 font-light lg:w-full w-[20rem]">
          We have a list of students in a school; Each student have a first
          name, last name, age and department;
        </p>
        <p className="text-lg mb-6 font-light lg:w-full w-[20rem]">
          In typescript, we could represent each student with a type;
        </p>
      </div>

      <div
        className="p-[0.5rem] bg-black text-red-700 tracking-wide py-8 z-50"
        // style={{
        //   padding: "5px 15px",
        //   backgroundColor: "#000",
        //   color: "red",
        //   lineHeight: 1.5,
        // }}
      >
        <pre>
          <code>
            type Student={" "}
            {`firstname: string;
         lastname: string;
         age: number;
         department: Department;
            ; type Department = "STEM" | "OTHERS";`}
          </code>
        </pre>
      </div>

      <p className="text-lg my-8 font-light lg:w-full w-[20rem]">
        For simplicity sake, we have just two departments; As a developer, you
        have being required to write a function to filter each student by
        department. Easy right, you could simply just create a function to do
        that. Something like this;
      </p>

      <div
        style={{
          padding: "5px 15px",
          backgroundColor: "#000",
          color: "red",
          lineHeight: 1.5,
        }}
      >
        <pre>
          <code>
            {`function filterStudentByDepartment(
	dataset: Array<Student>,
	department: Department): Array<Student>
{
  return dataset.filter(student => student.department === department)
}`}
          </code>
        </pre>
      </div>
      <p className="text-lg my-8 font-light lg:w-full w-[20rem]">
        Yum, we didn’t break a sweat right to get that done. Now you’ve been
        required to filter the students who are over the age of 17 and also by
        department. “Um, sure no problem we could just add another parameter,
        age”. And we would have another function that looks thus;
      </p>

      <div
        style={{
          padding: "5px 15px",
          backgroundColor: "#000",
          color: "red",
          lineHeight: 1.5,
        }}
      >
        <pre>
          <code>
            {`function filterStudentByDepartmentAndAge(
	dataset: Array<Student>,
	department: Department,
	age: number
): Array<Student>
{
  return dataset.filter(student => student.department === department && student.age > 17)
}`}
          </code>
        </pre>
      </div>

      <div className="text-lg my-8">
        <h5 className="text-lg my-6 font-light lg:w-full w-[20rem]">
          That solution is great, but not the best and also not flexible; What
          if we were required to filter students by their first name initials,
          department and age. We could simply add another function with the
          provided initial letter to filter by. But this solution would break
          the DRY principle and also wouldn’t be flexible for further changes as
          the number of parameters would have a tendency of increasing.
        </h5>

        <p className="text-lg my-6 font-light lg:w-full w-[20rem]">
          Here is where passing behaviours come to save the day; We could simply
          have a function that filters the list of student based on a provided
          condition(this time a method).
        </p>

        <p className="text-lg my-6 font-light lg:w-full w-[20rem]">
          Our filterStudents method declaration;
        </p>
      </div>

      <div
        style={{
          padding: "5px 15px",
          backgroundColor: "#000",
          color: "red",
          lineHeight: 1.5,
        }}
      >
        <pre>
          <code>
            {`function filterStudents(
  dataset: Array<Student>,
  condition: StudentPredicate, // Here StudentPredicate reps a method signature
): Array<Student> {
  return dataset.filter((student) => condition(student));
}`}
          </code>
        </pre>
      </div>

      <p className="text-lg my-6 font-light lg:w-full w-[20rem]">
        I hope I haven’t lost you with that code snippet up there. Now, instead
        of creating specific filtering functions for each scenario, we define
        reusable conditions using the StudentPredicate type:
      </p>

      <div
        style={{
          padding: "5px 15px",
          backgroundColor: "#000",
          color: "red",
          lineHeight: 1.5,
        }}
      >
        <pre>
          <code>
            {`type StudentPredicate = (student: Student) => boolean;`}
          </code>
        </pre>
      </div>

      <div className="text-lg my-8">
        <p className="text-lg font-light lg:w-full w-[20rem]">
          Our Student Predicate is a method signature for our filter condition.
          It takes in a student as an argument and returns a boolean based on
          custom implementation.
        </p>

        <p className="text-lg my-6 font-light lg:w-full w-[20rem]">
          Previously we had to use parameters(values) to solve these given
          tasks;
        </p>

        <div className="p-9 ">
          <p className="font-light lg:w-full w-[20rem]">
            <i className="font-bold">Task A - filter students by department</i>
          </p>
          <p className="font-light lg:w-full w-[20rem]">
            <i className="font-bold">Task A - filter students by department</i>
          </p>
        </div>

        <p className="text-lg font-light lg:w-full w-[20rem]">
          Now let’s create behaviours to solve those tasks:
        </p>
      </div>

      <div
        style={{
          padding: "5px 15px",
          backgroundColor: "#000",
          color: "#fff",
          lineHeight: 1.5,
        }}
      >
        <pre>
          <code>
            {`// # TASK A
const filterStemStudents: StudentPredicate = (student) => {
  return student.department == "STEM";
};

// # TASK B
const filterEighteenPlusStemStudent: StudentPredicate = (student) => {
  return student.department == "STEM" && student.age > 18;
};`}
          </code>
        </pre>
      </div>

      <p className="text-lg my-6 font-light lg:w-full w-[20rem]">
        Let’s apply these behaviours:
      </p>

      <div
        style={{
          padding: "5px 15px",
          backgroundColor: "#000",
          color: "#fff",
          lineHeight: 1.5,
        }}
      >
        <pre>
          <code>
            {`// Filtering students in the STEM department
const stemDepartmentStudents = filterStudents(students, filterStemStudents);

// Filtering students aged 18 and above in the STEM department
const eighteenPlusStemStudents = filterStudents(students, filterEighteenPlusStemStudents);`}
          </code>
        </pre>
      </div>

      <div className="text-lg my-8 font-light lg:w-full w-[20rem]">
        <h3 className="text-2xl font-bold"> Conclusion</h3>
        <p className="text-lg my-2 ">
          In the ever-evolving landscape of software development, where the
          demands of customers are prone to change, adaptability becomes a
          cornerstone of success. As developers, embracing change is not just a
          mindset but a skill that can be ingrained into our code.
        </p>

        <p className="text-lg mb-6">
          The principle of Pass Behaviours Not Values provides a powerful tool
          to navigate the challenges of evolving requirements. By allowing
          methods to be passed as arguments, we create software that is not only
          flexible but also resilient to the inevitability of change.
        </p>
        <p className="text-lg mb-6">
          In our case study, we explored a scenario where filtering students
          based on different criteria seemed straightforward initially. However,
          as requirements expanded, the traditional approach of adding
          parameters led to inflexible and cumbersome solutions.
        </p>
        <p className="text-lg mb-6">
          The introduction of the StudentPredicate type and the concept of
          passing behaviours came to the rescue. Instead of crafting multiple
          functions for each specific filtering task, we created reusable
          conditions that could be dynamically applied. This not only adheres to
          the DRY (Don’t Repeat Yourself) principle but also sets the stage for
          a codebase that can gracefully accommodate future modifications.
        </p>
        <p className="text-lg mb-6">
          As we’ve seen, passing behaviors fosters modularity and adaptability.
          It allows us to create dynamic, reusable functions that can stand the
          test of evolving requirements without succumbing to parameter bloat.
        </p>
        <p className="text-lg mb-6">
          So, the next time you find yourself faced with the challenge of
          accommodating changes in your software, consider passing behaviors.
          Embrace the flexibility it brings, and let it be your ally in the
          ever-changing landscape of software development. Happy coding and
          Thanks For Reading.
        </p>
      </div>
    </section>
  );
};

export default PassBehaviours;
