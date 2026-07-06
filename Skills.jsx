function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0B1120] text-white px-20 py-20"
    >
      <h2 className="text-center text-4xl font-bold mb-12">
        My <span className="text-sky-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* HTML */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">HTML</h3>
        </div>

        {/* CSS */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">CSS</h3>
        </div>

        {/* JavaScript */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">JavaScript</h3>
        </div>

        {/* React */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">React</h3>
        </div>

        {/* Java */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">Java</h3>
        </div>

        {/* Python */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">Python</h3>
        </div>

        {/* MySQL */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">MySQL</h3>
        </div>

        {/* GitHub */}
        <div className="bg-[#111827] p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 className="text-xl text-sky-400 font-bold">Git & GitHub</h3>
        </div>

      </div>
    </section>
  );
}

export default Skills;