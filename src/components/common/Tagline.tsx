// Tagline.jsx
const Tagline = ({ text, className = "" }) => {
  return (
    <div
      className={`paragraph-sm mb-8 max-w-[260px] mx-auto text-center bg-accent rounded-full py-1.5 border-glow ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tagline;
7678yuihi