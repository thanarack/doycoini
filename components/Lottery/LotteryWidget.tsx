import Link from 'next/link';
import { GetIcon } from '../../utils/icon';

const LotteryWidget = ({ ...rest }) => {
  return (
    <div id="lottery-widget" {...rest}>
      <h3 className="text-center text-3xl font-bold text-neutral-800">
        ตรวจสลากกินแบ่งรัฐบาล
      </h3>
      <div className="w-full flex justify-center">
        <div className="flex mt-6 gap-4 flex-row justify-center items-center md:w-9/12 w-full">
          <div className="w-full">
            <select className="w-full border text-neutral-400 text-base px-2 h-10 text-center">
              <option>16 พฤษภาคม 2565</option>
              <option>2 พฤษภาคม 2565</option>
            </select>
          </div>
          <div className="w-full relative">
            <form>
              <input
                placeholder="กรอกเลขสลาก"
                maxLength={6}
                className="w-full text-neutral-500 border text-base px-2 h-10 text-center focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 h-10 bg-rose-600 px-4 text-white focus:outline-none"
              >
                <GetIcon mode="outline" name="search" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/lottery/16052565" passHref>
          <a className="flex flex-row items-center text-xl font-bold  justify-center text-neutral-500 gap-1">
            <span>ผลสลากฯ งวดที่ 16 พ.ค 2565</span>
            <GetIcon mode="outline" name="arrow-sm-right" />
          </a>
        </Link>
      </div>
      <div className="flex mt-6 justify-center items-center flex-col">
        <label className="text-sm font-semibold text-neutral-500">
          รางวัลที่ 1 ✨
        </label>
        <label className="mt-2 text-6xl font-bold text-emerald-500">
          155012
        </label>
      </div>
      <div className="flex mt-6 flex-row justify-around px-3">
        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold text-neutral-500">
            เลขหน้า 3 ตัว
          </label>
          <label className="text-3xl mt-2 font-bold text-neutral-800">
            247
          </label>
          <label className="text-3xl mt-2 font-bold text-neutral-800">
            736
          </label>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold text-neutral-500">
            เลขหน้า 3 ตัว
          </label>
          <label className="text-3xl mt-2 font-bold text-neutral-800">
            236
          </label>
          <label className="text-3xl mt-2 font-bold text-neutral-800">
            540
          </label>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold text-neutral-500">
            เลขท้าย 2 ตัว
          </label>
          <label className="text-6xl mt-2 font-bold text-rose-500">06</label>
        </div>
      </div>
    </div>
  );
};

export default LotteryWidget;
