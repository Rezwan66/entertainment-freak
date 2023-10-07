import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div>
      <div className="hero bg-purple-200 bg-opacity-20 text-white rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/logo.png"
            className="max-w-sm h-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">Contact Us Today</h1>
            <div className="py-4">
              <p className="mb-4">
                We are here to make your events unforgettable. <br />
                Feel free to reach out to us with any inquiries or for event
                planning assistance.
              </p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Event Way, Entertainment City,
                YourState, 12345
              </p>
              <p>
                <strong>Email:</strong> info@entertainmentfreak.com
              </p>
            </div>
            <h4 className="py-6 block font-sans text-sm md:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              <i>
                <FaQuoteLeft></FaQuoteLeft>Creating Memories, Crafting
                Experiences, and Uniting Through Entertainment.
                <FaQuoteRight></FaQuoteRight>
              </i>
            </h4>
            <button className="btn btn-warning">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
