export interface Blog {
    title: string;
    date: string;
    image: string;
    content: string;
}
export const blogs: Blog[] = [
    {
        title: "Cloudy Day",
        date: "2023-10-08",
        image: "../public/cloudy-day.png",
        content: "A day filled with clouds and rain.",
    },
    {
        title: "Sunny Day",
        date: "2023-10-09",
        image: "../public/sunny-day.png",
        content: "A bright and sunny day.",
    },
];

export default blogs;
