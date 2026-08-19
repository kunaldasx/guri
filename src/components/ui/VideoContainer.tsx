import { useEffect, useRef, useState } from "react";
import DashboardPreview from "../../assets/dashboardpreview.gif";

export function VideoContainer() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = wrapperRef.current;

		if (!element) return;

		if (!("IntersectionObserver" in window)) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				rootMargin: "300px 0px",
				threshold: 0,
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={wrapperRef}
			className="relative z-10 mb-5 sm:mb-8 w-full animate-guri-rise-delayed rounded-[28px] bg-preview-gradient p-[1.5px] shadow-preview"
		>
			<div
				className="
					relative
					aspect-video
					w-full
					overflow-hidden
					rounded-[26.5px]
					bg-[#f3f2f0]
				"
			>
				{isVisible && (
					<img
						src={DashboardPreview}
						alt="Guri dashboard preview"
						loading="lazy"
						decoding="async"
						draggable={false}
						className="absolute inset-0 h-full w-full select-none object-cover object-center"
					/>
				)}
			</div>
		</div>
	);
}
