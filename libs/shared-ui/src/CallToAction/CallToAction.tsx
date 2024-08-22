'use Strict';
import { ComponentContentCallToAction } from '@sharknado/cms-api';
import Image from 'next/image';
import { Button } from '../button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card';
import React from 'react';

export function CallToAction({
  title,
  subtitle,
  image,
  text,
  buttons,
}: ComponentContentCallToAction) {
  // const {title, image,} = props;
  return (
    <div className="py-10 px-4 bg-gray-100">
      <Card className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden bg-white">
        {process.env.NEXT_PUBLIC_IMAGE_BASE_URL &&
          image?.data?.attributes?.url && (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${image.data.attributes.url}`}
              alt={title ?? ''}
              width={400}
              height={225}
              className="w-full h-56 object-cover"
            />
          )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-gray-800">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-700">{text}</p>
        </CardContent>
        <CardFooter className="p-4 justify-end">
          {buttons?.map((button, idx) => (
            <Button
              key={idx}
              size="default"
              variant={button?.variant}
              className="ml-2"
            >
              {button?.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}

export default CallToAction;
