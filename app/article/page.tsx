"use client";
import { Chip } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import article_one from "../../public/article_one.avif";
import { TwitterIcon, FacebookIcon, EmailIcon } from "react-share";

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
      <div className="flex justify-between px-28">
        <div>
          <h1 className="font-semibold text-lg">Zac Emos</h1>
          <p>AI Is Supercharging the Capabilities of Security Cameras</p>
        </div>
        <div className="flex items-center gap-4">
          <TwitterIcon className="w-10 h-10" />
          <FacebookIcon className="w-10 h-10" />
          <EmailIcon className="w-10 h-10" />
        </div>
      </div>
      <div className="pt-10 flex max-w-screen space-x-60 px-28 h-screen">
        <div className="flex flex-col gap-10 w-5/6">
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
        <div className="w-1/3 flex flex-col underline h-full">
          <h1 className="font-semibold">Related Articles</h1>
          <Link href={"/"}>http://asa.kh/pejkojad</Link>
          <Link href={"/"}>http://kime.kp/na</Link>
          <Link href={"/"}>http://sepmac.org/pe</Link>
          <Link href={"/"}>http://illu.tz/fato</Link>
          <Link href={"/"}>http://neh.vc/zezepso</Link>
          <Link href={"/"}>http://mefloibo.lu/ivumajiwo</Link>
          <Link href={"/"}>http://gasab.am/fezuc</Link>
          <Link href={"/"}>http://ez.ee/orkukit</Link>
          <Link href={"/"}>http://sot.vn/cajih</Link>
          <Link href={"/"}>http://dohfov.qa/fewtik</Link>
          <Link href={"/"}>http://suriztuf.ag/cezi</Link>
          <Link href={"/"}>http://kok.gr/keke</Link>
          <Link href={"/"}>http://pujif.py/wu</Link>
          <Link href={"/"}>http://zato.bo/do</Link>
          <Link href={"/"}>http://bivacuso.cr/iwi</Link>
          <Link href={"/"}>http://debcoet.jp/lutco</Link>
          <Link href={"/"}>http://kok.gr/keke</Link>
          <Link href={"/"}>http://pujif.py/wu</Link>
          <Link href={"/"}>http://zato.bo/do</Link>
          <Link href={"/"}>http://bivacuso.cr/iwi</Link>
          <Link href={"/"}>http://debcoet.jp/lutco</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
