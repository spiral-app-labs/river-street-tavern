import Link from "next/link";

const hours = [
  { day: "Sunday", time: "11am – 1am", kitchen: "11am – 9pm" },
  { day: "Monday", time: "Closed", kitchen: "" },
  { day: "Tuesday", time: "4pm – 1am", kitchen: "4pm – 9pm" },
  { day: "Wednesday", time: "4pm – 1am", kitchen: "4pm – 9pm" },
  { day: "Thursday", time: "4pm – 1am", kitchen: "4pm – 10pm" },
  { day: "Friday", time: "11am – 2am", kitchen: "11am – 11pm" },
  { day: "Saturday", time: "11am – 2am", kitchen: "11am – 11pm" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-amber/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">
              River Street Tavern
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              East Dundee&apos;s first gastropub. Elevated American pub grub,
              craft cocktails, and good times since 2017.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/RSTavern/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-amber/30 flex items-center justify-center text-amber hover:bg-amber hover:text-charcoal transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.doordash.com/store/river-street-tavern-east-dundee-891186/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-amber/30 flex items-center justify-center text-amber hover:bg-amber hover:text-charcoal transition-all"
                aria-label="DoorDash"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.583.583 0 00.1 6.191L6.63 12.72a4.927 4.927 0 003.49 1.445h.086a4.927 4.927 0 003.49-1.445l2.393-2.394a2.178 2.178 0 013.079 0 2.178 2.178 0 010 3.08L12.7 19.874a.583.583 0 00.413.996h5.463a6.09 6.09 0 004.31-1.786l.185-.185a6.09 6.09 0 000-8.612z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-amber mb-4">
              Hours
            </h4>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-cream/70">{h.day}</span>
                  <span className={h.time === "Closed" ? "text-red-light" : "text-cream"}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-amber mb-4">
              Visit Us
            </h4>
            <address className="not-italic space-y-3 text-sm text-cream/70">
              <p>
                102 N River St<br />
                East Dundee, IL 60118
              </p>
              <p>
                <a
                  href="tel:+18478440474"
                  className="text-amber hover:text-amber-light transition-colors"
                >
                  (847) 844-0474
                </a>
              </p>
            </address>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/menu" className="btn-primary text-center text-sm !py-2">
                View Menu
              </Link>
              <a
                href="https://www.opentable.com/r/river-street-tavern-east-dundee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-sm !py-2"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber/10 text-center text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} River Street Tavern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
