import { useState } from 'react';
import faker from '@faker-js/faker/locale/en';
import Posts from '../Posts/PostsLists';
import Title from '../Common/Title';
import LotteryWidget from '../Lottery/LotteryWidget';

const Home = (props: any) => {
  const [posts, setPosts] = useState(props.pageProps.mockNews || []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="box-content">
            <Title title="เหรียญคริปโต" />
            <div className="h-48"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="box-content">
            <Title title="ตรวจหวย, ลอตเตอรี่" />
            <LotteryWidget />
          </div>
          <div className="box-content">
            <Title title="เรื่องน่าสนใจ - การลงทุน" />
            <Posts data={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const mockNews = new Array(6).fill('1').map((value, id) => {
    const title = faker.lorem.paragraph(1);
    // const title =
    //   'ศรีลังกาวิปโยค! ความรุนแรง-จลาจล นับวันยิ่งดำดิ่งสู่ความวุ่นวาย';
    const createDate = +faker.date.recent();
    const image = 'https://api.lorem.space/image?w=402&h=227';
    return {
      id,
      image,
      title,
      createDate,
    };
  });
  return { mockNews };
};

export default Home;
