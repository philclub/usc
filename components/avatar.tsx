import { url } from 'node:inspector';

type Props = {
  name: string;
  picture: string;
  url: string;
};

const Avatar = ({ name, picture, url }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">
        <a
          href={url}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {name}
        </a>
      </div>
    </div>
  );
};

export default Avatar;
