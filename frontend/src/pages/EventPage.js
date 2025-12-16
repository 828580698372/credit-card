import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    api.get(`/events/${id}`).then(res => setEvent(res.data));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post(`/register/${id}`, form);
    navigate(`/ticket/${res.data._id}`);
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
    <div className="banner">
  <h1>{event.title}</h1>
</div>
   <div className="container">
  <h2>{event.title}</h2>
  <p>{event.description}</p>
  <p><strong>Date:</strong> {event.date}</p>
  <p><strong>Venue:</strong> {event.venue}</p>

  <h3>Register for Event</h3>

  <form onSubmit={handleSubmit}>
    <input placeholder="Your Name" name="name" onChange={handleChange} />
    <input placeholder="Your Email" name="email" onChange={handleChange} />
    <button>Register</button>
  </form>
</div>
</div>

  );
}
