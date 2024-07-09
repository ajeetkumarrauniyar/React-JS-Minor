const AddTask = () => {
  return (
    <form className="mb-6">
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow px-4 py-2 text-gray-700 bg-gray-200 rounded-l focus:outline-none focus:bg-white"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r transition duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
