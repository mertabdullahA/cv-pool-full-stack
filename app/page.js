// pages/index.js

"use client";
// pages/index.js
import { useState, useEffect } from "react";
import api from "../utils/api";

export default function Home() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    // API'den CV verilerini çekme
    const fetchCvs = async () => {
      try {
        const response = await api.get("/cvs/");
        console.log("CVs:", response.data); // Veriyi console'da kontrol et
        setCvs(response.data);
      } catch (error) {
        console.error("Error fetching CVs:", error);
      }
    };

    fetchCvs();
  }, []);

  return (
    <div className="container">
      <h1>CV Havuzu</h1>
      <ul>
        {cvs.length === 0 ? (
          <li>No CVs found</li>
        ) : (
          cvs.map((cv) => (
            <li key={cv.id}>
              <h2>{cv.name}</h2>
              <p>{cv.email}</p>
              <a href={cv.cv_file} target="_blank" rel="noopener noreferrer">
                CV'yi Görüntüle
              </a>
            </li>
          ))
        )}
      </ul>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          background: #f9f9f9;
          margin: 10px 0;
          padding: 15px;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        h2 {
          margin: 0 0 10px;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
