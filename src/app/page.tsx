// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="mb-4">This is the public home page.</p>
      <div className="space-x-4">
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
        <a href="/dashboard" className="text-blue-500 hover:underline">
          Dashboard (Protected)
        </a>
      </div>
    </main>
  );
}