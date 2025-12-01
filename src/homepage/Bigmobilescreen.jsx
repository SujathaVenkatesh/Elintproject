import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const servicesData = [
  {
    title: "Schematic Design",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-5.svg",
  },
  {
    title: "PCB Layout Design",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-2.svg",
  },
  {
    title: "Firmware Development",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-3.svg",
  },
  {
    title: "Prototyping & Testing",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290.svg",
  },
  {
    title: "Manufacturing Support",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-4.svg",
  },
  {
    title: "Product Certification",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-1.svg",
  },
];

export const ConceptToSolutionSection = () => {
  return (
    <section className="w-full py-12   ">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className=" mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-['Manrope'] leading-tight text-gray-900">
            End-to-End IoT Excellence – From Concept to Solution Deployment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-light font-['Manrope']">
            At Elint Systems, we design and deliver complete IoT solutions—combining customizable
            hardware and intelligent software—engineered to meet your business needs with security,
            scalability, and reliability at the core.
          </p>
        </div>
</div>

      <div className="flex flex-col ">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="relative w-full max-w-[450px] mx-auto  border-0 shadow-none bg-transparent translate-y-[-1rem] animate-fade-in opacity-100"
            style={{ "--animation-delay": `${index * 100}ms` }}
          >
            <CardContent className="relative p-0">
              <div className="relative w-full">
                <div className="absolute bottom-[46px] left-0 w-[480px] h-[57px]" />
                <img
                  className="relative left-1 w-[480px] h-[192px]"
                  alt={service.title}
                  src={service.image}
                />
                <div className="absolute top-[18px] left-[25px] flex flex-col w-[275px] items-start gap-[5.57px]">
                  <h3 className="flex items-center justify-start  self-stretch h-[14.65px] mt-[10px] [font-family:'Manrope',Helvetica] font-medium text-black text-[14.9px] tracking-[0.45px] leading-[37.4px] whitespace-nowrap">
                    {service.title}
                  </h3>
                  <p className="flex items-center justify-center self-stretch w-[220px] [font-family:'Manrope',Helvetica] font-normal text-gray-500 text-[11.1px] tracking-[0.33px] leading-[16.7px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};