import { useEffect, useRef, useState } from "react";

const LOGOS = [
	"Logoipsum",
	"Logoipsum",
	"LOGOIPSUM",
	"Logoipsum",
	"Logoipsum",
	"LGPSM",
	"Logoipsum",
];

const FEATURE_PILLS = [
	{ label: "Unit tracking", icon: BuildingIcon },
	{ label: "Tenant records", icon: RecordIcon },
	{ label: "Rent reminders", icon: ShieldIcon },
];

const STATS = [
	{ value: "KES 1.4M", label: "Monthly rent" },
	{ value: "3", label: "Open tickets" },
	{ value: "42", label: "Units in preview" },
	{ value: "94%", label: "Average occupancy" },
];

export default function Hero({ videoSrc = "/media/product-preview.mp4" }) {
	return (
		<section
			id="top"
			className="relative mx-auto max-w-[1180px] overflow-hidden px-6 pb-24 pt-[72px] text-center font-sans text-ink"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute left-1/2 top-[-140px] z-0 h-[480px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(169,212,195,0.45),rgba(169,212,195,0)_72%)]"
			/>

			<div className="relative z-10 flex flex-col items-center animate-guri-rise">
				<span className="mb-[26px] inline-flex items-center gap-2 rounded-full bg-mint-200 px-4 py-[7px] text-xs font-bold uppercase tracking-[0.06em] text-teal-700">
					<span className="h-1.5 w-1.5 rounded-full bg-[#3fae7a] shadow-[0_0_0_3px_rgba(63,174,122,0.25)]" />
					Built for African property managers
				</span>

				<h1 className="mb-[22px] max-w-4xl text-[clamp(34px,5.6vw,60px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#16130f]">
					Property Management Without
					<br />
					<span className="text-teal-600">Operational Chaos</span>
				</h1>

				<p className="mb-[30px] text-[19px] text-ink/68">
					Join <span className="font-bold text-coral-400">36,250</span> others
					on the waitlist.
				</p>

				<div className="mb-14 flex w-full max-w-[300px] flex-col items-center gap-2.5 sm:max-w-none sm:flex-row sm:justify-center">
					<a
						href="#partner"
						className="btn btn-ghost w-full justify-center sm:w-auto"
					>
						Become a Partner
						<ArrowUpRight />
					</a>
					<a
						href="#waitlist"
						className="btn btn-solid w-full justify-center sm:w-auto"
					>
						Join waiting list
						<ArrowUpRight />
					</a>
				</div>
			</div>

			<div
				role="group"
				aria-label="Trusted by"
				className="relative z-10 mb-11 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
			>
				<div className="guri-marquee flex w-max items-center gap-16">
					{[...LOGOS, ...LOGOS].map((name, i) => (
						<span
							key={`${name}-${i}`}
							className="shrink-0 font-serif text-[22px] font-bold tracking-[-0.01em] text-ink/28"
						>
							{name}
						</span>
					))}
				</div>
			</div>

			<ProductPreview videoSrc={videoSrc} />

			<ul className="relative z-10 mb-8 flex list-none flex-wrap items-center justify-center gap-x-7 gap-y-2.5 p-0">
				{FEATURE_PILLS.map(({ label, icon: Icon }) => (
					<li
						key={label}
						className="inline-flex items-center gap-2 text-[14.5px] font-medium text-ink/70"
					>
						<Icon />
						{label}
					</li>
				))}
			</ul>

			<div className="relative z-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
				{STATS.map((s) => (
					<div
						key={s.label}
						className="flex flex-col items-start gap-[30px] rounded-[18px] bg-stat-gradient px-[22px] py-5 text-left shadow-stat transition-[transform,box-shadow] duration-[320ms] ease-guri hover:-translate-y-1 hover:shadow-stat-hover"
					>
						<span className="text-2xl font-bold tracking-[-0.01em] text-white">
							{s.value}
						</span>
						<span className="text-[13.5px] text-white/62">{s.label}</span>
					</div>
				))}
			</div>
		</section>
	);
}

