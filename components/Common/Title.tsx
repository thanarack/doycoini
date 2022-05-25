import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  title: string;
  colorClass?: string;
};

const Title: React.FC<Props> = (props) => {
  const { title, colorClass = 'bg-neutral-200' } = props;

  return (
    <>
      <h2
        className={classNames(
          'text-2xl py-1 font-ibm font-semibold text-neutral-800'
        )}
      >
        {title}
      </h2>
      <hr className={classNames(colorClass,'h-1 rounded-full border-0')} />
    </>
  );
};

export default Title;
