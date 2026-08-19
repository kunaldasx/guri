import { Building2, Handshake, type LucideIcon } from "lucide-react";
import { JoinButton } from "./JoinBtn";
import { PartnerButton } from "./PartnerBtn";

interface AudienceCard {
	eyebrow: string;
	title: string;
	description: string;
	cta: string;
	href: string;
	icon: LucideIcon;
	variant: "solid" | "ghost";
}

const audienceCards: AudienceCard[] = [
	{
		eyebrow: "For Landlords",
		title: "I manage properties.",
		description:
			"Create your organization, choose a plan, and begin moving units, tenants, leases, and payments into one place.",
		cta: "Join waiting list",
		href: "#waiting-list",
		icon: Building2,
		variant: "solid",
	},
	{
		eyebrow: "For Partners",
		title: "I refer landlords.",
		description:
			"Join the partner program and help landlords in your network modernize their property operations.",
		cta: "Become a Partner",
		href: "#partners",
		icon: Handshake,
		variant: "ghost",
	},
];

const CTA = () => {
	return (
		//  ================================ CTA ================================
		<div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-20 sm:px-10 sm:pt-24 lg:px-16 lg:pb-20 lg:pt-30">
			<h2 className="animate-guri-rise mx-auto max-w-3xl text-center font-serif text-[clamp(28px,5.6vw,60px)] font-normal leading-[1.12] text-white">
				Ready to streamline your property management?
			</h2>
			<p className="animate-guri-rise-delayed mx-auto mt-5 max-w-xl text-center text-white/70 text-[15px] sm:text-[16px] ">
				Move your portfolio into one clean operating system.
			</p>

			<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:gap-6">
				{audienceCards.map((card) => {
					const Icon = card.icon;
					const isSolid = card.variant === "solid";

					return (
						<div
							key={card.title}
							className="group relative flex flex-col rounded-[28px] border border-white/15 bg-white/[0.07] p-6 shadow-stat transition-all duration-300 ease-guri hover:border-white/25 hover:bg-white/10 hover:shadow-stat-hover sm:p-8"
						>
							<div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 ease-guri group-hover:scale-[1.03]">
								<Icon
									className="h-5 w-5 sm:h-6 sm:w-6 text-ink"
									strokeWidth={1.75}
								/>
							</div>

							<p className="mt-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
								{card.eyebrow}
							</p>
							<h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
								{card.title}
							</h3>
							<p className="mt-3 max-w-sm text-sm sm:text-base leading-relaxed text-white/65">
								{card.description}
							</p>

							<div className="mt-6">
								{isSolid ? (
									<JoinButton size="md" />
								) : (
									<PartnerButton size="md" />
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CTA;
