import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={
                "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/b159ec4b930_white-logo.png"
              }
              width={200}
              height={100}
              alt={"New East Logo"}
            />
            <p className="text-gray-400 mb-4">
              NewEast is a leading provider of high-quality auto parts with a
              commitment to excellent customer service and competitive pricing.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/neweastgroup"
                className="bg-red-600 hover:bg-red-700 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/neweastgroup"
                className="bg-red-600 hover:bg-red-700 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCq4-6zR-8SrtgdA0XYlezhg"
                className="bg-red-600 hover:bg-red-700 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Youtube className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/neweastgroup"
                className="bg-red-600 hover:bg-red-700 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NewEast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
