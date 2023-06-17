import React from "react";
import image from "./images/pfp.jpg";

function About() {
  return (
    <div class="about">
      <div class="about-me">
        <h2>About Me</h2>
        <img src={image} alt="profile" id="pfp" />
        <p>
          Hello! I'm Michelle, a third year computer science student at UBC
          currently on co-op.
        </p>
      </div>
      <div class="about-project">
        <h2>About the Project</h2>
        <p>
          StorageManager is the go to web application that allows you to keep
          track any type of item along with a description, price, and even an
          image of the item! The application is easy to use and minimal from
          unnescesary distractions. With its ease of use, StorageManager brings
          several significant benefits to businesses.
          <br />
          <br />
          StorageManager enhances organization and accessibility of inventory
          data. By having a centralized system that allows you to update
          pertinent information about the inventory, it streamlines the ability
          to keep track of and go through items in stock. The inclusion of item
          images aids in the identification and recognition of items in the
          inventory. This allows users to easily and accurately identify item
          which can potentially minimize confusion regarding name and
          descriptions.
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
