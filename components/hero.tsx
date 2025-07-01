import Container from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  const stats = [
    { figure: 200, label: "happy customers" },
    { figure: "13k", label: "Active Properties" },
    { figure: "2k", label: "Deals Closed" },
  ];
  return (
    <section>
      <Container>
        <div className="relative rounded-xl mt-4 md:mt-8 overflow-hidden flex flex-col gap-4  bg-[#D7DFE1] p-6 md:p-10  bg-no-repeat bg-right bg-contain ">
          <div
            className="absolute -bottom-50 -right-32 md:-bottom-70 md:-right-0 h-100 w-100 md:h-200 md:w-200 bg-[url('/hero.png')] bg-no-repeat bg-contain"
          ></div>
          <h1 className="text-5xl font-semibold leading-snug md:leading-relaxed max-w-2xl">
            Discover a place you'll love to live
          </h1>

          <div className="flex gap-2 md:gap-6">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-bold text-3xl">{item.figure}+</span>
                <span className="md:text-lg capitalize text-foreground/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Link href={"/contact"}>
              <Button>Contact</Button>
            </Link>
            <Link href={"/about"}>
              <Button variant={"outline"}>Learn More</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
