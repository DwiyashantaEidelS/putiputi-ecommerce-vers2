import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border p-6">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-pink-100 mx-auto mb-3 flex items-center justify-center text-pink-500 font-bold text-xl">
            {user?.name?.charAt(0)}
          </div>

          <h1 className="text-2xl font-semibold">
            My Account
          </h1>

          <p className="text-gray-500 text-sm">
            Manage your profile
          </p>
        </div>

        {/* INFO */}
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <p className="text-xs text-gray-500">Name</p>
            <p className="font-medium">{user?.name}</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{user?.email}</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-xs text-gray-500">Role</p>
            <p className="font-medium capitalize">
              {user?.role || "user"}
            </p>
          </div>
        </div>

        {/* ACTION */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}