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

      <h1 className="text-[30px] font-bold" id="change-technologys">Technology Section</h1>
      <p className="text-[18px] mb-[50px]">Now we will change the data of the technology section</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">If you wanna change that texts</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/technology.png'} />
          <p className="font-bold text-[20px] mb-3">Click folders and file that have shown on this photo</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/hero-folders.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Then change the text on 75 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/technology-texts.png'} />
        </li>
    
      </ul>

      <h1 className="text-[30px] font-bold" id="service-section">Service Section</h1>
      <p className="text-[18px] mb-[50px]">Now we will change the data of the service section</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">If you wanna change that text</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/service-text.png'} />
          <p className="font-bold text-[20px] mb-3">Click folders and file that have shown on this photo</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/hero-folders.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Then change the text on 86 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/service-texts.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Now I will mark the texts on the website with numbers. <br />
                                                    And in this order, I will write down where those texts are located in the code, and you can change those texts without problems, God willing.
          </p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/service.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">1. 101 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/first-sevice.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">2. 105 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/second-service.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">3. 114 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/third-section.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">4. 122 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/fourth-section.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">5. 133 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/fiveth-section.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">6. 141 row in page.tsx</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/sixth-section.png'} />
        </li> 
      </ul>

      <h1 className="text-[30px] font-bold" id="my-portfolio-section">Portfolio Section</h1>
      <p className="text-[18px] mb-[50px]">Now we will change the data of the portfolio section</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">Here is the location of the texts (page.tsx)</p>
          <Image width={600} height={300} className="w-full" alt="folders and file photo" src={'/my-portfolio.png'} />
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/portfolio-1.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Now we will see how to edit portfolios and add more portfolios. <br />
                                                    You can see prtfolio cards on 161 row. You can change the title, description
          </p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/port-card.png'} />
          <p className="font-bold text-[20px] mb-3">If you want to change portfolio website photos you have to save it png format and you have to save it in public\images folder by naming project-[number].png if the image of the project is not visible, check here that you wrote the image url correctly</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/project-images.png'} />
        </li>

      </ul>

      <h1 className="text-[30px] font-bold" id="client-section">Client Section</h1>
      <p className="text-[18px] mb-[50px]">So now you know how to change them all</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">Text 173-row</p>
          <Image width={600} height={300} className="w-full" alt="folders and file photo" src={'/clients.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">Editing my client comments is similar to the card section in my portfolio</p>
          <Image width={600} height={300} className="w-full" alt="folders and file photo" src={'/clients-coment.png'} />
        </li>

      </ul>

      <h1 className="text-[30px] font-bold" id="start-your-design">Start your design</h1>
      <p className="font-bold text-[20px] mb-7">And the last part contains all the texts and you can change them if you want. By changing the link given to the href in the Send us message section, you can control which link it will redirect to when you click the button, and in that section you can write down your telegram or the link where they can contact you.</p>

      <h1 className="text-[30px] font-bold" id="footer-section">Footer section</h1>
      <p className="text-[18px] mb-[50px]">Now we will change the data of the Fotter section</p>

      <ul className="pl-[15px] flex flex-col gap-y-[25px] list-disc mb-[30px]">

        <li>
          <p className="font-bold text-[20px] mb-3">Click on the folders and file that have shown in photo</p>
          <Image width={600} height={300} className="w-full mb-3" alt="folders and file photo" src={'/footer.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">If you want to change logo and portfolio name then you have to change the (znis) text to yours and replace your logo to public\images file that have shown in second photo. Your photo has to svg format</p>
          <Image width={600} height={300} className="w-full mb-3" alt="navbar logo and portfolio name photo" src={'/footer-text.png'} />
          <Image width={600} height={300} className="w-full" alt="changing logo" src={'/logo.png'} />
        </li>

        <li>
          <p className="font-bold text-[20px] mb-3">You can change the texts in navbar section if you want</p>
          <Image width={600} height={300} className="w-full" alt="navbar logo and portfolio name photo" src={'/navbar-texts.png'} />
        </li>

      </ul>

    </section>
  );
}
