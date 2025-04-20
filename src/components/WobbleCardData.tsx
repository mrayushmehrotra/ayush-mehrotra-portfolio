"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";

export function WobbleCardDemo() {
  return (
    <>
      <div className="p-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Project section
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full    ">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-emerald-800 to-green-700 min-h-[500px] lg:min-h-[300px]">
          <Link href="https://spotify-clone-ashy-five.vercel.app/">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Shawitfy
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                music player, in which user can upload there song, add author
                details and can also like songs and yeah they can listen to
                there favourite music without any ad&apos;s interupption :)
              </p>
            </div>
            <Image
              src="/spotify.webp"
              width={500}
              height={500}
              alt="shawtify.webp"
              className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl"
            />
          </Link>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900  ">
          <Link href="">
            <h2 className="max-w-80  text-left text-balance text-base    md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              AI based Subtitle Burner
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200   ">
              AI based subtitle burner built in python using huggingface,
              moviepy
            </p>
          </Link>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-slate-900  lg:col-span-3  min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <Link
            href="https://notion-clone-peach-six.vercel.app/"
            target="_blank"
          >
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg    text-left text-balance   text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Create Note&apos;s really quick with AIdeation & supercharge
                your notes with AI powered assistant
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Aideation is a personal Note taking assitant, uses pexel api for
                image generation and gemini to power it&apos;s AI
              </p>
            </div>
            <Image
              src="/notion.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </Link>
        </WobbleCard>
      </div>
    </>
  );
}
