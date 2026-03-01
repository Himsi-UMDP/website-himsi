"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants, HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "variants" | "animate"> {
    variants: Variants;
    as?: keyof typeof motion;
    threshold?: number;
    rootMargin?: string;
    className?: string;
    children?: React.ReactNode;
}

const reducedVariants: Variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

export function AnimatedSection({
    variants,
    as = "div",
    threshold = 0.15,
    rootMargin = "-60px 0px -60px 0px",
    className,
    children,
    ...rest
}: AnimatedSectionProps) {
    const shouldReduceMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        margin: rootMargin as `${number}px ${number}px ${number}px ${number}px`,
        amount: threshold,
        once: false,
    });

    const activeVariants = shouldReduceMotion ? reducedVariants : variants;
    const animate = isInView ? "enter" : "exit";

    const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <MotionComponent
            ref={ref}
            variants={activeVariants}
            initial="initial"
            animate={animate}
            className={className}
            {...(rest as HTMLMotionProps<"div">)}
        >
            {children}
        </MotionComponent>
    );
}

export function AnimatedItem({
    variants,
    className,
    children,
    ...rest
}: Omit<AnimatedSectionProps, "threshold" | "rootMargin" | "as">) {
    const shouldReduceMotion = useReducedMotion();
    const activeVariants = shouldReduceMotion ? reducedVariants : variants;

    return (
        <motion.div
            variants={activeVariants}
            className={className}
            {...(rest as HTMLMotionProps<"div">)}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedList<T>({
    containerVariants,
    itemVariants,
    items,
    renderItem,
    className,
    itemClassName,
    threshold,
    rootMargin,
}: {
    containerVariants: Variants;
    itemVariants: Variants;
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    className?: string;
    itemClassName?: string;
    threshold?: number;
    rootMargin?: string;
}) {
    return (
        <AnimatedSection
            variants={containerVariants}
            className={className}
            threshold={threshold}
            rootMargin={rootMargin}
        >
            {items.map((item, i) => (
                <AnimatedItem key={i} variants={itemVariants} className={itemClassName}>
                    {renderItem(item, i)}
                </AnimatedItem>
            ))}
        </AnimatedSection>
    );
}