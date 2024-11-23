import HomeSection from "./components/home.section";
import FeatureSection from "./components/feature.section";
import GallerySection from "./components/gallery.section";
import TestimoniSction from "./components/testimoni.section";
import BookSection from "./components/book.section";
import FooterSection from "./components/footer.section";

export default async function brick() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="bg-white mb-20">
          <div className="container max-w-screen-xl mx-auto px-4">
            <HomeSection />
          </div>
        </section>

        <FeatureSection />

        <GallerySection />

        <TestimoniSction />

        <BookSection />

        <FooterSection />
      </main>
    </>
  );
}
