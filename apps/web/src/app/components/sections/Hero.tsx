import { PrimaryBtn, SecondaryBtn } from '../ui/LandBtn'
import Image from 'next/image'

const topics = ['Algebra', 'Calculus', 'Geometry', 'Trigonometry', 'Statistics']

// fades the portrait into the background on its left, right and bottom edges
const imageMask = `
  linear-gradient(to right, transparent 0%, #000 16%, #000 100%),
  linear-gradient(to left, transparent 0%, #000 28%, #000 100%),
  linear-gradient(to top, transparent 0%, #000 20%, #000 100%),
  linear-gradient(to bottom, transparent 0%, #000 12%, #000 100%)
`;
function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#F4F4F4] to-[#EAEAEA] text-black">
   \
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, #000 40%, transparent 100%)',
        }}
      />

      {/* right-side gradient wash: deepens the gray toward the edge so the portrait dissolves into it */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full lg:w-3/5"
        style={{
          background:
            'linear-gradient(to left, rgba(205,205,205,0.85) 0%, rgba(222,222,222,0.55) 35%, transparent 100%)',
        }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:py-20">
        {/* left section --> text block */}
      
{/* left section — refined editorial text block */}
<div className="order-2 flex flex-col lg:order-1 lg:pr-6 xl:pr-12">

  {/* Instructor identity */}
  <div className="flex flex-col items-start">
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-700 sm:text-sm">
        Mr. Ezz Eldein
      </span>
    </div>
  </div>

  {/* Headline */}
  <h1 className="mt-8 max-w-2xl text-neutral-950 lg:mt-10">
    <span className="block text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-8xl">
      Z-Maths<span className="text-neutral-400">.</span>
    </span>

    <span className="mt-5 block max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-neutral-700 sm:text-4xl md:text-5xl">
      Mathematics,
      <span className="block text-neutral-400">
        made understandable.
      </span>
    </span>
  </h1>

  {/* Supporting copy */}
  <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
    Stop memorizing steps without understanding why they work.
    Build your mathematical intuition, solve with confidence,
    and turn difficult concepts into skills you can rely on.
  </p>

  {/* Actions */}
  <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
    <PrimaryBtn txt="Start learning" href="/dashboard" />
    <SecondaryBtn txt="Explore the platform" href="/about" />
  </div>

  {/* Subject navigation */}
  <div className="mt-10 max-w-xl border-t border-neutral-900/10 pt-5 sm:mt-12">
    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400 sm:text-xs">
      Explore your subjects
    </p>

    <ul className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm font-medium text-neutral-600 sm:gap-x-4">
      {topics.map((topic) => (
        <li
          key={topic}
          className="transition-colors duration-200 hover:text-neutral-950"
        >
          {topic}
        </li>
      ))}
    </ul>
  </div>
</div>

        {/* right section --> image block */}
        <div className="heroImg relative order-1 flex items-center justify-center lg:order-2 lg:justify-end">
          {/* soft neutral spotlight behind the portrait */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl"
          />
          <div
            className="relative bg-transparent"
            style={{
              WebkitMaskImage: imageMask,
              maskImage: imageMask,
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect',
            }}
          >
            <Image
              src="/z-math-hero.webp"
              alt="Mr. Ezz Eldein, mathematics teacher"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full max-w-[520px] border-0 shadow-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero