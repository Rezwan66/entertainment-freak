export const DynamicBanner = ({ category }) => {
  const { image, short_description, name } = category || {};
  return (
    <div
      className="hero h-[550px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p className="mb-5">{short_description}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
