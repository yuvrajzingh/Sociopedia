import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (<div className="bg-cover bg-no-repeat h-screen w-screen flex justify-center items-center" style={{backgroundImage: "url('/assets/sign-in.jpg')"}}>
  <SignUp />;
</div>);
}