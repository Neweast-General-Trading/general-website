"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;
import ReCAPTCHA from "react-google-recaptcha";
import type { NextPage } from "next";
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-sm mb-6">
          Thank you for your message! We'll get back to you shortly.
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Name
          </label>
          <Input
            id="name"
            {...register("name")}
            className={`w-full rounded-sm ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full rounded-sm ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <Input
            id="subject"
            {...register("subject")}
            className={`w-full rounded-sm ${
              errors.subject ? "border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className={`w-full min-h-[120px] rounded-sm border ${
              errors.message ? "border-red-500" : "border-input"
            } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        {/* <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          ref={recaptchaRef}
          onChange={handleChange}
          onExpired={handleExpired}
        /> */}
        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 rounded-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
