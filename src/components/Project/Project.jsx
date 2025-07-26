import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import './Project.css'

const projects = [
  {
    title: "Groq App",
    description:
      "AI-powered chat application integrating Groq API with modern Android architecture",
    tech: ["Kotlin", "Jetpack Compose", "Retrofit", "MVI", "Groq Api"],
    github: "https://github.com/towhidSoyon/GroqApp",
  },
  {
    title: "Study Smart",
    description:
      "An app for organizing and managing study related task and tracking it",
    tech: ["Kotlin", "Jetpack Compose",, "RoomDB"],
    github: "https://github.com/towhidSoyon/StudySmart",
  },
  {
    title: "ValorAgentX",
    description:
      "It is an app in which user can see the list of different agents of Valorant (an online game). Cross- platform mobile application built with Kotlin Multiplatform targeting both Android and iOS",
    tech: ["KMP", "Jetpack Compose", "Pager", "Rest Api", "RoomDB", "DI(Dagger-Hilt)"],
    github: "https://github.com/towhidSoyon/ValorAgentx-kmm",
  },
  {
    title: "Bulletins",
    description:
      "Cross-platform mobile application developed in Flutter to explore and implement Flutterframework capabilities and UI components. Technologies: Flutter, Dart.",
    tech: ["Flutter", "Dart"],
    github:
      "https://github.com/towhidSoyon/Bulletins",
  },
  {
    title: "Plant",
    description:
      "Tree recommendation mobile application that analyzes environmental parameters to suggest optimal tree species using Java and Firebase Firestore for data management. Technologies: Java, Firebase-Firestore.",
    tech: ["Java", "Firebase"],
    github:
      "https://github.com/towhidSoyon/plant",
  },
  {
    title: "ToDo Ktor",
    description:
      "A backend application serving api's for basic todo app built with ktor framework, exploring backend building capabilities",
    tech: ["Kotlin", "Ktor", "MySQL","Ktorm"],
    github:
      "https://github.com/towhidSoyon/ktor-ToDo",
  },
];

export default function Project() {
  return (
    <section
      id="project"
      className="min-h-screen px-6 md:px-16 py-16 bg-black text-white"
    >
      <h2 className="text-4xl font-bold text-green-400 mb-10 text-center">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 hover:bg-gray-700 rounded-lg p-6 hover:scale-[1.02] transition transform duration-300 shadow-md border border-gray-700"
          >
            <header className="flex justify-between items-center mb-4">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                  >
                    <img
                      src={externalLink}
                      alt="Live"
                      className="w-6 h-6 opacity-80 hover:opacity-100"
                    />
                  </a>
                )}
              </div>
            </header>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
            <footer className="mt-4">
              <ul className="flex flex-wrap gap-2 text-sm text-gray-400">
                {project.tech.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-800 px-2 py-1 rounded-md text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
}
