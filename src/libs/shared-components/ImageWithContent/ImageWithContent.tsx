import React from 'react';
import { ImageWithContentProps } from './ImageWithContent.model';
import { Button } from '../Button';
import Image from 'next/image';
import styles from './ImageWithContent.module.scss';

const ImageWithContent: React.FC<ImageWithContentProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className={`flex w-full ${styles.container}`}>
      <div className="mx-6 mb-4 mt-8 sm:my-10 sm:ml-16 sm:flex sm:flex-row">
        <Image
          src={image || '/fallbackImage.svg'}
          alt={title}
          width={80}
          height={80}
          layout="responsive"
          className="mb-4 w-full sm:mb-0 sm:mr-10"
        />

        <div className="sm:ml-10 sm:flex sm:flex-col sm:pr-16 sm:pt-8 md:pt-0 lg:pt-8">
          <h2 className={`${styles.title} mb-4 sm:mb-4`}>{title}</h2>
          <p className={`${styles.description} mb-4 sm:mb-6`}>{description}</p>
          <Button
            url={buttonUrl}
            variant="bordered"
            color="primary"
            className={`mb-8 justify-center sm:justify-start ${styles.button}`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithContent;
