import {
	Building2,
	Handshake,
	ArrowUpRight,
	ArrowRight,
	MapPin,
	Phone,
	Mail,
} from "lucide-react";
import FooterBg from "../assets/images/footerbg.png";

/**
 * Guri logo mark — a simple stylised "gate/arch" glyph inside a
 * chevron-ringed circle, drawn in pure SVG so no external asset is needed.
 */
function GuriMark({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden="true"
		>
			<circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="1" />
			{Array.from({ length: 16 }).map((_, i) => {
				const angle = (i / 16) * Math.PI * 2;
				const r1 = 26;
				const r2 = 30;
				return (
					<line
						key={i}
						x1={32 + r1 * Math.cos(angle)}
						y1={32 + r1 * Math.sin(angle)}
						x2={32 + r2 * Math.cos(angle)}
						y2={32 + r2 * Math.sin(angle)}
						stroke="currentColor"
						strokeWidth="1"
					/>
				);
			})}
			<path
				d="M20 44V30c0-6.6 5.4-12 12-12s12 5.4 12 12v14"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
			<path
				d="M25 44V32a7 7 0 0 1 14 0v12"
				stroke="currentColor"
				strokeWidth="1.6"
			/>
			<line
				x1="16"
				y1="44"
				x2="48"
				y2="44"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
		</svg>
	);
}

const socialLinks = [
	{
		name: "Facebook",
		href: "#",
		color: "#1877F2",
		path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.5-3.9 3.8-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z",
	},
	{
		name: "Twitter",
		href: "#",
		color: "#1DA1F2",
		path: "M22 5.9c-.74.33-1.53.55-2.36.65a4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-6.98 3.74A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.4a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.3 8.3 0 0 0 22 5.9Z",
	},
	{
		name: "Instagram",
		href: "#",
		color: "#E1306C",
		path: "M12 2.16c2.67 0 2.99.01 4.04.06 1.05.05 1.77.21 2.4.46.65.25 1.2.6 1.75 1.15.5.5.86 1.1 1.15 1.75.25.63.4 1.35.46 2.4.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.21 1.77-.46 2.4a4.7 4.7 0 0 1-1.15 1.75c-.5.5-1.1.86-1.75 1.15-.63.25-1.35.4-2.4.46-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.77-.21-2.4-.46a4.7 4.7 0 0 1-1.75-1.15 4.7 4.7 0 0 1-1.15-1.75c-.25-.63-.4-1.35-.46-2.4C2.17 14.99 2.16 14.67 2.16 12s.01-2.99.06-4.04c.05-1.05.21-1.77.46-2.4.25-.65.6-1.2 1.15-1.75.5-.5 1.1-.86 1.75-1.15.63-.25 1.35-.4 2.4-.46C9.01 2.17 9.33 2.16 12 2.16Zm0 1.62c-2.63 0-2.93.01-3.96.06-.95.04-1.47.2-1.81.33-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.13.34-.29.86-.33 1.8-.05 1.04-.06 1.34-.06 3.98s.01 2.94.06 3.98c.04.95.2 1.47.33 1.8.18.47.39.79.73 1.13.34.34.66.55 1.12.73.34.13.86.29 1.8.33 1.04.05 1.34.06 3.98.06s2.94-.01 3.98-.06c.95-.04 1.47-.2 1.8-.33.47-.18.79-.39 1.13-.73.34-.34.55-.66.73-1.12.13-.34.29-.86.33-1.8.05-1.04.06-1.35.06-3.98s-.01-2.94-.06-3.98c-.04-.95-.2-1.47-.33-1.8a3.05 3.05 0 0 0-.73-1.13 3.05 3.05 0 0 0-1.12-.73c-.34-.13-.86-.29-1.8-.33-1.04-.05-1.35-.06-3.98-.06ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.62a3.28 3.28 0 1 0 0 6.56 3.28 3.28 0 0 0 0-6.56Zm5.1-1.8a1.14 1.14 0 1 1-2.28 0 1.14 1.14 0 0 1 2.28 0Z",
	},
	{
		name: "YouTube",
		href: "#",
		color: "#FF0000",
		path: "M23.5 7.16a3.02 3.02 0 0 0-2.12-2.14C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.38.52A3.02 3.02 0 0 0 .5 7.16 31.6 31.6 0 0 0 0 12.9a31.6 31.6 0 0 0 .5 5.74 3.02 3.02 0 0 0 2.12 2.14c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3.02 3.02 0 0 0 2.12-2.14 31.6 31.6 0 0 0 .5-5.74 31.6 31.6 0 0 0-.5-5.74ZM9.6 16.4V9.4l6.27 3.5-6.27 3.5Z",
	},
	{
		name: "LinkedIn",
		href: "#",
		color: "#0A66C2",
		path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
	},
];

