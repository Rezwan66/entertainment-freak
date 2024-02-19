import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const category = useLoaderData();
  const { id } = useParams();
  const idInt = parseFloat(id);
  console.log(idInt);
  // console.log(typeof id, idInt, category);
  // const selected = services.find(service => service.id === idInt);
  // console.log(selected);

  const { image, long_description, name, price } = category || {};
  return (
    <div className="max-w-4xl mt-20 mb-28 mx-auto px-4 lg:px-0">
      {/* my card */}
      <div className="flex flex-col md:flex-row max-w-4xl bg-base-200 bg-opacity-40 rounded-xl gap-4 p-6 md:p-0">
        <img className="md:w-1/2 md:rounded-l-xl" src={image} alt="" />
        <div className="text-white md:p-6 space-y-4">
          <h1 className="text-4xl font-bold">{name}</h1>
          <h3 className="text-xl">{long_description}</h3>
          <br />
          <button
            onClick={() => toast.success('Booked Successfully!')}
            className="btn btn-warning w-full capitalize text-lg"
          >
            Book now for only: ${price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
