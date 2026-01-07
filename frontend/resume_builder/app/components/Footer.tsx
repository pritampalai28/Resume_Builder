export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-slate-500">
                        &copy; {new Date().getFullYear()} ResumeBuilder, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
