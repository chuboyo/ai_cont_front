import Image from "next/image";
import logo from "../../public/logo.png";
import SignUpForm from "../components/SignUpForm";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex max-w-full overflow-hidden h-screen">
      <div className="leftHand text-white w-1/2 flex align-middle items-center justify-center">
        <div className="text-4xl">
          <h1 className="font-bold font-link text-5xl pb-5">
            Decode, Digest and Decide
          </h1>
          <h1 className="text-center font-link2">
            AI-powered smart tech briefs
          </h1>
          <h1 className="text-center font-link3">
            of the latest tech
            <span className="font-link text-[#3CBEFF]"> Discoveries</span>
          </h1>
        </div>
      </div>
      <div className="w-full">
        <Link href="/">
          <div className="flex p-6">
            <Image src={logo} alt="Logo" />
            <p className="font-semibold text-2xl text-blue-600">Summare</p>
          </div>
        </Link>
        <div className="flex justify-center align-middle content-center items-center h-4/5">
          <div className="flex flex-col gap-y-4 max-w-sm">
            <h1 className="text-4xl font-bold">Signup</h1>
            <p>Welcome! Please enter your details to create your account.</p>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
