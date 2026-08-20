import Phone from "../assets/images/phone.png";

/**
 * PropertyDashboardHero
 * -----------------------------------------------------------------------
 * A hero / preview section for a property-management product.
 * Left: eyebrow, headline, description, nav pills, feature checklist, store badges.
 * Center: floating phone mockup image with a soft glow.
 * Fully responsive — stacks to a single column on small screens with the
 * phone mockup shown first, mirroring the reference designs.
 * -----------------------------------------------------------------------
 */

type NavItem = {
	label: string;
	icon: React.ReactNode;
};

type FeatureItem = {
	label: string;
};

/* --------------------------------- Icons -------------------------------- */
/* Small, inline icon set (stroke-based, currentColor) so no external icon
   package is required. Kept intentionally minimal / geometric to match the
   dashboard's own iconography. */

const IconDashboard = () => (
	<svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
		<rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
		<rect
			x="14"
			y="3"
			width="7"
			height="7"
			rx="1.5"
			fill="currentColor"
			opacity="0.55"
		/>
		<rect
			x="3"
			y="14"
			width="7"
			height="7"
			rx="1.5"
			fill="currentColor"
			opacity="0.55"
		/>
		<rect
			x="14"
			y="14"
			width="7"
			height="7"
			rx="1.5"
			fill="currentColor"
			opacity="0.3"
		/>
	</svg>
);

const IconBuilding = () => (
	<svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
		<path
			d="M4 21V5.5C4 4.67 4.67 4 5.5 4h7c.83 0 1.5.67 1.5 1.5V21"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M14 10.5h4.5c.83 0 1.5.67 1.5 1.5v9"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M2.5 21h19"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
		<path
			d="M7 8h1.5M7 11.5h1.5M7 15h1.5"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
	</svg>
);

const IconUsers = () => (
	<svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
		<circle cx="8.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
		<path
			d="M2.75 19c.6-3.2 3.1-5 5.75-5s5.15 1.8 5.75 5"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
		<path
			d="M15.5 5.3c1.4.3 2.5 1.5 2.5 3s-1.1 2.7-2.5 3"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
		<path
			d="M15 14.2c2.15.35 3.9 1.9 4.35 4.8"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
	</svg>
);

const IconDocument = () => (
	<svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
		<path
			d="M6.5 3.5h7.6L18 8v11.5c0 .55-.45 1-1 1H6.5c-.55 0-1-.45-1-1v-15c0-.55.45-1 1-1Z"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinejoin="round"
		/>
		<path
			d="M14 3.5V8h4.2"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinejoin="round"
		/>
		<path
			d="M8 12.5h7M8 15.5h7M8 18.2h4.5"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
	</svg>
);

const IconWallet = () => (
	<svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
		<path
			d="M3 7.2c0-.94.76-1.7 1.7-1.7h13.6c.94 0 1.7.76 1.7 1.7v9.6c0 .94-.76 1.7-1.7 1.7H4.7c-.94 0-1.7-.76-1.7-1.7V7.2Z"
			stroke="currentColor"
			strokeWidth="1.7"
			strokeLinejoin="round"
		/>
		<path d="M3.4 9.5h17.2" stroke="currentColor" strokeWidth="1.7" />
		<circle cx="16.4" cy="13.6" r="1.35" fill="currentColor" />
	</svg>
);

const IconCheck = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		className="h-[18px] w-[18px] shrink-0"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
		<path
			d="M8 12.3l2.6 2.6 5.4-5.6"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const IconGooglePlay = () => (
	<svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
		{/* Left edge: blue-to-green gradient body of the triangle */}
		<path
			d="M4.1 2.65c-.4.32-.63.83-.63 1.5v15.7c0 .67.23 1.18.63 1.5L13 12 4.1 2.65Z"
			fill="#00D9FF"
		/>
		{/* Bottom-right wedge (red) */}
		<path
			d="M13 12 4.1 21.35c.28.22.63.35 1.02.35.32 0 .66-.09 1.02-.3l11.2-6.36L13 12Z"
			fill="#FF3A44"
		/>
		{/* Top-right wedge (yellow) */}
		<path
			d="M13 12l4.34-2.69 4.7 2.68c.64.36.64 1.2 0 1.56l-4.7 2.68L13 12Z"
			fill="#FFCE00"
		/>
		{/* Top edge (green) */}
		<path
			d="M4.1 2.65 17.34 9.31l-4.34 2.7-9.6-9.66c.19-.14.42-.26.7-.36v.06Z"
			fill="#00E676"
		/>
	</svg>
);

