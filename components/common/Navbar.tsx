"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBar() { 
    const THEME_KEY = "himsi-theme";
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Tentang", href: "/about" },
        { name: "Kabinet", href: "/kabinet" },
        { name: "Aspirasi", href: "/aspirasi" },
    ];

    useEffect(() => {
        const saved = (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light";
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
    }, []);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        onScroll(); 
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark", next === "dark");
            localStorage.setItem(THEME_KEY, next);
            return next;
        });
    };

    return (
        <nav className={cn(
                "flex top-0 z-50 fixed w-full items-center justify-between py-4 md:py-4 transition-all duration-300"
                , isScrolled 
                ? "bg-white/20 backdrop-blur-md shadow-md" 
                : "bg-transparent"
            )}
        >
            <div className="mx-4 md:mx-8 lg:mx-40 flex items-center justify-between w-full font-medium">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/icon.png"
                        alt="Logo HIMSI"
                        width={42}
                        height={42}
                        priority
                        className="rounded-2xl"
                    />
                    <span className="hidden sm:inline text-foreground font-semibold hover:text-[#2464A8] transition-colors duration-300">
                        HIMSI
                    </span>
                </Link>

                <div className="hidden md:flex gap-8 items-center font-semibold">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-foreground hover:text-[#2464A8] transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <Button
                    type="button"
                    onClick={toggleTheme}
                    variant="outline"
                    className={cn(
                        "hidden md:inline-flex h-10 rounded-full px-4",
                        "border-white/35 bg-white/15 text-foreground hover:bg-white/25",
                        "dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                    )}
                >
                    {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                </Button>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 text-foreground z-50 relative"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div 
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-start transition-colors",
                    "transition-all duration-300 md:hidden",
                    isOpen 
                    ? "opacity-100 pointer-events-auto " 
                    : "opacity-0 pointer-events-none"
                )}
                    >
                    <div className="absolute top-16 flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-color duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <Button
                            type="button"
                            onClick={toggleTheme}
                            variant="outline"
                            className="h-11 rounded-full"
                        >
                            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}