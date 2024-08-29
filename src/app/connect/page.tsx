// src/app/connect/page.tsx

import ConnectButton from "./ConnectButton";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./user-connect-form";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative grid h-screen flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-black lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-lime-400" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            AzureLoy
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This project has saved me countless hours of optimization
                and thousands of dollars in Azure costs. I'm paying less than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">-Someone Probably</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Connect your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Connect your Azure instance to get started
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <HoverCard>
                <HoverCardTrigger>
                  <Button
                    variant="link"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <h4 className="items-center justify-center text-2xl font-semibold tracking-tight">
                      I have no clue what I am doing
                    </h4>
                  </div>
                </HoverCardContent>
              </HoverCard>
              &
              <HoverCard>
                <HoverCardTrigger>
                  <Button
                    variant="link"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <h4 className="items-center justify-center text-2xl font-semibold tracking-tight">
                      You're literally running this locally.
                    </h4>
                  </div>
                </HoverCardContent>
              </HoverCard>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
