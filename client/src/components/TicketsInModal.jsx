// import { useState } from 'react';

const TicketsInModal = ({ tickets }) => {
  // console.log(tickets);
  return (
    <div>
      {tickets?.map(ticket => (
        <div key={ticket._id}>
          <p className="text-white">
            {ticket.category +
              ', Price: ' +
              '$' +
              ticket.price +
              ', Quantity: ' +
              ticket.quantity}
          </p>
          <div className="flex items-center border-gray-100">
            <button
              //   onClick={() => setInputValue(inputValue - 1)}
              //   onClick={() => dispatch(decrement())}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {' '}
              -{' '}
            </button>
            <input
              className="h-7 w-7 border bg-white text-center text-xs outline-none"
              type="text"
              //   value={t.quantity}
              defaultValue={1}
              min="1"
            />
            {/* <h3>{count}</h3> */}
            <button
              //   onClick={() => setInputValue(inputValue + 1)}
              //   onClick={() => dispatch(increment())}
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {' '}
              +{' '}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TicketsInModal;
