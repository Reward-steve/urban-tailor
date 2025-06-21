import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal text-gray-800 dark:text-gray-200">
              “I ordered an Ankara gown and it fit so perfectly. Urban Tailor
              really brought my style to life. The delivery was also super
              fast!”
            </p>
            <Avatar
              image={userOneImg}
              name="Esther A."
              title="Customer, Lagos"
            />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal text-gray-800 dark:text-gray-200">
              “I wore my custom senator outfit to a wedding, and everyone asked
              where I got it. Urban Tailor nailed it.”
            </p>
            <Avatar image={userTwoImg} name="David M." title="Client, Abuja" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal text-gray-800 dark:text-gray-200">
              “Professional service, amazing quality. I now order all my
              traditional and corporate wears from Urban Tailor.”
            </p>
            <Avatar
              image={userThreeImg}
              name="Micheal T."
              title="Repeat Buyer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
