import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';

export const SocialNetWork = () => {
  const data = [
    {
      title: 'Github',
      icon: <BsGithub size={28} />,
    },
    {
      title: 'Instagram',
      icon: <BsInstagram size={28} />,
    },
    {
      title: 'Linkedin',
      icon: <BsLinkedin size={28} />,
    },
    {
      title: 'Telegram',
      icon: <BsTelegram size={28} />,
    },
  ];
  return (
    <div className="flex flex-wrap space-x-8">
      {data.map((item, index) => (
        <div key={index} title={item.title} className="cursor-pointer hover:text-white/50">
          {item.icon}
        </div>
      ))}
    </div>
  );
};
