import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Reform NB",
  description: "Contact Reform NB securely. Submit tips, volunteer, or reach out to our investigative team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
