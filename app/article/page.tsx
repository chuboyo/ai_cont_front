"use client";
import { Chip } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import article_one from "../../public/article_one.avif";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-10 gap-5">
        <h2 className="text-blue-800 text-xl font-semibold">
          Published 2023-09-13
        </h2>
        <h1 className="text-4xl font-semibold">
          AI Is Supercharging the Capabilities of Security Cameras
        </h1>
        <p className="px-10 text-2xl text-ellipsis text-center truncate">
          AI security cameras are revolutionizing surveillance for both
          consumers and businesses. One advantage is that they trigger immediate
          ...
        </p>
        <Chip color="primary" variant="flat">
          Artificial Intelligence
        </Chip>
        <Image src={article_one} className="w-11/12 h-96" alt="Article Image" />
      </div>

      <div className="flex max-w-screen px-28 h-screen">
        <div className="flex flex-col gap-10 w-9/12">
          <div>
            <h1 className="font-semibold text-lg">Zac Emos</h1>
            <p>AI Is Supercharging the Capabilities of Security Cameras</p>
          </div>

          <p>
            AI security cameras are revolutionizing surveillance for both
            consumers and businesses. One advantage is that they trigger
            immediate alarms, recognizing intruders and initiating a response in
            real-time. They can connect to multiple systems, such as turning on
            lights or contacting the police, to deter criminals. AI cameras can
            also identify specific objects, like weapons, without invasive
            searches. They can detect unusual behavior, such as shoplifting or
            violence, and immediately alert authorities. AI cameras are more
            reliable than motion detection-based cameras, reducing false alarms
            by distinguishing between animals and humans. Additionally, AI
            surveillance requires less manual intervention, allowing for
            around-the-clock monitoring without the need for expensive human
            resources.
          </p>
          <p>
            AI security cameras have transformed the field of surveillance by
            providing immediate alarms and responses. With faster and more
            accurate processing capabilities, these cameras can recognize
            intruders and trigger appropriate actions in real-time, preventing
            major damage. They can connect to various systems, such as
            activating lights or contacting the police, to enhance security
            measures. Additionally, AI cameras can identify specific objects,
            like weapons, without invasive searches, benefiting places like
            schools. They can also detect unusual behavior, such as shoplifting
            or violence, and promptly alert authorities. By reducing false
            alarms through distinguishing between animals and humans, AI cameras
            improve comfort and safety. Moreover, the automation of AI
            surveillance reduces the need for manual intervention, allowing for
            continuous monitoring without the expense of human resources.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-end h-full">
          <h1 className="text-left">Related Articles</h1>
          <ul>
            <li>
              <Link href={"/"}>http://asa.kh/pejkojad</Link>
            </li>
            <li>
              <Link href={"/"}>http://kime.kp/na</Link>
            </li>
            <li>
              <Link href={"/"}>http://sepmac.org/pe</Link>
            </li>
            <li>
              <Link href={"/"}>http://illu.tz/fato</Link>
            </li>
            <li>
              <Link href={"/"}>http://neh.vc/zezepso</Link>
            </li>
            <li>
              <Link href={"/"}>http://mefloibo.lu/ivumajiwo</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
