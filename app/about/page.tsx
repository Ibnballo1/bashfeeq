import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { highlights, values } from "@/config/about-data";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-linear-to-br from-white via-[#FEFDFD] to-[#E3B5B8]/10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Bash-feeq Ventures
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Your trusted partner in facility maintenance and pest control
            solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-[#E3B5B8]/20 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/professional-facility-maintenance-service.png"
                alt="Bash-feeq Ventures team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bash-feeq Ventures is a leading provider of facility maintenance
                and pest control services. With over two decades of experience,
                we have established ourselves as a trusted partner for
                businesses and organizations seeking reliable, professional
                solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of certified professionals is dedicated to delivering
                exceptional service quality while maintaining the highest
                standards of safety and environmental responsibility.
              </p>
              <div className="space-y-3">
                {highlights.slice(0, 3).map((highlight, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2
                      className="text-[#BA222A] shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <Card className="p-8 border-0 bg-white">
              <div className="w-14 h-14 bg-[#BA222A] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide superior facility maintenance and pest control
                services that exceed client expectations while promoting health,
                safety, and environmental sustainability.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 border-0 bg-white">
              <div className="w-14 h-14 bg-[#DE7B60] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative provider of facility and
                pest management solutions in the region, known for our
                commitment to excellence and customer satisfaction.
              </p>
            </Card>

            {/* Culture */}
            <Card className="p-8 border-0 bg-white">
              <div className="w-14 h-14 bg-[#E3B5B8] rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-900 text-2xl font-bold">C</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Culture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We foster a culture of continuous improvement, teamwork, and
                professional development. Every team member is empowered to
                deliver excellence.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 bg-white hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-[#BA222A] mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-[#BA222A]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-[#BA222A]" size={20} />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
