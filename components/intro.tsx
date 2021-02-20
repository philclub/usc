import { CLUB_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="flex-col lg:flex-row flex items-center md:justify-between mt-12 mb-12">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        {CLUB_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Join us on{' '}
        <a
          href="https://usc.philclub.org/discord/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Discord.
        </a>{' '}
      </h4>
    </section>
  );
};

export default Intro;
