import Image from "next/image";
import { CheckCircle, Crosshair, Gem, Target, View } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">
            Marketing and Lead Generation Policy
          </h1>
          <p className="text-gray-600">Marketing and Lead Generation Policy</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">Overview </h2>
              <p className="text-gray-600">
                At Neweast we are committed to leveraging data responsibly to
                enhance our marketing efforts and to provide our customers with
                relevant offers and information. This policy outlines how we
                collect, use, and safeguard the data you provide us and your
                rights regarding marketing communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Data Collection
              </h2>
              <p className="text-gray-600">
                When you fill out a form on our website, you may be asked to
                provide personal information such as your name, email address,
                phone number, and other relevant details. This information is
                collected to help us better understand your needs and provide
                you with services or information that may be beneficial to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Use of Data for Marketing
              </h2>
              <p className="text-gray-600">
                By submitting your information through our website forms, you
                agree that New East may use the data collected for the following
                purposes:
              </p>
              <ul className="list-disc">
                <li className="text-gray-600">
                  To send you promotional materials, offers, and other marketing
                  communications.
                </li>
                <li className="text-gray-600">
                  To enhance or modify our marketing strategies based on user
                  interactions and preferences.
                </li>
                <li className="text-gray-600">
                  For remarketing purposes, allowing us to reach out to you with
                  targeted advertisements on various platforms and services.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Consent for Marketing
              </h2>
              <p className="text-gray-600">
                Consent is obtained explicitly through an opt-in checkbox on our
                forms that states: “☑ By checking this box, you agree to receive
                marketing communications and promotional offers from NeweastYou
                may unsubscribe at any time.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Managing Your Preferences and Withdrawing Consent
              </h2>
              <p className="text-gray-600">
                You have the right to manage your communication preferences or
                withdraw your consent for marketing communications at any time
                by:
              </p>
              <ul className="list-disc">
                <li className="text-gray-600">
                  Following the unsubscribe link included in every marketing
                  email
                </li>
                <li className="text-gray-600">
                  Contacting our customer support to request removal from
                  marketing lists.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Data Sharing and Security
              </h2>
              <p className="text-gray-600">
                Neweast does not share your personal data with third parties for
                their marketing purposes without your explicit consent. We
                implement robust security measures to protect your data from
                unauthorized access, alteration, or destruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Changes to the Policy
              </h2>
              <p className="text-gray-600">
                This policy may be updated periodically to reflect our marketing
                practices or regulatory requirements changes. Users will be
                notified of significant changes and encouraged to review the
                updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
