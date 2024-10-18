import { useCallback } from "react";
import {
  Transaction,
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import { useAccount } from "wagmi";
import { baseSepolia } from "viem/chains";
import { contracts } from "./contracts";

export default function TransactionComponents() {
  const { address } = useAccount();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  return address ? (
    <Transaction
      chainId={baseSepolia.id}
      contracts={contracts}
      onStatus={handleOnStatus}
      className="max-w-lg"
    >
      <TransactionButton />
      <TransactionSponsor />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  ) : null;
}
