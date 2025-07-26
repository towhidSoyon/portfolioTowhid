
export default function Experience() {
  return (
    <section id="experience" className="w-full px-6 pt-20  bg-black  text-white">
      <h2 className="text-4xl font-bold text-green-400 mb-10 text-center">Experience</h2>

      <div className="space-y-10 text-center">
        {/* Programming Hero */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">Programming Hero – Android Developer L1</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Built mobile apps for Neptune and Phitron using Jetpack Compose and KMP</li>
            <li>Refactored legacy codebase with MVI and CMP, built production-ready feature</li>
            <li>Improved responsiveness and crash-free stability, gave users a smooth UI/UX experience</li>
          </ul>
        </div>

        {/* Datasoft Manufac */}
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">Datasoft Manufacturing & Assembly Inc. – Software Engineer (Android)</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Developed IoT-based Android apps using Java, MVVM</li>
            <li>Worked with Firebase, REST APIs, Google Maps, GraphView</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
