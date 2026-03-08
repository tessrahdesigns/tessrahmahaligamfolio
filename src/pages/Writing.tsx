import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "diversity-of-thought-pt2",
    title: "Part 2 of 2: What is diversity of thought anyways? (From a POC woman)",
    excerpt: "For Part 2 I wanted to hear a POC man's perspective of what diversity of thought means to him — as well as how he is trying to create social change.",
    date: "February 2021",
    category: "Diversity",
    readTime: "6 min",
  },
  {
    slug: "diversity-of-thought",
    title: "Part 1 of 2: What is diversity of thought anyways? (From a POC woman)",
    excerpt: "Once in 2017, my manager said 'we need more diversity in this workplace'. I got excited. Then he said 'I meant diversity of thought.' Here I am 4 years later — it's still on my mind.",
    date: "February 2021",
    category: "Diversity",
    readTime: "7 min",
  },
  {
    slug: "whats-in-a-name",
    title: "What's in a Name?",
    excerpt: "Theresa, Tess-Sarah, Tessa, Tess, Tesla. I've gotten it all. On the experience of having your name mispronounced — and why LinkedIn's pronunciation feature matters.",
    date: "July 2020",
    category: "Inclusion",
    readTime: "4 min",
  },
];

const categories = ["All", "Craft", "Accessibility", "Inclusion", "Diversity", "AI & Design", "Leadership", "Personal"];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const Writing = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Writing
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-10">
            Long-form essays on design, craft, leadership, and the
            things I'm still figuring out.
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs font-medium px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-0 divide-y divide-border"
        >
          {posts.map((post) => (
            <motion.article key={post.slug} variants={item} className="py-10 first:pt-0 group">
              <Link to={`/writing/${post.slug}`} className="block">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-primary">{post.category}</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;
