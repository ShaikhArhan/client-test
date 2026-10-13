import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vela",
  description: "Meet the team building friendly, reliable AI chatbots.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    type: "website",
    title: "About Vela",
    description: "Meet the team building friendly, reliable AI chatbots.",
    url: "/about/",
    siteName: "Vela AI Chatbot",
    locale: "en",
  },
};

const values = [
  {
    title: "Honest by design",
    description:
      "Vela only answers from your approved content, and says so when it's unsure.",
  },
  {
    title: "People first",
    description:
      "AI handles the repeats so your team can focus on the conversations that matter.",
  },
  {
    title: "Privacy always",
    description: "We never sell data. You control what Vela learns and what it keeps.",
  },
];

const team = [
  { initial: "A", name: "Aarav Shah", role: "Co-founder and CEO" },
  { initial: "M", name: "Meera Patel", role: "Co-founder and CTO" },
  { initial: "R", name: "Rohan Mehta", role: "Head of Customer Success" },
];

export default function About() {
  return (
      <main>
        <section className="pt-14 pb-6 md:pt-[72px]">
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h1 className="max-w-[900px] font-display text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.2] tracking-[-.02em]">
              We build chatbots people actually enjoy using.
            </h1>
            <p className="mt-5 max-w-[640px] text-xl text-muted">
              Vela started when our founders spent a weekend waiting on hold.
              We thought: a good answer should never take that long.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid w-[92%] max-w-[1120px] items-start gap-10 md:grid-cols-[1.3fr_1fr] md:gap-12">
            <div>
              <h2 className="mb-3 font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
                Our story
              </h2>
              <p className="mb-4 text-muted">
                Vela began in 2023 as a small team of engineers and support
                specialists. We saw businesses losing customers to slow
                replies, and chatbots that sounded robotic and gave wrong
                answers.
              </p>
              <p className="mb-4 text-muted">
                So we built one that sticks to what your business really says,
                admits when it doesn&apos;t know, and passes the chat to a
                person at the right moment.
              </p>
            </div>
            <aside className="rounded-2xl bg-brand p-9 text-white">
              <h2 className="mb-3 font-display text-[1.1rem] font-bold">
                Our mission
              </h2>
              <p className="text-lg text-[#e4e1ff]">
                Make fast, honest, helpful support possible for every business,
                big or small.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h2 className="mb-3 font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
              What we stand for
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-line bg-background p-7 transition-colors hover:border-brand"
                >
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold">
                    {value.title}
                  </h3>
                  <p className="text-muted">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto w-[92%] max-w-[1120px]">
            <h2 className="mb-3 font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
              The team
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl border border-line bg-white p-7 text-center transition-colors hover:border-brand"
                >
                  <div className="mx-auto mb-3.5 grid size-[72px] place-items-center rounded-full bg-tint font-display text-[1.6rem] font-extrabold text-brand">
                    {member.initial}
                  </div>
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold">
                    {member.name}
                  </h3>
                  <p className="text-muted">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto w-[92%] max-w-[1120px] rounded-[28px] bg-gradient-to-br from-brand to-[#7a5cf0] px-5 py-10 text-center text-white md:px-8 md:py-14">
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold leading-tight tracking-[-.02em]">
              Want to work with us?
            </h2>
            <p className="mx-auto mt-2.5 mb-7 max-w-[480px] text-[#e4e1ff]">
              Tell us about your customers and we&apos;ll show you what Vela
              can do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-bold text-brand transition hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
  );
}
