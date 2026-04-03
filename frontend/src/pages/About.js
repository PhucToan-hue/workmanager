import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/About.css';

function About() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/about');
        setStudentInfo(response.data);
      } catch (err) {
        setError('Failed to load student information');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutInfo();
  }, []);

  if (loading) return <div className="about-container"><p>Loading...</p></div>;
  if (error) return <div className="about-container"><p>{error}</p></div>;

  return (
    <div className="about-container">
      <div className="about-card">
        <div className="student-avatar">👤</div>
        <h2>Student Information</h2>
        {studentInfo && (
          <>
            <div className="info-item">
              <label>Name:</label>
              <span>{studentInfo.name}</span>
            </div>
            <div className="info-item">
              <label>Student ID:</label>
              <span>{studentInfo.studentId}</span>
            </div>
            <div className="info-item">
              <label>Class:</label>
              <span>{studentInfo.class}</span>
            </div>
            <hr />
            <div className="app-info">
              <h3>About This Application</h3>
              <p><strong>{studentInfo.application}</strong></p>
              <p>{studentInfo.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default About;
