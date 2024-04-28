"use client";

import Image from "next/image";
import { useBuilderContext } from "./builder-context";
import { cn } from "@/lib/utils";

const colors = ["Black", "White", "Orange", "Lime", "Blue", "Gold", "Pink"];

const Inventory = () => {
  const { editMode, linkOrder, setLink, currentLink, inventory } =
    useBuilderContext();
  return (
    <div className="p-4 absolute w-full z-10">
      <div className="flex flex-wrap gap-2 mx-auto justify-center">
        {colors.map((color) => {
          const colorCount = inventory[color]?.length ?? 0;
          return (
            <div key={color} className="w-[75px] flex flex-col justify-start">
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground capitalize font-mono font-semibold">
                  {color}
                </p>
                <p className="ml-auto text-sm text-muted-foreground capitalize font-mono font-semibold">
                  {colorCount}
                </p>
              </div>
              <button
                disabled={!editMode}
                className={cn(
                  "overflow-hidden aspect-square rounded relative font-mono font-semibold md:text-lg",
                  {
                    "border-[2px] border-muted-foreground":
                      color === linkOrder[currentLink] && editMode,
                  }
                )}
                key={color}
                onClick={() => {
                  setLink(`${currentLink}`, color);
                }}
              >
                <Image
                  alt="Token"
                  className="pointer-events-none z-0 w-full right-0 absolute bottom-0 [mask]"
                  height={200}
                  src={`/${color}.png`}
                  width={200}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Inventory };