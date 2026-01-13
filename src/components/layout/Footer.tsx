import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-neutral-light border-t border-neutral-default pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-6 w-10 rounded bg-accent flex items-center justify-center text-primary-dark font-bold text-xs">
                HBT
              </div>
              <span className="font-heading font-bold text-lg text-primary tracking-tight">
                HBT <span className="text-accent">Enterprises</span>
              </span>
            </Link>
            <p className="text-neutral-dark text-sm leading-relaxed">
              Premium electronics for the modern creator. Experience the future of technology today.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-primary font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-neutral-dark">
              <li><Link href="/products" className="hover:text-accent transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Deals</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-primary font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-neutral-dark">
              <li><Link href="#" className="hover:text-accent transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Warranty</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary font-bold mb-4">Stay Updated</h4>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-neutral-default border border-neutral-default rounded px-3 py-2 text-sm text-primary placeholder:text-neutral-400 focus:outline-none focus:border-accent w-full"
              />
              <button 
                type="submit"
                className="bg-accent text-primary-dark font-bold rounded px-3 py-2 text-sm hover:brightness-110 transition-all"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-default pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-dark text-xs">
            &copy; {new Date().getFullYear()} HBT Enterprises. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="h-8 w-8 rounded bg-neutral-default flex items-center justify-center text-neutral-dark hover:bg-accent hover:text-primary-dark transition-colors cursor-pointer">
               TW
            </div>
            <div className="h-8 w-8 rounded bg-neutral-default flex items-center justify-center text-neutral-dark hover:bg-accent hover:text-primary-dark transition-colors cursor-pointer">
               IG
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
