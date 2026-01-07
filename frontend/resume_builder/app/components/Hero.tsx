export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white pt-32 pb-16 sm:pb-24">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                        Build Your Perfect <span className="text-blue-600">Career Path</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        A comprehensive platform for resume building, skill assessment, and career growth. tailored for professionals and hiring teams alike.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                        >
                            Start Building
                        </a>
                        <a href="#features" className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Abstract Background Decoration */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)] opacity-40" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            </div>
        </div>
    );
}
