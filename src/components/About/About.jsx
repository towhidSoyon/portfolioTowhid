import TowhidSoyon from "../../assets/towhid.png";
import Android from "../../assets/android.svg";
import Java from "../../assets/java.svg";
import Compose from "../../assets/compose.png";
import Firebase from "../../assets/firebase.svg";
import Kotlin from "../../assets/kotlin.svg";

export default function About() {
  const skills = [
    { src: Android, alt: "Android" },
    { src: Java, alt: "Java" },
    { src: Kotlin, alt: "Kotlin" },
    { src: Compose, alt: "Compose" },
    { src: Firebase, alt: "Firebase" },
    
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-16 bg-black text-white"
    >
      {/* Text Section */}
      <div className="flex-1 space-y-4 max-w-xl">
        <h2 className="text-4xl font-bold text-green-400 mb-4">About me</h2>
        <p>
          Hi there! I'm Towhid, a passionate Mobile App Developer skilled in Android, Jetpack Compose, and cross-platform solutions.
        </p>
        <p className="mt-4">
          I craft intuitive, high-performance mobile experiences using modern architectures like MVI and MVVM.
        </p>
        <p className="mt-4">
          I also build scalable features with KMP, integrate AI/ML capabilities, and collaborate in full-cycle app development across teams.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-green-400">Education:</h3>
          <h4 className="font-semibold">
            B.Sc in CSE
          </h4>
          <p>Daffodil International University | Jan 2019 - Dec 2022</p>
          <p>3.69 out of 4.00</p>
        </div>

        <h3 className="text-2xl font-semibold text-green-400 mt-8">
          Here are my main skills:
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-2 rounded-lg hover:scale-105 transition transform duration-300"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-12 h-12 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={TowhidSoyon}
          alt="Towhid Soyon"
          className="max-w-xs md:max-w-sm rounded-lg shadow-lg transition duration-500 hover:scale-105 animate-slideInRight"
        />
      </div>
    </section>
  );
}
