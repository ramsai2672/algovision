import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code2, GitCompare, Globe, Sparkles } from "lucide-react";
import SortingHeroAnimation from "@/components/SortingHeroAnimation";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: Sparkles,
    title: "Step-by-Step Visualization",
    description: "Watch algorithms execute in real-time with animated bars, graphs, and trees. Understand every swap, comparison, and decision.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Brain,
    title: "AI Step Explanations",
    description: "Get intelligent, plain-English explanations for each step. AI breaks down why an algorithm makes each decision.",
    color: "bg-neon-purple/15 text-neon-purple",
  },
  {
    icon: Code2,
    title: "Code-to-Visualization",
    description: "Paste your algorithm code and watch it transform into an interactive visualization. Supports multiple languages.",
    color: "bg-neon-green/15 text-neon-green",
  },
  {
    icon: GitCompare,
    title: "Algorithm Comparison",
    description: "Run two algorithms side-by-side on the same dataset. Compare time complexity, swaps, and performance in real-time.",
    color: "bg-neon-orange/15 text-neon-orange",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(174_72%_50%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Algorithm Visualization Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                See Algorithms{" "}
                <span className="text-gradient">Come Alive</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Visualize, compare, and understand algorithms through interactive step-by-step animations powered by AI explanations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/visualizer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Visualizing <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/compare"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Compare Algorithms
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-elevated rounded-2xl border border-border p-8 border-glow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-neon-orange/60" />
                <span className="h-3 w-3 rounded-full bg-neon-green/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">bubble_sort.viz</span>
              </div>
              <SortingHeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to master algorithms, from visual learning to AI-powered insights.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Real-World CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card-elevated rounded-2xl border border-border p-10 md:p-16 text-center border-glow"
          >
            <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-display mb-4">
              Real-World Problem Simulation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              See how algorithms solve real problems — from GPS navigation using Dijkstra's to 
              resource allocation with dynamic programming. Bridge the gap between theory and practice.
            </p>
            <Link
              to="/simulate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Simulations <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 AlgoVision. Built for learners, by learners.
        </div>
      </footer>
    </div>
  );
};

export default Index;
