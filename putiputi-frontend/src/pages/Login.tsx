import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        }
      );

      const { token, user } = res.data;

      login(token, user);

      toast.success("Login berhasil 🔥");

      navigate("/");

    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
        "Login gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border p-6">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm">
            Login to continue shopping
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">
              Email
            </label>

            <input
              type="email"
              className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Password
            </label>

            <input
              type="password"
              className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center">
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </div>

        </form>

        {/* REGISTER LINK (NEW UX FLOW) */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-pink-500 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>


      </div>
    </div>
  );
}