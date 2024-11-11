import Badge from "@/components/badge";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-[60px] py-[50px] max-w-[1024px]">
      <h1 className="text-[30px] font-bold">Hi 👋 Welcome to Documentation page!</h1>
      <p className="text-[18px] mb-[50px]">Let's start editing your <Badge text={'portfolio'} /></p>
      <ul className="pl-[15px] flex flex-col gap-y-[15px] list-disc">
        <li>
          <p className="font-bold">
            First you will need to extract the zip file given to you ( <span>portfolio file !</span> )
          </p>
        </li>

        <li>
          <p className="font-bold">
            Then you need to open it in vscode or other code editors. if you don't have any code editor, you can see how to download it through <a className="text-blue-700 underline" href="https://www.youtube.com/watch?v=cu_ykIfBprI" target="_blank">the link here</a> <a className="text-blue-700 underline" href="https://www.youtube.com/watch?v=w0xBQHKjoGo" target="_blank">(for macos)</a>
          </p>
        </li>
        
        <li>
          <Image width={500} height={300} className="w-[46rem] h-[500px] object-top object-cover" alt="vscode" src={'/vscode.png'} />
        </li>

        <li>
          <p className="font-bold">
            So you need to open template folder.
          </p>
        </li>
        <li>
          <p className="font-bold">
            Then open new terminal
          </p>
          <Image width={500} height={300} className="w-full" alt="vscode" src={'/terminal.png'} />
          <p className="font-bold">
            Then write the comment npm install
            and then wait until it done 
          </p>
        </li>
      </ul>
    </section>
  );
}
