function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-[#0B1120] text-white flex flex-col justify-center items-center px-6"
      >
        <h2 className="text-4xl font-bold mb-10">
          Contact <span className="text-sky-400">Me</span>
        </h2>

        <div className="bg-[#111827] p-8 rounded-xl shadow-lg text-center space-y-4 max-w-xl w-full">
          <p className="text-lg">
            📧 Email:
            <a
              href="mailto:asiyabenazeer@gmail.com"
              className="text-sky-400 ml-2 hover:underline"
            >
              asiyabenazeer@gmail.com
            </a>
          </p>

          <p className="text-lg">
            💼 LinkedIn:
            <a
              href="https://www.linkedin.com/in/asiya-benazeer-229a84290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 ml-2 hover:underline"
            >
              View Profile
            </a>
          </p>

          <p className="text-lg">
            💻 GitHub:
            <a
              href="https://github.com/asiya47"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 ml-2 hover:underline"
            >
              github.com/asiya47
            </a>
          </p>

          <p className="text-lg">
            🧩 LeetCode:
            <a
              href="https://leetcode.com/u/asiyabenazeer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 ml-2 hover:underline"
            >
              leetcode.com/u/asiyabenazeer
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-[#111827] text-center py-6 text-gray-400">
        © 2026 Md Asiya Benazeer | All Rights Reserved
      </footer>
    </>
  );
}

export default Contact;