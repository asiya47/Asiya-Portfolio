function Projects() {
  const projects = [
    {
      title: "Student Infogram",
      description:
        "A full-stack web application that provides students with centralized information about internships, private exams, government exams, and career opportunities. The platform reduces the need to browse multiple websites by aggregating all resources in one place.",
      tech: "React | Node.js | Express.js | MySQL",
      github: "https://github.com/asiya47",
      live: "#",
    },

    {
      title: "Diet Management System",
      description:
        "A machine learning-based health management system that recommends personalized diet plans based on a user's health conditions, food preferences, restrictions, and suggested exercises.",
      tech: "Python | Machine Learning | Scikit-learn | Pandas",
      github: "https://github.com/asiya47",
      live: "#",
    },

    {
      title: "Bus Reservation System",
      description:
        "A reservation management system developed to manage bus bookings, passenger details, schedules, and ticket generation with an easy-to-use interface.",
      tech: "Java | MySQL",
      github: "https://github.com/asiya47",
      live: "#",
    },

    {
      title: "Typing Speed Test",
      description:
        "An interactive typing speed test web application that calculates typing speed, accuracy, and performance in real-time with a responsive user interface.",
      tech: "HTML | CSS | JavaScript",
      github: "https://github.com/asiya47",
      live: "https://asiya47.github.io/Typing-test/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0B1120] text-white px-20 py-20"
    >
      <h1 className="text-5xl font-bold text-center mb-16">
        My <span className="text-sky-400">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-sky-400 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 leading-7 mb-4">
              {project.description}
            </p>

            <p className="text-gray-400 mb-6">
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600"
              >
                View Code
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-sky-500 px-4 py-2 rounded-lg hover:bg-sky-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;