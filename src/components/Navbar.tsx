import { useCallback, useEffect, useState } from "react";
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
				className={`relative flex w-full max-w-295 items-center justify-between gap-3 overflow-hidden rounded-full border backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[background-color,box-shadow,border-color,padding] duration-480 ease-guri ${
					scrolled
						? "border-white/45 bg-white/[0.10] shadow-[0_8px_32px_rgba(16,24,38,0.12),0_1px_0_rgba(255,255,255,0.75)_inset,0_-1px_0_rgba(16,24,38,0.06)_inset,0_0_20px_rgba(255,255,255,0.08)] py-1.75 pl-3.5 pr-2.5"
						: "border-white/50 bg-white/[0.08] shadow-[0_8px_32px_rgba(16,24,38,0.08),0_1px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(16,24,38,0.04)_inset,0_0_24px_rgba(255,255,255,0.06)] py-2.5 pl-3.5 pr-3"
				}`}
			>
				{/* Soft top reflection */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 rounded-full"
					style={{
						background: `
							linear-gradient(
								180deg,
								rgba(255,255,255,0.48) 0%,
								rgba(255,255,255,0.18) 20%,
								rgba(255,255,255,0.04) 45%,
								rgba(255,255,255,0) 70%
							),
							linear-gradient(
								110deg,
								rgba(255,255,255,0.10) 0%,
								rgba(255,255,255,0) 35%,
								rgba(255,255,255,0.08) 65%,
								rgba(255,255,255,0) 100%
							)
						`,
					}}
				/>

				{/* Broad glass reflection */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -top-1/2 left-[15%] h-full w-[55%] rotate-[-12deg] rounded-full bg-white/[0.06] blur-2xl"
				/>

				{/* Glass edge / refraction */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 rounded-full"
					style={{
						boxShadow: `
							inset 0 1px 0 rgba(255,255,255,0.75),
							inset 0 -1px 0 rgba(255,255,255,0.12),
							inset 1px 0 0 rgba(255,255,255,0.18),
							inset -1px 0 0 rgba(255,255,255,0.18)
						`,
					}}
				/>

				{/* Logo */}
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
				<ul className="relative z-10 m-0 hidden list-none items-center gap-1 p-0 min-[940px]:flex">
					{NAV_LINKS.map((label) => (
						<li key={label}>
							<a
								href={`#${label.toLowerCase()}`}
								className="inline-block rounded-full px-3.5 py-2 text-sm font-medium text-ink/72 transition-all duration-200 hover:bg-white/15 hover:text-ink hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop Actions */}
				<div className="relative z-10 hidden items-center gap-2 min-[940px]:flex">
					<PartnerButton size="sm" />
					<JoinButton size="sm" />
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					aria-label={mobileOpen ? "Close menu" : "Toggle menu"}
					aria-expanded={mobileOpen}
					onClick={() => setMobileOpen((v) => !v)}
					className="relative z-10 flex h-9.5 w-9.5 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-md min-[940px]:hidden"
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
				className={`relative w-full max-w-295 overflow-hidden rounded-[22px] border backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[max-height,padding,margin-top,background-color,border-color,box-shadow] duration-320 ease-guri min-[940px]:hidden ${
					mobileOpen
						? scrolled
							? "mt-2 max-h-105 border-white/45 bg-white/[0.10] p-3.5 shadow-[0_12px_40px_rgba(16,24,38,0.14),0_1px_0_rgba(255,255,255,0.75)_inset,0_-1px_0_rgba(16,24,38,0.05)_inset,inset_0_0_20px_rgba(255,255,255,0.05)]"
							: "mt-2 max-h-105 border-white/50 bg-white/[0.08] p-3.5 shadow-[0_12px_40px_rgba(16,24,38,0.10),0_1px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(16,24,38,0.04)_inset,inset_0_0_20px_rgba(255,255,255,0.05)]"
						: "mt-0 max-h-0 border-transparent bg-transparent p-0 shadow-none"
				}`}
			>
				{/* Mobile glass reflection */}
				{mobileOpen && (
					<>
						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-0 rounded-[22px]"
							style={{
								background: `
									linear-gradient(
										180deg,
										rgba(255,255,255,0.48) 0%,
										rgba(255,255,255,0.16) 25%,
										rgba(255,255,255,0.03) 50%,
										rgba(255,255,255,0) 70%
									)
								`,
							}}
						/>

						<div
							aria-hidden="true"
							className="pointer-events-none absolute -top-1/3 left-[10%] h-1/2 w-[70%] rotate-[-8deg] rounded-full bg-white/[0.06] blur-2xl"
						/>

						<div
							aria-hidden="true"
							className="pointer-events-none absolute inset-0 rounded-[22px]"
							style={{
								boxShadow: `
									inset 0 1px 0 rgba(255,255,255,0.75),
									inset 0 -1px 0 rgba(255,255,255,0.12),
									inset 1px 0 0 rgba(255,255,255,0.18),
									inset -1px 0 0 rgba(255,255,255,0.18)
								`,
							}}
						/>
					</>
				)}

				{/* Mobile Links */}
				<ul className="relative z-10 m-0 mb-3 list-none p-0">
					{NAV_LINKS.map((label) => (
						<li key={label}>
							<a
								href={`#${label.toLowerCase()}`}
								onClick={() => setMobileOpen(false)}
								className="block rounded-xl px-2.5 py-2.75 text-[15px] font-medium text-ink no-underline transition-all duration-200 hover:bg-white/15 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Actions */}
				<div className="relative z-10 flex flex-col gap-2">
					<PartnerButton size="sm" />
					<JoinButton size="sm" />
				</div>
			</div>
		</header>
	);
}
