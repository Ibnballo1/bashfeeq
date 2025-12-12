"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-[#FEFDFD] to-[#E3B5B8]/10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Get in touch with us for inquiries, quotes, or emergency services
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 mb-16">
            {/* Contact Information */}
            <Card className="md:col-span-1 p-8 border-0 bg-white">
              <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4">
                <div className="flex-1">
                  {/* Phone */}
                  <div className="mb-8 flex flex-col items-center">
                    <div className="flex gap-3 mb-3">
                      <Phone className="text-[#BA222A] shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+234 903 237 8537</p>
                        <p className="text-gray-600">+234 807 239 1674</p>
                        <p className="text-gray-600">+234 902 332 4890</p>
                        <p className="text-gray-600">+234 802 837 9316</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-8 flex flex-col items-center">
                    <div className="flex gap-3 mb-3">
                      <Mail className="text-[#BA222A] shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@bash-feeq.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Office Address */}
                  <div className="mb-8">
                    <div className="flex flex-col gap-3 mb-3">
                      <div>
                        <div className="flex gap-2 mb-1.5">
                          <MapPin
                            className="text-[#BA222A] shrink-0"
                            size={24}
                          />
                          <h4 className="font-semibold text-gray-900">
                            Main Office
                          </h4>
                        </div>
                        <p className="text-gray-600">
                          No. 4 Crystal street, along Catholic Church road,
                          Onigbogbo Atan-Ota, Ogun state.
                        </p>
                      </div>
                      <div>
                        <div className="flex gap-2 mb-1.5">
                          <MapPin
                            className="text-[#BA222A] shrink-0"
                            size={24}
                          />

                          <h4 className="font-semibold text-gray-900">
                            2nd Branch
                          </h4>
                        </div>
                        <p className="text-gray-600">
                          2, Okemedu Street, off Coconut Snake island Apapa
                          Lagos.
                        </p>
                      </div>
                      <div>
                        <div className="flex gap-2 mb-1.5">
                          <MapPin
                            className="text-[#BA222A] shrink-0"
                            size={24}
                          />

                          <h4 className="font-semibold text-gray-900">
                            3rd Branch
                          </h4>
                        </div>
                        <p className="text-gray-600">
                          Egole compound, Rock Stone Vila estate off Badore
                          Lekki Ajah, Lagos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div>
                    <div className="flex gap-3">
                      <Clock className="text-[#BA222A] shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Business Hours
                        </h4>
                        <p className="text-gray-600">
                          Mon - Fri: 8:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">Sat: 9:00 AM - 3:00 PM</p>
                        <p className="text-gray-600">24/7 Emergency Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
