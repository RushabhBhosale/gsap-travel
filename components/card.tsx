interface CardProps {
  title: string;
  desc: string;
  url: string;
}

export const Card = ({ title, desc, url }: CardProps) => {
  return (
    <div className="relative border border-border my-6 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[103%] overflow-hidden w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${url})` }}
      />

      {/* Glass Overlay */}
      <div className="relative h-full bg-white/10 backdrop-blur-sm p-6 rounded-xl">
        <h3 className="text-xl font-semibold tracking-widest mb-2">{title}</h3>
        <p className="text-base">{desc}</p>
      </div>
    </div>
  );
};