function ProductPreview({ videoSrc }) {
	const wrapperRef = useRef(null);
	const videoRef = useRef(null);
	const [shouldLoad, setShouldLoad] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const node = wrapperRef.current;
		if (!node || typeof IntersectionObserver === "undefined") {
			setShouldLoad(true);
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					setShouldLoad(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "200px" },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const handlePlay = () => {
		const el = videoRef.current;
		if (!el) return;
		setHasError(false);
		setShouldLoad(true);
		const playPromise = el.play();
		if (playPromise?.then) {
			playPromise.then(() => setIsPlaying(true)).catch(() => setHasError(true));
		}
	};

	const showFallback = hasError && !isPlaying;

	return (
		<div
			ref={wrapperRef}
			className="relative z-10 mb-10 animate-guri-rise-delayed rounded-[28px] bg-preview-gradient p-[1.5px] shadow-preview"
		>
			<div className="relative aspect-[16/8.4] overflow-hidden rounded-[26.5px] bg-[#f3f2f0] sm:aspect-[16/8.4] max-[520px]:aspect-[4/5]">
				<video
					ref={videoRef}
					style={{ visibility: showFallback ? "hidden" : "visible" }}
					src={shouldLoad ? videoSrc : undefined}
					preload="none"
					muted
					loop
					playsInline
					onEnded={() => setIsPlaying(false)}
					onError={() => setHasError(true)}
					aria-label="Guri product preview"
					className="absolute inset-0 h-full w-full object-cover object-top"
				/>

				{showFallback && (
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-[#fbfaf9] to-[#eef0ee] text-sm text-ink/40">
						<span>Preview unavailable</span>
						<button
							type="button"
							onClick={handlePlay}
							className="rounded-full border border-ink/10 bg-white px-3.5 py-[7px] text-[13px] font-semibold text-teal-700 transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-btn-ghost-hover"
						>
							Try again
						</button>
					</div>
				)}

				{!isPlaying && !showFallback && (
					<button
						type="button"
						onClick={handlePlay}
						className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border-none bg-white/86 px-5 py-[11px] pl-[18px] text-sm font-bold text-teal-700 shadow-play backdrop-blur-md transition-[transform,box-shadow] duration-[240ms] ease-guri hover:scale-105 hover:shadow-play-hover active:scale-[0.98]"
					>
						Play video
						<PlayIcon />
					</button>
				)}
			</div>
		</div>
	);
}

function PlayIcon() {
	return (
		<svg
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-3 w-3"
		>
			<path d="M2.5 1.5L10 6L2.5 10.5V1.5Z" fill="currentColor" />
		</svg>
	);
}

function ArrowUpRight() {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-3.5 w-3.5 transition-transform duration-[260ms]"
		>
			<path
				d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function BuildingIcon() {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-[17px] w-[17px] shrink-0 text-ink/45"
		>
			<rect
				x="4"
				y="3"
				width="9"
				height="14"
				rx="1"
				stroke="currentColor"
				strokeWidth="1.4"
			/>
			<path
				d="M7 6.5h1M10 6.5h1M7 9.5h1M10 9.5h1M7 12.5h1M10 12.5h1"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<path
				d="M13 8h2.5a1 1 0 011 1v8h-3.5"
				stroke="currentColor"
				strokeWidth="1.4"
			/>
			<path
				d="M2 17h16"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function RecordIcon() {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-[17px] w-[17px] shrink-0 text-ink/45"
		>
			<rect
				x="4.5"
				y="2.5"
				width="11"
				height="15"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="1.4"
			/>
			<path
				d="M7.5 6.5h5M7.5 9.5h5M7.5 12.5h3"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ShieldIcon() {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-[17px] w-[17px] shrink-0 text-ink/45"
		>
			<path
				d="M10 2.5l6 2.2v4.8c0 4-2.6 7-6 8-3.4-1-6-4-6-8V4.7l6-2.2Z"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinejoin="round"
			/>
			<path
				d="M7.5 10l1.8 1.8L12.7 8"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
