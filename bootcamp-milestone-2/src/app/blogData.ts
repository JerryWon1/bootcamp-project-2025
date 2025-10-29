export interface Blog {
    id: number;
    title: string;
    date: string;
    image: string;
    content: string;
}
export const blogs: Blog[] = [
    {
        id: 1,
        title: "Cloudy Day",
        date: "2023-10-08",
        image: "/cloudy-day.png",
        content: "A day filled with clouds and rain.",
    },
    {
        id: 2,
        title: "Sunny Day",
        date: "2023-10-09",
        image: "/sunny-day.png",
        content: "A bright and sunny day.",
    },
];

export default blogs;
