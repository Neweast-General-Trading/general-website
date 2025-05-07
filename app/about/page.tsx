import Image from "next/image";
import { CheckCircle, Crosshair, Gem, Target, View } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600">
            Learn more about our company and mission
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/Images/about_us/ahmad-ceo.png"
                alt="About Our Company"
                width={600}
                height={500}
                className="rounded-sm"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Message from Our CEO
              </h2>
              <p className="text-gray-600">
                At the heart of Neweast General Trading lies a steadfast
                commitment to three core principles: focus, nurture, and
                consistency. As a global leader in the aftermarket automotive
                industry, our vision is clear: to stand as the epitome of
                excellence by consistently delivering top-tier services,
                offering a comprehensive range of products, and being the
                ultimate choice for our valued customers.
              </p>
              <p className="text-gray-600">
                For over three decades, Neweast General Trading has remained
                dedicated to providing the finest automotive spare parts,
                competitive pricing, and exceptional customer service within the
                aftermarket sector. Today, we proudly rank among the foremost
                automotive parts distributors on a global scale. Our unwavering
                focus on meeting customer needs shines through our extensive
                selection of high-quality auto parts, our commitment to building
                strong client relationships, and our industry-leading
                warranties.
              </p>
              <p className="text-gray-600">
                As we forge ahead, Neweast General Trading is dedicated to
                pioneering progressive approaches in our operations, aiming to
                positively influence the world and make it a better place.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                <Image
                  src="/assets/Images/about_us/signature.png"
                  alt="About Our Company"
                  width={600}
                  height={500}
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">
                Beyond Genuine
              </h2>
              <p className="text-gray-600">
                The demand for high-quality and dependable aftermarket
                automotive spare parts is continuously rising in the
                ever-evolving realm of advanced engineering. Neweast General
                Trading is your go-to destination for premium brands,
                exceptional products, and unmatched customer service. With a
                history of excellence dating back to 1992, we have diligently
                served the automation industry.
              </p>
              <p className="text-gray-600">
                Distinguished as the largest importer and distributor of
                aftermarket automotive parts in the United Arab Emirates,
                Neweast General Trading has established itself as an industry
                leader. Our global footprint extends worldwide, offering
                comprehensive support through various communication channels,
                including phone, email, and online platforms such as our website
                and social media channels.
              </p>
              <p className="text-gray-600">
                Whether in Europe, the Middle East, or Southeast Asia, Neweast
                General Trading is your trusted partner for all your aftermarket
                automotive parts needs. Explore a world of quality and
                reliability with us.
              </p>
            </div>
            <div>
              <Image
                src="/assets/Images/about_us/building.png"
                alt="About Our Company"
                width={600}
                height={500}
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/Images/about_us/building2.jpg"
                alt="About Our Company"
                width={600}
                height={500}
                className="rounded-sm"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">Our Vision</h2>
              <p className="text-gray-600">
                Our vision centers on being a customer-centric organisation,
                retaining our status as a leading supplier of manufactured
                automotive spare parts in local and international markets.
              </p>
              <p className="text-gray-600">
                We are committed to evolving into a comprehensive, one-stop
                distributor, providing dealers with a seamless resource for all
                their automotive spare parts needs and facilitating their
                business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-500">Our History</h2>
              <p className="text-gray-600">
                Excellence defines our company, setting us apart as industry
                leaders. Our relentless pursuit includes a commitment to zero
                lost sales and zero late deliveries for each valued customer.
              </p>
              <p className="text-gray-600">
                Our dedicated team, the backbone of our business, comprises
                highly motivated individuals passionate about their work, mainly
                when delivering genuine customer support.
              </p>
            </div>
            <div>
              <Image
                src="/assets/Images/about_us/Picture6.png"
                alt="About Our Company"
                width={600}
                height={500}
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-500">
              Our Mission & Values
            </h2>
            <p className="text-gray-600">
              We're committed to providing quality parts, exceptional service,
              and expert advice to keep your vehicle running at its best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Gem className="text-red-500 "></Gem>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Through High Values
              </h3>
              <p className="text-gray-600">
                Rooted in solid values and guided by dedicated leadership, it is
                to uphold and build upon the foundation laid by the company’s
                founders. We remain steadfast in our commitment to elevate
                productivity and provide high-quality, value-added services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <View className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Through Social Responsibility
              </h3>
              <p className="text-gray-600">
                We embrace the principles of social responsibility, conducting
                our business with integrity and ethics. We aim to earn and
                cultivate trust among our valued customers, dedicated employees,
                and the broader community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Crosshair className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Through Commitment</h3>
              <p className="text-gray-600">
                Our customers are our top priority. We strive for excellence
                through integrity, honesty, and continuous skill improvement to
                meet their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-500">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              “Together, our team is dedicated to providing the best solutions
              and services to our clients.” and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                name: "AHMAD JUMA AHLI",
                position: "CHIEF EXECUTIVE OFFICER",
                image: "/assets/images/about_us/team/1.png",
                link: "https://www.linkedin.com/in/ahmed-juma-al-ahli/",
              },
              {
                name: "Sarah Johnson",
                position: "Chief Operations Officer",
                image: "/assets/images/about_us/team/2.jpg",
                link: "/about",
              },
              {
                name: "Michael Brown",
                position: "Head of Product",
                image: "/assets/images/about_us/team/3.jpg",
                link: "/about",
              },
              {
                name: "Emily Davis",
                position: "Customer Service Director",
                image: "/assets/images/about_us/team/4.jpg",
                link: "https://www.linkedin.com/in/henryshaaya/?originalSubdomain=ae",
              },
              {
                name: "Emily Davis",
                position: "Customer Service Director",
                image: "/assets/images/about_us/team/5.jpg",
                link: "https://www.linkedin.com/in/nantha-kumar-2a310847/?originalSubdomain=ae",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full border-4 border-red-500 overflow-hidden">
                  <Link href={member.link}>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-500">
              Our Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-sm">
              <Image
                src={"/assets/images/about_us/iso/1.jpg"}
                width={250}
                height={500}
                className="mx-auto"
                alt={""}
              />
            </div>

            <div className="bg-white p-6 rounded-sm">
              <Image
                src={"/assets/images/about_us/iso/2.jpg"}
                width={250}
                height={500}
                className="mx-auto"
                alt={""}
              />
            </div>

            <div className="bg-white p-6 rounded-sm">
              <Image
                src={"/assets/images/about_us/iso/3.jpg"}
                width={250}
                height={500}
                className="mx-auto"
                alt={""}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
