import Link from "./Link";

export default function Links() {
  return (
    
    <section className="mt-12">
      <h3 className="lg:text-center max-md:text-5xl max-md:-tracking-widest max-sm:px-4 lg:text-8xl font-bold">Réseaux Sociaux</h3>
      <div className="grid md:grid-cols-4 gap-x-8 py-16">
        <Link type="WhatsApp" icon="./svgs/whatsapp.svg" />
        <Link type="Instagram" icon="./svgs/instagram.svg" />
        <Link type="TikTok" icon="./svgs/tiktok.svg" />
        <Link type="FaceBook" icon="./svgs/facebook.svg" />
      </div>
    </section>
  );
}
