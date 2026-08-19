import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-4 py-2 text-[13px]",
	md: "px-5 py-3 text-[14.5px]",
	lg: "px-6 py-3.5 text-[15px]",
};

export function PartnerButton({ size = "md" }: { size?: ButtonSize }) {
	return (
		<a
			href="#"
			className={cn(
				"max-sm:w-full group inline-flex justify-center items-center gap-1.5 whitespace-nowrap rounded-full",
				"font-semibold no-underline text-[#101c19]",

				// Glass surface
				"border border-black/8",
				"bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,242,240,0.88))]",
				"backdrop-blur-lg backdrop-saturate-150",

				// Glass depth
				"shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.08),0_12px_30px_rgba(0,0,0,0.06)]",

				// Hover
				"hover:-translate-y-0.5",
				"hover:border-white",
				"hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.99),rgba(235,239,237,0.94))]",
				"hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.07),0_8px_20px_rgba(0,0,0,0.10),0_16px_35px_rgba(0,0,0,0.07)]",

				// Press
				"active:translate-y-0 active:scale-[0.98]",

				sizeClasses[size],
			)}
		>
			Become a Partner
			<ArrowRight
				className={cn(
					"size-4",
					"transition-transform duration-300 ease-out",
					"group-hover:translate-x-0.5",
				)}
			/>
		</a>
	);
}
