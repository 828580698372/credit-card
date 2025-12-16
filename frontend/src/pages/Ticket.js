import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function Ticket() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    api.get(`/register/${id}`).then(res => setTicket(res.data));
  }, [id]);

  if (!ticket) return <p>Loading ticket...</p>;

  return (
   <div className="container">
  <h2>Event Ticket</h2>
  <p><strong>Name:</strong> {ticket.name}</p>
  <p><strong>Email:</strong> {ticket.email}</p>

  <p className={`status ${
    ticket.status === "Approved" ? "status-approved" : "status-pending"
  }`}>
    Status: {ticket.status}
  </p>

  {ticket.ticketId && (
    <p><strong>Ticket ID:</strong> {ticket.ticketId}</p>
  )}
</div>

  );
}
