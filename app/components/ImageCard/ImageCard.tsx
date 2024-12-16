import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface ImageCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  linkText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, altText, title, linkText }) => {
  return (
    <div className="relative overflow-hidden rounded-[20px]">
      {/* Image with rounded corners and overflow hidden */}
      <Image
        src={imageSrc}
        alt={altText}
        width={518}
        height={518}
        className="w-full h-full object-cover rounded-[22px]"
      />
      <div className="absolute bottom-0 left-0 flex justify-between items-center px-4 bg-white w-full h-[53px] border shadow-chosenBox rounded-br-[20px] rounded-bl-[20px] z-10">
        <p className="font-bold">{title}</p>
        <div className="flex justify-center items-center gap-2">
          <p className="font-medium text-sm">{linkText}</p>
          <span className="size-5 flex justify-center items-center rounded-full border border-black">
            <MdKeyboardArrowLeft />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
