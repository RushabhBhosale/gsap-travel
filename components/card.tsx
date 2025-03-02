import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  url: string;
}

export const Card = ({ title, desc, url }: CardProps) => {
  return (
    <div className="relative border border-border my-6 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[103%] overflow-hidden w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${url})` }}
      />

      <div className="relative h-full bg-white/10 backdrop-blur-md text-shadow p-6 rounded-xl">
        <div className="relative flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold tracking-widest mb-4">
            {title}
          </h3>

          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image src={url} alt="card-image" fill className="object-cover" />
          </div>

          <p className="text-base mt-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};
