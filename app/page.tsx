import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

const partners = [
  {
    id: 1,
    name: "On-Site Pro",
    src: "/homepage/next.png",
    alt: "On-Site Pro contractor management logo",
    width: 140, // Wider for text
    height: 48, // Standard height
  },
  {
    id: 2,
    name: "Global Solutions",
    src: "/homepage/vercel.png",
    alt: "Global Solutions technology partner logo",
    width: 160,
    height: 48,
  },
  {
    id: 3,
    name: "Global Solutions",
    src: "/homepage/Javascript.png",
    alt: "Global Solutions technology partner logo",
    width: 160,
    height: 48,
  },
  {
    id: 4,
    name: "Global Solutions",
    src: "/homepage/prisma.png",
    alt: "Global Solutions technology partner logo",
    width: 160,
    height: 48,
  },
  {
    id: 5,
    name: "Global Solutions",
    src: "/homepage/github.png",
    alt: "Global Solutions technology partner logo",
    width: 160,
    height: 48,
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="pt-32 pb-20">
      <section className="max-w-337 mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
          <div className="lg:col-span-7 mb-20 flex flex-col justify-start">
            <p className="uppercase tracking-widest text-[11px] font-headline font-bold text-primary mb-6">
              Welcome to pro To-Do app
            </p>
            <h1 className="font-headline font-extrabold text-[4.5rem] leading-[1.05] tracking-tighter text-on-surface mb-10">
              Focus on the <br />
              Significant.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed mb-12">
              Architect is a spatial workspace for your thoughts, designed for
              intentional professionals who value clarity over clutter.
            </p>
            <div className="flex items-center space-x-8">
              <Link
                className="hero-gradient bg-primary px-8 py-4 rounded-full text-white font-bold cursor-pointer text-lg hover:bg-primary-container active:scale-95 transition-transform editorial-shadow"
                href="/login"
              >
                Start Designing Your Day
              </Link>
              <div className="flex items-center border border-primary px-8 py-4 cursor-pointer rounded-full hover:bg-primary/10 text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-primary">
                  play_circle
                </span>
                <span> Watch the Manifesto</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 editorial-shadow bg-surface-container-low">
              <Image
                src="/homepage/banner.png"
                alt="Minimalist architectural workspace"
                fill
                unoptimized
                className="object-cover grayscale-[0.2] contrast-[1.1]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-26 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* -- Section Header -- */}
          <div className="text-center items-center mb-16 md:mb-16">
            <p className="text-label text-on-surface-variant mx-auto font-medium tracking-widest uppercase mb-3">
              Our Network
            </p>
            <h2 className="text-headline font-manrope font-bold text-on-surface text-3xl md:text-5xl lg:text-6xl max-w-[90vw] lg:max-w-7xl mx-auto text-center leading-tight">
              Trusted by World-Class Design Teams
            </h2>
            <div className="h-1.5 w-24 bg-web mx-auto mt-6 rounded-full opacity-30" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-12 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group flex items-center justify-center p-4 h-24 w-full"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-18 w-auto object-contain opacity-80  group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto px-10 mb-20">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-headline font-extrabold text-5xl tracking-tight mb-6">
            Workflow as Art.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Traditional lists are flat. Architect uses depth and spatial
            hierarchy to help you visualize priority without the noise.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-3xl p-1 md:p-12 editorial-shadow max-w-5xl mx-auto border border-outline-variant/10">
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-surface rounded-2xl hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center space-x-6">
                <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center cursor-pointer hover:border-primary"></div>
                <div>
                  <h4 className="font-headline font-semibold text-lg">
                    Finalize Brand Guidelines for Apollo
                  </h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
                      Critical
                    </span>
                    <span className="text-on-surface-variant text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      14:00 Today
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden bg-slate-200">
                  <Image
                    alt=""
                    width={100} // Explicit width in pixels
                    height={24} // Explicit height in pixels
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a female professional designer"
                    src="/homepage/FemaleAvatar.png"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden bg-slate-200">
                  <Image
                    alt=""
                    width={100} // Explicit width in pixels
                    height={24} // Explicit height in pixels
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a male product architect"
                    src="/homepage/MaleAvatar.png"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-surface rounded-2xl hover:translate-x-2 transition-transform duration-300 ml-8 border-l-2 border-primary/20">
              <div className="flex items-center space-x-6">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center cursor-pointer">
                  <span className="material-symbols-outlined text-white text-sm">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg text-on-surface-variant line-through opacity-60">
                    Review motion studies
                  </h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
                      Design
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-surface-container-high rounded-2xl scale-[1.02] shadow-xl shadow-primary/5">
              <div className="flex items-center space-x-6">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center cursor-pointer"></div>
                <div>
                  <h4 className="font-headline font-semibold text-lg">
                    Architectural Site Visit
                  </h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
                      Personal
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Image
                  alt=""
                  width={100} // Explicit width in pixels
                  height={24} // Explicit height in pixels
                  // className="h-6 w-auto opacity-50 grayscale"
                  className="w-16 h-12 object-cover rounded-lg shadow-sm"
                  data-alt="Wide shot of a modern glass skyscraper reflecting the blue sky at sunset"
                  src="/homepage/building.png"
                />
                <span className="material-symbols-outlined text-outline">
                  drag_indicator
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto px-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-175">
          <div className="md:col-span-6 bg-surface-container-high rounded-4xl p-12 flex flex-col justify-between overflow-hidden relative">
            {/* -- Left Side Text (Unchanged) -- */}
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                view_quilt
              </span>
              <div className="bg-white/10 backdrop-blur-md p-6 max-w-87 rounded-2xl">
                <h3 className="font-headline font-bold text-4xl mb-4">
                  Editorial Layouts
                </h3>
                <p className="text-lg max-w-sm">
                  Every list is composed with the balance of a high-end
                  magazine. Visual rhythm meets task management.
                </p>
              </div>
            </div>

            <Image
              src="/homepage/Mobile.png"
              alt="Mobile task list preview"
              width={1000}
              height={1500}
              unoptimized
              priority
              className="absolute bottom-0 right-0 aspect-ratio:3/4 h-auto w-100 md:w-100 lg:w-100 object-contain shadow-2xl rounded-tl-3xl translate-x-4 translate-y-1"
            />
          </div>
          <div className="md:col-span-6 bg-surface-container   rounded-4xl p-12 flex flex-col justify-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              target
            </span>
            <h3 className="font-headline font-bold  text-3xl mb-4">
              Surgical Precision
            </h3>
            <p className=" text-lg">
              Filter, sort, and slice your workload with powerful modifiers
              designed for speed.
            </p>
          </div>
          <div className="md:col-span-4 bg-surface-container-high rounded-4xl p-12 flex flex-col justify-end">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              hourglass_empty
            </span>
            <h3 className="font-headline font-bold text-3xl mb-4">
              Deep Work Focus
            </h3>
            <p className="text-on-surface-variant text-lg">
              Eliminate notifications. Architect enters a focus mode that honors
              your attention span.
            </p>
          </div>
          <div className="md:col-span-8 bg-surface-container-low rounded-4xl p-12 border border-outline-variant/10 flex items-center justify-between overflow-hidden">
            <div className="max-w-sm">
              <h3 className="font-headline font-bold text-4xl mb-4">
                Seamless Sync
              </h3>
              <p className="text-on-surface-variant text-lg">
                Your workspace, consistent across every device. No loading bars,
                no friction.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-32 h-48 bg-surface-container rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant">
                  smartphone
                </span>
              </div>
              <div className="w-48 h-32 bg-surface-container rounded-2xl self-end flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant">
                  laptop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-on-surface text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-200 h-200 bg-primary rounded-full blur-[160px]"></div>
        </div>
        <div className="max-w-360 mx-auto px-10 relative z-10">
          <span className="material-symbols-outlined text-primary text-6xl mb-12">
            format_quote
          </span>
          <blockquote className="font-headline font-light text-5xl md:text-7xl leading-[1.1] tracking-tight mb-16 max-w-5xl">
            Architect has transformed our design process. It doesn&apos;t just
            manage tasks; it clarifies our
            <span className="text-primary italic"> vision</span>
          </blockquote>
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                alt=""
                width={100} // Explicit width in pixels
                height={24} // Explicit height in pixels
                className="w-full h-full object-cover"
                data-alt="Close-up portrait of a female lead designer with an elegant and confident expression"
                src="/homepage/femaleavatar2.png"
              />
            </div>
            <div>
              <p className="font-headline font-bold text-xl">Elena Vance</p>
              <p className="text-outline uppercase tracking-widest text-xs font-bold mt-1">
                Lead Designer — Lumos Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto px-10 py-20">
        <div className="text-center mb-20">
          <h2 className="font-headline font-extrabold text-5xl tracking-tight mb-6">
            Simple, Transparent.
          </h2>
          <p className="text-on-surface-variant text-lg">
            No hidden tiers. Just pure productivity for you or your entire firm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-surface-container-low p-12 rounded-4xl editorial-shadow border border-outline-variant/10 flex flex-col">
            <h3 className="font-headline font-bold text-2xl mb-2">
              Individual
            </h3>
            <p className="text-on-surface-variant mb-8">
              For the intentional professional.
            </p>
            <div className="flex items-baseline mb-12">
              <span className="text-5xl font-extrabold font-headline">$12</span>
              <span className="text-outline ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-12 grow">
              <li className="flex items-center space-x-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Unlimited Spatial Boards</span>
              </li>
              <li className="flex items-center space-x-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Editorial Customization</span>
              </li>
              <li className="flex items-center space-x-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Deep Work Mode</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-primary text-primary cursor-pointer font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Choose Individual
            </button>
          </div>

          <div className="bg-on-surface text-white p-12 rounded-4xl editorial-shadow flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-[10px] uppercase font-black tracking-widest px-6 py-2 rounded-bl-xl">
              Popular
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2">Studio</h3>
            <p className="text-outline mb-8">For collaborative design teams.</p>
            <div className="flex items-baseline mb-12">
              <span className="text-5xl font-extrabold font-headline">$39</span>
              <span className="text-outline ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-12 grow">
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Everything in Individual</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Shared Team Library</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Audit Logs &amp; Permission Control</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span>Priority Studio Support</span>
              </li>
            </ul>
            <button className="w-full hero-gradient border border-white/30 py-4 cursor-pointer rounded-xl text-white font-bold hover:bg-white/10  duration-300 active:scale-95 transition-transform">
              Choose Studio
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto px-10 mb-10">
        <div className="hero-gradient rounded-[3rem] p-20 text-center bg-on-surface text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96  rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline font-extrabold text-6xl tracking-tight mb-8">
              Start Designing Your Workflow.
            </h2>
            <p className="text-on-primary-container text-xl mb-12 opacity-90">
              Join 10,000+ professionals who have reclaimed their focus with
              Architect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl active:scale-95 transition-transform editorial-shadow hover:bg-primary hover:text-white">
                Get Started for Free
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 px-10 py-5 rounded-full font-bold text-xl transition-colors">
                Book a Studio Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
