import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/asiya.jpg";
import resume from "../assets/mdresume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-20 bg-[#0B1120] text-white"
    >
      {/* Left Side */}
      <div className="space-y-5">
        <p className="text-sky-400 text-xl">Hello, I'm</p>

        <h1 className="text-6xl font-bold">
          MD Asiya <span className="text-sky-400">Benazeer</span>
        </h1>

        <h2 className="text-gray-400 text-2xl">
          Aspiring Software Engineer
        </h2>

        <p className="max-w-xl text-gray-300 leading-7">
          Passionate about Software Development, Web Development,
          Machine Learning, and building modern scalable applications.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-5 pt-4">
          <a href={resume} download>
            <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-lg transition">
              <FaDownload />
              Resume
            </button>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/asiya47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/asiya-benazeer-229a84290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#0A66C2" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/asiyabenazeer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              className="w-7 h-7"
              alt="LeetCode"
            />
          </a>
        </div>

        {/* Email */}
        <p className="text-gray-400 pt-4">
          📧 asiyabenazeer@gmail.com
        </p>
      </div>

      {/* Right Side */}
      <div className="relative">
        <img
          src={profile}
          alt="MD Asiya Benazeer"
          className="w-[380px] h-[380px] rounded-full border-4 border-sky-400 object-cover shadow-xl"
        />
      </div>
    </section>
  );
}

export default Hero;