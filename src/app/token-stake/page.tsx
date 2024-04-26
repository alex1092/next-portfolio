"use client";

import { SquidStakingWidget } from "@0xsquid/staking-widget";

export default function TokenStake() {
  return (
    <SquidStakingWidget
      config={{
        integratorId: process.env.SQUID_KEY!,
        // ... Other config options, such as theme, titles, etc.
      }}
    />
  );
}
