import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LYFR | Your Health. Your Records. Your Phone.</title>
        <meta name="description" content="LYFR is a patent-pending AI-powered mobile health platform that empowers patients through smartphone-based diagnostics and health record management." />
      </Head>
      <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">LYFR</h1>
          <p className="text-xl">Your Health. Your Records. Your Phone.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">SmartTrack™</h2>
            <p>Breath, skin, oral, and range-of-motion diagnostics using your smartphone’s camera and mic—no hardware needed.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">SmartCheck™</h2>
            <p>Facial monitoring, mood and cognition analysis, and emotional health screening—all guided by on-device AI.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">AI-Powered Insights</h2>
            <p>LYFR learns from your health records and flags gaps, patterns, and overlooked issues with intuitive summaries and timelines.</p>
          </div>
        </section>

        <section className="text-center mt-12 mb-24">
          <p className="text-lg font-medium mb-2">Status: <span className="text-green-600">Patent Pending</span></p>
          <p className="text-md text-gray-700 mb-4">Filed April 2025 – Now available for acquisition or licensing</p>
          <a
            href="mailto:ahmadmines@timmed.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-lg font-semibold hover:bg-blue-700"
          >
            Inquire About Acquisition
          </a>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-16">
          &copy; {new Date().getFullYear()} LYFR. All rights reserved.
        </footer>
      </main>
    </>
  );
}
