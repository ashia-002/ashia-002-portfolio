import vouchify1 from '../assets/vouchify1.png'
import vouchify2 from '../assets/vouchify2.png'
import vouchify3 from '../assets/vouchify3.png'
import salon1 from "../assets/salon/Home Page.png"
import ProjectShowcase from '../components/showcase'
import ProjectShowcase2 from '../components/showcase2'
import jobtracker1 from "../assets/jobtracker/Frame 62.png"
import jobtracker2 from "../assets/jobtracker/Frame 63.png"
import jobtracker3 from "../assets/jobtracker/Frame 64.png"

export function Projects(params) {
  return (
    <section>
      <h2 className="flex justify-center text-xl md:text-lg font-bold bg-black text-white">.../Projects ...</h2>
      <ProjectShowcase
        title="Vouchify App"
        year={"2025"}
        tags={["Backend", "Node js", "MongoDB", "Google OAuth", "Token-based Validation", "iOS"]}
        description={[
          "Vouchify is an iOS application designed for Buyer to explore vouchers based on Experience and Excursion. And sellers to sell their voucher. Practically a voucher marketplace.",
          "The app also offers gifting vouchers redim offers and sales tracking for sellers."
        ]}
        images={{
          floating: vouchify1,
          mockups: [vouchify2, vouchify3],
        }}
        link="#"
      />
      <ProjectShowcase2
        title="E-Learning Platform"
        tags={["React Js", "Redux Toolkit", "Tailwind CSS", "Mongoose", "MongoDB", "Google OAuth", "Website"]}
        description={[
          "I developed a comprehensive E-Learning Management System (LMS) from the ground up, designed to facilitate efficient course delivery and administration. This project features two distinct user interfaces, ensuring a tailored experience for both students and staff:",
          "Student Experience: Learners: Features include secure user registration and login, an intuitive interface to browse and enroll in available courses, and a personal dashboard to track learning progress.",
          "Administrative Tools:  Features a protected admin authentication system that allows staff to manage the entire course catalog (add, update, delete courses) and manage enrolled users."
        ]}
      images={{
        floating: jobtracker1,
        mockups: [jobtracker2, vouchify2, vouchify3],
      }}
      link="#"
      />
      <ProjectShowcase
        title="Job Tracker Website"
        year={"2024"}
        tags={["Full-Stack", "React Js", "Node js", "MongoDB", "Tailwind CSS"]}
        description={[
          "A full-stack Job Tracking Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that helps users organize and manage their job applications efficiently.",
          "User authentication with secure signup and login",
          "Add new job applications with details like company, position, status, and job source",
          "Update and delete existing job entries",
          "Filter and search jobs by status (e.g., applied, interview, offered)",
          "Responsive UI built with React.js",
          "RESTful API backend using Node.js and Express.js",
          "MongoDB database for persistent storage"
        ]}

        images={{
          floating: jobtracker3,
          mockups: [jobtracker2, jobtracker1],
        }}
        link="#"
      />

    </section>
  )
}