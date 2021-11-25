function getAvatar(userId) {
    return fetch(`https://i.pravatar.cc/200?${userId}`, {
        mode: "no-cors"
    });
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

function createBlobImage(users) {
    const promises = users.map(user => getAvatar(user.userId)
        .then(response => {
            return response.blob()
        })
            .then(avatar => {
                user.imageUrl = URL.createObjectURL(avatar);
                return user;
            }
        )
        .catch(error => console.log(error))
    );
    return Promise.all(promises);
}


createBlobImage(users).then(users => {
    console.log(users);
});

// 3: A function that return a promise with image as a Blob URL
