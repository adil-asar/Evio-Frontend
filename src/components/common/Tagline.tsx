type TaglineProps = {
  text: string;
  className?: string;
};

const Tagline = ({ text, className = '' }: TaglineProps) => {
  return (
    <div
      className={`paragraph-sm  max-w-[260px]  text-center animate-pulse text-white linear-gradient rounded-full py-1  ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tagline;
