import { cn } from "@/lib/utils";

export type StepVariant = "first" | "second" | "third" | "fourth";

interface StepCountProps {
  variant: StepVariant;
  count: number;
  title: string;
}

const variantStyles = {
  first: "mask-conic-from-25% mask-conic-to-25%",
  second: "mask-conic-from-50% mask-conic-to-50%",
  third: "mask-conic-from-75% mask-conic-to-75%",
  fourth: "mask-conic-from-100% mask-conic-to-100%",
};

export default function StepCount({
  variant = "first",
  count,
  title,
}: StepCountProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 grid-rows-1 place-items-center">
        <div className="row-start-1 col-start-1 w-14 h-14 lg:w-20 lg:h-20 rounded-full border-4 border-slate-200"></div>
        <div
          className={cn(
            "row-start-1 col-start-1 w-14 h-14 lg:w-20 lg:h-20 rounded-full border-4 border-brand-primary",
            variantStyles[variant],
          )}
        ></div>

        <div className="row-start-1 col-start-1 text-xl font-bold text-brand-primary">
          <span className="text-xl lg:text-3xl font-bold">{count}</span>
        </div>
      </div>

      <span className="text-xs lg:text-sm font-bold mt-5">{title}</span>
    </div>
  );
}
