"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Zap,
  HeadphonesIcon,
  Globe,
} from "lucide-react";

export default function ContactPage() {

  return (
    <section className="min-h-screen bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <header className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              24/7 ENTERPRISE SUPPORT
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white tracking-tight">
            Let's Connect
          </h1>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Our dedicated team is ready to assist you with expert solutions
            <br className="hidden sm:block" />
            and personalized support for your business needs
          </p>
        </header>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800/50 p-8 hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-none translate-y-0 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
            <div className="relative flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-xl">Call Us</h3>
                <p className="text-primary font-bold text-lg">
                  965 7866 739
                </p>
                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-neutral-500">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat, 9 AM - 6 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800/50 p-8 hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none translate-y-0 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
            <div className="relative flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-xl">Email Us</h3>
                <a href="mailto:arifbadmash488@gmail.com" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-lg transition-colors break-all">
                  arifbadmash488@gmail.com
                </a>
                <p className="text-sm text-neutral-500 mt-3">
                  Quick response within 24h
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800/50 p-8 hover:border-purple-500/50 transition-all duration-300 shadow-sm dark:shadow-none translate-y-0 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all" />
            <div className="relative flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-xl">Visit Us</h3>
                <a href="https://maps.app.goo.gl/DPsBLSYMTmDnJKet6" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-purple-500 dark:text-neutral-400 dark:hover:text-purple-400 leading-relaxed transition-colors group-hover:font-medium inline-block">
                  Rani Durgawati Chowk<br />
                  Panchsheel Nagar<br />
                  Nagpur
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 backdrop-blur-xl border border-primary/10 p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                Why Work With Us
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white text-lg">Expert Support Team</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Industry-leading professionals at your service</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white text-lg">Fast Response</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Always ready to solve your appliance needs</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white text-lg">Verified Quality</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">100% genuine products with full warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium FAQ Section */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition duration-1000" />
          
          <div className="relative bg-white dark:bg-neutral-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800/50 shadow-xl dark:shadow-none">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Quick answers to help you get started
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How do I track my order?",
                  a: "Access real-time order tracking through your dashboard. Receive instant notifications at every delivery milestone via email and SMS.",
                  icon: Globe,
                  color: "primary"
                },
                {
                  q: "What is your return policy?",
                  a: "Hassle-free returns within 30 days. Items must be in original condition with packaging. Full refund or exchange guaranteed.",
                  icon: CheckCircle2,
                  color: "blue-500"
                },
                {
                  q: "Do you offer technical support?",
                  a: "Yes! Premium 24/7 technical support via phone, email, and live chat. Expert assistance whenever you need it.",
                  icon: HeadphonesIcon,
                  color: "purple-500"
                },
                {
                  q: "How can I become a partner?",
                  a: "We're always seeking strategic partnerships. Contact us with 'Partnership' in the subject line for priority review.",
                  icon: Zap,
                  color: "green-500"
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="group/faq relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800/50 p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover/faq:bg-primary/10 transition-all" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-${faq.color}/10 flex items-center justify-center shrink-0`}>
                        <faq.icon className={`w-5 h-5 text-${faq.color}`} />
                      </div>
                      <h3 className="font-bold text-neutral-900 dark:text-white text-lg leading-tight flex-1">
                        {faq.q}
                      </h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed pl-14">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        .bg-pos-100 {
          background-position: 100% 50%;
        }
      `}</style>
    </section>
  );
}