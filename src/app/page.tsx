import Badge from "@/components/badge";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-[60px] py-[50px] max-w-[1024px]">
      <h1 className="text-[30px] font-bold">Hi 👋 Welcome to Documentation page!</h1>
      <p className="text-[18px] mb-[50px]">Let's start editing your <Badge text={'portfolio'} /></p>
      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">
        <li>
          <p className="font-bold text-[20px]">
            First you will need to extract the zip file given to you ( <span>template file !</span> )
          </p>
        </li>

        <li>
          <p className="font-bold text-[20px]">
            Then you need to open it in vscode or other code editors. if you don't have any code editor, you can see how to download it through <a className="text-blue-700 underline" href="https://www.youtube.com/watch?v=cu_ykIfBprI" target="_blank">the link here</a> <a className="text-blue-700 underline" href="https://www.youtube.com/watch?v=w0xBQHKjoGo" target="_blank">(for macos)</a>
          </p>
        </li>
        
        <li>
          <Image width={500} height={300} className="w-[46rem] h-[500px] object-top object-cover" alt="vscode" src={'/vscode.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px]">
            So you need to open template folder.
          </p>
        </li>

        <li>
          <p className="font-bold text-[20px]">
            if you don't have node and npm, you can see how to download it through <a className="text-blue-700 underline" href="https://www.youtube.com/watch?v=EIzdQxMXcrc" target="_blank">the link here</a>
          </p>
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">
            Then open new terminal
          </p>
          <Image width={500} height={300} className="w-full mb-3" alt="terminal" src={'/terminal.png'} />
          <p className="font-bold text-[20px] mb-3">
            Then write the comment (npm install) <br />
            and then wait until it done 
          </p>
          <Image width={600} height={300} className="w-full" alt="npm-done photo" src={'/npm-done.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Then write (npm run dev)</p>
          <Image width={600} height={300} className="w-full mb-3" alt="npm-run photo" src={'/npm-run.png'} />
          <p className="font-bold text-[20px] mb-3">Open it on localhost and your host may be different than mine</p>
          <Image width={600} height={300} className="w-full" alt="localhost photo" src={'/localhost.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Finally you can see your portfolio</p>
          <Image width={600} height={300} className="w-full mb-3" alt="portfolio photo" src={'/portfolio.png'} />
        </li>
      </ul>

      <h1 className="text-[30px] font-bold" id="navbar-section">Navbar section</h1>
      <p className="text-[18px] mb-[50px]">Now we will change the data of the navbar section</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">Click on the folders and file that have shown in photo</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/navbar-files.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">If you want to change logo and portfolio name then you have to change the (znis) text to yours and replace your logo to public\images file that have shown in second photo. Your photo has to svg format</p>
          <Image width={600} height={300} className="w-full mb-3" alt="navbar logo and portfolio name photo" src={'/port-name.png'} />
          <Image width={600} height={300} className="w-full" alt="changing logo" src={'/logo.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">You can change the texts in navbar section if you want</p>
          <Image width={600} height={300} className="w-full" alt="navbar logo and portfolio name photo" src={'/navbar-texts.png'} />
        </li>

      </ul>

      <h1 className="text-[30px] font-bold" id="hero-section">Hero Section</h1>
      <p className="text-[18px] mb-[50px]">Now we will change the data of the hero section</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">If you wanna change that texts</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/hero-texts.png'} />
          <p className="font-bold text-[20px] mb-3">Click folders and file that have shown on this photo</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/hero-folders.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Then change the text on 32 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/hero-text.png'} />
        </li>
    
      </ul>
    </section>
  );
}
