import { Heart, Sun, Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-photo" role="img" aria-label="Sunlight falling on indoor green plants" />
      <div className="about-copy">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <h2>Good things grow<br />with a little care.</h2>
        <p>
          At Paradise Nursery, we believe a little greenery can change how a space feels.
          Our collection is designed to help you find plants that fit your home, your style,
          and your everyday routine.
        </p>
        <p>
          Whether you are choosing your very first plant or adding to a growing collection,
          we make it easier to bring nature a little closer.
        </p>
        <div className="about-values">
          <span><Heart size={17} /> Chosen with care</span>
          <span><Sun size={17} /> Everyday-friendly</span>
          <span><Leaf size={17} /> More green, more joy</span>
        </div>
      </div>
    </section>
  );
}