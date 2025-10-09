type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Cloudy Day",
        date: "2023-10-08",
        description: "A day filled with clouds and rain.",
        image: "images/cloudy-day.png",
        imageAlt: "Cloudy Day",
        slug: "cloudy-day",
    },
    {
        title: "Sunny Day",
        date: "2023-10-09",
        description: "A bright and sunny day.",
        image: "images/sunny-day.png",
        imageAlt: "Sunny Day",
        slug: "sunny-day",
    },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
    const blogPost = document.createElement("div");
    blogPost.className = "blog-post";

    const title = document.createElement("h1");
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.textContent = blog.title;
    title.appendChild(link);
    blogPost.appendChild(title);

    const date = document.createElement("p");
    date.textContent = `Date: ${blog.date}`;
    blogPost.appendChild(date);

    const description = document.createElement("p");
    description.textContent = blog.description;
    blogPost.appendChild(description);

    const image = document.createElement("img");
    image.src = blog.image;
    blogPost.appendChild(image);

    const imageAlt = document.createElement("p");
    imageAlt.textContent = `Image Alt: ${blog.imageAlt}`;
    blogPost.appendChild(imageAlt);

    blogContainer?.appendChild(blogPost);
});
