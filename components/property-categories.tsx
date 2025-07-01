import Container from "./ui/container";
import { Card } from "./ui/card";
import Image from "next/image";

export default function PropertyCategories() {
  const Homes = [
    { title: "Apartments", image: "", number: "3", bg: " bg-[#82B3DE]" },
    {
      title: "Single Family Homes",
      image: "",
      number: "5",
      bg: " bg-[#E4EDEF]",
    },
    {
      title: "Villas",
      image: "/villa.png",
      number: "2",
      bg: " bg-[#82B3DE]",
    },
    { title: "Offices", image: "", number: "4", bg: " bg-[#E4EDEF]" },
  ];
  return (
    <section className="mb-32 mt-20">
      <Container size="md">
        <h2 className="text-3xl font-bold mb-8">Home Categories</h2>
        <div className="flex justify-between gap-4 flex-col md:flex-row">
          {Homes.map((item, index) => (
            <Card
              key={index}
              className={`border-none rounded-none p-0 pt-2 ` + item.bg}
            >
              <h3 className="text-center font-semibold">{item.title}</h3>
              <div className="text-center -mt-4">
                <span className="">{item.number}</span> Properties
              </div>
              <Image
                src={item.image || "/villa.png"}
                alt={`an image of ${item.title}`}
                width={200}
                height={200}
                className="w-full md:w-[200px] h-auto object-cover"
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
