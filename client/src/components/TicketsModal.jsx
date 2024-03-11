import { Dialog, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import SpinnerSmall from './SpinnerSmall';

export default function TicketsModal({ event }) {
  let [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const axiosSecure = useAxiosSecure();

  const { _id, categoryId, name, image, date, venue, ticketPrice } =
    event || {};

  const {
    data: tickets = {},
    // refetch,
    isPending,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => {
      const res = await axiosSecure(`/tickets/${_id}`);
      return res.data;
    },
  });

  if (isPending || isFetching || isLoading) return <SpinnerSmall />;

  // console.log(tickets);

  const { eventId, tickets: ticketArray } = tickets || {};

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="btn btn-warning w-full capitalize font-bold"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg glass p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-white"
                  >
                    Buy Tickets
                  </Dialog.Title>
                  <div className="mt-2">
                    <img
                      className="max-h-40 w-full object-cover rounded-lg"
                      src={image}
                      alt=""
                    />
                    <h3 className="mt-2 text-lg font-bold text-center text-white">
                      {name}
                    </h3>
                    <div className="my-2 flex justify-between items-center">
                      <p className="text-sm text-white">Date: {date}</p>
                      <p className="text-sm text-white">Venue: {venue}</p>
                    </div>
                    <p className="text-sm text-white">
                      Starts from: ${ticketPrice}
                    </p>
                    <p className="text-sm text-white">{categoryId}</p>
                    <p className="text-sm text-white">{eventId}</p>
                    <div className="text-sm  flex flex-col gap-4">
                      {ticketArray?.map(t => (
                        <div key={t.ticketType}>
                          <p className="text-white">
                            {t.ticketType + ' ' + t.quantity + ' $' + t.price}
                          </p>
                          <div className="flex items-center border-gray-100">
                            <button
                              onClick={() => setQuantity(quantity - 1)}
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {' '}
                              -{' '}
                            </button>
                            <input
                              className="h-7 w-7 border bg-white text-center text-xs outline-none"
                              type="text"
                              value={quantity}
                              min="1"
                            />
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {' '}
                              +{' '}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-warning w-full capitalize font-bold"
                      onClick={closeModal}
                    >
                      Buy Ticket Now!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
