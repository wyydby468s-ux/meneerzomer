import { getLes, lessen } from "@/data/lessen";
import { notFound } from "next/navigation";
import LesClient from "./LesClient";

export async function generateStaticParams() {
  return lessen.map((les) => ({ slug: les.slug }));
}

export default async function LesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const les = getLes(slug);
  if (!les) notFound();
  return <LesClient les={les} />;
}
