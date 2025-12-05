import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#DE7B60] mb-4">
              Bashfeeq Ventures
            </h3>
            <p className="text-gray-300 text-sm">
              Quality service guaranteed. Professional facility maintenance and
              pest control solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#DE7B60] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#DE7B60] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#DE7B60] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#DE7B60] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm">Pest Control</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Fumigation</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">
                  Facility Maintenance
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Chemical Supply</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Phone size={18} className="text-[#DE7B60] shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="text-[#DE7B60] shrink-0" />
                <span className="text-gray-300 text-sm">info@bashfeeq.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={18} className="text-[#DE7B60] shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business Ave, Suite 100
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Bashfeeq Ventures. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#DE7B60] text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#DE7B60] text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
