import profile from "../assets/asiya.jpg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-20 bg-[#111827] text-white"
    >
      {/* Image */}
      <div>
        <img
          src={profile}
          alt="Asiya Benazeer"
          className="w-[320px] h-[320px] rounded-2xl border-4 border-sky-400 object-cover shadow-xl"
        />
      </div>

      {/* Text */}
      <div className="max-w-2xl space-y-5">
        <h4 className="text-sky-400 text-lg">ABOUT ME</h4>

        <h2 className="text-4xl font-bold">
          Who is <span className="text-sky-400">Asiya Benazeer?</span>
        </h2>

        <p className="text-gray-300 leading-7">
          I am an aspiring Software Developer passionate about Web Development,
          Java, Python, and Machine Learning. I love building modern, user-friendly
          applications and solving real-world problems through code.
        </p>

        <p className="text-gray-300 leading-7">
          My goal is to become a Full Stack Developer and contribute to impactful
          tech projects that help people and improve digital experiences.
        </p>

        {/* Info Cards */}
        <div className="flex gap-5 pt-4">
          <div className="bg-[#0B1120] p-4 rounded-lg border border-gray-700">
            <h3 className="text-sky-400 text-xl font-bold">Frontend</h3>
            <p className="text-gray-400 text-sm">React, HTML, CSS</p>
          </div>

          <div className="bg-[#0B1120] p-4 rounded-lg border border-gray-700">
            <h3 className="text-sky-400 text-xl font-bold">Backend</h3>
            <p className="text-gray-400 text-sm">Java, Python</p>
          </div>

          <div className="bg-[#0B1120] p-4 rounded-lg border border-gray-700">
            <h3 className="text-sky-400 text-xl font-bold">Database</h3>
            <p className="text-gray-400 text-sm">MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;