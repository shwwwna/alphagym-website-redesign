import { Link } from 'react-router-dom';
import ByqTag from './ByqTag';

// byq: modulabs-footer-1
function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-8 bg-[color:var(--bg)]">
      <ByqTag>modulabs-footer-1</ByqTag>
      <div className="max-w-[1800px] mx-auto flex flex-col gap-24">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-5">
              <div className="font-mono-label text-[color:var(--cream-64)]">Explore</div>
              <div className="flex flex-col gap-1">
                <Link to="/facility" className="text-[color:var(--cream-88)]">Facility</Link>
                <Link to="/classes" className="text-[color:var(--cream-88)]">Classes</Link>
                <Link to="/recovery" className="text-[color:var(--cream-88)]">Recovery</Link>
                <Link to="/supplements" className="text-[color:var(--cream-88)]">Supplements</Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-mono-label text-[color:var(--cream-64)]">Join</div>
              <div className="flex flex-col gap-1">
                <Link to="/pricing" className="text-[color:var(--cream-88)]">Memberships</Link>
                <Link to="/contact" className="text-[color:var(--cream-88)]">Contact</Link>
                <a href="https://alphabarbershopwoonona.com/" className="text-[color:var(--cream-88)]">Barbershop</a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-mono-label text-[color:var(--cream-64)]">Follow</div>
              <div className="flex flex-col gap-1">
                <a href="https://www.instagram.com/alphagym.au/" className="text-[color:var(--cream-88)]">Instagram</a>
                <a href="https://www.facebook.com/alphagymwoonona" className="text-[color:var(--cream-88)]">Facebook</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-[448px]">
            <p className="text-[color:var(--cream-64)] text-base leading-6 m-0">
              Gym, recovery, supplements and barbershop — all under one roof in the Northern Illawarra. Open 24/7, 365.
            </p>
            <div>
              <div className="font-mono-label text-[color:var(--cream-88)] mb-2">Contact</div>
              <a href="mailto:woonona@alphagymfitness.com.au" className="block text-[color:var(--cream-88)] underline">woonona@alphagymfitness.com.au</a>
              <div className="text-[color:var(--cream-88)]">1/417–421 Princes Hwy, Woonona NSW 2517</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end gap-8 flex-wrap">
          <span className="text-lg font-semibold text-[color:var(--cream)]">
            ALPHA<span className="text-[color:var(--accent)]">.</span>GYM
          </span>
          <div className="font-mono-label text-[color:var(--cream-64)] text-right">
            © 2026 Alpha Gym &amp; Fitness Centre
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
