// pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">LYFR: AI-Powered Mobile Health Platform</h1>
        <p className="text-center text-lg mb-10">
          Patent-pending diagnostic + documentation system transforming any smartphone into a medical-grade engine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">SmartTrack™</h2>
            <p>
              Analyze breath, skin, oral health, and movement using camera + microphone. No hardware needed. AI delivers real-time diagnostic suggestions.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">SmartCheck™</h2>
            <p>
              Perform emotional, cognitive, and facial screening using phone sensors. Detect patterns in memory, eye motion, and mental health indicators.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">SmartChart™</h2>
            <p>
              Auto-generates CPT/ICD-coded clinical notes for providers. Legal-risk-ranked, EHR-ready, and fax/export compatible.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-3">Patent-Pending Infrastructure</h3>
          <p>
            LYFR is protected by a U.S. provisional patent (filed April 2025). Covered modules include: mobile diagnostics, AI-generated medical documentation, consent-based record sync, legal audit tools, and avatar-guided intake.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-3">Built to Scale</h3>
          <ul className="list-disc list-inside">
            <li>Open-source AI stack with fallback endpoints</li>
            <li>Hosted on Vercel + Cloudflare for high availability</li>
            <li>Fully mobile — deploy anywhere without custom hardware</li>
            <li>SmartCheck/SmartTrack work offline and sync later</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">For acquisition/licensing inquiries:</p>
          <a
            href="mailto:ahmadmines@timmed.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg rounded-lg font-semibold hover:bg-blue-700"
          >
            Inquire About Acquisition
          </a>
        </div>
      </section>
    </main>
  );
}
