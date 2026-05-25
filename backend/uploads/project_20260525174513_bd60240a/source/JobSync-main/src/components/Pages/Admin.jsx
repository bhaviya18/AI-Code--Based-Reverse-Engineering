import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-purple-800 text-white">
        <div className="p-6 font-bold text-lg">Admin Dashboard</div>
        <nav className="p-4 space-y-4">
          <Link to="/admin" className="block p-2 rounded hover:bg-purple-700">
            Dashboard
          </Link>
          <Link to="/admin/users" className="block p-2 rounded hover:bg-purple-700">
            Users
          </Link>
          <Link to="/admin/analytics" className="block p-2 rounded hover:bg-purple-700">
            Analytics
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-white p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Admin</span>
            <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-3 gap-6">
          <div className="bg-purple-100 p-4 rounded shadow">
            <h2 className="text-lg font-bold text-purple-800">Registered Users</h2>
            <p className="text-2xl font-semibold text-purple-700">0</p>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow">
            <h2 className="text-lg font-bold text-purple-800">Active Sessions</h2>
            <p className="text-2xl font-semibold text-purple-700">0</p>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow">
            <h2 className="text-lg font-bold text-purple-800">Register yourself</h2>
            <Link
              to="/admin/register" // Use the 'to' prop with the route to the admin register page
              className="mt-2 inline-block px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700"
            >
              Register Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
