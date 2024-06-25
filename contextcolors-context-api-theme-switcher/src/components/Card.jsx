const Card = () => {
  return (
    <>
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Product Image"
          className="w-full rounded-lg"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Product Name</h2>
        <p className="text-gray-600 dark:text-gray-400">$99.99</p>
      </div>
      <button className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
        Add to Cart
      </button>
    </>
  );
};

export default Card;
