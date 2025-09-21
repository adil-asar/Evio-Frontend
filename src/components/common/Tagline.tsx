type TaglineProps = {
  text: string;
  className?: string;
};

const Tagline = ({ text, className = "" }: TaglineProps) => {
  return (
    <div
      className={`paragraph-sm  w-fit px-6  text-center animate-pulse text-white linear-gradient rounded-full py-1.5  ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tagline;
