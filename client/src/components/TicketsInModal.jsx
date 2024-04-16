// import { useState } from 'react';

const TicketsInModal = ({ tickets, ticketsSelected, setTicketsSelected }) => {
  // console.log(tickets);

  const handleIncrement = cat => {
    console.log(cat);
    if (cat === 'General Admission') {
      setTicketsSelected([
        ...{ _id: '', category: 'General Admission', quantity: 2 },
      ]);
    }
  };
  const handleDecrement = cat => {
    console.log(cat);
  };

  return (
    <div>
      {ticketsSelected?.map(q => (
        <div key={q.category}>
          <p className="text-white">
            {q.category +
              ', Price: ' +
              '$' +
              // ticket.price +
              ', Quantity: ' +
              q.quantity}
          </p>
          <div className="flex items-center border-gray-100">
            <button
              //   onClick={() => setInputValue(inputValue - 1)}
              //   onClick={() => dispatch(decrement())}
              onClick={() => handleDecrement(q.category)}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {' '}
              -{' '}
            </button>
            <input
              className="h-7 w-7 border bg-white text-center text-xs outline-none"
              type="text"
              // value={q.quantity}
              defaultValue={q.quantity}
              min="1"
            />
            {/* <h3>{count}</h3> */}
            <button
              //   onClick={() => setInputValue(inputValue + 1)}
              //   onClick={() => dispatch(increment())}
              onClick={() => handleIncrement(q.category)}
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
