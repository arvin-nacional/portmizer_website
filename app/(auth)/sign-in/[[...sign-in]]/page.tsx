"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null); // Add this line

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Start the sign-in process.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      setIsSubmitting(true);
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        // Investigate why the login hasn't completed.
        console.log(result);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].longMessage); // Set the error message
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center bg-light-400 h-screen w-full items-center">
      <div className=" shadow-light500_darknone background-light900_dark200 rounded-lg ">
        <form className="background-light900_dark200  w-[350px]  p-6">
          <div className="flex justify-center flex-col items-center">
            <Link href="/">
              <Image
                src="/assets/images/logo_colored.svg"
                width={280}
                height={60}
                alt="logo"
                className="mb-5"
              />
            </Link>

            {/* <h1 className="h3-semibold pb-3 text-primary-500">Login</h1> */}
          </div>

          {error && <Label className="mb-4 text-red-500">{error}</Label>}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={handleEmailChange}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={handlePasswordChange}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <Button
            onClick={handleSubmit}
            variant="default"
            className="bg-primary-500 hover:bg-primary-300 w-full mt-5 rounded-lg border-none text-light-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
