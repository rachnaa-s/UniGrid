import Layout from "../components/layout/layout";

export default function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>

      <div className="card">WiFi Issue - Pending</div>
      <div className="card">Mess Complaint - Resolved</div>
    </Layout>
  );
}