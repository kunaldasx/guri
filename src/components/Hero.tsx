import { useEffect, useState } from "react";
import { PartnerButton } from "./ui/PartnerBtn";
import { JoinButton } from "./ui/JoinBtn";
import {
	Airbnb,
	Brembo,
	Honor,
	LinkedIn,
	ServiceNow,
	Slack,
	Shopify,
	Stripe,
} from "../assets/brand-logos";
import { VideoContainer } from "./ui/VideoContainer";
import { Building2, NotebookText, Shield } from "lucide-react";

const LOGOS = [
	{
		name: "Airbnb",
		src: Airbnb,
	},
	{
		name: "Brembo",
		src: Brembo,
	},
	{
		name: "Honor",
		src: Honor,
	},
	{
		name: "LinkedIn",
		src: LinkedIn,
	},
	{
		name: "ServiceNow",
		src: ServiceNow,
	},
	{
		name: "Shopify",
		src: Shopify,
	},
	{
		name: "Slack",
		src: Slack,
	},
	{
		name: "Stripe",
		src: Stripe,
	},
];

const FEATURE_PILLS = [
	{ label: "Unit tracking", icon: Building2 },
	{ label: "Tenant records", icon: NotebookText },
	{ label: "Rent reminders", icon: Shield },
];

const STATS = [
	{ value: "KES 1.4M", label: "Monthly rent" },
	{ value: "3", label: "Open tickets" },
	{ value: "42", label: "Units in preview" },
	{ value: "94%", label: "Average occupancy" },
];

export default function Hero() {
	const [waitlistCount, setWaitlistCount] = useState(0);

	useEffect(() => {
		const target = 36250;
		const duration = 1800;
		const startTime = performance.now();

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			const easeOut = 1 - Math.pow(1 - progress, 3);

			setWaitlistCount(Math.floor(easeOut * target));

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		requestAnimationFrame(animate);
	}, []);

	return (
		<section
			id="top"
			className="relative mx-auto max-w-295 overflow-hidden px-6 pb-16 sm:pb-18 lg:pb-20 pt-28 sm:pt-32 text-center font-sans text-ink"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute left-1/2 -top-35 z-0 h-120 w-225 -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(169,212,195,0.45),rgba(169,212,195,0)_72%)]"
			/>
			<div className="relative z-10 flex flex-col items-center animate-guri-rise">
				<span className="mb-[26px] inline-flex items-center gap-2 rounded-full bg-mint-200 px-4 py-[7px] text-[9px] sm:text-xs font-bold uppercase tracking-[0.06em] text-teal-700">
					<span className="h-1.5 w-1.5 rounded-full bg-[#3fae7a] shadow-[0_0_0_3px_rgba(63,174,122,0.25)]" />
					Built for African property managers
				</span>

				<h1 className="mb-[22px] max-w-4xl text-[clamp(28px,5.6vw,60px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#16130f]">
					Property Management Without
					<br />
					<span className="text-teal-600">Operational Chaos</span>
				</h1>

				<p className="mb-[30px] text-base sm:text-lg text-ink/68">
					Join{" "}
					<span className="bg-[linear-gradient(90deg,#c49a8d_0%,#a99b8f_38%,#4b8d7d_100%)] bg-clip-text font-bold text-transparent">
						{waitlistCount.toLocaleString()}
					</span>{" "}
					others on the waitlist.
				</p>

				<div className="mb-14 w-full flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center">
					<PartnerButton />
					<JoinButton />
				</div>
			</div>

			<div
				role="group"
				aria-label="Trusted by"
				className="group relative z-10 mb-11 overflow-hidden mask-[linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
			>
				<div className="guri-marquee flex w-max items-center gap-12 md:gap-16 group-hover:[animation-play-state:paused]">
					{[...LOGOS, ...LOGOS].map((logo, i) => (
						<div
							key={`${logo.name}-${i}`}
							className="flex h-8 w-auto shrink-0 items-center justify-center md:h-9"
						>
							<img
								src={logo.src}
								alt={logo.name}
								className="h-full w-auto object-contain opacity-40 grayscale"
							/>
						</div>
					))}
				</div>
			</div>

			<VideoContainer />
			<ul className="relative z-10 mb-8 flex w-full flex-nowrap items-center justify-center gap-x-2 overflow-visible p-0 sm:gap-x-7">
				{FEATURE_PILLS.map(({ label, icon: Icon }) => (
					<li
						key={label}
						className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-ink/70 sm:gap-2 sm:text-sm"
					>
						<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal-500/10 bg-teal-500/8 p-1 text-teal-600 sm:h-6 sm:w-6">
							<Icon className="h-full w-full" />
						</div>

						<span className="whitespace-nowrap">{label}</span>
					</li>
				))}
			</ul>

			<div className="relative z-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
				{STATS.map((s) => (
					<div
						key={s.label}
						className="group flex sm:min-h-37.5 flex-col items-start justify-center rounded-[20px] border border-white/6 bg-stat-gradient px-5 py-5 text-center shadow-stat transition-[transform,box-shadow] duration-320 ease-guri hover:shadow-stat-hover hover:opacity-95 sm:px-5.5"
					>
						<span className="block text-xl sm:text-3xl font-bold tracking-tight text-white">
							{s.value}
						</span>

						<span className="mt-2 block text-[10px] sm:text-sm font-medium text-white/55">
							{s.label}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
