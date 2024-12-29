import Image from "next/image";

export default function Loading() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      <Image
        src={"/public/loading.svg"}
        alt="Loading SVG"
        width={200}
        height={200}
      />
    </div>
  );
}
