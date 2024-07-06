"use client";

import { useUser } from "@clerk/nextjs"



export default function WelcomeMSG() {
    const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
        <h2 className="text-2xl lg:text-4xl text-white font-medium">
            Welcome {isLoaded ? ", ": " "}{ user?.firstName}
        </h2>
        <p className="text-sm lg:test-base text-[#89b6fd]">
            This is your Overview
        </p>
    </div>
  )
}
