import { useEffect, useState } from "react";
import { getDogs } from "../services/api";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import "../styles/dashboard.css";

export default function Dashboard() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs().then(data => setDogs(data));
  }, []);

  return (
    <div className="dashboard-page">

      <Navbar />

      <div className="dashboard-container">

        <h1 className="dashboard-title">Welcome to Dashboard</h1>

        <div className="dashboard-grid">

          <DashboardCard
            title="Total Dogs"
            value={dogs.length}
          />

        </div>

      </div>

    </div>
  );
}