"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Scroll Reveal ── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Menu Data ── */
interface MenuItem {
  name: string;
  price: string;
  desc: string;
  img: string;
  addons?: string;
}

interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Shall We Begin",
    subtitle: "Appetizers",
    items: [
      { name: "Peppered Candied Bacon", price: "$7", desc: "Maple syrup glazed with cracked black pepper", img: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop" },
      { name: "Disco Fries", price: "$12", desc: "Bacon, braised pork, bacon sriracha queso, pickled jalapeños, scallions, sour cream", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop" },
      { name: "Charred Bruschetta", price: "$13", desc: "Tomatoes, fresh mozzarella & basil on crostini, balsamic reduction", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop" },
      { name: "Bavarian Pretzels", price: "$9", desc: "With IPA beer cheese", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" },
      { name: "Southwest Eggrolls", price: "$13", desc: "Seasoned chicken, cheddar jack, corn, black beans, red peppers, wonton wrap, chipotle ranch", img: "https://images.unsplash.com/photo-1606525437679-037aca74a8a7?w=400&h=300&fit=crop" },
      { name: "Crab Cake Sliders", price: "$13", desc: "Four sliders with spring mix, Asian aioli on Hawaiian rolls", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop" },
      { name: "Cheese Curds", price: "$9", desc: "Battered Wisconsin white cheddar curds with chipotle ranch", img: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop" },
      { name: "Tavern Nachos", price: "$13", desc: "Tortilla chips, bacon sriracha queso, bacon, pico, pickled jalapeños, sour cream, cilantro", img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop", addons: "Add: Chili $3 | Honey Sriracha Chicken $4 | Braised Pork $4 | Steak $5" },
    ],
  },
  {
    title: "Greens for the Win",
    subtitle: "Salads",
    items: [
      { name: "RST Chop Chop", price: "$14", desc: "Grilled chicken, bacon, hearts of palm, bleu cheese, black olives, red onion, tomatoes, balsamic vinaigrette", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
      { name: "Good Ol' Bleu Steak", price: "$14", desc: "Diced steak, bacon, red onions, tomatoes, bleu cheese on wedge, bleu cheese dressing", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop" },
      { name: "Asian Street Market", price: "$13", desc: "Chicken, napa cabbage, mixed greens, cucumbers, red peppers, carrots, scallions, mandarin oranges, sesame seeds, wontons, Asian ginger peanut dressing", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },
      { name: "Southwest Salad", price: "$14", desc: "Tequila lime chicken, corn & black bean salsa, green onions, cotija cheese, chipotle ranch, tortilla strips", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop" },
    ],
  },
  {
    title: "Warm Up",
    subtitle: "Soups",
    items: [
      { name: "Soup of the Day", price: "Bowl $6 / Cup $4", desc: "Ask your server for today's selection", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop" },
      { name: "Stout Chili", price: "Bowl $8 / Cup $6", desc: "Topped with cheddar jack, pickled jalapeños, sour cream", img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop" },
    ],
  },
  {
    title: "All About the Bird",
    subtitle: "Wings, Bites & Tenders",
    items: [
      { name: "Smoked Wings", price: "$14", desc: "Five full wings (drum, flat & tip), carrots & celery", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop", addons: "Sauces: Roasted Garlic Buffalo, Honey Sriracha, Maple Bourbon BBQ, Sweet Asian Chili, Teriyaki, Banzai, Steve's Sauce, RST Heat | Rubs: Chili Lime, Cajun, Lemon Pepper, Salt & Vinegar" },
      { name: "Chicken Bites", price: "$11", desc: "Hand cut white meat, lightly battered", img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop" },
      { name: "Beer Battered Chicken Tenders", price: "$11", desc: "Crispy beer-battered tenders with your choice of sauce", img: "https://images.unsplash.com/photo-1585325701165-351af045e4e3?w=400&h=300&fit=crop" },
    ],
  },
  {
    title: "Use Both Hands",
    subtitle: "Sandwiches",
    items: [
      { name: "Grilled Steak", price: "$17", desc: "Provolone, horseradish dijon, roasted tomatoes, IPA onions, spring mix on steak roll", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop" },
      { name: "Pot Roast", price: "$14", desc: "Braised pot roast, provolone, IPA onions on garlic brushed steak roll", img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=400&h=300&fit=crop" },
      { name: "Tomato Caprese", price: "$13", desc: "Fresh mozzarella, roasted tomatoes, basil aioli, balsamic drizzle on sourdough", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" },
      { name: "Pub Chicken", price: "$14", desc: "Provolone, honey mustard, bacon, LTO on pretzel bun", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop" },
      { name: "Mojo Cuban Melt", price: "$14", desc: "Braised pork, capicola, swiss, yellow mustard, pickled red onions, pickles on steak roll", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" },
      { name: "Smoked Corned Beef", price: "$15", desc: "House smoked, swiss, pickles, horseradish dijon on rye", img: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=300&fit=crop" },
      { name: "Southern Chicken", price: "$15", desc: "Crispy chicken, Nashville hot sauce, pickles, napa slaw, cheddar on brioche", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop" },
      { name: "Turkey Club", price: "$14", desc: "House smoked turkey, provolone, bacon, spring mix, tomatoes, chipotle aioli on pita", img: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop" },
    ],
  },
  {
    title: "Five Star Burgers",
    subtitle: "2 100% USDA Angus Chuck patties, cooked medium or above",
    items: [
      { name: "Farmhouse", price: "$16", desc: "Bacon, fried egg, provolone, garlic peppercorn aioli, roasted tomatoes, crispy onion strings, spring mix on brioche", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
      { name: "Tavern", price: "$15", desc: "Bacon, beer cheese, caramelized IPA onions, roasted mushrooms, garlic peppercorn aioli on pretzel bun", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop" },
      { name: "Curd Cobain", price: "$16", desc: "Hamburger patty + battered Wisconsin white cheddar patty, lettuce, tomato, chipotle aioli on brioche", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop" },
      { name: "'Merica", price: "$15", desc: "Bacon jam, American cheese, bacon, red onion, pickles on brioche", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop" },
    ],
  },
  {
    title: "Put It in a Bowl",
    subtitle: "Bowls",
    items: [
      { name: "Smokey Salmon", price: "$17", desc: "Honey sriracha glaze, pineapple pico, cilantro lime rice, power blend", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop" },
      { name: "Tequila Lime Chicken", price: "$14", desc: "Tequila lime glaze, roasted seasoned potatoes, steamed broccoli", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop" },
      { name: "Maple Bourbon BBQ Pork", price: "$14", desc: "Maple bourbon BBQ glazed braised pork bowl", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    ],
  },
];

/* ── Category Nav ── */
const categoryIds = menuData.map((cat) => cat.title.toLowerCase().replace(/\s+/g, "-"));

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categoryIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    categoryIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveCategory(id);
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop"
            alt="Restaurant dining"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-amber uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            River Street Tavern
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream mb-4">
            Our Menu
          </h1>
          <p className="text-cream/70 text-lg">
            Elevated pub grub made with care — from Five Star Burgers to smoked wings
          </p>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <nav className="sticky top-20 z-40 bg-charcoal-dark/95 backdrop-blur-md border-b border-amber/10">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-3 min-w-max">
            {menuData.map((cat, i) => (
              <a
                key={categoryIds[i]}
                href={`#${categoryIds[i]}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(categoryIds[i])?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === categoryIds[i]
                    ? "bg-amber text-charcoal"
                    : "text-cream/70 hover:text-cream hover:bg-charcoal-light"
                }`}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {menuData.map((category, catIdx) => (
          <section
            key={category.title}
            id={categoryIds[catIdx]}
            className="mb-20 scroll-mt-40"
          >
            <Reveal>
              <div className="mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="text-amber/80 text-sm mt-1 italic">{category.subtitle}</p>
                )}
                <div className="w-16 h-0.5 bg-amber mt-4" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 100}>
                  <div className="menu-item-card bg-charcoal-light rounded-xl overflow-hidden border border-amber/10 h-full flex flex-col">
                    <div className="relative h-44">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-amber text-charcoal text-sm font-bold px-3 py-1 rounded-full">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-serif text-lg font-bold text-cream mb-2">
                        {item.name}
                      </h3>
                      <p className="text-cream/60 text-sm leading-relaxed flex-1">
                        {item.desc}
                      </p>
                      {item.addons && (
                        <p className="text-amber/70 text-xs mt-3 pt-3 border-t border-amber/10">
                          {item.addons}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Order CTA */}
      <section className="py-16 bg-charcoal-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
            Can&apos;t Make It In?
          </h2>
          <p className="text-cream/70 mb-8">
            Order your favorites for delivery or takeout through DoorDash
          </p>
          <a
            href="https://www.doordash.com/store/river-street-tavern-east-dundee-891186/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Order on DoorDash
          </a>
        </div>
      </section>
    </>
  );
}