const IconApple = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
		<path
			fill="currentColor"
			d="M16.36 1.43c.1 1-.28 1.98-.87 2.7-.6.73-1.6 1.3-2.58 1.22-.11-.98.32-1.99.9-2.68.62-.75 1.68-1.3 2.55-1.24Zm2.6 17.1c-.53 1.2-.78 1.73-1.46 2.79-.95 1.47-2.29 3.3-3.95 3.31-1.47.02-1.85-.96-3.84-.95-2 .01-2.41.97-3.88.95-1.66-.02-2.93-1.67-3.88-3.13-2.66-4.07-2.94-8.85-1.3-11.39C1.79 8.2 3.42 7.16 5.14 7.13c1.6-.03 2.61 1.08 3.94 1.08 1.32 0 2.09-1.08 3.94-1.05 1.13.02 3 .43 4.24 2.29-.11.07-2.53 1.48-2.5 4.41.03 3.51 3.1 4.68 3.2 4.67Z"
		/>
	</svg>
);

/* --------------------------------- Data --------------------------------- */

const NAV_ITEMS: NavItem[] = [
	{ label: "Dashboard", icon: <IconDashboard /> },
	{ label: "Properties", icon: <IconBuilding /> },
	{ label: "Tenants", icon: <IconUsers /> },
	{ label: "Leases", icon: <IconDocument /> },
	{ label: "Finance", icon: <IconWallet /> },
];

const FEATURES: FeatureItem[] = [
	{ label: "Unit tracking" },
	{ label: "Tenant records" },
	{ label: "Rent reminders" },
	{ label: "Finance workflows" },
	{ label: "Occupancy overview" },
	{ label: "Reports" },
];

/* ------------------------------- Component ------------------------------- */

