import React from 'react';
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { H1 } from "@/components/typography";

// Class Names Constants
const MAIN_CLASSNAMES = "flex min-h-screen lg:flex-row";
const LEFT_HALF_CLASSNAMES = "flex items-center justify-center w-full lg:w-1/2 lg:bg-zinc-50";
const RIGHT_HALF_CLASSNAMES = "hidden lg:block w-1/2 relative lg:border-l-8 lg:border-teal-800"; // Added relative and overflow-hidden
const APPEARANCE_ROOT_BOX = "mx-auto";

// SignInForm Component
const SignInForm = () => (
    <div className={LEFT_HALF_CLASSNAMES}>
        <div className="w-full">
            <H1 className="text-center pb-2 text-teal-950">
                Welcome!
            </H1>
            <SignIn
                path={"/sign-in"}
                appearance={{
                    elements: {
                        rootBox: APPEARANCE_ROOT_BOX,
                    },
                }}
            />
        </div>
    </div>
);

const SignInPage = () => {
    return (
        <main className={MAIN_CLASSNAMES}>
            <SignInForm/>

            <div className={`${RIGHT_HALF_CLASSNAMES}`}>
                <Image
                    className="hidden lg:block opacity-75"
                    src="/bkg.png"
                    alt="Background"
                    quality={95}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}

                />


            </div>
            <Image
                className="lg:hidden opacity-25"
                src="/bkg.png"
                alt="Background"
                quality={95}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                    zIndex: "-1"
                }}

            />
        </main>
    );
};

export default SignInPage;