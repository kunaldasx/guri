import {
	AlertCircle,
	Clock,
	EyeOff,
	FileText,
	type LucideIcon,
} from "lucide-react";

interface ProblemCard {
	icon: LucideIcon;
	title: string;
	description: string;
}

const problemCards: ProblemCard[] = [
	{
		icon: FileText,
		title: "Scattered records",
		description:
			"Tenant info, lease dates, and payments live across Excel, paper files, and WhatsApp groups.",
	},
	{
		icon: AlertCircle,
		title: "Missed rent",
		description:
			"Manual follow-ups slip through the cracks and cash flow gets harder to predict at month end.",
	},
	{
		icon: EyeOff,
		title: "No clear visibility",
		description:
			"No single view of occupancy, arrears, or open maintenance across every unit you manage.",
	},
	{
		icon: Clock,
		title: "Hours lost to admin",
		description:
			"Time you should spend growing the portfolio gets eaten by reconciling numbers and chasing tenants.",
	},
];

const ProblemSection: React.FC = () => {
	return (
		<section className="relative bg-cream py-16 sm:py-20 lg:py-[72px]">
			<div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12 xl:gap-[72px]">
					{/* Left column */}
					<div className="animate-guri-rise">
						<span className="inline-flex items-center gap-2 rounded-full bg-mint-200 px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.09em] text-teal-700 sm:text-xs">
							<span className="h-1.5 w-1.5 rounded-full bg-[#70e261]" />
							The Problem
						</span>

						<h2 className="my-6 max-w-[600px] text-[clamp(28px,5.6vw,52px)] font-medium leading-[1.08] tracking-[-0.025em] text-[#16130f]">
							Property Management is still mostly{" "}
							<span className="block text-teal-500">
								spreadsheets, paper &amp; Whatsapp.
							</span>
						</h2>

						<p className="max-w-[600px] text-[15px] leading-[1.55] text-ink/68 sm:text-[16px]">
							African property managers juggle scattered records and lose money
							to missed rent and operational chaos. Guri replaces the mess with
							one clean dashboard.
						</p>
					</div>

					{/* Right column */}
					<div className="animate-guri-rise-delayed grid grid-cols-1 gap-4 sm:grid-cols-2">
						{problemCards.map(({ icon: Icon, title, description }, i) => (
							<div
								key={title}
								className="
										group
										flex
										min-h-52
										flex-col
										rounded-[20px]
										bg-[#e9e8e6]
										p-6
										transition-[transform,box-shadow,background-color]
										duration-300
										ease-guri
										hover:bg-[#efeeec]
										hover:shadow-[0_18px_40px_-24px_rgba(16,24,38,0.25)]
									"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								{/* Icon */}
								<div
									className="
											flex
											h-11
											w-11
											shrink-0
											items-center
											justify-center
											rounded-[14px]
											bg-stat-gradient
											transition-all
											duration-300
											ease-guri
											group-hover:opacity-80
										"
								>
									<Icon className="h-6 w-6 text-mint-200" strokeWidth={1.8} />
								</div>

								<h3 className="mt-4 text-base font-semibold leading-tight tracking-[-0.01em] text-ink">
									{title}
								</h3>

								<p className="mt-2 text-sm leading-normal text-ink/55">
									{description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProblemSection;
