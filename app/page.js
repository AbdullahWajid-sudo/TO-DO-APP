import Link from "next/link";

export default function Page() {
  return (
    <main className="pt-30 pb-20">
      <section className="max-w-[1350px] mx-auto px-6 mb-16">
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] editorial-shadow bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                data-alt="Minimalist architectural workspace with clean desk, high-end monitor, soft natural light from large window, and indoor plants in a professional setting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8yUAaDb72H4Y6trufyMhTHpM8lqR6ucmjw0rWSSWWzkYUSShpLAwHtQAMAOAD-4uxOJJ2ZHy7jxseIN3awCAUhrBd3CJd0S0wmedNdRfS1gmACGLLAN9Xf8d4PWgi8aQd7szae9duE72Sj-u3qUi5ojuVCpuI7RLBfjavSXEhk6PdGO92A38JBOVjKRc9mzmGbPxj3MkjG7bGOYzrNPuWL4pjpm5OaQ-voxOErYjqhQ9Ms3KQc-tlzCdjyillasJASDfR-1ZJETnE"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-surface-container-low mb-16">
        <div className="max-w-[1440px] mx-auto px-10 text-center">
          <p className="uppercase tracking-widest text-[11px] font-headline font-bold text-outline mb-12">
            Trusted by world-className design teams
          </p>
          <div className="flex flex-wrap justify-center gap-20 opacity-80">
            <img
              alt="Framer"
              className="h-30 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp6l-AgPf_dUExmTcQsEN96jfZsnr26Szj4TQQhtBx86D1DJkBJAelVwVbIVETxhJn9X2f4OnrE3Upapq52SNIuB4Pbk-0htHtZCmDDMKoUTwyd2HIAH6PrfVPhB_DJgMeLdTDHJj2HR7so3hROhG1HMaTehaS5Hn_YM1OWD1Ohf0hca0q8BuTqRwMpVwkxjwSFUwIHjNPUQgDYPF4xVhgTvYQAOj9tz4AFR3O4ekiSrj25RCJL_tWY-99rLopIG0iA57RJTcEyv_i"
            />
            <img
              alt="Vercel"
              className="h-24 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdJzlyWNBqAi05X1BFkjkLJQw5aVwO9IyoXI3fn4it5_-Xz7PX1F3ah4KE9_MfG5TMMzeK1SRBpcRxd6Rkx3_9vqIlDRLlFRxrMvP45K5X6vZmiMTxQMRPiwS6t-vnUJHY6lw35hHH_aP8hH-DxAnu6bILEdUFoeO5yCwdGtFQnnHV4GOFQJJjoSBIVRFyRO8O_-jCF_LNFZD23aTvtGPQCUamIQ_b7ZCNHVzDPhNlvAVZB5gd9SHXgdKXLSGETubfa3LpUnvEOqnM"
            />
            <img
              alt="Linear"
              className="h-20 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj6CAiK10r2eoTOiXFDl9TUS48bdd2TIUHHy4mRguWLbVHRnh2240un_nwXwO28eIXx1E8d3JO6hsBhuzoES70PMc1-r1JkQUAb-MbDYGVxoPccSvI3LAlXOWPSjw0zz8kAlAgV0N6QGeu7l96iTEnraB1tp0v8abNBVBT96UAkOPRe8HIxM5NDzsgvnVcYzDr04SEEQoqpdFb7dhW_z71fTOK0_B2wc3E1NzuDyguJ4FxeFXdCy1TmidkjTkVki2Ee0-M79m48gXh"
            />
            <img
              alt="Stripe"
              className="h-24 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuYYUdYqMj12Tuu0KS6ryoaBSgLy5uiDp3gcv6NWDlKhZlPP0Okaq6YybR_8Fch9-W40oMcQsjm99ovuhaDeikHC59hiL1tFlm4aGQ3lqUAndbf-NqFEVZZg7yASyb33cHho32XdgfqEyrn2XgfIAK6d19wMe4T_zh7As2jsozfwfxlOp_zN2K1u3YWIMBd8WeVZfk6TQ6P2j19NkUfoITZVDIXnVJMsrSAhDGZVN6h4M4cHf51vHLtlMDO4bmQ9Dj2Z8roYtktRNE"
            />
            <img
              alt="Github"
              className="h-30 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7UXyCiBPuxpCnoQYhUofjYMPVZsam04GLoi706cY9d9Nu651pfXlwVqh8H1-5Y28sU1c-sdDyJ8SWHNhcRZFj0iN1ARVAR7VTin5_diJ0BYUvwSeFkKo6yN5Kilvfuxkx774kNGRZlmYWvYTC_yCuXErdg2TNyyxBvkHO24KKy-2_QkcjoZa_sZisQA9OAAevwi3BY8kaq8z3A4Ba6lvf3i-zfk2Dn5aTYot7Bv2ChUFGTkrmAaRYBwPV3Ato5eWdq2oUhUvHBPin"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-10 mb-20">
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
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a female professional designer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqFedG7fbSIEKOb858SB5jmDIlr5PkSjDe0n-Oryqzi87TZJz-A41LJlQK1iYwTfCi4bnEolgmHuUSRY8Xewf-RXKUoL7mhElzhxqMHOzpA3aYjjNcYJpmp9hFqp92RNDdsGNRLbvljuB7EpvWArypV4xrJj_r3m0j0SvWa6aS52yQA3kUGxbieOC8M1NzH7tiRFzzufBmapMzo_3MFdHRF2Tg3QfQMD4qHZpym5uLdMnz_PsD1hrB2719ecjCgQsUYdvKFOlNu626"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden bg-slate-200">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Portrait of a male product architect"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCytA6JGC37RpnbIjkF-hCbJq9JzrkQ7bXpnaZXYZ_VIMikWTuhRrVszqQUfHxNW3BQH6qBYjmfZnGi3SNAGsqIalKZc977rtFW-q83mK9DfzO7YX9A7t4YXCFB1Oeuf5wi9gQDTsdL_8UArlg5z-a3W_6Gb5qQ8Pwq-9gTBkjBa8AKzaPlE5uPrHpWRcrkX6CsvoJvbzYqYMMP27ORxi9QZSUGJzq6sgWim-vrmAkZFsbUX6BmhJmGS1HpNz0BjYQYdpfm01tSBKKv"
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
                <img
                  className="w-16 h-12 object-cover rounded-lg shadow-sm"
                  data-alt="Wide shot of a modern glass skyscraper reflecting the blue sky at sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa9mynOCrdHxbmORPLEi-7QAH8-yz3DgMwSljyfMzGn1Q6bXpA5NU1uNHTkgV-MnpIJTVOCDwP3aVvoQo34ygasVmkrJcgdR235cbeyRO-vTJIlD9cox3vqsiBz-9f_BAPGrPNqCJGNQqRIxWe5ZM5wcII56WlVoocajrakdYIqjB9LbU1nqQFxVLyFAvHBNA-5Xx4vM-vu4GHZZTQ2FdCJT3fbYy-z3s5YN6jcMVy7qvizTSUmIInsaYdqdGek81LqY4JbCfNr40G"
                />
                <span className="material-symbols-outlined text-outline">
                  drag_indicator
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[700px]">
          <div className="md:col-span-8 bg-surface-container-high  rounded-[2rem] p-12 flex flex-col justify-between overflow-hidden relative">
            <div className="relative  z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                view_quilt
              </span>
              <div className="bg-white/10 backdrop-blur-md p-6 max-w-[350px] rounded-2xl">
                <h3 className="font-headline font-bold  text-4xl mb-4">
                  Editorial Layouts
                </h3>

                <p className=" text-lg  max-w-sm">
                  Every list is composed with the balance of a high-end
                  magazine. Visual rhythm meets task management.
                </p>
              </div>
            </div>
            <img
              className="absolute bottom-0 right-0 w-3/4 rounded-tl-3xl shadow-2xl translate-x-10 translate-y-10"
              data-alt="High-resolution mockup of a digital editorial interface showing bold typography and asymmetric grid layout"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRMgX-71QhZ5oS3NH19bQnm001UZcLWxvuNjFuCrlHWVZYtPVx7x88lcNn9ZjZ-gOa4OaK1Ati5FsbOS6aUh84bCkkGZidKEpfDgayqhpQUhpImQLa6hnFEHqwZNxc2h2sPbpq_Q2HgFBsobyMGDHo3JRoB4sIWzAxn_gCk7Ou9zOmK3yTg0sscyKtb43rE9XQmODym4YyUPle50R-fA3CFJrly2MYFwcHU-JqMiAnjjcEd9C6hSyyJXxqr5Y-H2jJq2R2gsFLiWAf"
            />
          </div>
          <div className="md:col-span-4 bg-surface-container   rounded-[2rem] p-12 flex flex-col justify-center">
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
          <div className="md:col-span-4 bg-surface-container-high rounded-[2rem] p-12 flex flex-col justify-end">
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
          <div className="md:col-span-8 bg-surface-container-low rounded-[2rem] p-12 border border-outline-variant/10 flex items-center justify-between overflow-hidden">
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
          <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-10 relative z-10">
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
              <img
                className="w-full h-full object-cover"
                data-alt="Close-up portrait of a female lead designer with an elegant and confident expression"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANX66KItCcKv82QLtUIMc5SqTxrnMqcCRuQP_bZyvAmyM16w8d6BNTbMVnGSpLWtMbvV_zd4GaEvrMCdJzMuhRGSe_NGfD8gJtxzF9kPCXhi7twqb0PDtufcza1J4w2v7pWmXbMiy48ls2stmquEDxhpvDoNpFfsOKSAsur_Z6toOj6SisLxZCMd0oP4IC_MB1myzYppH_UkpCc2VUMfkms94Rng7h4lA9w4zbpxKwO7XpJullmCJpUfAuRu7zqFqXCde6G4SQJ3Co"
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

      <section className="max-w-[1440px] mx-auto px-10 py-20">
        <div className="text-center mb-20">
          <h2 className="font-headline font-extrabold text-5xl tracking-tight mb-6">
            Simple, Transparent.
          </h2>
          <p className="text-on-surface-variant text-lg">
            No hidden tiers. Just pure productivity for you or your entire firm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-surface-container-low p-12 rounded-[2rem] editorial-shadow border border-outline-variant/10 flex flex-col">
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
            <ul className="space-y-4 mb-12 flex-grow">
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

          <div className="bg-on-surface text-white p-12 rounded-[2rem] editorial-shadow flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-[10px] uppercase font-black tracking-widest px-6 py-2 rounded-bl-xl">
              Popular
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2">Studio</h3>
            <p className="text-outline mb-8">For collaborative design teams.</p>
            <div className="flex items-baseline mb-12">
              <span className="text-5xl font-extrabold font-headline">$39</span>
              <span className="text-outline ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
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
            <button className="w-full hero-gradient border border-white/30 py-4 cursor-pointer rounded-xl text-white font-bold hover:bg-white/10 transition-all duration-300active:scale-95 transition-transform">
              Choose Studio
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-10 mb-10">
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
