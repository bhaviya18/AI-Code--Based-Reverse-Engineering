
const UsersList = () => {
  // Dummy data for registered users
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', registeredOn: '2024-12-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', registeredOn: '2024-12-15' },
   
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Registered Users</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Registered On</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">{user.registeredOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
