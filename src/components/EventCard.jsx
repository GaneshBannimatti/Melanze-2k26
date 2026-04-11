import React from "react";
import styled from "styled-components";

export default function EventCard({ title, img, onRegister }) {
  return (
    <StyledWrapper>
      <article className="card">

        {/* IMAGE */}
        <div className="image-container">
          <img src={img} alt={title} />
        </div>

        {/* CONTENT */}
        <div className="content">

          <div className="top">
            <h3>{title}</h3>

            <div className="arrow" onClick={onRegister}>
              →
            </div>
          </div>

          <button onClick={onRegister} className="btn">
            Register Now
          </button>

        </div>
      </article>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: 360px;
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(34, 211, 238, 0.25);
  }

  .image-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    padding: 16px;
    color: white;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  .arrow {
    width: 36px;
    height: 36px;
    background: #22d3ee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn {
    margin-top: 12px;
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid #22d3ee;
    background: transparent;
    color: #22d3ee;
    cursor: pointer;
  }

  .btn:hover {
    background: #22d3ee;
    color: black;
  }
`;