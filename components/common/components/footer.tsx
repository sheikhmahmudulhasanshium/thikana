import { footerLinks } from "@/lib/defaults-options";
import { basicinfo } from "@/lib/sample-data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t bg-muted/50">
            <div className="mx-auto max-w-7xl px-6 py-8">
                {/* Main content area */}
                <div className="flex flex-col gap-8 md:flex-row">
                    {/* Section 1: Logo */}
                    <section className="flex justify-center md:w-1/4 md:justify-start">
                        <Link href="/" aria-label="Home">
                            {/* NOTE: Replace with your actual logo path in the /public directory */}
                            <Image
                                src="/logo-placeholder.svg" // Example path
                                alt={`${basicinfo.name} Logo`}
                                width={100}
                                height={100}
                                className="h-12 w-auto dark:invert"
                            />
                        </Link>
                    </section>

                    {/* Section 2: Description and Links */}
                    <section className="flex-1">
                        <p className="text-base text-muted-foreground">
                            {basicinfo.description}
                        </p>
                        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </section>
                </div>

                {/* Bottom copyright notice */}
                <div className="mt-8 border-t pt-8">
                    <small className="block text-center text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} {basicinfo.name}. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;