const PropertyDashboardHero: React.FC = () => {
	return (
		<section
			className="relative isolate overflow-hidden bg-cream px-6 py-16 sm:px-10 sm:py-18 lg:px-16 lg:py-20 xl:py-24"
			aria-label="Property dashboard preview"
		>
			{/* Ambient background gradient — near-flat cream base.
			    Mobile: a stronger mint wash pools across the full bottom edge.
			    Desktop (lg+): the wash relaxes into a faint corner pool only. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					backgroundImage:
						"radial-gradient(70% 38% at 50% 100%, rgba(45,132,116,0.20) 0%, rgba(45,132,116,0) 100%), linear-gradient(165deg, #fbfaf9 0%, #f2f1ee 100%)",
				}}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
				style={{
					backgroundImage:
						"radial-gradient(65% 42% at 50% 100%, rgba(45,132,116,0.16) 0%, rgba(45,132,116,0) 100%), linear-gradient(165deg, #fbfaf9 0%, #f2f1ee 100%)",
				}}
			/>

			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 xl:gap-14">
				{/* ---------------------------- Left column ---------------------------- */}
				<div className="animate-guri-rise order-1 max-w-xl text-left">
					<span className="mb-6 inline-flex items-center gap-2 rounded-full bg-mint-200/70 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 ring-1 ring-inset ring-teal-500/15">
						<span className="h-1.5 w-1.5 rounded-full bg-[#1dd1a1]" />
						Property dashboard preview
					</span>

					<h1 className="font-sans max-w-4xl text-[clamp(32px,5.6vw,60px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#16130f]">
						Everything your <span className="text-teal-600">property team</span>{" "}
						needs, in one place.
					</h1>

					<p className="mt-5 max-w-md text-base sm:text-lg leading-relaxed text-ink/60">
						Track units, tenants, properties, leases, finance, and occupancy
						from one simple dashboard.
					</p>
				</div>

				{/* --------------------------- Center: phone --------------------------- */}
				<div className="animate-guri-rise-delayed order-2 flex justify-center">
					<div className="group relative w-52 sm:w-57 lg:w-62">
						{/* Glow behind the phone — tinted to match the dashboard's own accent green */}
						<div
							aria-hidden="true"
							className="absolute inset-x-6 bottom-6 top-10 -z-10 rounded-[3rem] bg-[#1dd1a1]/32 blur-3xl transition-opacity duration-500 ease-guri group-hover:opacity-90"
						/>
						<div
							aria-hidden="true"
							className="absolute -inset-6 -z-10 rounded-[3rem]"
							style={{
								backgroundImage:
									"radial-gradient(62% 62% at 50% 40%, rgba(29,209,161,0.24), rgba(29,209,161,0) 72%)",
							}}
						/>
						<img
							src={Phone}
							alt="Property dashboard preview shown on a smartphone: quick-action icons, an occupancy trend chart, and a 65% completion ring."
							className="w-full select-none drop-shadow-[0_30px_70px_rgba(16,24,38,0.28)] transition-transform duration-700 ease-guri will-change-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
							draggable={false}
						/>
					</div>
				</div>

				{/* ---------------------------- Right column ---------------------------- */}
				<div className="animate-guri-rise-delayed order-3 flex max-w-md flex-col items-start gap-7">
					{/* Nav pills */}
					<nav
						aria-label="Dashboard sections"
						className="flex flex-wrap justify-start gap-2.5"
					>
						{NAV_ITEMS.map((item, i) => (
							<span
								key={item.label}
								className={[
									"inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-[260ms] ease-guri",
									i === 0
										? "bg-[#171512] text-white shadow-[0_8px_18px_rgba(16,24,38,0.22)] hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(16,24,38,0.28)]"
										: "bg-mint-200/50 text-ink/70 hover:-translate-y-0.5 hover:bg-mint-200/75 hover:text-ink",
								].join(" ")}
							>
								{item.icon}
								{item.label}
							</span>
						))}
					</nav>

					{/* Feature checklist */}
					<ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm text-ink/75 sm:gap-x-10">
						{FEATURES.map((feature) => (
							<li
								key={feature.label}
								className="group flex items-center gap-2 transition-colors duration-200 ease-guri hover:text-ink"
							>
								<span className="text-[#1dd1a1] transition-transform duration-200 ease-guri group-hover:scale-110">
									<IconCheck />
								</span>
								{feature.label}
							</li>
						))}
					</ul>

					{/* Store badges */}
					<div className="mt-1 flex flex-wrap justify-start gap-3">
						<a
							href="#"
							aria-label="Get it on Google Play"
							className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl bg-[#171512] px-2 sm:px-4 py-2.5 text-white shadow-play transition-all duration-260 ease-guri hover:-translate-y-0.5 hover:bg-[#050403] hover:shadow-play-hover active:translate-y-0"
						>
							<span className="rounded bg-white/95 p-0.5">
								<IconGooglePlay />
							</span>
							<span className="flex flex-col leading-tight">
								<span className="text-[8px] sm:text-[10px] font-medium tracking-wide text-white/70 uppercase">
									GET IT ON
								</span>
								<span className="text-sm sm:text-[15px] font-semibold">
									Google Play
								</span>
							</span>
						</a>

						<a
							href="#"
							aria-label="Download on the App Store"
							className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl bg-[#171512] px-2 sm:px-4 py-2.5 text-white shadow-play transition-all duration-260 ease-guri hover:-translate-y-0.5 hover:bg-[#050403] hover:shadow-play-hover active:translate-y-0"
						>
							<IconApple />
							<span className="flex flex-col leading-tight">
								<span className="text-[8px] sm:text-[10px] font-medium tracking-wide text-white/70 uppercase">
									Download on the
								</span>
								<span className="text-sm sm:text-[15px] font-semibold">
									App Store
								</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PropertyDashboardHero;
