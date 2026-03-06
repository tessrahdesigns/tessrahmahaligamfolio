import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import whatsInANameImg from "@/assets/blog-whats-in-a-name.jpg";
import diversityImg from "@/assets/blog-diversity-of-thought.jpg";
import angelaBainsImg from "@/assets/link-angela-bains.png";
import openDiversityImg from "@/assets/link-open-diversity-data.png";
import cnbcDiversityImg from "@/assets/link-cnbc-diversity.png";

interface ExternalResource {
  description: string;
  url: string;
  image: string;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  tags?: string[];
  heroImage?: string;
  heroCaption?: string;
  content: string;
  pullQuote?: string;
  resources?: ExternalResource[];
  footnote?: string;
}

const posts: Post[] = [
  {
    slug: "diversity-of-thought",
    title: "Part 1 of 2: What is diversity of thought anyways? (From a POC woman)",
    excerpt: "Once in 2017, my manager said 'we need more diversity in this workplace'. I got excited. Then he said 'I meant diversity of thought.' Here I am 4 years later — it's still on my mind.",
    date: "February 2021",
    category: "Diversity",
    readTime: "7 min",
    tags: ["Diversity", "Blackhistorymonth", "Inclusion", "POC", "Personal development"],
    heroImage: diversityImg,
    heroCaption: "A photographer snaps me while I'm asking questions at Designer Thinkers TO. Conference themed \"Speak The Truth\".",
    content: `Once in 2017, my manager said "we need more diversity in this workplace", I got excited and agreed. I went on to talk about the importance of diversity in the work place. He looked visibly uncomfortable and said "I meant diversity of thought". I was so puzzled and let down. He went on to explain what that meant. "Diversity of thought is when people of different thought processes come together: analytical, creative, etc." The meeting eventually wrapped up and I'm sure it left everyone's minds. Here I am 4 years later, to tell you it's still on my mind today. I have a lot of respect for that boss to this day, but I felt like he was missing something there.

What is "diversity of thought" anyways? Why use that term instead of saying — diversity? It felt like a cop-out. I was 1 of 2 People Of Colour on the team, and the only one who was a woman. Was it fair to explain to me what diversity should mean? Or should the POC's on the team have been the ones leading that discussion?

## First Hand Experience

At Design Thinkers TO in 2018 themed "Speak The Truth", I attended a panel discussion called: "Discrimination in the creative industry? Really?" I voiced my opinion to studio owners in Toronto. I asked "Shouldn't studio's have a hiring quota for people of colour?" The response was an overwhelming "No, that isn't necessary. We look at talent. We hire the best person for the job." The tone was defensive. The panel had one POC who was a female.

Over the years I have sent in countless applications to studios all over the city. I had my portfolio reviewed by my college professors years after graduating, an OCAD thesis professor, and a few RGD professionals. The response was always positive, so I know it wasn't about my lack of talent.

An optional part of the conference experience was visiting studios across the city. I thought I would surely see POC designers in these spaces. In reality, I hardly saw any black or brown faces behind desks. I was definitely right during the panel discussion. There was a biased hiring practise taking place across Toronto design studios and firms. But the studio owners publicly disregarded my opinion as a POC. I was born and raised in the most diverse city in all of Canada, and these opportunities weren't available to me or people like me. The truth is, city studios needed to be better, and introduce diverse hiring practises into the workplace.

Here are a few websites and videos that provide more detail into the subject:`,
    pullQuote: `"Shouldn't studio's have a hiring quota for people of colour?" The response was an overwhelming "No, that isn't necessary. We look at talent. We hire the best person for the job."`,
    resources: [
      {
        description: "In this talk by Angela Bains, she validates my experience. (In case I felt gas lit and crazy, which I did.)",
        url: "https://vimeo.com/301185414",
        image: angelaBainsImg,
      },
      {
        description: "Companies are making an effort to be transparent about their diversity data.",
        url: "http://opendiversitydata.org/",
        image: openDiversityImg,
      },
      {
        description: "For a more recent breakdown, look at CNBC's infographic from 2020.",
        url: "https://www.cnbc.com/2020/06/11/companies-are-making-bold-promises-about-greater-diversity-theres-a-long-way-to-go.html",
        image: cnbcDiversityImg,
      },
    ],
    footnote: "Part two of the article comes out February 28th, 2021.",
  },
  {
    slug: "whats-in-a-name",
    title: "What's in a Name?",
    excerpt: "Theresa, Tess-Sarah, Tessa, Tess, Tesla. I've gotten it all. On the experience of having your name mispronounced — and why LinkedIn's pronunciation feature matters.",
    date: "July 29, 2020",
    category: "Inclusion",
    readTime: "4 min",
    tags: ["Accessibility", "Inclusion", "Diversity", "POC", "Life", "Personal development"],
    heroImage: whatsInANameImg,
    content: `Theresa, Tess-Sarah, Tessa, Tess, Tesla. I've gotten it all. Seriously — even that last one.

Thankfully, LinkedIn has rolled out its name pronunciation feature, and I love it. Finally — an opportunity to beat them to the punch.

In my first fast-food job as a teenager, my boss called me one of these names. I figured "My name must be difficult for him to pronounce, maybe if I let it go he'll be more comfortable." I didn't do anything about it, I just lived with it.

In my first career job, my boss introduced me as Tessa to the entire company. It took me a full month to work up the courage to write an email asking to be called by my full name, Tessrah.

In both situations — I felt anglicized, and like my culture was being stripped away just to make others feel comfortable. These bosses didn't ask me what I preferred to be called beforehand. I had to learn to stand up for myself and claim my name.

LinkedIn has taken a step in the direction of accessibility and inclusiveness. They are lessening the burden on those of us who have non-English sounding names, as well as those who have good intentions of trying to pronounce those names. In the future I hope to see more social platforms taking a similar approach as LinkedIn has. Their user experience team has knocked it out of the park, so that users like me hopefully will have less of these types of experiences.`,
  },
  {
    slug: "designing-with-care",
    title: "Designing with Care in a World That Moves Fast",
    excerpt: "On the tension between shipping quickly and designing thoughtfully — and why slowing down is sometimes the most productive thing you can do.",
    date: "February 2026",
    category: "Craft",
    readTime: "8 min",
    content: `There's a particular kind of guilt that comes with being a thoughtful designer in a fast-moving company. You know the feeling — you've identified three more things that could be better, but the sprint is ending and the feature needs to ship.

I used to think this tension was a problem to solve. Now I think it's a condition to navigate.

The truth is, speed and care aren't opposites. Some of the most careful design work I've done has been fast — because I had clarity about what mattered. And some of the slowest work has been careless — because I was optimizing for the wrong things.

What I've learned is that care isn't about time. It's about attention. You can design with care in a two-hour sprint if you're paying attention to the right things: the user's emotional state, the accessibility implications, the way the words feel when you read them out loud.

The opposite of care isn't speed. It's autopilot. It's reaching for the same patterns without asking whether they serve this particular user in this particular moment.

I've started building "care checkpoints" into my process. Before I call a design done, I ask myself three questions: Who might struggle with this? What am I assuming? What would I want if I were the user having the worst day of their life?

That last question sounds dramatic, but it's been the most useful. Designing for someone at their most vulnerable almost always produces something better for everyone.

Slowing down isn't about taking longer. It's about creating space to notice things. And in a world that rewards output over thoughtfulness, that space is something we have to deliberately protect.`,
  },
  {
    slug: "accessibility-not-afterthought",
    title: "Accessibility Is Not an Afterthought",
    excerpt: "Reflections from a project that changed how I see design. When we design for the margins, we design better for everyone.",
    date: "January 2026",
    category: "Accessibility",
    readTime: "12 min",
    content: `Two years ago, I worked on a project that changed everything about how I approach design. We were redesigning a government service portal — the kind of unglamorous work that rarely makes it into design portfolios but affects millions of people.

Our user research included people with visual impairments, cognitive disabilities, and low digital literacy. What I learned from those sessions has shaped every project since.

The most important lesson: accessibility isn't a feature. It's a lens. When you design with accessibility in mind from the start, you don't end up with a "special" version of your product. You end up with a better product for everyone.

Consider closed captions. They were designed for deaf and hard-of-hearing users, but they're used by people watching videos in noisy environments, non-native speakers, and anyone who processes information better through reading. The "accommodation" became a universal improvement.

The same pattern holds for almost every accessibility consideration. Clear typography helps people with dyslexia and people reading on their phones in sunlight. Logical information hierarchy helps screen reader users and busy executives scanning for key information. Generous touch targets help people with motor impairments and people using their phones with one hand while holding a coffee.

What frustrates me about our industry is how often accessibility is treated as a compliance checkbox — something to be audited at the end, fixed reluctantly, and forgotten about until the next audit.

The teams that do accessibility well treat it as a design value, not a technical requirement. They include disabled users in research. They test with assistive technology throughout the process, not just at the end. They celebrate when they find and fix accessibility issues, rather than treating them as bugs.

I'm not perfect at this. I still catch myself designing for the "average" user and having to course-correct. But I'm getting better, and every project where I prioritize accessibility from the start reinforces that it's not just the right thing to do — it's the smart thing to do.`,
  },
  {
    slug: "ai-design-partnership",
    title: "AI as a Design Partner, Not a Replacement",
    excerpt: "What I've learned from experimenting with AI tools in my design practice — the surprises, the limitations, and the possibilities.",
    date: "December 2025",
    category: "AI & Design",
    readTime: "10 min",
    content: `I've been experimenting with AI tools in my design practice for about a year now, and I have thoughts. Lots of them. Some surprising, some confirming what I already suspected, and some that have completely changed how I work.

First, the obvious: AI is not going to replace designers. But it is going to change what we spend our time on. The mechanical parts of design — generating variations, resizing assets, writing placeholder content — are increasingly automatable. That's not a threat; it's a gift. Those tasks were never the valuable part of design anyway.

What AI can't do (yet) is the thing that makes design design: understanding human context. It can't sit in a user research session and notice the pause before someone says "it's fine." It can't feel the political dynamics in a stakeholder meeting. It can't sense when a team is burned out and needs a simpler solution, not a better one.

Where I've found AI most useful is as a thinking partner. When I'm stuck on a problem, I'll describe it to an AI and ask for alternative framings. Not solutions — framings. "What are three different ways to think about this problem?" is a much more useful prompt than "Design me a solution."

I've also found AI surprisingly good at challenging my assumptions. When I describe a design decision, it'll sometimes ask a question I hadn't considered. It's like having a junior designer who's read everything but experienced nothing — occasionally brilliant, often naive, always worth listening to.

The biggest risk I see isn't that AI will replace designers. It's that it will make us lazy. When you can generate a "good enough" solution in seconds, the temptation to stop thinking is real. The designers who thrive will be the ones who use AI to move faster through the mechanical work so they can spend more time on the human work — the research, the thinking, the caring.

My advice to designers worried about AI: get curious, not defensive. Experiment with every tool you can. Figure out where AI makes you faster and where it makes you worse. And never, ever stop talking to real humans about real problems. That's the part that can't be automated.`,
  },
  {
    slug: "quiet-leadership",
    title: "The Power of Quiet Leadership in Design",
    excerpt: "Not all design leaders need to be loud. On creating space for others, leading through craft, and the underrated skill of listening.",
    date: "November 2025",
    category: "Leadership",
    readTime: "6 min",
    content: `I am not the loudest person in the room. I never have been. For years, I thought this was a limitation — something I needed to overcome to be taken seriously as a design leader.

I was wrong.

The design industry has a bias toward loud leadership. We celebrate the provocative conference speakers, the designers with strong opinions on Twitter, the leaders who "have a vision" and rally teams around it with charisma.

There's nothing wrong with that kind of leadership. But it's not the only kind, and I'd argue it's not always the most effective kind.

Quiet leadership looks different. It's about creating space for others to do their best work. It's about asking questions instead of giving answers. It's about leading through the quality of your craft rather than the volume of your voice.

The most impactful thing I do as a design leader isn't giving presentations or setting vision. It's listening. Really listening — not the kind where you're waiting for your turn to talk, but the kind where you're genuinely trying to understand what someone is saying and why they're saying it.

When you listen well, you learn things that loud leaders miss. You hear the junior designer's brilliant idea that they were too nervous to share in the big meeting. You notice the engineer's concern that would have become a major problem three sprints from now. You sense the product manager's anxiety about a metric that's quietly declining.

Quiet leadership also means being comfortable with silence. In design critiques, I've learned to wait. When I ask "what do you think?" and no one responds immediately, the temptation is to fill the silence with my own opinion. But if I wait — really wait — someone else will speak up. And their perspective is almost always more valuable than what I would have said.

I'm not suggesting that quiet leaders are better than loud ones. I'm suggesting that both are needed, and that our industry doesn't value the quiet ones enough. If you're a quiet designer wondering whether you can lead: you can. Your superpower isn't being heard — it's helping others be heard.`,
  },
];

const WritingPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Post not found</h1>
          <Link to="/writing" className="text-primary hover:underline">← Back to Writing</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/writing" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Writing
          </Link>

          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span className="text-primary">{post.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-lg mb-6">
            {post.excerpt}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.heroImage && (
            <div className="mb-12 rounded-lg overflow-hidden border border-border">
              <img src={post.heroImage} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-neutral max-w-none border-t border-border pt-12">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WritingPost;
