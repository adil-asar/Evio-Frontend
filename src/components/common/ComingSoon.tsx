import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="containerize py-20">
      <div className="text-center ">
        {/* Heading */}
        <h1 className="heading-lg text-gradient"> Coming Soon</h1>

        {/* Subtitle */}
        <p className="paragraph-lg mt-5 mb-10">
          We’re working hard to bring you something amazing. Stay tuned — it won’t take long!
        </p>

        {/* Button */}
        <Link to="/" className="btn mt-5">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
