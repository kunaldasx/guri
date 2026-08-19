import { useEffect, useState, useCallback } from "react";
import Logo from "../assets/images/logo2.png";
import { JoinButton } from "./ui/JoinBtn";
import { PartnerButton } from "./ui/PartnerBtn";

const NAV_LINKS = ["Product", "Features", "Partners", "Pricing", "FAQ"];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleScroll = useCallback(() => {
		setScrolled(window.scrollY > 12);
	}, []);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		handleScroll();

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-6 pt-5 font-sans">
			{/* Main Navbar */}
			<nav
				aria-label="Primary"
				className={`relative flex w-full max-w-295 items-center justify-between gap-3 overflow-hidden rounded-full border backdrop-blur-3xl backdrop-saturate-[1.8] transition-[background-color,box-shadow,border-color,padding] duration-480 ease-guri
					${
						scrolled
							? "border-white/35 bg-cream/18 shadow-[0_8px_32px_rgba(16,24,38,0.08),inset_0_1px_0_rgba(255,255,255,0.45)] py-1.75 pl-3.5 pr-2.5"
							: "border-white/40 bg-mist/20 shadow-[0_8px_32px_rgba(16,24,38,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] py-2.5 pl-3.5 pr-3"
					}`}
			>
				<a
					href="#top"
					className="relative z-10 flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition-opacity duration-200 hover:opacity-80"
				>
					<span className="block h-8 w-8 shrink-0 drop-shadow-[0_1px_1px_rgba(16,24,38,0.12)] sm:h-10 sm:w-10">
						<img src={Logo} alt="Guri Logo" />
					</span>

					<span className="font-serif text-2xl font-medium tracking-[-0.01em] text-teal-500 sm:text-3xl">
						Guri
					</span>
				</a>

				{/* Desktop Navigation */}
				<ul className="m-0 hidden list-none items-center gap-1 p-0 min-[940px]:flex">
					{NAV_LINKS.map((label) => (
						<li key={label}>
							<a
								href={`#${label.toLowerCase()}`}
								className="inline-block rounded-full px-3.5 py-2 text-sm font-medium text-ink/72 transition-colors duration-200 hover:bg-white/15 hover:text-ink"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop Actions */}
				<div className="hidden items-center gap-2 min-[940px]:flex">
					<PartnerButton size="sm" />
					<JoinButton size="sm" />
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					aria-label={mobileOpen ? "Close menu" : "Toggle menu"}
					aria-expanded={mobileOpen}
					onClick={() => setMobileOpen((v) => !v)}
					className="relative z-10 flex h-9.5 w-9.5 items-center justify-center rounded-full border-none bg-transparent min-[940px]:hidden"
				>
					<span className="flex w-4.5 flex-col gap-1">
						<span
							className={`block h-0.5 w-full rounded-sm bg-ink transition-transform duration-300 ease-out ${
								mobileOpen ? "-translate-x-0.75" : "translate-x-0"
							}`}
						/>

						<span
							className={`block h-0.5 w-full rounded-sm bg-ink transition-transform duration-300 ease-out ${
								mobileOpen ? "translate-x-0.75" : "translate-x-0"
							}`}
						/>

						<span
							className={`block h-0.5 w-full rounded-sm bg-ink transition-transform duration-300 ease-out ${
								mobileOpen ? "-translate-x-0.75" : "translate-x-0"
							}`}
						/>
					</span>
				</button>
			</nav>

			{/* Mobile Navigation */}
			<div
				className={`w-full max-w-295 overflow-hidden rounded-[22px] border backdrop-blur-3xl backdrop-saturate-[1.8] transition-[max-height,padding,margin-top,background-color,border-color,box-shadow] duration-320 ease-guri min-[940px]:hidden
					${
						mobileOpen
							? scrolled
								? "mt-2 max-h-105 border-white/35 bg-cream/8 p-3.5 shadow-[0_12px_40px_rgba(16,24,38,0.10),inset_0_1px_0_rgba(255,255,255,0.45)]"
								: "mt-2 max-h-105 border-white/40 bg-mist/10 p-3.5 shadow-[0_12px_40px_rgba(16,24,38,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
							: "mt-0 max-h-0 border-transparent bg-transparent p-0 shadow-none"
					}`}
			>
				<ul className="m-0 mb-3 list-none p-0">
					{NAV_LINKS.map((label) => (
						<li key={label}>
							<a
								href={`#${label.toLowerCase()}`}
								onClick={() => setMobileOpen(false)}
								className="block rounded-xl px-2.5 py-2.75 text-[15px] font-medium text-ink no-underline transition-colors duration-200 hover:bg-white/15"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				<div className="flex flex-col gap-2">
					<PartnerButton size="sm" />
					<JoinButton size="sm" />
				</div>
			</div>
		</header>
	);
}
