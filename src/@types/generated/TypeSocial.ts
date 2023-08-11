import type { Entry, EntryFields } from "contentful";

export interface TypeSocialFields {
    id: EntryFields.Symbol;
    icon: "email" | "facebook" | "github" | "instagram" | "linkedin" | "phone" | "tiktok" | "website" | "youtube";
    link: Entry<Record<string, any>>;
}

export type TypeSocial = Entry<TypeSocialFields>;