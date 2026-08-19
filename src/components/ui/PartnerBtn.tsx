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
				"group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full",
				"font-semibold no-underline text-[#101c19]",

				// Glass surface
				"border border-white/60",
				"bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(246,247,245,0.78))]",
				"backdrop-blur-[16px] backdrop-saturate-150",

				// Subtle glass depth
				"shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)]",

				// Smooth interaction
				"transition-all duration-300 ease-out",
				"hover:-translate-y-0.5",
				"hover:border-white/80",
				"hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(242,244,242,0.88))]",
				"hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.04),0_8px_22px_rgba(0,0,0,0.08)]",

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
