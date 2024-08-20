import { ComponentContentPageHero } from '@sharknado/cms-api';
import styles from './ContentPageHero.module.css';
import { Button } from '../button';

const ContentPageHero = function ({
  title,
  subtitle,
  background_image,
  buttons,
  text,
}: ComponentContentPageHero) {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${process.env.IMAGE_BASE_URL}${background_image.data.attributes.url})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-lg md:text-xl text-gray-200">{subtitle}</p>
        <p className="my-8 text-white">{text}</p>
        {buttons.map((button, idx) => (
          <Button
            key={idx}
            size="default"
            variant={button.variant}
            className="ml-2"
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export { ContentPageHero };
