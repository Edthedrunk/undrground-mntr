import { getDistribution } from "@/app/actions/contract";
import { Progress } from "@/components/ui/progress";
import { initialDistribution } from "@/lib/utils";
import { Suspense } from "react";

const TokenSupply = async () => {
  return (
    <div className="flex flex-col grow">
      <p className="text-muted-foreground font-semibold font-lg font-mono">
        :: Supply Totals
      </p>
      <div className="h-4" />
      <div className="flex flex-col gap-2">
        <Suspense fallback={<TokenSupplyFallback />}>
          <TokenSupplyData />
        </Suspense>
      </div>
    </div>
  );
};

const TokenSupplyData = async () => {
  // await fake timeout
  await new Promise((res) => setTimeout(res, 1000));
  const { current, total } = await getDistribution();

  return (
    <div className="flex flex-col gap-2">
      <div className="grow">
        <p className="font-mono text-muted-foreground text-sm md:text-base">{`Total Supply : ${total} / 42,000`}</p>
        <Progress value={(total / 42000) * 100} />
      </div>
      {current &&
        current.map((token) => (
          <div key={token.name} className="grow">
            <p className="font-mono text-muted-foreground text-sm md:text-base">{`${token.name} : ${token.distributed} / ${token.total}`}</p>
            <Progress value={(token.distributed / token.total) * 100} />
          </div>
        ))}
    </div>
  );
};

const TokenSupplyFallback = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grow">
        <p className="font-mono text-muted-foreground text-sm md:text-base">{`Total Supply : 0 / 42,000`}</p>
        <Progress value={0} />
      </div>
      {initialDistribution.map((token) => (
        <div key={token.name} className="w-full">
          <p className="font-mono text-muted-foreground text-sm md:text-base">{`${token.name} : 0 / ${token.total}`}</p>
          <Progress value={(0 / token.total) * 100} />
        </div>
      ))}
    </div>
  );
};

export { TokenSupply };
