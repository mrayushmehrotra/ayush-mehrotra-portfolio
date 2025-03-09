"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomMouse from "@/components/customMouse";
import axios from "axios";

const TerminalPage = () => {
  const router = useRouter();
  const [inputData, setInputData] = useState<string>("");
  const [outputData, setOutputData] = useState<string[]>([]);
  const [starterText, setStarterText] = useState<string[]>([
    "Hi, My Name is Ayush, This is a terminal",
    "All Commands are resume, ls, social -a, skills -a, about me",
    "go to homepage by shutdown ui command",
  ]);
  const [starterTextPrinted, setStarterTextPrinted] = useState<boolean>(false);
  const [HackText, setHackText] = useState("some Error Occured");
  const inputElement = useRef<HTMLInputElement>(null);
  const outputElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const HandleHack = async () => {
      try {
        const userIP = await axios.get("https://api.ipify.org/?format=json");
        const location = await axios.get(`https://ipinfo.io/${userIP.data.ip}`);
        console.log(location.data);

        return setHackText(`

Your IP address is ${userIP.data.ip}.,
Your live near ${location.data.city}, ${location.data.region}, ${location.data.country}.,
your live location is ${location.data.loc},
you have a ${location.data.org} company sim, do you remember giving me any permission related to this? 

`);
      } catch (error) {
        console.error("Error fetching data:", error);

        setHackText("An error occurred while fetching data.");
      }
    };

    HandleHack();
  }, []);

  useEffect(() => {
    if (!starterTextPrinted) {
      const printStarterText = () => {
        let delay = 1000;
        starterText.forEach((text) => {
          setTimeout(() => {
            appendToTerminal(text);
          }, delay);
          delay += 1000;
        });
      };
      printStarterText();
      setStarterTextPrinted(true);
      setStarterText([""]);
    }
  }, [starterText, starterTextPrinted]);

  const handleUserInput = (input: string) => {
    appendToTerminal(`$ <span class="text-green-400">${input}</span>`);

    if (input === "ls") {
      appendToTerminal(
        ` all commands are ls, about me, resume, social -a, skills -a`,
      );
    } else if (input === "resume") {
      redirectToResume();
    } else if (input === "social -a") {
      socialLink(); // Display social links
    } else if (input === "skills -a") {
      appendToTerminal(`Languages: JavaScript, Python, Rust, Lua, SQL \n`);
      appendToTerminal(`Frontend: React, HTML, CSS, JS, TS, TailwindCSS \n`);
      appendToTerminal(`Backend: NodeJS, ExpressJS, Python, Flask`);
      appendToTerminal(
        `IT Constructs & Tools: DSA, OOPs, Linux, Git, Docker, NeoVim, Postman`,
      );
      appendToTerminal(
        `Database & ORM's: MongoDB, Supabase, Firebase, MySQL, Prisma, GraphQL`,
      );
    } else if (input === "about me") {
      appendToTerminal(
        `My Name is Ayush Mehrotra\nI Love Computer Technology\nI Love Web Development. My Expertise is in JS and its Frameworks.`,
      );
    } else if (input == "shutdown") {
      appendToTerminal(
        `
Jan 25 10:18:30 hostname systemd[1]: Starting Shutdown.
Jan 25 10:18:45 hostname systemd[1]: Reached target Shutdown.
`,
      );

      setTimeout(() => router.push("/"), 2000);
    } else if (input === "clear") {
      setOutputData([]);
    } else if (input === "what") {
      appendToTerminal("what is what? ");
    } else if (input === "hack") {
      appendToTerminal(HackText);
    } else if (input === "ui") {
      router.push("/");
    } else {
      appendToTerminal(
        `${processCommand(input)}: <span class="text-red-700">Command Not Found </span><br>write 'ui' for better user experience or write 'shutdown' to exit terminal and 'Hack' for some magic `,
      );
    }
  };

  const redirectToResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1feWs9-LVXR3HbcXnOjD-s3_00tHH7E65/view?usp=sharing";
  };

  const appendToTerminal = (text: string, isOutput = false) => {
    setOutputData((prevOutput) => [
      ...prevOutput,
      `<div class="${isOutput ? "output" : "input"}">${text}</div>`,
    ]);
  };

  const processCommand = (input: string) => {
    return input;
  };

  const socialLink = () => {
    const links = [
      { name: "GitHub", link: "https://github.com/mrayushmehrotra" },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
      },
      { name: "Instagram", link: "https://www.instagram.com/mein.ayush.hoon/" },
      {
        name: "portfolio",
        link: "https://ayush-mehrotra-portfolio-two.vercel.app/linux",
      },
    ];

    links.forEach((item) => {
      appendToTerminal(
        `<a class="text-blue-400" href="${item.link}" target="_blank">${item.name}</a>`,
      );
    });
  };

  // Handle enter key event
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputToLowerCase = inputData.toLowerCase();
      setInputData(inputToLowerCase);
      handleUserInput(inputToLowerCase);
      setInputData("");
    }
  };

  return (
    <>
      <CustomMouse
        colorInTailwind={"bg-zinc-700"}
        innerText={"🐧"}
        scale={3}
        textClassName={"animate-spin transition-all duration-200 "}
      />
      <section className="mt-8">
        <em>this is a just a demo terminal will not work as a real terminal</em>
        <br />
        <br />
        <aside
          className="bg-black text-white p-6 rounded-lg w-full max-w-screen overflow-hidden font-mono"
          onClick={() => inputElement.current?.focus()}
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">bash</p>
          </div>
          <div className="mt-4">
            <div
              id="output"
              ref={outputElement}
              className="text-green-400 overflow-auto max-h-[300px]"
              dangerouslySetInnerHTML={{ __html: outputData.join("") }}
            />
            <input
              ref={inputElement}
              type="text"
              className="text-green-400 bg-black border-none outline-none w-full mt-4"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="$"
            />
          </div>
        </aside>
      </section>
    </>
  );
};

export default TerminalPage;
