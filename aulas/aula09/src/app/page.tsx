"use client"

import { Header } from "@/components/Header";
import { CountProvider } from "@/contexts/CountContext";
import { useState } from "react";

const Page = () => {
  return (
    <div className="container mx-auto">
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
}

export default Page;