import { ClipboardList, Users, ShieldCheck } from "lucide-react";

interface Feature {
	icon: React.ElementType;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: ClipboardList,
		title: "Multi-Property Management",
		description:
			"Manage units, tenants, leases, and rent from one property workspace.",
	},
	{
		icon: Users,
		title: "Tenant Records",
		description:
			"Track every tenant record and interaction without spreadsheet drift.",
	},
	{
		icon: ShieldCheck,
		title: "Role-Based Access",
		description: "Give teams role-based access with clean controls from HQ.",
	},
];

const FeaturesSection: React.FC = () => {
	return (
		<section className="py-20 sm:py-24 lg:py-28">
			<div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
				<span className="inline-flex items-center gap-2 rounded-full bg-mint-200 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.09em] text-teal-700">
					<span className="h-1.5 w-1.5 rounded-full bg-[#70e261]" />
					Features
				</span>

				<h2 className="mt-6 font-sans text-[2rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink sm:text-[2.75rem] lg:text-[3rem] lg:leading-[1.1]">
					Everything your property team needs
				</h2>

				<p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink/60 sm:mt-5 sm:text-[16.5px]">
					Comprehensive tools built for modern property management.
				</p>

				<div className="animate-guri-rise-delayed mt-10 grid grid-cols-1 gap-4 text-left sm:mt-12 sm:grid-cols-3">
					{features.map(({ icon: Icon, title, description }, i) => (
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
		</section>
	);
};

export default FeaturesSection;
