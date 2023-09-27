"use client"
import { StytchProvider } from "@stytch/nextjs";
import { createStytchUIClient } from "@stytch/nextjs/ui";

const STYTCH_PUBLIC_TOKEN = process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN;
console.log(STYTCH_PUBLIC_TOKEN);
const stytch = createStytchUIClient(STYTCH_PUBLIC_TOKEN);

const StytchProviderForAuth = ({chieldern}) => {
  return (
    <div>
      <StytchProvider stytch={stytch}>
        {chieldern}
      </StytchProvider>
    </div>
  );
};

export default StytchProviderForAuth;
