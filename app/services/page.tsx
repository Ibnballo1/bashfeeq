import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/config/service-data";
import { serviceBadges } from "@/config/service-badge";

export const metadata = {
  title: "Services - Bash-Feeq Ventures",
  description:
    "Explore the comprehensive range of pest control, fumigation, facility maintenance, and chemical supply services offered by Bash-Feeq Ventures.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-[#FEFDFD] to-[#E3B5B8]/10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive facility management and pest control solutions
            tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="p-8 border-0 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#BA222A]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#BA222A]" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details" className="border-b-0">
                      <AccordionTrigger className="text-[#BA222A] hover:text-[#9a1a22] font-semibold">
                        View Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {service.details.map((detail, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-gray-600"
                            >
                              <span className="text-[#DE7B60] font-semibold">
                                •
                              </span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              );
            })}
          </div>

          {/* Service Badges */}
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Service Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceBadges.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block bg-[#BA222A] text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                    {item.badge}
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#BA222A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-[#E3B5B8] mb-8 text-lg">
            Contact us today for a personalized consultation and quote.
          </p>
          <Button
            asChild
            className="bg-white text-[#BA222A] hover:bg-gray-100 px-8 h-12 text-base"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
