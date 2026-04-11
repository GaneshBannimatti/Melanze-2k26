import React from "react";
import styled from "styled-components";

export default function EventCard({ title, img, onRegister }) {
  console.log("IMAGE PATH:", img); // ✅ DEBUG

  return (
    <StyledWrapper>
      <article className="article-wrapper">

        {/* IMAGE */}
        <div className="container-project">
          <img src={img} alt={title} />
        </div>

        {/* INFO */}
        <div className="project-info">

          <div className="flex-pr">
            <div className="project-title">{title}</div>

            <div className="project-hover" onClick={onRegister}>
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
  .article-wrapper {
    width: 100%;
    border-radius: 12px;
    padding: 6px;
    cursor: pointer;
    background-color: white;
  }

  .container-project {
    width: 100%;
    height: 160px;
    border-radius: 10px;
    overflow: hidden;
    background: red; /* ✅ TEMP TEST */
  }

  .container-project img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-info {
    padding: 10px;
  }

  .project-title {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }

  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-hover {
    width: 35px;
    height: 35px;
    background: #22d3ee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    margin-top: 10px;
    padding: 6px;
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