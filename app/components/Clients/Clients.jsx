
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Link from "next/link";

// بيانات وهمية (Data) للشعارات - استخدام بعض الصور من public/Clients
const clientLogos = [
  { name: "Client 1", src: "/Clients/Asset 4.png" },
  { name: "Client 2", src: "/Clients/Asset 5.png" },
  { name: "Client 3", src: "/Clients/Asset 6.png" },
  { name: "Client 4", src: "/Clients/Asset 7.png" },
  { name: "Client 5", src: "/Clients/Asset 8.png" },
  { name: "Client 6", src: "/Clients/Asset 9.png" },
  { name: "Client 7", src: "/Clients/Asset 10.png" },
  { name: "Client 8", src: "/Clients/Asset 11.png" },
  { name: "Client 9", src: "/Clients/Asset 12.png" },
  { name: "Client 10", src: "/Clients/Asset 13.png" },
  { name: "Client 11", src: "/Clients/Asset 14.png" },
  { name: "Client 12", src: "/Clients/Asset 15.png" },
  { name: "Client 13", src: "/Clients/Asset 16.png" },
  { name: "Client 14", src: "/Clients/Asset 17.png" },
  { name: "Client 15", src: "/Clients/Asset 18.png" },
  { name: "Client 16", src: "/Clients/Asset 19.png" },
  { name: "Client 17", src: "/Clients/Asset 20.png" },
  { name: "Client 18", src: "/Clients/Asset 21.png" },
  { name: "Client 19", src: "/Clients/Asset 22.png" },
  { name: "Client 20", src: "/Clients/Asset 23.png" },
  { name: "Client 21", src: "/Clients/Asset 24.png" },
  { name: "Client 22", src: "/Clients/Asset 25.png" },
  { name: "Client 23", src: "/Clients/Asset 26.png" },
  { name: "Client 24", src: "/Clients/Asset 27.png" },
];

const Clients = () => {
  return (
    // نجعل القسم بنفس خلفية وحواف الأقسام الأخرى
    <SectionWrapper
      id="clients-section"
      className="bg-black py-20"
    >
      {/* Header unified with other sections */}
      <SectionHeader
        title="CLIENTS"
        rightNode={
          <Link
            href="/clients-page"
            className="text-base md:text-lg text-white font-semibold flex items-center hover:text-white/80 transition-colors"
          >
            ALL CLIENTS <span className="ml-2">↗</span>
          </Link>
        }
      />

      {/* شبكة الشعارات: 12 شعار مع lg:grid-cols-6 => صفّان على الشاشات الكبيرة */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-center">
        {clientLogos.map((client, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/2] p-2 opacity-75 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={client.src}
              alt={client.name}
              fill
              className="object-contain grayscale contrast-200"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Clients;

