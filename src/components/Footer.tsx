"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";
import FooterBg from "../assets/images/footerbg.png";
import Logo from "../assets/images/logo-white.png";
import CTA from "./ui/CTA";

const quickLinksPrimary = ["Product", "Features", "Partners", "Pricing", "FAQ"];
const legalLinks = [
	"Terms of Service",
	"Privacy Policy",
	"Cookies Policy",
	"Payment and Refund",
];

const contactDetails: { icon: LucideIcon; text: string }[] = [
	{
		icon: MapPin,
		text: "Address: 1 Yonge Street, Suite 1801, Toronto, Ontario, M5E 1W7",
	},
	{ icon: Phone, text: "Phone no: 905 595 2578" },
	{ icon: Mail, text: "Email: sales@vocam.ca" },
];

interface SocialLink {
	name: string;
	href: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	swatch: string;
}

const socialLinks: SocialLink[] = [
	{
		name: "Facebook",
		href: "#",
		icon: (props) => (
			<svg viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.003 10.125 11.926v-8.432H7.078v-3.494h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.236 2.686.236v2.979h-1.514c-1.491 0-1.956.93-1.956 1.885v2.25h3.328l-.532 3.494h-2.796v8.432C19.612 23.076 24 18.092 24 12.073Z"
				/>
			</svg>
		),
		swatch: "bg-[#1877F2]",
	},
	{
		name: "X",
		href: "#",
		icon: (props) => (
			<svg viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
				/>
			</svg>
		),
		swatch: "bg-[#1DA1F2]",
	},
	{
		name: "Instagram",
		href: "#",
		icon: (props) => (
			<svg viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
				/>
			</svg>
		),
		swatch: "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]",
	},
	{
		name: "YouTube",
		href: "#",
		icon: (props) => (
			<svg viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
				/>
			</svg>
		),
		swatch: "bg-[#FF0000]",
	},
	{
		name: "LinkedIn",
		href: "#",
		icon: (props) => (
			<svg viewBox="0 0 24 24" {...props}>
				<path
					fill="currentColor"
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V8.999H3.555v11.453Z"
				/>
			</svg>
		),
		swatch: "bg-[#0A66C2]",
	},
];

const sectionBackground: React.CSSProperties = {
	backgroundImage:
		"radial-gradient(46% 60% at 94% 100%, rgba(45,132,116,0.35) 0%, rgba(45,132,116,0) 70%), " +
		"linear-gradient(to right, #101615 0%, #131f1e 28%, #142623 48%, #153430 64%, #143d39 78%, #144843 90%, #17544a 100%)",
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function Footer() {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email) return;
		// TODO: wire up to your newsletter provider.
		setSubscribed(true);
		setEmail("");
	}

	return (
		<section
			className="relative w-full overflow-hidden rounded-t-[clamp(28px,8.5vw,170px)] bg-[#101615] text-white"
			style={sectionBackground}
		>
			<CTA />

			{/* =============================== FOOTER =============================== */}
			<footer className="relative mt-4 lg:mt-10">
				{/* Ambient building photo — fades from transparent at the top into the
            gradient below, per the source asset's own alpha channel. */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					<img
						src={FooterBg}
						alt=""
						aria-hidden="true"
						className="absolute inset-0 h-full w-full object-contain lg:object-cover object-bottom"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/25" />
				</div>

				<div className="relative z-10 px-6 pt-16 sm:px-10 lg:px-16 lg:pt-24">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-12">
							{/* Brand + about */}
							<div className="col-span-2 sm:col-span-1 lg:col-span-4">
								<a href="#" className="inline-flex items-center gap-3">
									<img
										src={Logo}
										alt="logo"
										className="size-10 sm:size-12 object-contain"
									/>
									<span className="font-serif text-3xl text-white">Guri</span>
								</a>
								<p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
								</p>
							</div>

							{/* Quick links */}
							<div className="col-span-1 sm:col-span-1 lg:col-span-2">
								<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
									Quick Links
								</h4>

								<ul className="mt-6 space-y-3">
									{quickLinksPrimary.map((label) => (
										<li key={label}>
											<a
												href="#"
												className="text-sm text-white/65 transition-colors duration-200 ease-guri hover:text-white"
											>
												{label}
											</a>
										</li>
									))}
								</ul>
							</div>

							{/* Legal links */}
							<div className="col-span-1 sm:col-span-1 lg:col-span-2">
								<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
									Legal Links
								</h4>

								<ul className="mt-6 space-y-3">
									{legalLinks.map((label) => (
										<li key={label}>
											<a
												href="#"
												className="text-sm text-white/65 transition-colors duration-200 ease-guri hover:text-white"
											>
												{label}
											</a>
										</li>
									))}
								</ul>
							</div>

							{/* Contact */}
							<div className="col-span-2 sm:col-span-1 lg:col-span-4">
								<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
									Contact Us
								</h4>
								<ul className="mt-6 space-y-4">
									{contactDetails.map(({ icon: Icon, text }) => (
										<li key={text} className="flex items-start gap-3">
											<Icon
												className="mt-0.5 h-4 w-4 shrink-0 text-white/70"
												strokeWidth={1.75}
											/>
											<span className="text-sm leading-relaxed text-white/70">
												{text}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Social links — sits under the brand column */}
							<div className="col-span-2 lg:col-span-4">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
									Social Links:
								</p>
								<div className="mt-4 flex items-center gap-3">
									{socialLinks.map(({ name, href, icon: Icon, swatch }) => (
										<a
											key={name}
											href={href}
											aria-label={name}
											className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition-all duration-200 ease-guri hover:-translate-y-1 hover:scale-110 hover:shadow-lg ${swatch}`}
										>
											<Icon className="h-4 w-4" strokeWidth={2} />
										</a>
									))}
								</div>
							</div>

							{/* Newsletter — sits under quick links + contact */}
							<div className="col-span-2 lg:col-span-8">
								<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
									Subscribe To Our Newsletter
								</h4>
								<form
									onSubmit={handleSubscribe}
									className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6"
								>
									<div className="flex-1 border-b border-white/30 pb-2.5 transition-colors duration-200 ease-guri focus-within:border-white">
										<label htmlFor="newsletter-email" className="sr-only">
											Email address
										</label>
										<input
											id="newsletter-email"
											type="email"
											required
											value={email}
											onChange={(event) => setEmail(event.target.value)}
											placeholder="Enter your email address"
											className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
										/>
									</div>
									<button
										type="submit"
										className="btn shrink-0 self-start bg-white text-ink hover:-translate-y-px hover:bg-mist hover:shadow-btn-ghost-hover sm:self-auto"
									>
										{subscribed ? "Subscribed ✓" : "Subscribe"}
									</button>
								</form>
							</div>
						</div>

						<hr className="mt-8 sm:mt-14 border-white/15 lg:mt-16" />
						<p className="py-2 sm:py-6 text-center text-sm text-white/50">
							© {new Date().getFullYear()} Guri. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
}
