import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
    ticketLimit: "",
    approvalMode: "auto"
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.post("/events", form, {
        headers: { Authorization: token }
      });
      alert("Event created");
      navigate("/dashboard");
    } catch {
      alert("Failed to create event");
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br />
        <input name="date" type="date" onChange={handleChange} /><br />
        <input name="venue" placeholder="Venue" onChange={handleChange} /><br />
        <input name="ticketLimit" placeholder="Ticket Limit" onChange={handleChange} /><br />

        <select name="approvalMode" onChange={handleChange}>
          <option value="auto">Auto Approval</option>
          <option value="manual">Manual Approval</option>
        </select><br />

        <button>Create</button>
      </form>
    </div>
  );
}
