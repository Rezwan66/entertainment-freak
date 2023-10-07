import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseFloat(id);
  //   console.log(services, idInt);
  const selected = services.find(service => service.id === idInt);
  console.log(selected);
  const { image, long_description, name, price } = selected;
  return (
    <div className="max-w-4xl mt-20 mb-28 mx-auto px-4 lg:px-0">
      {/* <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img
                src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                alt="profilepic"
              />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">braydoncoyer</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
        </div>
        <img className="w-full bg-cover" src={image} />
        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">braydoncoyer</span> Lord of the
              Rings is my favorite film-series. One day I'll make my way to New
              Zealand to visit the Hobbiton set!
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 14 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">razzle_dazzle</span> Dude! How
              cool! I went to New Zealand last summer and had a blast taking the
              tour! So much to see! Make sure you bring a good camera when you
              go!
            </div>
          </div>
        </div>
      </div> */}

      {/* hero */}
      {/* <div className="hero min-h-screen bg-base-200 bg-opacity-40 rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <img className="h-60" src={image} alt="" />
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      {/* my card */}
      <div className="flex flex-col md:flex-row max-w-4xl bg-base-200 bg-opacity-40 rounded-xl gap-4 p-6 md:p-0">
        <img className="md:w-1/2 md:rounded-l-xl" src={image} alt="" />
        <div className="text-white md:p-6 space-y-4">
          <h1 className="text-4xl font-bold">{name}</h1>
          <h3 className="text-xl">{long_description}</h3>
          <br />
          <a className="btn btn-warning w-full capitalize text-lg">
            Book now for only: ${price}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
