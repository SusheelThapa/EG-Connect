const Body = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {/*  Row 1  */}
        <div className="border border-solid shadow-xl rounded-lg p-8 mx-10 my-3 flex flex-col">
          <p className="text-xl font-serif  mb-4">Hello world To position the  button at the bottom right corner within your div, you can use the flex utility classes along with justify-end and items-end. Heres an updated version of your code:</p>
          <div className="flex-grow"></div>
          <div className="flex justify-end items-end">
            <button className="rounded-lg bg-green-400 border border-solid px-2 py-1">
              SIGN IT
            </button>
          </div>
        </div>

        <div className="border border-solid shadow-xl rounded-lg p-8 mx-10 my-3 flex flex-col">
          <p className="text-xl font-serif  mb-4">Hello world</p>
          <div className="flex-grow"></div>
          <div className="flex justify-end items-end">
            <button className="rounded-lg bg-green-400 border border-solid px-2 py-1">
              SIGN IT
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="border border-solid shadow-xl rounded-lg p-8 mx-10 my-3 flex flex-col">
          <p className="text-xl font-serif  mb-4">Hello world</p>
          <div className="flex-grow"></div>
          <div className="flex justify-end items-end">
            <button className="rounded-lg bg-green-400 border border-solid px-2 py-1">
              SIGN IT
            </button>
          </div>
        </div>

        <div className="border border-solid shadow-xl rounded-lg p-8 mx-10 my-3 flex flex-col">
          <p className="text-xl font-serif  mb-4">Hello world</p>
          <div className="flex-grow"></div>
          <div className="flex justify-end items-end">
            <button className="rounded-lg bg-green-400 border border-solid px-2 py-1">
              SIGN IT
            </button>
          </div>
        </div>

        {/* <!-- Add more rows as needed --> */}
      </div>
    </>
  );
};

export default Body;
