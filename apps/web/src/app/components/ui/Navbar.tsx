'use client';
import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PrimaryBtn, SecondaryBtn } from './LandBtn';

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl shadow-sm text-foreground lg:px-20 px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-10 px- py-3 sm:px-8 sm:py-4 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/zmaths-icon.svg"
            alt="Z-Maths Logo"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
          />
          <span className="text-base font-medium sm:text-lg">Z-Maths</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <PrimaryBtn
            txt="Login"
            href="/login"
            comp={
              <LogIn className="h-5 w-5 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:scale-110 sm:h-4 sm:w-4" />
            }
          />

          <SecondaryBtn
            txt="Sign Up"
            href="/signup"
            comp={
              <UserPlus className="h-5 w-5 shrink-0 transition-all duration-200 group-hover:-rotate-6 group-hover:translate-x-0.5 group-hover:scale-110 sm:h-4 sm:w-4" />
            }
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;