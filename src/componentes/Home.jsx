import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://source.unsplash.com/1920x1080/?hamburger)`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-second-color dark:text-second-night-color">
            lorem
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est
            voluptates quasi voluptas ab autem vel tempora asperiores ducimus
            repudiandae beatae consectetur hic ipsam nisi repellat, modi tenetur
            nemo odio!
          </p>
          <button className="btn btn-lg mobil:btn-lg tablet:btn-lg laptop:btn-lg">
            Ver Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
