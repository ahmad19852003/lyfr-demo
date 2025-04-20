export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <section className="max-w-6xl mx-auto text-center py-16">
        <h1 className="text-5xl font-bold mb-4">LYFR: AI-Accelerated, Clinically Designed, Patent-Pending</h1>
        <p className="text-xl mb-6">
          The world’s first mobile diagnostic and documentation platform powered by AI. No hardware. No friction. Just your phone.
        </p>
        <a
          href="mailto:ahmadmines@timmed.com"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
        >
          Inquire About Acquisition
        </a>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left py-12">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">SmartTrack™</h2>
          <p>
            AI-powered diagnostic engine using your phone's camera and mic to analyze breath, cough, skin, oral health, and range-of-motion.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">SmartCheck™</h2>
          <p>
            Cognitive and emotional screening using facial recognition, eye movement tracking, memory prompts, and mood interpretation.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-2">SmartChart™</h2>
          <p>
            Auto-generated SOAP notes and CPT/ICD-coded documentation for providers. Fax, export, or integrate — instantly.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Included in the Acquisition</h2>
        <ul className="text-lg text-left max-w-3xl mx-auto list-disc list-inside">
          <li>Patent-pending architecture (filed April 2025)</li>
          <li>SmartTrack, SmartCheck, SmartChart modules</li>
          <li>Live domain + branded website (www.lyfr.ai)</li>
          <li>GitHub codebase + AI logic stack</li>
          <li>Voiceover demo videos and full documentation set</li>
        </ul>
        <p className="mt-6 text-lg">
          Fully deployable. Infinitely extensible. Designed by a clinician. Built to scale.
        </p>
      </section>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} LYFR. All rights reserved.
      </footer>
    </main>
  );
}
