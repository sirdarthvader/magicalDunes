import React, { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <section>Introduction block</section>
    </div>
  );
}
