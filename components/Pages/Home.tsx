import { useState } from 'react';
import faker from '@faker-js/faker/locale/en';
import PostsWidget from '../Posts/PostsWidget';
import Title from '../Common/Title';
import LotteryWidget from '../Lottery/LotteryWidget';
import CryptocurrencyWidget from '../Cryptocurrency/CryptocurrencyWidget';
import Navigation from '../Navigation';
import Footer from '../Navigation/Footer';

const Home = (props: any) => {
  const [posts, setPosts] = useState(props.pageProps.mockNews || []);

  return (
    <div>
      <Navigation />
      <div className="container mx-auto mt-6 mb-24">
        <div className="grid grid-cols-1 gap-6">
          <div className="box-content">
            <Title title="เหรียญ, คริปโต & แชท" />
            <CryptocurrencyWidget />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:mt-8">
          <div className="box-content">
            <Title title="ตรวจหวย, ลอตเตอรี่"  />
            <LotteryWidget className="mt-5"/>
          </div>
          <div className="box-content">
            <Title title="เรื่องน่าสนใจ, การลงทุน" />
            <PostsWidget data={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Home.getInitialProps = async () => {
  const mockNews = new Array(8).fill('1').map((value, id) => {
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
