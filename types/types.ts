import type { ElementType } from "react";

export type AboutStat = {
    value: string;
    label: string;
    Icon: ElementType;
};

export type AboutStatCardProps = {
    item: AboutStat;
};

export type Testimonial = {
    id: string;
    quoteText: string;
    name: string;
    role: string;
    avatar: string;
};

export type MarqueeColumnProps = {
    items: Testimonial[];
    duration?: number;
    offset?: number;
    reverse?: boolean;
};

export type FaqItem = {
    q: string;
    a: string;
};

export type ContactCard = {
    title: string;
    value: string;
    href: string;
    tint: string;
    iconColor: string;
    Icon: ElementType;
};

export type GalleryItem = {
    src: string;
    alt: string;
    title: string;
    proker: string;
    purpose: string;
};

export type Person = {
    name: string;
    role: string;
    avatar?: string;
    quote?: string;
};

export type Division = {
    name: string;
    members: Person[];
};

export type BidangId = "bpi" | "psdm" | "litbang" | "sosial" | "kominfo";

export type BidangName =
    | "BPI"
    | "Badan Pengurus Inti"
    | "PSDM"
    | "Litbang IT"
    | "Sosial"
    | "Kominfo";

export type WorkProgram = {
    title: string;
    image: string;
    description: string;
};

export type BidangDetail = {
    id: BidangId;
    name: BidangName;
    logo: string;
    desc: string;
    leaders: Person[];
    divisions: Division[];
    workPrograms?: WorkProgram[];
};

export type BPIRole =
    | "Ketua"
    | "Wakil Ketua"
    | "Sekretaris 1"
    | "Sekretaris 2"
    | "Bendahara 1"
    | "Bendahara 2";

export type BPI = {
    name: string;
    role: BPIRole;
    avatar?: string;
};
