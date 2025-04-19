
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">LYFR: Patent-Pending AI Mobile Diagnostic Platform</h1>
        <p className="text-lg mb-6">
          LYFR transforms any smartphone into a diagnostic and health record engine. It combines avatar-guided self-assessments,
          audio-visual diagnostics, and provider-ready documentation — all powered by AI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">SmartCheck™</h2>
            <p>Facial expression, memory, mood, and cognitive testing via phone camera and mic.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">SmartTrack™</h2>
            <p>Breath, cough, skin, oral, and ROM diagnostics using phone sensors and AI interpretation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">AI-Generated SmartChart™</h2>
            <p>Produces CPT/ICD-coded notes ready for providers, billing, and compliance.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Consent-Based Sync</h2>
            <p>Securely ingest health records from fax, email, portals, and PDFs. Auto-generates timelines and flags risk.</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-lg font-medium mb-2">Status: <span className="text-green-600">Patent Pending</span></p>
          <p className="text-sm text-gray-600 mb-4">Filed April 2025 — USPTO Provisional Patent Application</p>
          <p className="text-md mb-6">Now available for acquisition or exclusive licensing.</p>
          <a
            href="mailto:ahmadmines@timmed.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Inquire About Acquisition
          </a>
        </div>
      </section>
    </main>
  );
}
