import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl bg-white", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const servicesData = [
  {
    title: "Schematic Design",
    description:
      "We create precise, customer-driven circuit designs that enable efficient and error-free system operation.",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-5.svg",
  },
  {
    title: "PCB Layout Design",
    description:
      "We craft optimized PCB layouts that ensure performance, stability, and manufacturability.",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-2.svg",
  },
  {
    title: "Firmware Development",
    description:
      "We develop reliable embedded firmware tailored to your product’s hardware architecture.",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-3.svg",
  },
  {
    title: "Prototyping & Testing",
    description:
      "We build and test prototypes to validate performance, quality, and real-world usability.",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290.svg",
  },
  {
    title: "Manufacturing Support",
    description:
      "We guide seamless production with BOM optimization and vendor-ready manufacturing files.",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-4.svg",
  },
  {
    title: "Product Certification",
    description:
      "We support global product certification with compliance-ready documentation and testing.",
    image: "https://c.animaapp.com/micxmmn0BJDISl/img/frame-1321318290-1.svg",
  },
];

export const ConceptToSolutionSection = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Manrope'] text-gray-900 leading-tight">
            End-to-End IoT Excellence – From Concept to Solution Deployment
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 font-light font-['Manrope'] leading-relaxed max-w-2xl">
            At Elint Systems, we design and deliver complete IoT solutions—combining customizable
            hardware and intelligent software—engineered for security, scalability, and reliability.
          </p>
        </div>

        {/* Services List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="w-full bg-transparent shadow-none border-0 animate-fade-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardContent>
                <div className="w-full bg-white rounded-xl border p-4 hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[180px] sm:h-[200px] object-contain mx-auto"
                  />

                  {/* Text Area */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 font-['Manrope']">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
