import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
    </main>
  );
}