import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
  <h2>Organizer Login</h2>
  <form onSubmit={handleSubmit}>
    <input placeholder="Email" name="email" onChange={handleChange} />
    <input placeholder="Password" type="password" name="password" onChange={handleChange} />
    <button>Login</button>
  </form>
</div>

  );
}
