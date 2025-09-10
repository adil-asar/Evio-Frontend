import Tagline from "../common/Tagline";

const WhoAreWe = () => {
  return (
    <div>
      <div className="containerize">
        <div className="grid grid-cols-1 md:grid-cols-2 l gap-10">
          <div className="bg-gray-200 ">
            <Tagline text="Trusted Property Partner" className="" />
          </div>
          <div className="bg-gray-200 p-4">Item 2</div>
        </div>
      </div>
    </div>
  );
};
export default WhoAreWe;
