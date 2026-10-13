import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-ink py-14 text-[#c4c9e2]">
      <div className="mx-auto grid w-[92%] max-w-[1120px] gap-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="flex w-fit items-center gap-2.5 font-display text-[1.3rem] font-extrabold text-white"
          >
            <span className="grid size-[34px] place-items-center rounded-[10px_10px_10px_2px] bg-brand text-base text-white">
              V
            </span>
            Vela
          </Link>
          <p className="mt-3 max-w-[300px] text-[#c4c9e2]">
            AI chatbots that answer customers, book meetings and hand off to
            your team.
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-base font-bold text-white">
            Pages
          </h2>
          <Link className="block py-[3px] hover:text-mint" href="/">
            Home
          </Link>
          <Link className="block py-[3px] hover:text-mint" href="/about">
            About us
          </Link>
          <Link className="block py-[3px] hover:text-mint" href="/contact">
            Contact us
          </Link>
        </div>
        <div>
          <h2 className="mb-3 font-display text-base font-bold text-white">
            Contact
          </h2>
          <a
            className="block py-[3px] hover:text-mint"
            href="mailto:hello@vela.ai"
          >
            hello@vela.ai
          </a>
          <a
            className="block py-[3px] hover:text-mint"
            href="tel:+910000000000"
          >
            +91 00000 00000
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 w-[92%] max-w-[1120px] border-t border-[#2c3454] pt-5 text-sm">
        &copy; 2026 Vela AI. All rights reserved.
      </div>
    </footer>
  );
}
