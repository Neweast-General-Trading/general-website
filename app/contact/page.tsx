import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "NewEast | Contact Us",
  description:
    "Get in touch with NewEast for inquiries about top-quality auto parts including engine & fuel parts, batteries, brakes, steering, and lubricants. We're here to help.",
  keywords: [
    "contact NewEast",
    "auto parts inquiries",
    "car spare parts support",
    "engine parts contact",
    "fuel system help",
    "brake pads support",
    "car battery inquiries",
    "lubricants contact",
    "bearings support",
    "suspension help",
    "steering inquiries",
    "automotive support",
    "UAE auto parts contact",
  ],
  openGraph: {
    title: "NewEast | Contact Us",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL + "/contact",
    image: "/assets/images/ne.png",
    description:
      "Get in touch with NewEast for inquiries about top-quality auto parts including engine & fuel parts, batteries, brakes, steering, and lubricants. We're here to help.",
  },
  twitter: {
    title: "NewEast | Contact Us",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL + "/contact",
    image: "/assets/images/ne.png",
    description:
      "Get in touch with NewEast for inquiries about top-quality auto parts including engine & fuel parts, batteries, brakes, steering, and lubricants. We're here to help.",
  },
};
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Our Location</h3>
                    <p className="text-gray-600">
                      New East General Trading. Plot No S21006, Dubai,UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone Number</h3>
                    <p className="text-gray-600"> +971 4 228 1466</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email Address</h3>
                    <p className="text-gray-600"> Info@neweast.co</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday – Friday 8:00 to 19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border border-gray-200 rounded-sm overflow-hidden">
          <div className="bg-neutral-200 h-100 w-full flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.6237696216876!2d55.083322975373655!3d24.94488367787424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a35cfb3e7%3A0x257a7bb5b22d60b5!2sNeweast%20Group%2C%20Jafza%20-%20Automotive%20Spare%20Parts%20Wholesaler!5e0!3m2!1sen!2sae!4v1746596497765!5m2!1sen!2sae"
              width="2000"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
