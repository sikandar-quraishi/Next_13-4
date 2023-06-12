// pages/dashboard.js
import PrivateRoute from './components/PrivateRoute';

const Dashboard = () => {
  return (
     <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
        {/* Protected content */}
      </div>
     </PrivateRoute>
  );
};

export default Dashboard;
