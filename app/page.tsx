export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          🧠 Mon Second Brain
        </h1>
        <p className="text-gray-400 text-lg">
          Tableau de bord - Vercel & Notion
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
            <span className="mr-2">▲</span> Déploiements Vercel
          </h2>
          <p className="text-gray-400">Intégration à venir...</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
            <span className="mr-2">📓</span> Notes Notion
          </h2>
          <p className="text-gray-400">Intégration à venir...</p>
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-500">
        Propulsé par Moltbot 🤖
      </footer>
    </div>
  );
}
