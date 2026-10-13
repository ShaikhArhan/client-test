import Link from "next/link";
import { Icon } from "@iconify/react";
import calendarDays from "@iconify-icons/lucide/calendar-days";
import chartNoAxesColumnIncreasing from "@iconify-icons/lucide/chart-no-axes-column-increasing";
import globe2 from "@iconify-icons/lucide/globe-2";
import shieldCheck from "@iconify-icons/lucide/shield-check";
import usersRound from "@iconify-icons/lucide/users-round";
import zap from "@iconify-icons/lucide/zap";
import type { Metadata } from "next";

const features = [
  {
    icon: zap,
    title: "Instant answers",
    description:
      "Vela reads your docs, pricing and policies, then replies in your brand's voice.",
  },
  {
    icon: calendarDays,
    title: "Books meetings",
    description:
      "Connect your calendar and let customers pick a time without leaving the chat.",
  },
  {
    icon: usersRound,
    title: "Smooth handoff",
    description:
      "When a chat gets complex, your team gets the full history and takes over.",
  },
  {
    icon: shieldCheck,
    title: "Private and secure",
    description:
      "Your data stays yours. It is encrypted and never used to train other models.",
  },
  {
    icon: globe2,
    title: "Any channel",
    description:
      "Add it to your website, WhatsApp or Instagram with one snippet.",
  },
  {
    icon: chartNoAxesColumnIncreasing,
    title: "Clear insights",
    description:
      "See top questions, satisfaction scores and where customers get stuck.",
  },
];

const steps = [
  {
    title: "Share your content",
    description: "Upload files or paste your website link.",
  },
  {
    title: "Test and tune",
    description: "Try the chatbot and adjust its tone.",
  },
  {
    title: "Go live",
    description: "Paste one line of code on your site.",
  },
];

export const metadata: Metadata = {
  title: "AI chatbot for customer support | Vela AI Chatbot",
  description:
    "Vela's AI chatbot answers customer questions using your help content, books meetings, and hands complex conversations to your team.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "AI chatbot for customer support | Vela AI Chatbot",
    description:
      "Answer customer questions, book meetings, and hand complex conversations to your support team with Vela.",
    url: "/",
    siteName: "Vela AI Chatbot",
    locale: "en",
  },
};

export default function Home() {
  return (
      <main>
        <section className="py-14 md:py-[72px]">
          <div className="mx-auto grid w-[92%] max-w-[1120px] items-center gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-14">
            <div>
              <h1 className="max-w-[700px] font-display text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.2] tracking-[-.02em]">
                Answer every customer in seconds, not hours.
              </h1>
              <p className="mt-5 mb-7 max-w-[540px] text-xl text-muted">
                Vela is an AI chatbot trained on your own help docs and
                products. It replies instantly, books meetings, and hands
                tricky chats to your team.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  Book a free demo
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brand px-7 py-3.5 font-bold text-brand transition hover:bg-tint"
                >
                  About Vela
                </Link>
              </div>
            </div>
            <div
              aria-label="Example conversation"
              className="flex flex-col gap-3 rounded-[22px] border border-line bg-white p-[18px] shadow-[0_12px_32px_rgba(20,26,51,.08)]"
            >
              <div className="flex items-center gap-2.5 border-b border-line pb-3 font-bold">
                Vela assistant
              </div>
              <p className="max-w-[84%] self-start rounded-[16px_16px_16px_4px] bg-background px-4 py-3 text-[.97rem] leading-snug">
                Hi! Where is my order #4821?
              </p>
              <p className="max-w-[84%] self-end rounded-[16px_16px_4px_16px] bg-brand px-4 py-3 text-[.97rem] leading-snug text-white">
                It left our warehouse this morning and arrives Friday. Want
                the tracking link?
              </p>
              <p className="max-w-[84%] self-start rounded-[16px_16px_16px_4px] bg-background px-4 py-3 text-[.97rem] leading-snug">
                Yes, and can I change the address?
              </p>
              <p className="max-w-[84%] self-end rounded-[16px_16px_4px_16px] bg-brand px-4 py-3 text-[.97rem] leading-snug text-white">
                Done. I&apos;ve sent the link and updated the address to your
                home.
              </p>
              <div className="mt-1 flex items-center justify-between rounded-full border border-line px-[18px] py-2 text-[.95rem] text-muted">
                Type a message...
                <span className="rounded-full bg-mint px-4 py-1.5 font-bold text-ink">
                  Send
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-9 text-center text-white">
          <div className="mx-auto grid w-[92%] max-w-[1120px] grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["3 sec", "average reply time"],
              ["80%", "of questions solved without a human"],
              ["40+", "languages supported"],
              ["24/7", "always on, no breaks"],
            ].map(([value, label]) => (
              <div key={value}>
                <strong className="block font-display text-3xl font-bold text-mint">
                  {value}
                </strong>
                <span className="text-[.95rem] text-[#c4c9e2]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h2 className="mb-3 font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
              Everything your chat needs to work
            </h2>
            <p className="mb-10 max-w-[560px] text-muted">
              Set it up once. Vela keeps learning from every conversation.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-line bg-white p-7 transition-colors hover:border-brand"
                >
                  <div className="mb-4 grid size-[46px] place-items-center rounded-xl bg-tint text-brand">
                    <Icon
                      icon={feature.icon}
                      aria-hidden="true"
                      className="size-6"
                    />
                  </div>
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
              Launch in three steps
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="border-l-[3px] border-brand py-1 pl-6"
                >
                  <span className="mb-1 block font-display text-[1.6rem] font-extrabold text-brand">
                    {index + 1}
                  </span>
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold">
                    {step.title}
                  </h3>
                  <p className="text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="py-14 md:py-20"
        >
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h2
              id="faq-heading"
              className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]"
            >
              Frequently asked questions
            </h2>
            <dl className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white p-7">
                <dt className="font-display text-lg font-bold">
                  What does Vela&apos;s AI chatbot do?
                </dt>
                <dd className="mt-2 text-muted">
                  It answers customer questions using your help content, can
                  book meetings, and passes complex conversations to your team
                  with the chat history.
                </dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-7">
                <dt className="font-display text-lg font-bold">
                  What information does Vela use to answer?
                </dt>
                <dd className="mt-2 text-muted">
                  Vela uses the documents, products, pricing, and policies you
                  provide. It is designed to stick to your approved content
                  and say when it is unsure.
                </dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-7">
                <dt className="font-display text-lg font-bold">
                  Can a person take over a conversation?
                </dt>
                <dd className="mt-2 text-muted">
                  Yes. When a conversation needs more help, your team can take
                  over with the chat history available.
                </dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-7">
                <dt className="font-display text-lg font-bold">
                  How do I get Vela running on my website?
                </dt>
                <dd className="mt-2 text-muted">
                  Share your content, test and tune the chatbot, then add it to
                  your website with one line of code. Vela is designed to go
                  live in under a day.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto w-[92%] max-w-[1120px] rounded-[28px] bg-gradient-to-br from-brand to-[#7a5cf0] px-5 py-10 text-center text-white md:px-8 md:py-14">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
              See Vela answer your customers&apos; questions
            </h2>
            <p className="mx-auto mt-2.5 mb-7 max-w-[480px] text-[#e4e1ff]">
              We&apos;ll build a sample chatbot from your website before the
              call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-bold text-brand transition hover:-translate-y-0.5"
            >
              Book a free demo
            </Link>
          </div>
        </section>
      </main>
  );
}
