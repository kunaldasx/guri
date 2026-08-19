import { FileText, AlertCircle, EyeOff, Clock } from "lucide-react";

interface ProblemCard {
	icon: React.ElementType;
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
		<section className="bg-cream py-20 sm:py-24 lg:py-28">
			<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Left column — copy */}
					<div className="animate-guri-rise">
						<span className="inline-flex items-center gap-2 rounded-full bg-mint-200 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.09em] text-teal-700">
							<span className="h-1.5 w-1.5 rounded-full bg-[#70e261]" />
							The Problem
						</span>

						<h2 className="mt-5 font-sans text-[2rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:mt-6 sm:text-[2.5rem] lg:text-[3.25rem] lg:leading-[1.1]">
							Property Management is still mostly{" "}
							<span className="text-teal-500">
								spreadsheets, paper &amp; Whatsapp.
							</span>
						</h2>

						<p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60 sm:mt-6 sm:text-[16.5px]">
							African property managers juggle scattered records and lose money
							to missed rent and operational chaos. Guri replaces the mess with
							one clean dashboard.
						</p>
					</div>

					{/* Right column — problem cards */}
					<div className="animate-guri-rise-delayed mt-2 grid grid-cols-1 gap-4 sm:mt-0 sm:grid-cols-2">
						{problemCards.map(({ icon: Icon, title, description }, i) => (
							<div
								key={title}
								className="group rounded-2xl bg-mist p-6 transition-[transform,box-shadow,background-color] duration-300 ease-guri hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(16,24,38,0.18)]"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 transition-transform duration-300 ease-guri group-hover:scale-105 group-hover:bg-teal-500">
									<Icon className="h-5 w-5 text-mint-200" strokeWidth={2} />
								</div>

								<h3 className="mt-4 text-[17px] font-semibold text-ink">
									{title}
								</h3>

								<p className="mt-2 text-[14.5px] leading-relaxed text-ink/55">
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
