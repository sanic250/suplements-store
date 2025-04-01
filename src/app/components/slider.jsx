"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles_components/slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const slides = [
    {
      image: "/bialko.jpg",
      title: "Promocja na odżywki białkowe!",
      description: "Tylko teraz -20% na wszystkie odżywki!",
    },
    {
      image: "/kreatyna.jpg",
      title: "Nowa kreatyna w ofercie",
      description: "Sprawdź naszą najnowszą kreatynę monohydrat!",
    },
    {
      image: "/dostawa.png",
      
    },
    {
      image: "/akcesoria.jpg",
      title: "Akcesoria Treningowe",
      description: "Najlepsza jakość akcesori treningowych!",
    },
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
            />
            <div className={styles.slideContent}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

    
      <button className={styles.prevButton} onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

   
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
