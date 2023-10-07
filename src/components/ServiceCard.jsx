const ServiceCard = ({ service }) => {
  const { id, name, image, price, short_description } = service;
  return (
    <div>
      <div className="card glass">
        <figure>
          <img className="h-80 w-full" src={image} alt="service image" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <i className="mb-6">
            <b>Book now:</b> ${price}
          </i>
          <div className="card-actions justify-center">
            <button className="btn btn-warning w-full capitalize">
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
