import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const images = [
    {
      id: 1,
      src: "/images/photo6.jpg",
      title: "Golden hour magic",
      description: "Candid Shots",
      category: "Photos",
    },
    {
      id: 2,
      src: "/images/ecomm.jpeg",
      title: "Online Grocery Platform",
      description: "Client Project",
      category: "Projects",
      sourceLink: "https://github.com/charan012/ShopMart",
    },
    {
      id: 3,
      src: "/images/docc.jpg",
      title: "IT Management System",
      description: "Client Project",
      category: "Projects",
      sourceLink:
        "https://github.com/mahi-giri-busitron/Busitron_Frontend_revamp",
    },
    {
      id: 4,
      src: "/images/photo9.jpg",
      title: "Serenity meets sky",
      description: "Photography",
      category: "Photos",
    },
    {
      id: 5,
      src: "/images/dddf.jpg",
      title: "My Document Editor",
      description: "Task Project",
      category: "Projects",
      sourceLink: "https://github.com/charan012/MyDocEditor",
    },
    {
      id: 6,
      src: "/images/photo2.jpg",
      title: "Tranquil Beach scene",
      description: "Photography",
      category: "Blog",
    },
    {
      id: 7,
      src: "/images/Dog Resting on Grass (2).png",
      title: "Dog resting on grass",
      description: "Photo Craft",
      category: "Photos",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [transitioning, setTransitioning] = useState(false);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const handleCategoryChange = (category) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTransitioning(false);
    }, 300);
  };

  return (
    <div className="portfolio">
      <h1 className="heading">Project Gallery</h1>
      <nav className="portfolio-navbar">
        <ul>
          {["All", "Projects", "Photos", "Blog"].map((cat) => (
            <li key={cat}>
              <a
                href={`#${cat.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(cat);
                }}
                className={activeCategory === cat ? "active" : ""}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`portfolio-grid ${transitioning ? "transitioning" : ""}`}>
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`portfolio-item item-${index + 1} animate`}
          >
            <div className="image-wrapper">
              <img
                src={image.src}
                alt={image.title}
                className="portfolio-image"
                loading="lazy"
              />
              <div className="portfolio-hover">
                <h4 className="proj-title">{image.title}</h4>
                <p className="proj-desc">{image.description}</p>
                {image.category === "Projects" && image.sourceLink && (
                  <a
                    href={image.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-button"
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
