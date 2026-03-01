import type { Variants } from "framer-motion";

const ease = {
    smooth: [0.25, 0.46, 0.45, 0.94] as const,
    snappy: [0.34, 1.56, 0.64, 1]    as const,
    spring: { type: "spring", stiffness: 80,  damping: 18 } as const,
    stiff:  { type: "spring", stiffness: 130, damping: 22 } as const,
};

export const heroVariants: Variants = {
    initial: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
    enter: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        filter: "blur(4px)",
        transition: { duration: 0.45, ease: ease.smooth },
    },
};

export const heroChildVariants: Variants = {
    initial: { opacity: 0, y: 18, filter: "blur(4px)" },
    enter: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: -10,
        filter: "blur(3px)",
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const aboutVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.4, ease: ease.smooth },
    },
};

export const aboutContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const aboutCardVariants: Variants = {
    initial: { opacity: 0, y: 28, scale: 0.95 },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: ease.snappy },
    },
    exit: {
        opacity: 0,
        y: 14,
        scale: 0.97,
        transition: { duration: 0.3, ease: ease.smooth },
    },
};

export const speechVariants: Variants = {
    initial: { opacity: 0, x: -40 },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        x: -24,
        transition: { duration: 0.4, ease: ease.smooth },
    },
};

export const speechImageVariants: Variants = {
    initial: { opacity: 0, x: 40, rotate: 4 },
    enter: {
        opacity: 1,
        x: 0,
        rotate: 1.2,
        transition: { duration: 0.65, delay: 0.1, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        x: 24,
        transition: { duration: 0.4, ease: ease.smooth },
    },
};

export const testimonialsVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const faqVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const faqContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
        transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
};

export const faqItemVariants: Variants = {
    initial: { opacity: 0, y: 16 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: 8,
        transition: { duration: 0.25, ease: ease.smooth },
    },
};

export const contactVariants: Variants = {
    initial: { opacity: 0, y: 24 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: 12,
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const contactContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.09, delayChildren: 0.12 },
    },
    exit: {
        transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
};

export const contactCardVariants: Variants = {
    initial: { opacity: 0, y: 20, scale: 0.96 },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: ease.snappy },
    },
    exit: {
        opacity: 0,
        y: 10,
        scale: 0.98,
        transition: { duration: 0.28, ease: ease.smooth },
    },
};

export const logoVariants: Variants = {
    initial: { opacity: 0, scale: 0.88, rotate: -6 },
    enter: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.85, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        scale: 0.92,
        rotate: 3,
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const kabinetHeroChildVariants: Variants = {
    initial: { opacity: 0, y: 22, filter: "blur(5px)" },
    enter: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: -12,
        filter: "blur(3px)",
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const kabinetHeroContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
    exit: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
};

export const profileCardVariants: Variants = {
    initial: { opacity: 0, y: 30, clipPath: "inset(20% 10% 0% 10% round 28px)" },
    enter: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0% round 28px)",
        transition: { duration: 0.8, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: 15,
        clipPath: "inset(10% 5% 0% 5% round 28px)",
        transition: { duration: 0.45, ease: ease.smooth },
    },
};

export const filosofiHeadingVariants: Variants = {
    initial: { opacity: 0, y: -30 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        y: -16,
        transition: { duration: 0.3, ease: ease.smooth },
    },
};

export const filosofiCenterVariants: Variants = {
    initial: { opacity: 0, scale: 0.7, rotate: -8 },
    enter: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.7, ease: ease.snappy },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        rotate: 4,
        transition: { duration: 0.4, ease: ease.smooth },
    },
};

export const filosofiLeftContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
};

export const filosofiLeftCardVariants: Variants = {
    initial: { opacity: 0, x: -50 },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const filosofiRightContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
};

export const filosofiRightCardVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        x: 30,
        transition: { duration: 0.35, ease: ease.smooth },
    },
};

export const bidangContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: {
        transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
};

export const bidangTileVariants: Variants = {
    initial: { opacity: 0, scale: 0.88, y: 20 },
    enter: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: ease.stiff,
    },
    exit: {
        opacity: 0,
        scale: 0.92,
        y: 10,
        transition: { duration: 0.3, ease: ease.smooth },
    },
};

export const pengurusInfoVariants: Variants = {
    initial: { opacity: 0, x: -50 },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: { duration: 0.4, ease: ease.smooth },
    },
};

export const pengurusOrbitalVariants: Variants = {
    initial: { opacity: 0, x: 60 },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: ease.smooth },
    },
    exit: {
        opacity: 0,
        x: 40,
        transition: { duration: 0.4, ease: ease.smooth },
    },
};

export const prokerContainerVariants: Variants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
    exit: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
};

export const prokerCardVariants: Variants = {
    initial: { opacity: 0, y: 40, rotateX: 8 },
    enter: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.55, ease: ease.snappy },
    },
    exit: {
        opacity: 0,
        y: 20,
        rotateX: 4,
        transition: { duration: 0.3, ease: ease.smooth },
    },
};