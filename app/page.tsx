"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/config/services";
import { equipment } from "@/config/equipments-data";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#FEFDFD] to-[#E3B5B8]/10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Quality service guaranteed,
                <span className="text-[#BA222A]">
                  {" "}
                  we are always ready to serve
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bash-feeq Ventures provides comprehensive facility maintenance
                and pest control services with decades of industry expertise.
                Your satisfaction is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#BA222A] hover:bg-[#9a1a22] text-white px-8 h-12 text-base"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#BA222A] text-[#BA222A] hover:bg-[#BA222A]/10 px-8 h-12 text-base bg-transparent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 bg-[#E3B5B8]/20 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/professional-facility-maintenance-service.png"
                alt="Professional facility maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions tailored to your facility and
              pest management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow border-0 bg-white"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#BA222A]/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-[#BA222A]" size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#BA222A] hover:bg-[#9a1a22] text-white inline-flex items-center gap-2"
            >
              <Link href="/services">
                View All Services
                <ChevronRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We utilize state-of-the-art fumigation and cleaning equipment to
              deliver superior results and ensure safety for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#BA222A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Professional Service?
          </h2>
          <p className="text-xl text-[#E3B5B8] mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation. Our team is ready to assist
            you.
          </p>
          <Button
            asChild
            className="bg-white text-[#BA222A] hover:bg-gray-100 px-8 h-12 text-base"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
