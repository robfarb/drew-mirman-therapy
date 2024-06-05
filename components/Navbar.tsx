import Link from 'next/link';


export const Navbar = () => (
  <>
    <nav className='font-montserrat'>
      <div className="max-w-screen-xl px-4 py-3 mx-auto font-semibold text-black">
        <div className="flex items-center">
          <ul className="flex flex-row text-lg mt-0 space-x-8">
            <li>
              <Link href="/" className="hover:underline" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
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
