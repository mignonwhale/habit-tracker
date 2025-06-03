
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">🎯 Habit Tracker</h1>
        <div className="space-y-3">
          <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded">
            <p className="text-green-700 font-medium">✅ Tailwind is working!</p>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Test Button
          </button>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 bg-red-300 rounded"></div>
            <div className="h-8 bg-yellow-300 rounded"></div>
            <div className="h-8 bg-green-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
