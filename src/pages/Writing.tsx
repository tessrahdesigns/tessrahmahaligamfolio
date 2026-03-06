import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const Writing = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
            Writing
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-10">
            Long-form essays on design, craft, leadership, and the 
            things I'm still figuring out.
          </p>

          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                className="text-xs font-medium px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="py-8 first:pt-0"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span>·</span>
                <span className="text-primary">{post.category}</span>
              </div>
              <Link to={`/writing/${post.slug}`}>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
