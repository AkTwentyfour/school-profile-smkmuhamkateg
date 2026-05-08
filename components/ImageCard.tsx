import { cn } from "@/lib/utils";

export type VariantImageCard = "default" | "landscape" | "portrait";

interface ImageCardProps {
  variant: VariantImageCard;
  index: number;
  image: string;
  title?: string;
  tag?: string[];
  className?: boolean | string
}

const VarianStyles = {
    default: "col-span-1",
    landscape: "col-span-2",
    portrait: "col-span-1 row-span-2 h-full!"
}

export default function ImageCard({
  variant = "default",
  index,
  image,
  title,
  tag = [],
  className
}: ImageCardProps) {
  return (
    <div
      key={index}
      className={cn(
        "relative rounded-2xl overflow-hidden h-40 sm:h-60 border-4 border-white shadow-lg group",
        VarianStyles[variant], className
      )}
    >
      <img
        src={image}
        alt={title + "Muhamkateg"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="
                      flex flex-col justify-end p-5 absolute inset-0 text-white
                      bg-linear-to-t from-black/50 to-transparent hover:bg-black/20 transition-all
                    "
      >
        <h2 className="text-sm lg:text-md font-bold">{title}</h2>
        <div className="flex flex-wrap justify-start items-center gap-0.75 mt-2">
          {tag.map((tagItem, tagIndex) => (
            <span
              className={cn("border border-white rounded-xl px-3 py-0.5 text-[8px] filter hover:backdrop-blur-3xl hover:cursor-pointer transition-all duration-300", tagIndex !== 1 && "hidden lg:block")}
              key={tagIndex}
            >
              {tagItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
