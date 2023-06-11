import Link from 'next/link';


export const Navbar = () => (
  <>
    <nav className='font-montserrat'>
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row text-lg mt-0 space-x-8">
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
