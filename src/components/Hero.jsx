import { forwardRef } from "react";

const Hero = forwardRef(function Hero(_props, titleRef) {
  return (
    <header className="mx-auto max-w-[1200px] px-6 pb-8 pt-[clamp(52px,10vh,104px)] sm:px-10 lg:px-14">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-inkFaint">
        Cooked &amp; Photographed at home
      </p>
      <h1
        ref={titleRef}
        className="font-display text-[clamp(44px,8vw,84px)] font-medium leading-[0.98] tracking-[-0.02em]"
      >
        The Kitchen <em className="font-normal italic">Log</em>
      </h1>
      <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.5vw,17px)] text-inkSoft">
        A running log of every dish I've cooked — what it was, and when.
      </p>
    </header>
  );
});

export default Hero;
