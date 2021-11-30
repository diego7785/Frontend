function getAvatar(userId) {
    return fetch(`https://i.pravatar.cc/200?${userId}`);
}
function createUserCard(user) {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = user.imageUrl;
    const description = document.createElement("p");
    description.textContent = user.name;
    container.append(image, description);
    return container;
}
const users = [
    {
        userId: "1",
        name: "User One",
        country: "A",
        tags: ["Frontend"]
    },
    {
        userId: "2",
        name: "User Two",
        country: "B",
        tags: ["Frontend", "Backend", "Devops"]
    },
    {
        userId: "3",
        name: "User Three",
        country: "C",
        tags: ["Backend", "DevOps"]
    },
    {
        userId: "4",
        name: "User Four",
        country: "C",
        tags: ["DevOps"]
    },
    {
        userId: "5",
        name: "User Five",
        country: "B",
        tags: ["DevOps"]
    }
];

function filterByTag(array, tag) {
    return array.filter(user => user.tags.includes(tag));
}

console.log(filterByTag(users, "Backend"));
// 1: Write a function to filter users by tags: Ex. Get All Backend Users