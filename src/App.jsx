import { useState } from "react";

/* ---------------- App ---------------- */

const App = () => {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 p-6">
        {page === "dashboard" && <Dashboard />}
        {page === "clients" && <Clients />}
        {page === "settings" && <Settings />}
      </main>
    </div>
  );
};

/* ---------------- Sidebar ---------------- */

const Sidebar = ({ page, setPage }) => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Mini Dashboard</h1>

      <nav className="flex flex-col gap-4">
        <button
          onClick={() => setPage("dashboard")}
          className={page === "dashboard" ? "text-blue-400" : "hover:text-blue-400"}
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("clients")}
          className={page === "clients" ? "text-blue-400" : "hover:text-blue-400"}
        >
          Clients
        </button>

        <button
          onClick={() => setPage("settings")}
          className={page === "settings" ? "text-blue-400" : "hover:text-blue-400"}
        >
          Settings
        </button>
      </nav>
    </aside>
  );
};

/* ---------------- Pages ---------------- */

const Dashboard = () => {
  // Parent data
  const stats = [
    { title: "Total Clients", value: 12 },
    { title: "Active Projects", value: 5 },
    { title: "Completed Projects", value: 7 },
    { title: "Pending Payments", value: 3 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  const clients = [
    { id: 1, name: "Client A", status: "Active" },
    { id: 2, name: "Client B", status: "Completed" },
    { id: 3, name: "Client C", status: "Pending" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Clients</h2>

      <div className="bg-white rounded-lg shadow p-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-between border-b py-3 last:border-none"
          >
            <span>{client.name}</span>
            <span className="text-gray-500">{client.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">
          Settings page placeholder.
        </p>
      </div>
    </div>
  );
};

/* ---------------- Reusable Component ---------------- */

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default App;
