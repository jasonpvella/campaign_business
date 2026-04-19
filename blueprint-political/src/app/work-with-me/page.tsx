import type { Metadata } from "next";
import IntakeForm from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Work With Me | Blueprint Political",
  description:
    "Inquire about working with Blueprint Political. Fill out the intake form and we'll follow up within 2 business days.",
};

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="blueprint-grid py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-serif text-navy text-5xl md:text-6xl leading-tight mb-4">
            Let&apos;s see if we&apos;re a fit.
          </h1>
          <p className="font-sans text-text-muted text-lg mb-3 leading-relaxed">
            Fill out the form below. We review every inquiry personally and follow up within 2 business days.
          </p>
          <p className="font-sans text-text-muted text-sm">
            There&apos;s no commitment in reaching out — just a conversation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <IntakeForm />
        </div>
      </section>
    </>
  );
}
