type TaglineProps = {
  text: string;
  className?: string;
};

const Tagline = ({ text, className = "" }: TaglineProps) => {
  return (
    <div
      className={`paragraph-sm mb-8 max-w-[260px]  text-center bg-accent rounded-full py-1.5 border-glow ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tagline;
