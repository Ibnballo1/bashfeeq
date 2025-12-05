"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "general",
        message: "",
      });
    }, 3000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-linear-to-br from-white via-[#FEFDFD] to-[#E3B5B8]/10 pt-20 pb-12">
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <Card className="md:col-span-1 p-8 border-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              {/* Phone */}
              <div className="mb-8">
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
              <div className="mb-8">
                <div className="flex gap-3 mb-3">
                  <Mail className="text-[#BA222A] shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@bashfeeq.com</p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="mb-8">
                <div className="flex gap-3 mb-3">
                  <MapPin className="text-[#BA222A] shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Main Office</h4>
                    <p className="text-gray-600">123 Business Ave</p>
                    <p className="text-gray-600">
                      Suite 100, City, State 12345
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
            </Card>

            {/* Contact Form */}
            <Card
              id="contact-form"
              className="md:col-span-2 p-8 border-0 bg-white"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA222A] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA222A] focus:border-transparent"
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA222A] focus:border-transparent"
                      placeholder="+234 123 456 7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA222A] focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="pest-control">Pest Control</option>
                      <option value="fumigation">Fumigation</option>
                      <option value="maintenance">Facility Maintenance</option>
                      <option value="chemical">Chemical Supply</option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BA222A] focus:border-transparent"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#BA222A] hover:bg-[#9a1a22] text-white py-3 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Map Placeholder */}
          {/* <div className="bg-gray-100 rounded-lg overflow-hidden h-96 mb-12 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-[#BA222A] mx-auto mb-4" size={48} />
              <p className="text-gray-600 text-lg">Google Maps Integration Coming Soon</p>
              <p className="text-gray-500">123 Business Ave, Suite 100, City, State 12345</p>
            </div>
          </div> */}

          {/* Secondary Office */}
          {/* <Card className="p-8 border-0 bg-gray-50 md:max-w-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Secondary Office</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <MapPin className="text-[#DE7B60] flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">456 Industrial Park, Unit 200</p>
                  <p className="text-gray-600">City, State 54321</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="text-[#DE7B60] flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="text-[#DE7B60] flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </main>
  );
}
