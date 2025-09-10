const About = () => {
  return (
    <div>
      <div className="relative px-4 sm:px-5 py-4 md:py-7 xl:py-12 2xl:py-16 lg:w-1/2 w-full max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] h-fit font-mowaq bg-[rgba(51,255,0,0.01)] backdrop-blur-md shadow-xl rounded-xl border-glow text-center">
        <h1 className="text-white pt-3 sm:pt-5 font-bold text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Beyond Human Connection,
        </h1>

        <h1 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl mt-2">
          Empowering Every Individual
        </h1>

        <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl mt-3 sm:mt-4">
          Transform Your Experience
        </h1>
        <h3 className="text-white mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-sans">
          ANAMCARA AI transforms everyday interactions into personalized experiences that inspire
          and empower.
        </h3>

        {/* Input Box */}
        <div className="flex flex-col sm:flex-row justify-center items-center font-bold mt-4 sm:mt-6 gap-2 sm:gap-2">
          <input
            className="rounded-md py-2 px-3 w-full sm:w-2/3 md:w-1/2 text-white/70 bg-black/20 text-sm sm:text-base"
            type="text"
            placeholder="Enter email"
          />

          <button
            type="button"
            className="py-2 px-4 rounded-lg cursor-pointer text-black bg-[#ADFF00] w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
          >
            Subscribe Now!
          </button>
        </div>

        {/* Icons */}
      </div>
    </div>
  );
};

export default About;
