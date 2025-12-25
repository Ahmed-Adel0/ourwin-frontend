import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SectionWrapper from "../../components/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "../../components/FAQSection/FAQList";

const blogPosts = [
  {
    slug: "web-design-trends-2024",
    title: "WEB DESIGN TRENDS SHAPING 2024",
    category: "Design",
    readTime: "6 mins",
    author: "Laura Turner",
    date: "25th October 2023",
    image: "/hands.webp",
  },
  {
    slug: "minimalistic-design-art",
    title: "MASTERING THE ART OF MINIMALISTIC DESIGN",
    category: "Design",
    readTime: "7 mins",
    author: "Sophia Roberts",
    date: "18th September 2023",
    image: "/hands.webp",
  },
];

const getPost = (slug) =>
  blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44 text-white">
      <Navbar />

      <section className="w-full pb-16 md:pb-20 lg:pb-24">
        <SectionWrapper>
          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 md:gap-8 mb-10 md:mb-12">
            {/* Title block */}
            <div className="bg-[#062131] rounded-2xl border border-[#45B7BA]/25 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 flex flex-col justify-between">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-white/80">
                <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10">
                  Category · {post.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10">
                  Read Time · {post.readTime}
                </span>
              </div>
            </div>

            {/* Meta card */}
            <aside className="bg-[#03141f] rounded-2xl border border-[#45B7BA]/25 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-5 sm:p-6 flex flex-col gap-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="uppercase tracking-[0.2em] text-[10px] text-white/60">
                  Author
                </span>
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="uppercase tracking-[0.2em] text-[10px] text-white/60">
                  Published Date
                </span>
                <span>{post.date}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="uppercase tracking-[0.2em] text-[10px] text-white/60">
                  Category
                </span>
                <span>{post.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase tracking-[0.2em] text-[10px] text-white/60">
                  Read Time
                </span>
                <span>{post.readTime}</span>
              </div>
            </aside>
          </div>

          {/* Cover image */}
          <div className="mb-10 md:mb-12 rounded-2xl overflow-hidden border border-[#45B7BA]/20 shadow-[0_24px_80px_rgba(0,0,0,0.9)] bg-[#03141f]">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-6 md:gap-8 mb-14">
            {/* Article body */}
            <article className="bg-[#062131] rounded-2xl border border-[#45B7BA]/25 p-6 sm:p-7 md:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.85)] text-sm sm:text-base leading-relaxed text-gray-100 space-y-6">
              <p>
                In the realm of design, the essence of minimalism lies in the
                deliberate choice to distill complexity and convey a powerful
                message through simplicity.
              </p>
              <p>
                As a philosophy, minimalism encourages designers to remove
                visual noise, focus on clarity, and highlight what truly matters
                to the user.
              </p>
              <p>
                From whitespace to typography and color, each decision plays a
                crucial role in directing attention and shaping emotion.
              </p>
              <p>
                When used thoughtfully, minimalistic interfaces become
                intuitive, timeless, and deeply aligned with brand values.
              </p>
            </article>

            {/* Author / social sidebar (simple static block) */}
            <aside className="bg-[#03141f] rounded-2xl border border-[#45B7BA]/25 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.85)] flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#45B7BA] to-[#006781] flex items-center justify-center text-black font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-xs text-gray-300">Art Director</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Crafting visual narratives that captivate and inspire, turning
                complex ideas into clear and memorable stories.
              </p>
              <Link
                href="/blogs"
                className="mt-2 inline-flex items-center text-xs font-semibold text-[#45B7BA] hover:text-white transition-colors"
              >
                ← Back to all blogs
              </Link>
            </aside>
          </div>

          {/* Related blogs (simple row from same data) */}
          <section>
            <div className="mb-5 sm:mb-6">
              <div className="rounded-3xl bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.75)] flex items-center justify-between">
                <h2 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide">
                  RELATED BLOGS
                </h2>
                <Link
                  href="/blogs"
                  className="hidden sm:inline-flex items-center text-xs font-semibold text-black/90 bg-white/80 hover:bg-white px-3 py-1.5 rounded-full transition-colors"
                >
                  ALL BLOGS ↗
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
              {blogPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-[#062131] rounded-2xl border border-[#45B7BA]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-300 mb-4">
                      {related.category} · {related.readTime}
                    </p>
                    <Link
                      href={`/blogs/${related.slug}`}
                      className="mt-auto inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#45B7BA] hover:text-white transition-colors"
                    >
                      READ FULL BLOG <span className="text-xs">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </SectionWrapper>
      </section>
      <FAQSection />
      <Footer />
    </main>
  );
};

export default BlogPostPage;
