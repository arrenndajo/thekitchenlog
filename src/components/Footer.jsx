export default function Footer({ count }) {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 border-t border-line px-6 pb-14 pt-8 font-mono text-xs tracking-[0.08em] text-inkFaint sm:px-10 lg:px-14">
      <span>
        {count} {count === 1 ? "entry" : "entries"}
      </span>
      <span>
        Kept by{" "}
        <a
          href="https://jayparmar9.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-line text-inkSoft transition-colors duration-200 hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-[3px]"
        >
          Jay Parmar
        </a>
      </span>
    </footer>
  );
}
