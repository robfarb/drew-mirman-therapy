import Link from 'next/link';
import {useState} from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="mb-20">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row text-lg mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link href="/" className="hover:underline" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
