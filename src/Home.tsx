import React from "react";

const Home: React.FC = () =>{

  return (
    <div className="w-full h-full flex flex-col font-sans">
      {/* Navigation (optional) */}
      <nav className="fixed w-full flex justify-end p-4 bg-white bg-opacity-90 z-10 shadow-sm">
        <ul className="flex space-x-4 mr-4">
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hello, I’m John Doe</h1>
        <p className="text-xl md:text-2xl max-w-xl text-center mb-6">
          I’m a Software Developer specializing in creating beautiful web experiences.
        </p>
        <button
          className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-md font-semibold shadow hover:shadow-lg hover:bg-gray-50 transition"
        >
          View My Work
        </button>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Work Experience</h2>
          <div className="space-y-6">
            {/* Experience Item 1 */}
            <div className="p-6 rounded-md bg-white shadow">
              <h3 className="text-xl font-semibold">Senior Developer at TechCorp</h3>
              <span className="text-gray-500 text-sm">2022 - Present</span>
              <p className="mt-3 text-gray-700">
                Working on building scalable web applications and leading a small team of engineers.
                Implemented modern best practices in React, TypeScript, and Tailwind for the company’s flagship product.
              </p>
            </div>
            {/* Experience Item 2 */}
            <div className="p-6 rounded-md bg-white shadow">
              <h3 className="text-xl font-semibold">Frontend Engineer at DevStudio</h3>
              <span className="text-gray-500 text-sm">2019 - 2022</span>
              <p className="mt-3 text-gray-700">
                Specialized in creating dynamic user interfaces with React and Redux. 
                Collaborated with cross-functional teams to deliver seamless user experiences.
              </p>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>

        <button
          className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold shadow hover:shadow-lg hover:bg-blue-700 transition"
        >
          Check Out My Projects
        </button>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="rounded-md overflow-hidden shadow-lg">
              <div className="bg-gray-200 h-40 flex items-center justify-center">
                {/* Replace with a project image if desired */}
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Awesome Project #1</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of your project highlighting the tech stack and major features.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="rounded-md overflow-hidden shadow-lg">
              <div className="bg-gray-200 h-40 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Awesome Project #2</h3>
                <p className="text-gray-700 mb-4">
                  Another showcase of a project you've built. Emphasize challenges solved and unique functionalities.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>

        <button
          className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold shadow hover:shadow-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </button>
      </section>

      {/* Bottom (Footer) Section */}
      <section
        id="bottom"
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gray-900 text-white"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          <p className="text-gray-300">
            Interested in working together or have a question? Reach out and let’s build something great.
          </p>
          <div>
            <a
              href="mailto:john.doe@example.com"
              className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-md font-semibold shadow hover:shadow-lg hover:bg-blue-600 transition"
            >
              Email Me
            </a>
          </div>
        </div>
        <footer className="mt-16 text-gray-500">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </footer>
      </section>
    </div>
  );
}

export default Home;