import Head from 'next/head';

export default function Platform() {
  return (
    <>
      <Head>
        <title>LYFR | Platform Overview</title>
        <meta name="description" content="Full technical and functional overview of the LYFR health platform including AI stack, business units, SmartTrack and SmartCheck tools, and roadmap." />
      </Head>
      <main className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">LYFR Platform Overview</h1>
          <p className="text-lg mb-4">LYFR is a modular, AI-accelerated health diagnostics and documentation platform designed for continuous uptime, modular AI integration, and open-source extensibility. It supports mobile-first diagnostics, AI-based charting, and secure health record handling at scale.</p>
          <p className="text-md text-gray-700">This page details the full ecosystem, stack, diagnostic modules, regulatory strategy, and roadmap of LYFR.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">AI/ML Stack</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>NLP:</strong> BioBERT, SpaCy, Med7 — medical document parsing</li>
            <li><strong>Audio:</strong> Whisper, Wav2Vec2 — for coughs, speech analysis</li>
            <li><strong>Vision:</strong> MediaPipe, OpenCV, MONAI — camera-based input</li>
            <li><strong>Routing Logic:</strong> SmartFlow™ engine triggers the appropriate SmartTrack™, SmartCheck™, or SmartChart™ module</li>
            <li><strong>Frontend:</strong> React + Next.js, Tailwind CSS (responsive, modular)</li>
            <li><strong>Backend:</strong> Firebase, Supabase, or AWS Lambda (HIPAA-compliant)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">LYFR Ecosystem Roadmap</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li><strong>Unit 1 – SmartTrack™ + SmartCheck™:</strong> Mobile-first diagnostic tools</li>
            <li><strong>Unit 2 – Lightweight EHR:</strong> SmartChart™, documentation, CPT/ICD automation</li>
            <li><strong>Unit 3 – EHR Bridge:</strong> Migration, OCR/NLP parsing, legacy structuring</li>
            <li><strong>Unit 4 – Compliance Engine:</strong> Automated chart audit, billing/legal risk detection</li>
            <li><strong>Unit 5 – Global Expansion:</strong> FDA readiness, GDPR compliance, localization</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Business Unit Summaries</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold">SmartTrack™ & SmartCheck™ App (Unit 1)</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Breath sound capture via mic</li>
                <li>Skin, ROM, and oral health imaging via camera</li>
                <li>Facial expression, mood, and cognition screening</li>
                <li>Text-based module-specific virtual assistant</li>
                <li>Result sharing: PDF, QR, Email</li>
                <li>HIPAA-compliant from launch</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Lightweight EHR (Unit 2)</h3>
              <p>SmartChart™ note automation from voice; CPT/ICD coding, scheduling, and portal export.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">EHR Bridge (Unit 3)</h3>
              <p>OCR, HL7, PDF ingestion; timeline conversion; record reconciliation; and legacy record migration.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Compliance Engine (Unit 4)</h3>
              <p>Legal risk scoring, chart auditing, follow-up detection, billing anomaly alerts, and full compliance reports.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Global Expansion (Unit 5)</h3>
              <p>510(k) clearance planning, EU/UK/AU regulatory readiness, language-aware AI support, and global deployment roadmap.</p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-medium mb-2">Status: <span className="text-green-600">Patent Pending</span></p>
          <p className="text-md text-gray-600 mb-6">Filed April 2025 — AI-Powered Modular Health Platform</p>
          <p className="text-md text-gray-600 mb-6">Video coming May 6. Reach out for licensing or development requests.</p>
          <a
            href="mailto:ahmadmines@timmed.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Contact for Access
          </a>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-16">
          &copy; {new Date().getFullYear()} LYFR. All rights reserved.
        </footer>
      </main>
    </>
  );
}
