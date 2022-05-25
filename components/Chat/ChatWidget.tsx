import { useState } from 'react';
import { GetIcon } from '../../utils/icon';

const ChatWidget = () => {
  const [chatMessage, setChatMessage] = useState('');

  const onChatEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      setChatMessage('');
      event.preventDefault();
    }
  };

  return (
    <div id="chat-widget">
      <div className="flex flex-row justify-between px-3 gap-1 py-2 bg-neutral-200 items-baseline">
        {/* <div className="text-base font-medium text-neutral-500 flex gap-1 ">
          <span>กระดานแชทนักลงทุน</span>
        </div> */}
        <div className="flex gap-1 flex-row items-baseline text-sm">
          <div className="block self-center text-neutral-500">
            <GetIcon mode="outline" name="chevron-left" />
          </div>
          <span className="items-baseline flex-row text-neutral-500 font-medium">
            กลับห้องหลัก
          </span>
        </div>
      </div>
      <div id="chat-container" className="h-full">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-9 flex flex-col justify-between">
            <div id="chat-message" className="px-3">
              Messages
            </div>
            <div id="chat-enter" className="w-full border-t border-neutral-200">
              <textarea
                value={chatMessage}
                onChange={(value) => setChatMessage(value.target.value)}
                onKeyDown={onChatEnter}
                placeholder="ทักทายเพื่อนๆ นักลงทุนดูหน่อยสิ 😄"
                className="w-full rounded resize-none focus:outline-none px-3 py-3 font-normal text-sm text-neutral-500 bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-3 border-l">
            <div id="chat-users" className="px-2">
              Users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
