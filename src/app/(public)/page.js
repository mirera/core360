// pages/index.js


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800 px-6 py-4">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="text-xl font-bold">CORE 360</div>
        <a href="/login">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition" >
            Login
          </button>
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI-powered Platform for Smater end-end Construction Management
        </h1>
        <p className="text-lg max-w-xl">
          All-in-one platform for quoting, tracking, execution & AI insights — built
          for complete visibility and control.
        </p>
      </main>

      {/* Footer / CTA */}
      <footer className="text-center mb-8">
        <a href="/register">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </a>
      </footer>
    </div>
  );
}
