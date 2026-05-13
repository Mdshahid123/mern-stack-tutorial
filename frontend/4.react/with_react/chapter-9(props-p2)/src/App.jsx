import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MentorCard from "./components/MentorCard";
import FounderCard from "./components/FounderCard";
import Footer from "./components/Footer";

function App() {

  const mentors = [
    {
      id: 1,
      name: "Shahid",
      skill: "MERN Stack Developer",
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },

    {
      id: 2,
      name: "Ali",
      skill: "React Developer",
      image:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    },

    {
      id: 3,
      name: "Sara",
      skill: "Backend Developer",
      image:
        "https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
    }
  ];


  const founders = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },

    {
      id: 2,
      name: "Emma Watson",
      role: "Co-Founder",
      image:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    }
  ];


  return (

    <div>

      <Header />

      <Hero />


      {/* Mentor Section */}

      <section className="mentor-section">

        <h1>Our Mentors</h1>

        <div className="card-container">

          {
            mentors.map((mentor)=>(

              <MentorCard
                key={mentor.id}
                name={mentor.name}
                skill={mentor.skill}
                image={mentor.image}
              />

            ))
          }

        </div>

      </section>



      {/* Founder Section */}

      <section className="founder-section">

        <h1>Founders</h1>

        <div className="card-container">

          {
            founders.map((founder)=>(

              <FounderCard
                key={founder.id}
                name={founder.name}
                role={founder.role}
                image={founder.image}
              />

            ))
          }

        </div>

      </section>


      <Footer />

    </div>

  )
}

export default App;