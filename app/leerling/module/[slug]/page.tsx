import { lessen } from "@/data/lessen";
import { notFound } from "next/navigation";
import ModuleClient from "./ModuleClient";

export async function generateStaticParams() {
  return lessen.map((l) => ({ slug: l.slug }));
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const les = lessen.find(l => l.slug === slug);
  if (!les) notFound();
  return <ModuleClient les={les} />;
}
