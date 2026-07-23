import { Link, NavLink } from 'react-router-dom';
import ByqTag from './ByqTag';

// byq: modulabs-navigation-bar1
function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-[color:var(--cream-88)] text-[#0a0a0b]'
        : 'hover:bg-[color:var(--cream-88)] hover:text-[#0a0a0b]'
    }`;

  return (
    <div className="fixed left-0 right-0 top-6 z-[999] px-8">
      <ByqTag>modulabs-navigation-bar1</ByqTag>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5 px-4 py-2 border border-[color:var(--cream-16)] rounded-lg bg-[#18181880] backdrop-blur-sm">
          <Link to="/" className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}images/logo-mark.png`} alt="Alpha Gym" className="h-5 w-auto" />
          </Link>
          <div className="w-px h-5 bg-[color:var(--cream-16)]" />
          <nav className="flex items-center gap-1 text-xs font-medium">
            <NavLink to="/facility" className={linkClass}>Facility</NavLink>
            <NavLink to="/classes" className={linkClass}>Classes</NavLink>
            <NavLink to="/recovery" className={linkClass}>Recovery</NavLink>
            <NavLink to="/supplements" className={linkClass}>Supplements</NavLink>
            <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <a href="https://alphabarbershopwoonona.com/" className={linkClass({ isActive: false })}>Barbershop</a>
          </nav>
        </div>
        <a
          href="https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true"
          className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)] border border-[#0a0a0b14]"
        >
          <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
          Be a Member
        </a>
      </div>
    </div>
  );
}

export default Navbar;
