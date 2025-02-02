import "./home_page.css";
import {
  CategoriesSection,
  CollectionSection,
  HeroSection,
} from "./components";
import { useDocumentTitle } from "../../custom_hooks/useDocumentTitle";

export const HomePage = () => {
  useDocumentTitle("");

  const collection_bg_url =
    "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzYwOTFfY292ZXJfNTE1OTFlNjE1MTczMGQ3NGQxNzFlN2ZhOTdjMjU3YzYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjIwLCJoZWlnaHQiOjQyMCwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=4a01e589d67a157e5a8512fb3743949df7d5612e96b02bd3b13ac924c1f72c9a";
  const collection_bg_url2 =
    "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzMyODdfY292ZXJfY2UwNjRmNjI2ZGE0NjI0MzI1MTA5YjRiMDVmZTgyNmYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDY1LCJoZWlnaHQiOjMxNSwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=ce6e4956bbf7bd80c4bf6471ec041536f8543a032bd9c053fcc96ecc80c63b1c";

  return (
    <main className="main">
      {/*  hero section */}
      <HeroSection />

      {/* category section */}
      <CategoriesSection />

      {/* collection section  */}
      <CollectionSection
        collection_bg_url2={collection_bg_url2}
        collection_bg_url={collection_bg_url}
      />
    </main>
  );
};
