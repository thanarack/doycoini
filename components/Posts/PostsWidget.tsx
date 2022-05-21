import { useState } from 'react';
import faker from '@faker-js/faker/locale/en';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

type Props = {
  data: Array<any>;
};

const PostsWidget: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <ul className="mt-5 grid grid-cols-3 gap-4">
        {data.map((value: any, index: any) => (
          <li key={index}>
            <Link href={`/p/${index + 1}`} passHref={true}>
              <a className="post">
                <div className="post-image">
                  <Image
                    className="rounded"
                    src={value.image}
                    width={402}
                    height={227}
                    alt={value?.title}
                  />
                </div>
                <label className="post-title">{value?.title}</label>
                <label className="post-date">
                  {dayjs().to(dayjs(value?.createDate))}
                </label>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className="mt-8 text-center">
              <button className="btn btn-auto btn-sky">ดูเพิ่มเติม</button>
            </div> */}
    </>
  );
};

export default PostsWidget;
