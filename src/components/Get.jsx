const Get = () => {
  return (
    <div className="getmaindiv">
      <h1 className="text-[55px] text-white font-bold text-center pt-[150px]">
        Get National Broadband
      </h1>
      <h3 className="text-center text-[28px] text-white mt-[50px] px-8 mb-4 font-semibold">
        Check your address to see if the NBB network is available
      </h3>
      <div className="flex flex-row gap-[25px] justify-center items-center flex-wrap">
        <select
          name="city"
          id="city"
          className="w-[300px] sm:w-[25vw] h-[40px]"
        >
          <option value="">Select City</option>
        </select>
        <select
          name="city"
          id="city"
          className="w-[300px] sm:w-[25vw] h-[40px]"
        >
          <option value="">Select Major area</option>
        </select>
        <select
          name="city"
          id="city"
          className="w-[300px] sm:w-[25vw] h-[40px]"
        >
          <option value="">Select Minor Area</option>
        </select>
      </div>
      <div className="flex flex-row justify-center items-center mt-[20px]">
        <button className="w-[217px] h-[50px] bg-[#81d742] rounded-full font-bold mb-[150px]">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Get;
