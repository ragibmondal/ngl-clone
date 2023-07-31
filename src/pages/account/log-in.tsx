import LogInForm from "@/components/log-in-form";
import Logo from "@/components/logo";
import Link from "next/link";

function LogIn() {
  return (
    <div className="grid max-w-[360px] min-h-screen px-4 mx-auto place-items-center">
      <div className="w-full">
        <header className="flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </header>
        <main className="flex flex-col w-full mt-6">
          <LogInForm />
        </main>
      </div>
    </div>
  );
}

export default LogIn;