const quickLinksLeft = ["Product", "Features", "Partners", "Pricing", "FAQ"];
const quickLinksRight = [
	"Terms of Service",
	"Privacy Policy",
	"Cookies Policy",
	"Payment and Refund",
];

export default function Footer() {
	return (
		<section
			className="relative overflow-hidden rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[64px] bg-[color:var(--guri-teal-900)] text-cream"
			aria-labelledby="cta-heading"
		>
			{/* Background photo */}
			<img
				src={FooterBg}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover"
			/>

			{/* Gradient wash over the photo — near-black upper-left fading to teal lower-right */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(120% 90% at 4% 0%, rgba(0,0,0,0.9) 0%, rgba(5,16,14,0.55) 38%, transparent 70%), linear-gradient(150deg, rgba(3,9,8,0.55) 0%, rgba(9,28,24,0.78) 45%, rgba(13,43,37,0.95) 100%)",
				}}
			/>

			{/* ---------------------------------------------------------------- */}
			{/* CTA                                                               */}
			{/* ---------------------------------------------------------------- */}
			<div className="relative z-10 px-6 pt-16 pb-14 sm:px-10 sm:pt-20 sm:pb-16 lg:px-16 lg:pt-24 lg:pb-20">
				<div className="mx-auto max-w-4xl text-left sm:text-center">
					<h2
						id="cta-heading"
						className="font-sans text-[32px] leading-[1.15] font-medium tracking-tight text-white sm:text-5xl lg:text-[56px]"
					>
						Ready to streamline your property management?
					</h2>
					<p className="mt-4 text-[15px] text-white/70 sm:mt-5 sm:text-lg">
						Move your portfolio into one clean operating system.
					</p>
				</div>

				<div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
					{/* Card — For landlords */}
					<div className="group flex flex-col rounded-[28px] border border-white/15 bg-gradient-to-br from-black/50 via-black/30 to-teal-900/20 p-7 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-guri hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:p-8">
						<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-ink">
							<Building2 size={20} strokeWidth={1.75} />
						</span>
						<span className="mt-6 text-[11px] font-semibold tracking-[0.14em] text-white/50">
							FOR LANDLORDS
						</span>
						<h3 className="mt-2 text-xl font-semibold text-white sm:text-[22px]">
							I manage properties.
						</h3>
						<p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
							Create your organization, choose a plan, and begin moving units,
							tenants, leases, and payments into one place.
						</p>
						<button type="button" className="btn btn-solid mt-6 w-fit">
							Join waiting list
							<ArrowUpRight size={16} strokeWidth={2} />
						</button>
					</div>

					{/* Card — For partners */}
					<div className="group flex flex-col rounded-[28px] border border-white/20 bg-gradient-to-br from-teal-700/50 via-teal-600/30 to-teal-500/10 p-7 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-guri hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:p-8">
						<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-ink">
							<Handshake size={20} strokeWidth={1.75} />
						</span>
						<span className="mt-6 text-[11px] font-semibold tracking-[0.14em] text-white/60">
							FOR PARTNERS
						</span>
						<h3 className="mt-2 text-xl font-semibold text-white sm:text-[22px]">
							I refer landlords.
						</h3>
						<p className="mt-3 text-[14.5px] leading-relaxed text-white/70">
							Join the partner program and help landlords in your network
							modernize their property operations.
						</p>
						<button
							type="button"
							className="btn mt-6 w-fit border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 ease-guri hover:-translate-y-0.5 hover:bg-white/20"
						>
							Become a Partner
							<ArrowRight size={16} strokeWidth={2} />
						</button>
					</div>
				</div>
			</div>

			{/* ---------------------------------------------------------------- */}
			{/* Footer                                                            */}
			{/* ---------------------------------------------------------------- */}
			<div className="relative z-10 px-6 pt-16 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[1.15fr_1fr_1fr] lg:gap-10">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-3">
							<GuriMark className="h-11 w-11 text-white" />
							<span className="font-serif text-3xl text-white">Guri</span>
						</div>
						<p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/60">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum
						</p>

						<div className="mt-8">
							<p className="text-[13px] font-semibold tracking-wide text-white">
								SOCIAL LINKS:
							</p>
							<div className="mt-3 flex items-center gap-3">
								{socialLinks.map((s) => (
									<a
										key={s.name}
										href={s.href}
										aria-label={s.name}
										className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ease-guri hover:-translate-y-0.5 hover:scale-105"
										style={{ backgroundColor: s.color }}
									>
										<svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
											<path d={s.path} />
										</svg>
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Quick links */}
					<div>
						<p className="text-[13px] font-semibold tracking-wide text-white">
							QUICK LINKS
						</p>
						<div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
							<ul className="space-y-3">
								{quickLinksLeft.map((l) => (
									<li key={l}>
										<a
											href="#"
											className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-white"
										>
											{l}
										</a>
									</li>
								))}
							</ul>
							<ul className="space-y-3">
								{quickLinksRight.map((l) => (
									<li key={l}>
										<a
											href="#"
											className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-white"
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Contact */}
					<div>
						<p className="text-[13px] font-semibold tracking-wide text-white">
							CONTACT US
						</p>
						<ul className="mt-5 space-y-4">
							<li className="flex items-start gap-3">
								<MapPin
									size={17}
									className="mt-0.5 shrink-0 text-white/70"
									strokeWidth={1.75}
								/>
								<span className="text-[14.5px] leading-relaxed text-white/70">
									Address: 1 Yonge Street, Suite 1801, Toronto, Ontario, M5E 1W7
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone
									size={17}
									className="shrink-0 text-white/70"
									strokeWidth={1.75}
								/>
								<span className="text-[14.5px] text-white/70">
									Phone no: 905 595 2578
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail
									size={17}
									className="shrink-0 text-white/70"
									strokeWidth={1.75}
								/>
								<span className="text-[14.5px] text-white/70">
									Email: sales@vocam.ca
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Newsletter */}
				<div className="mx-auto mt-14 max-w-6xl">
					<p className="text-[13px] font-semibold tracking-wide text-white">
						SUBSCRIBE TO OUR NEWSLETTER
					</p>
					<form className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-end sm:justify-between">
						<input
							type="email"
							placeholder="Enter your email address"
							className="w-full flex-1 border-b border-white/30 bg-transparent pb-3 text-[15px] text-white placeholder:text-white/45 focus:border-white focus:outline-none sm:max-w-2xl"
						/>
						<button
							type="submit"
							className="shrink-0 rounded-full bg-cream px-7 py-3 text-[14.5px] font-semibold text-ink transition-[transform,box-shadow] duration-300 ease-guri hover:-translate-y-0.5 hover:shadow-btn-ghost-hover active:translate-y-0"
						>
							Subscribe
						</button>
					</form>
				</div>

				{/* Bottom bar */}
				<div className="mx-auto mt-12 max-w-6xl border-t border-white/15 py-6 text-center">
					<p className="text-[13.5px] text-white/60">
						© 2026 Guri. All rights reserved.
					</p>
				</div>
			</div>
		</section>
	);
}
