import React, { useState } from "react";
import "./Textimonial.css";

const testimonials = [
  {
    quote:
      "Symplify has transformed how we manage our therapy center. It's efficient and easy to use!",
    author: "- Jane Doe, Therapy Center Manager",
  },
  {
    quote:
      "The scheduling feature is a game-changer for us. Highly recommended!",
    author: "- John Smith, Therapist",
  },
  {
    quote:
      "An invaluable tool for organizing and streamlining our operations. Excellent support too!",
    author: "- Emma Wilson, Clinic Director",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      <section id="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>{testimonials[currentIndex].quote}</p>
              <cite>{testimonials[currentIndex].author}</cite>
            </div>
            <div className="testimonial-nav">
              <button className="nav-button" onClick={prevTestimonial}>
                ‹
              </button>
              <button className="nav-button" onClick={nextTestimonial}>
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
