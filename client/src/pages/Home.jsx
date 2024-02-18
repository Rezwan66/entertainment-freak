// import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import PrevEvents from '../components/PrevEvents';
import Artists from '../components/Artists';
import ContactUs from '../components/ContactUs';
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import Categories from '../components/Categories';

const Home = () => {
  // const services = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(services);
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        {/* Our Services section */}
        <Element name="our-services">
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Event Categories
          </h2>
          <Categories />
        </Element>
        {/* our previous shows */}
        <div>
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Previous Events
          </h2>
          <PrevEvents></PrevEvents>
        </div>
        {/* artists we worked with */}
        <div>
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Artists We Worked With
          </h2>
          <Artists></Artists>
        </div>
        {/* Contact us today */}
        <div className="my-24">
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
};

export default Home;
