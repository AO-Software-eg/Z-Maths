import React from 'react';
import Link from 'next/link';

type BtnProps = { txt: string; href: string; comp?: React.ReactNode };

const base =
  'pointerB group cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-3xl font-semibold transition-all duration-300 hover:opacity-90 ' +
  'px-3.5 py-1.5 text-sm sm:px-5 sm:py-2 ';

const Icon = ({ comp }: { comp?: React.ReactNode }) =>
  comp ? <span className="ml-2 hidden sm:inline-flex">{comp}</span> : null;

function PrimaryBtn({ txt, href, comp }: BtnProps) {
  return (
    <Link href={href} className={`text-white ${base} bg-[#171717] `}>
      {txt}
      <Icon comp={comp} />
    </Link>
  );
}

function SecondaryBtn({ txt, href, comp }: BtnProps) {
  return (
    <Link
      href={href}
      className={`${base} border border-secondary-foreground bg-transparent text-secondary-foreground`}
    >
      {txt}
      <Icon comp={comp} />
    </Link>
  );
}

export { PrimaryBtn, SecondaryBtn };