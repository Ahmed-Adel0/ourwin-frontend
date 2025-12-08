import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "../components/FAQSection";

const blogPosts = [
  {
    slug: "web-design-trends-2024",
    title: "WEB DESIGN TRENDS SHAPING 2024",
    category: "Design",
    readTime: "6 mins",
    author: "Laura Turner",
    image: "/hands.webp",
    summary:
      "Stay ahead of the design curve with insights into the latest web design trends and immersive user experiences.",
    featured: true,
  },
  {
    slug: "optimizing-mobile-ux",
    title: "OPTIMIZING MOBILE USER EXPERIENCE FOR HIGHER CONVERSIONS",
    category: "UX",
    readTime: "5 mins",
    author: "David Kim",
    image: "/hands.webp",
    summary:
      "Mobile interactions dominate digital behavior. Learn how to craft mobile journeys that convert.",
  },
  {
    slug: "minimalistic-design-art",
    title: "MASTERING THE ART OF MINIMALISTIC DESIGN",
    category: "Design",
    readTime: "7 mins",
    author: "Sophia Roberts",
    image: "/hands.webp",
    summary:
      "Explore how minimalism balances clarity, focus, and emotion in modern digital products.",
  },
  {
    slug: "visual-psychology-branding",
    title: "THE PSYCHOLOGY OF VISUAL DESIGN IN BRANDING",
    category: "Branding",
    readTime: "8 mins",
    author: "Wade Warren",
    image: "/hands.webp",
    summary:
      "Understand how color, layout, and imagery shape perception and trust in your brand.",
  },
];

const BlogsPage = () => {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const others = blogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44 text-white">
      <Navbar />

      <section className="w-full">
        <SectionWrapper>
          {/* Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="rounded-3xl bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 md:px-10 py-5 sm:py-6 shadow-[0_28px_80px_rgba(0,0,0,0.75)]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
                OUR BLOGS
              </h1>
            </div>
          </div>

          {/* Featured + Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-6 md:gap-8 mb-14 md:mb-16">
            {/* Featured Visual */}
            <article className="bg-[#03141f] rounded-2xl border border-[#45B7BA]/25 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Featured Content */}
            <article className="bg-[#0b253b] rounded-2xl border border-[#45B7BA]/25 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-6 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-4">
                  {featured.title}
                </h2>
                <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs mb-4 text-white/85">
                  <span className="px-3 py-1 rounded-full bg-black/35 border border-white/10">
                    Category · {featured.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/35 border border-white/10">
                    Read Time · {featured.readTime}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/35 border border-white/10">
                    Author · {featured.author}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6">
                  {featured.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href={`/blogs/${featured.slug}`}
                  className="inline-flex items-center text-sm sm:text-base font-semibold tracking-wide text-white hover:text-[#45B7BA] transition-colors group"
                >
                  <span className="mr-2 h-9 w-9 rounded-full border border-white/15 flex items-center justify-center bg-black/40 group-hover:border-[#45B7BA] group-hover:bg-[#062131] transition-all">
                    ↗
                  </span>
                  READ FULL BLOG
                </Link>
              </div>
            </article>
          </div>

          {/* Other blogs grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 mb-16">
            {others.map((post) => (
              <article
                key={post.slug}
                className="bg-[#0b253b] rounded-2xl border border-[#45B7BA]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 flex-1">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-white/70">
                    <span>
                      {post.category} · {post.readTime}
                    </span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#45B7BA] hover:text-white transition-colors"
                    >
                      <span>READ FULL BLOG</span>
                      <span className="text-xs">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </section>
      <FAQSection />
      <Footer />
    </main>
  );
};

export default BlogsPage;
