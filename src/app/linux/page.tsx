"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
const TerminalPage = () => {
  // const randomId = Math.random() * 7;

  const router = useRouter();
  const [inputData, setInputData] = useState<string>(""); // Track input data
  const [outputData, setOutputData] = useState<string[]>([]); // Track terminal output
  const [starterTextPrinted, setStarterTextPrinted] = useState<boolean>(false); // Track if starter text is printed
  const inputElement = useRef<HTMLInputElement>(null); // For focusing input
  const outputElement = useRef<HTMLDivElement>(null); // For terminal output container

  // Starter text to show at the beginning

  const starterText =
    // ? ["huh! it's you again ? okay, fine let's be friends "]
    [
      "Hi, My Name is Ayush, This is a terminal",
      "All Commands are resume, ls, social -a, skills -a, about me",
    ];

  // Function to gradually print starter text
  useEffect(() => {
    if (!starterTextPrinted) {
      const printStarterText = () => {
        let delay = 1000;
        starterText.forEach((text) => {
          setTimeout(() => {
            appendToTerminal(text);
          }, delay);
          delay += 1000; // Adjust the delay here (1 second in this example)
        });
      };
      printStarterText(); // Call the function to print the starter text
      setStarterTextPrinted(true); // Set the state to true after the starter text is printed
    }
  }, [starterTextPrinted]); // Only run the effect if the starter text hasn't been printed yet

  // Handle user input and commands
  const handleUserInput = (input: string) => {
    appendToTerminal(`$ <span class="text-green-400">${input}</span>`);

    if (input === "ls") {
      appendToTerminal(
        `All Commands are ls, about me, resume, social -a, skills -a`,
      );
    } else if (input === "resume") {
      redirectToResume();
    } else if (input === "social -a") {
      socialLink(); // Display social links
    } else if (input === "skills -a") {
      appendToTerminal(`Languages: JavaScript, Python, Rust, Lua, SQL`);
      appendToTerminal(`Frontend: React, HTML, CSS, JS, TS, TailwindCSS`);
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
      setOutputData([]); // Clear the terminal output
    } else {
      appendToTerminal(
        `${processCommand(input)}: <span class="text-red-700">Command Not Found </span><br>write 'ui' for better user experience`,
      );
    }
  };

  const redirectToResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1OOZ7zVMmsqcEoiPKyuxVViRdWjNp1HAL/view?pli=1";
  };

  const appendToTerminal = (text: string, isOutput = false) => {
    setOutputData((prevOutput) => [
      ...prevOutput,
      `<div class="${isOutput ? "output" : "input"}">${text}</div>`,
    ]);
  };

  const processCommand = (input: string) => {
    return input; // Placeholder for processing commands
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
      handleUserInput(inputData);
      setInputData(""); // Clear input field after processing
    }
  };

  return (
    <>
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
            {/* Output container */}
            <div
              id="output"
              ref={outputElement}
              className="text-green-400 overflow-auto max-h-[300px]"
              dangerouslySetInnerHTML={{ __html: outputData.join("") }}
            />
            {/* Input field */}
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
