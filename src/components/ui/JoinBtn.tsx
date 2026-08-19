import { cn } from "../../lib/utils";
import { ArrowUpRight } from "lucide-react";

type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-4 py-2 text-[13px]",
	md: "px-5 py-3 text-[14.5px]",
	lg: "px-6 py-3.5 text-[15px]",
};

export function JoinButton({ size = "md" }: { size?: ButtonSize }) {
	return (
		<a
			href="#"
			className={cn(
				"max-sm:w-full group inline-flex justify-center items-center gap-1.5 whitespace-nowrap rounded-full",
				"font-semibold no-underline text-white",

				// Glass surface
				"border border-white/8",
				"bg-[linear-gradient(135deg,rgba(52,52,50,0.90),rgba(23,22,20,0.94))]",
				"backdrop-blur-[14px] backdrop-saturate-120",

				// Depth
				"shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.18)]",

				// Smooth interaction
				"transition-all duration-300 ease-out",
				"hover:-translate-y-0.5",
				"hover:border-white/14",
				"hover:bg-[linear-gradient(135deg,rgba(64,64,61,0.94),rgba(28,27,25,0.96))]",
				"hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.20),0_8px_24px_rgba(0,0,0,0.18)]",

				// Press state
				"active:translate-y-0",
				"active:scale-[0.98]",

				sizeClasses[size],
			)}
		>
			Join waiting list
			<ArrowUpRight
				className={cn(
					"size-5",
					"transition-transform duration-300 ease-out",
					"group-hover:translate-x-0.5",
					"group-hover:-translate-y-0.5",
				)}
			/>
		</a>
	);
}
