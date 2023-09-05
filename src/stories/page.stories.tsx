// https://ringmybelle.com

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type { Meta, StoryObj } from "@storybook/react";
import { MenuIcon } from "lucide-react";

import { FunctionComponent } from "react";

const meta: Meta<FunctionComponent> = {
  title: "Pages/Page",
  parameters: {
    layout: "full",
  },
  component: () => null,
};

export default meta;
type Story = StoryObj<typeof meta>;

const PageLayout: Story = {
  render: ({ children }) => {
    return (
      <body className="bg-background min-h-screen flex flex-col justify-between">
        {children}
      </body>
    );
  },
};

// export const OGBelle: Story = {
//   ...PageLayout,
//   args: {
//     children: (
//       <>
//         <header>
//           <section className="bg-primary-foreground text-background flex">
//             <h1 className="p-5 text-2xl md:text-4xl font-script">
//               RingMyBelle
//             </h1>
//             <span>Choose Location</span>
//           </section>
//           <nav className="flex list-none">
//             <li>Home</li>
//             <li>Book</li>
//             <li>Join</li>
//           </nav>
//         </header>
//         <main>
//           <section className="">
//             <h2>Beauty at Your Door</h2>
//           </section>
//           <section className="">
//             <ul>
//               <li>Hair</li>
//               <li>Make Up</li>
//               <li>Spray Tan</li>
//               <li>Bridal</li>
//               <li>Girls Night Out</li>
//             </ul>
//           </section>
//           <section className=""></section>
//           <section className=""></section>
//           <section className=""></section>
//         </main>
//         <footer className="bg-primary-foreground">
//           <h3 className="font-script">RingMyBelle</h3>
//         </footer>
//       </>
//     ),
//   },
// };

const NavMenu = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        className,
        "flex-col items-start md:flex-row gap-4 md:items-center list-none"
      )}
    >
      <li className="">Services</li>
      <li className="">Membership</li>
      <li className="">Weddings</li>
      <li className="">Become a Pro</li>
    </nav>
  );
};

export const BelleSquad: Story = {
  ...PageLayout,
  args: {
    children: (
      <>
        <header className="flex flex-col">
          <section className="bg-primary-foreground text-background flex">
            <h5 className="p-3 text-xs text-center md:text-base tracking-wider mx-auto font-bold font-sans">
              Get $15 off any RingMyBelle service through Thanksgiving. Use code
              THANKS15.
            </h5>
          </section>
          <section className="flex items-center md:mx-auto justify-between text-center md:w-11/12">
            <div className="flex flex-row-reverse items-center justify-center md:flex-row">
              <h1 className="p-5 text-4xl mx-auto ml-9 md:ml-0 font-script shrink-1">
                RingMyBelle
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <MenuIcon className="md:hidden shrink-1 ml-2 justify-self-start" />
                </SheetTrigger>
                <SheetContent side="left">
                  <NavMenu className="" />
                </SheetContent>
              </Sheet>
              <NavMenu className="hidden md:flex" />
            </div>
            <nav className="absolute right-5 md:right-10 md:flex shrink-1 list-none gap-4">
              <li className="hidden md:block">Sign In</li>
              <li className="font-semibold underline underline-offset-8 decoration-2">
                Book
              </li>
            </nav>
          </section>
        </header>

        <section className="flex flex-col items-center justify-center relative p-0 m-0 z-10 text-secondary aspect-[9/16] sm:aspect-video">
          <video
            autoPlay
            src="/video/AdobeStock_501627665_Video_HD_Preview.mp4"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          ></video>
          <h2 className="text-7xl font-script font-bold">RingMyBelle</h2>
          <h2 className="text-3xl py-7 font-sans uppercase font-black">
            Beauty at Your Door
          </h2>
          <Button
            variant="destructive"
            className="font-semibold text-background text-base tracking-wider rounded-none px-8"
            size="lg"
          >
            Book Now
          </Button>
        </section>
        <section>
          <blockquote className="text-lg md:text-4xl font-semibold border-l-[1px] border-foreground my-8 md:my-16 pl-4 md:pl-20 mx-auto w-10/12">
            We're here to kick those unruly hair days to the curb. RingMyBelle
            brings expert stylists, makeup artists, and nail pros right to you.
            No more beauty struggles, just straight-up fabulousness.
          </blockquote>
        </section>
        <section className="p-5 relative">
          <h3 className="font-serif py-4 mb-4 text-3xl font-bold">
            Deluxe At-Home Services
          </h3>
          <ul className="flex aspect-video max-w-full justify-around text-center gap-8">
            {["Hair", "Makeup", "Spray Tan"].map((service) => (
              <li className="aspect-[0.8] border-none bg-primary-foreground relative">
                <div className="absolute bottom-0 bg-background/50 backdrop-blur-sm py-6 text-center w-full">
                  {service}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className=""></section>
        <section className=""></section>
        <section className=""></section>

        <footer className="h-fit bg-primary-foreground">
          <h3 className="text-lg md:text-7xl p-5 font-script">RingMyBelle</h3>
        </footer>
      </>
    ),
  },
};
