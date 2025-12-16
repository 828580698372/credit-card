import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/");

    api.get("/events/my", {
      headers: { Authorization: token }
    }).then(res => setEvents(res.data));
  }, [navigate]);

  return (
    <div className="container">
  <div className="header-actions">
    <h2>My Events</h2>
    <button onClick={() => navigate("/create-event")}>
      + Create Event
    </button>
  </div>

  {events.length === 0 && <p>No events created yet.</p>}

  {events.map(event => (
    <div className="event-card" key={event._id}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>

      <p className="status">
        Approval:
        <span
          className={
            event.approvalMode === "Auto"
              ? "status-approved"
              : "status-pending"
          }
        >
          {" "}{event.approvalMode}
        </span>
      </p>

      <a
        className="event-link"
        href={`http://localhost:3000/event/${event._id}`}
        target="_blank"
        rel="noreferrer"
      >
        View Public Event Page
      </a>

      <br /><br />

      <button
        onClick={() => {
          navigator.clipboard.writeText(
            `http://localhost:3000/event/${event._id}`
          );
          alert("Event link copied");
        }}
      >
        Copy Event Link
      </button>
    </div>
  ))}
</div>

  );
}
