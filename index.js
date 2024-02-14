// import router from "./routes/routes";

const express = require("express");
const port = 5005;

const app = express();

let tab = [
    {
        id: 1,
        message: "",
        nom: "sharon",
        postnom: "kabongo",
        title: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        likes: 1400
    },
    {
        id: 2,
        message: "voici les donnees",
        nom: "sharon",
        postnom: "kabongo",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        likes: 140,
    },
    {
        id: 3,
        message: "voici les donnees",
        nom: "sharon",
        postnom: "kabongo"
    }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.json(tab);
});

app.put("/", (req, res) => {
    res.json('salut');
});

app.post("/", (req, res) => {
    res.json('hello');
});

// Route pour supprimer un élément du tableau en fonction de son ID
app.delete("/:id", (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const indexToDelete = tab.findIndex(item => item.id === idToDelete);
    if (indexToDelete !== -1) {
        tab.splice(indexToDelete, 1);
        res.json({ message: `L'élément avec l'ID ${idToDelete} a été supprimé.` });
    } else {
        res.status(404).json({ message: `Aucun élément avec l'ID ${idToDelete} n'a été trouvé.` });
    }
});

app.listen(port, () => {
    console.log('Serveur démarré sur le port');
});































// const express = require("express");
// const port = 5004;

// const app = express();
// // app.use(routes)


// app.get("/", (req, res) => {
//     const tab = [
//         {
//             id : 1,
//              message: "",
//             nom: "sharon",
//             postnom: "kabongo",
//             title: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//             likes: 1400
//         },
//         {
//             id : 2,
//             message: "voici les donnees",
//             nom: "sharon",
//             postnom: "kabongo",
//             title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",
//             likes:140,
//         },
//         {
//             id : 3,
//             message: "voici les donnees",
//             nom: "sharon",
//             postnom: "kabongo"
            
//         }
//     ]
//     res.json(tab)
// })

// app.put("/", (req, res) => {
//     res.json('salut')
// })
// app.post("/", (req, res) => {
//     res.json('hello')
// })
// app.delete("/", (req, res) => {
//     res.json('hey')
// })

// app.delete("/:id", (req, res) => {
//     const idToDelete = parseInt(req.params.id);
//     const indexToDelete = tab.findIndex(item => item.id === idToDelete);
//     if (indexToDelete !== -1) {
//         tab.splice(indexToDelete, 1);
//         res.json({ message: `L'élément avec l'ID ${idToDelete} a été supprimé.` });
//     } else {
//         res.status(404).json({ message: `Aucun élément avec l'ID ${idToDelete} n'a été trouvé.` });
//     }
// });












// app.listen(port, () => console.log("le serveur a été lencer sur le port" + port));