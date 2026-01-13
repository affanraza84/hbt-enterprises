import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-light isolate pt-14 lg:pt-0">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent/40 to-blue-200/40 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-40">
           <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 items-center">
              <div className="lg:col-span-7">
                  <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                    Now Available: Series X
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl mb-6 font-heading">
                    Upgrade Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                        Digital Reality
                    </span>
                  </h1>
                  <p className="mt-4 text-lg text-neutral-dark mb-8 leading-relaxed max-w-2xl">
                    Experience the pinnacle of engineering with our curated collection of premium electronics. 
                    Designed for professionals, engineered for performance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products">
                        <Button size="lg" variant="primary" className="w-full sm:w-auto">
                            Shop Collection
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-neutral-300 text-primary hover:bg-neutral-default hover:border-neutral-400">
                            View Specs
                        </Button>
                    </Link>
                  </div>
              </div>
              
              <div className="mt-16 sm:mt-24 lg:col-span-5 lg:mt-0">
                  {/* Abstract Tech Visual */}
                  <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-neutral-light to-neutral-default backdrop-blur-md border border-neutral-default shadow-2xl flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-all duration-700"></div>
                      <div className="relative z-10 text-center p-8">
                          <div className="w-40 h-40 mx-auto bg-gradient-to-tr from-accent via-blue-500 to-primary rounded-3xl shadow-lg transform rotate-12 group-hover:rotate-6 transition-all duration-500 flex items-center justify-center mb-6">
                             <div className="w-32 h-32 bg-neutral-light rounded-2xl flex items-center justify-center shadow-lg">
                                 <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Categories (Placeholder Grid) */}
      <section className="py-24 bg-neutral-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-end mb-12">
                 <div>
                     <h2 className="text-3xl font-bold text-primary font-heading">Explore Categories</h2>
                     <p className="mt-2 text-neutral-dark">Find the perfect gear for your workflow.</p>
                 </div>
                 <Link href="/products" className="text-accent font-medium hover:text-accent/80 flex items-center gap-1 group">
                     View All <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </Link>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative overflow-hidden rounded-2xl bg-neutral-default aspect-[4/3] border border-neutral-default hover:border-accent transition-all cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-default text-opacity-20">
                           <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/></svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-light/90 to-transparent flex flex-col justify-end p-8">
                             <h3 className="text-xl font-bold text-primary mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">Category {i}</h3>
                             <p className="text-neutral-dark text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Professional grade tools</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
}
