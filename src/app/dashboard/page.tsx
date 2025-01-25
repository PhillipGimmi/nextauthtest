'use client'

import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-4">Protected Content</h2>
            <p>This is a protected route. You should only see this if authenticated.</p>
          </div>
        </div>
      </main>
    </div>
  )
}