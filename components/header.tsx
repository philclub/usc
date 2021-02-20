import Link from 'next/link';
import { CLUB_NAME } from '../lib/constants';

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
      <Link href="/">
        <a className="hover:underline">{CLUB_NAME}</a>
      </Link>
    </h2>
  );
};

export default Header;
