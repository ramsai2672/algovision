import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { algorithms, searchAlgorithms } from "@/data/algorithms";

const quickLinks = [
  { label: "Bubble Sort", id: "bubble-sort" },
  { label: "Binary Search", id: "binary-search" },
  { label: "Insertion Sort", id: "insertion-sort" },
];

const categories = [
  { name: "Sorting", count: 2, icon: "↕️" },
  { name: "Searching", count: 1, icon: "🔍" },
];

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = searchAlgorithms(query);
  const showResults = query.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-foreground">AlgoVis</span>
        </div>
        <span className="text-sm text-muted-foreground hidden sm:block">Learn algorithms visually</span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
            See algorithms{" "}
            <span className="text-primary">come alive</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Step-by-step visual explanations that make computer science click.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full max-w-xl mx-auto relative"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search algorithms... (e.g. Bubble Sort, Binary Search)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-base rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground"
            />
          </div>

          {/* Search results dropdown */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-10 overflow-hidden"
            >
              {results.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground text-sm">
                  No algorithms found for "{query}"
                </div>
              ) : (
                results.map((algo) => (
                  <button
                    key={algo.id}
                    onClick={() => navigate(`/visualize/${algo.id}`)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-accent transition-colors text-left group"
                  >
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {algo.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{algo.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mt-8 justify-center"
        >
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(`/visualize/${link.id}`)}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-16 max-w-sm w-full"
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
              onClick={() => setQuery(cat.name)}
            >
              <span className="text-2xl mb-2 block">{cat.icon}</span>
              <p className="font-semibold text-foreground text-sm">{cat.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{cat.count} algorithms</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
