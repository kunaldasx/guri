import { useState } from "react";

/**
 * FaqSection
 * -----------------------------------------------------------------------
 * A two-column FAQ section: left side carries the eyebrow, heading, and
 * support blurb; right side is an accordion list of expandable questions.
 * Stacks to a single column on small screens, matching the reference.
 * -----------------------------------------------------------------------
 */

type FaqItem = {
	question: string;
	answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
	{
		question: "Who is Guri for?",
		answer:
			"Guri is built for property teams — landlords, managers, and small operators — who want unit tracking, tenant records, and finance workflows in one simple dashboard instead of scattered spreadsheets.",
	},
	{
		question: "Do I need any technical setup?",
		answer:
			"No setup required. Create an account, add your first property, and you're ready to go. Guri works straight out of the box on web and mobile.",
	},
	{
		question: "How does the partner program work?",
		answer:
			"Partners get a dedicated dashboard, referral tracking, and a revenue share for every property team they bring on. Reach out to support to get started.",
	},
	{
		question: "Is my data secure?",
		answer:
			"Yes. All data is encrypted in transit and at rest, backed up daily, and access is scoped per team member so only the right people see the right records.",
	},
	{
		question: "Question 5",
		answer: "Answer for question five goes here.",
	},
	{
		question: "Question 6",
		answer: "Answer for question six goes here.",
	},
	{
		question: "Question 7",
		answer: "Answer for question seven goes here.",
	},
	{
		question: "Question 8",
		answer: "Answer for question eight goes here.",
	},
];

const IconPlus: React.FC<{ open: boolean }> = ({ open }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		className={[
			"h-4 w-4 transition-transform duration-300 ease-guri",
			open ? "rotate-45" : "rotate-0",
		].join(" ")}
		aria-hidden="true"
	>
		<path
			d="M12 5v14M5 12h14"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
		/>
	</svg>
);

const FaqSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggle = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section
			className="relative bg-cream px-6 py-16 sm:px-10 sm:py-18 lg:px-16 lg:py-20"
			aria-label="Frequently asked questions"
		>
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
				{/* ------------------------------ Left column ------------------------------ */}
				<div className="animate-guri-rise max-w-md">
					<span className="mb-6 inline-flex items-center gap-2 rounded-full bg-mint-200/70 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 ring-1 ring-inset ring-teal-500/15">
						<span className="h-1.5 w-1.5 rounded-full bg-[#1dd1a1]" />
						FAQs
					</span>

					<h2 className="font-sans max-w-4xl text-[clamp(32px,5.6vw,60px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#16130f]">
						Frequently asked
						<br />
						<span className="text-teal-700">questions.</span>
					</h2>

					<p className="mt-5 max-w-sm text-base sm:text-lg leading-relaxed text-ink/60">
						Have something else on your mind? Email us at{" "}
						<a
							href="mailto:support@guri.liamsi.app"
							className="font-medium text-ink underline decoration-ink/30 underline-offset-2 transition-colors duration-200 ease-guri hover:text-teal-700 hover:decoration-teal-700"
						>
							support@guri.liamsi.app
						</a>{" "}
						and we&apos;ll get back within a day.
					</p>
				</div>

				{/* ------------------------------ Right column ------------------------------ */}
				<div className="animate-guri-rise-delayed overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_20px_45px_-25px_rgba(16,24,38,0.25)]">
					{FAQ_ITEMS.map((item, index) => {
						const open = openIndex === index;
						const panelId = `faq-panel-${index}`;
						const buttonId = `faq-button-${index}`;

						return (
							<div
								key={item.question}
								className={["border-b border-ink/8 last:border-b-0"].join(" ")}
							>
								<h3 className="m-0">
									<button
										id={buttonId}
										type="button"
										aria-expanded={open}
										aria-controls={panelId}
										onClick={() => toggle(index)}
										className="flex w-full items-center justify-between gap-6 px-6 py-4 sm:py-5 text-left transition-colors duration-200 ease-guri hover:bg-mist/40 sm:px-7"
									>
										<span
											className={[
												"text-[15.5px] transition-colors duration-200 ease-guri",
												open ? "font-medium text-ink" : "text-ink/85",
											].join(" ")}
										>
											{item.question}
										</span>
										<span
											className={[
												"flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ease-guri",
												open ? "bg-teal-600 text-white" : "bg-mist text-ink/60",
											].join(" ")}
										>
											<IconPlus open={open} />
										</span>
									</button>
								</h3>

								<div
									id={panelId}
									role="region"
									aria-labelledby={buttonId}
									className="grid transition-[grid-template-rows] duration-300 ease-guri"
									style={{
										gridTemplateRows: open ? "1fr" : "0fr",
									}}
								>
									<div className="overflow-hidden">
										<p className="px-6 pb-5 text-[14.5px] leading-relaxed text-ink/60 sm:px-7">
											{item.answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
