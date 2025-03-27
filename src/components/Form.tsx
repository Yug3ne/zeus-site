const Form = () => {
  return (
    <form className="w-full space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="flex-1 bg-transparent border border-gray-700 p-3 rounded-sm text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="flex-1 bg-transparent border border-gray-700 p-3 rounded-sm text-white"
          required
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        className="w-full bg-transparent border border-gray-700 p-3 rounded-sm text-white min-h-[140px]"
        required
      />

      <button
        type="submit"
        className="w-full border border-gray-700 py-3 px-6 text-white font-medium hover:bg-gray-800 transition-colors"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
