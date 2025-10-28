var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    var title = document.createElement("h1");
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.textContent = blog.title;
    title.appendChild(link);
    blogPost.appendChild(title);
    var date = document.createElement("p");
    date.textContent = "Date: ".concat(blog.date);
    blogPost.appendChild(date);
    var description = document.createElement("p");
    description.textContent = blog.description;
    blogPost.appendChild(description);
    var image = document.createElement("img");
    image.src = blog.image;
    blogPost.appendChild(image);
    var imageAlt = document.createElement("p");
    imageAlt.textContent = "Image Alt: ".concat(blog.imageAlt);
    blogPost.appendChild(imageAlt);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPost);
});
