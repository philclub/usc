import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 sm:px-6 md:px-7 lg:px-12 xl:px-48">
      {children}
    </div>
  );
};

export default Container;
