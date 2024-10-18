"use client";

import SwapComponents from "@/components/SwapComponents";
import TransactionComponents from "@/components/TransactionComponents";
import { WalletComponents } from "@/components/WalletComponents";

export default function Home() {
  return (
    <div
      className={
        "h-screen flex flex-col items-center justify-center bg-gray-100 gap-4"
      }
    >
      <WalletComponents />
      <SwapComponents />
      <TransactionComponents />
    </div>
  );
}
