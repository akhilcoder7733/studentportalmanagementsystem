import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Simulating admin check

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const querySnapshot = await getDocs(collection(db, "announcements"));
      const announcementList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnnouncements(announcementList);
    };

    fetchAnnouncements();
  }, []);

  const handleAddAnnouncement = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "announcements"), {
        content: newAnnouncement,
        timestamp: new Date(),
      });
      setNewAnnouncement("");
      alert("Announcement posted successfully!");
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Announcements</h2>
      {isAdmin && (
        <form onSubmit={handleAddAnnouncement}>
          <textarea
            placeholder="Write a new announcement..."
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            style={{ width: "100%", height: "100px", marginBottom: "10px" }}
          ></textarea>
          <button type="submit">Post Announcement</button>
        </form>
      )}
      <h3>Recent Announcements</h3>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <p>{announcement.content}</p>
            <small>
              Posted on: {new Date(announcement.timestamp?.toDate()).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
