// import metadata from "./meta.json"

const metadata = {
    title: "Carp Travel - the most beautiful parts of the Carpathians",
    description: "Unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
    url: "https://carp-travel-xi.vercel.app/",
    locale: "uk_UA",
    keywords: "Carp Travel, ATVs Traveling, Rock climbing, Hot air ballooning, Skydiving, Rafting",
    images: {
        url: "https://carp-travel-xi.vercel.app/_next/image?url=%2Fabout%2Fslide3.png&w=384&q=75"
    },
    type: "website",
    icons: { icon: "/favicon.ico" },
    card: "summary_large_image"
}

const { title, description, locale, keywords, url, images, type, icons, card } = metadata;

export const meta = {
    title,
    description,
    locale,
    keywords,
    openGraph: {
        title,
        description,
        url,
        images,
        type,
        icons,
    },
    twitter: {
        title,
        description,
        card,
        images,
    },
};