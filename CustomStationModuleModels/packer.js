const fs = require('fs').promises;

const exportData = async function (name, author, path) {

    const data = {
        name,
        author,
        data: []
    };

    path = path.replace(/([^\/])$/, "$1/");

    let input = path + "codes/";

    for (let i = 1; i < 10; ++i) try {
        let id = "st" + i;
        let text = await fs.readFile(input + id + ".coffee", 'utf-8');
        data.data.push({
            id,
            type: "structure",
            generate: text.trim()
        })
    }
    catch (e) {}

    for (let i = 1; i < 4; ++i) try {
        let id = "sp" + i;
        let text = await fs.readFile(input + id + ".coffee", 'utf-8');
        data.data.push({
            id,
            type: "spawning",
            generate: text.trim()
        })
    }
    catch (e) {}

    for (let i = 1; i < 3; ++i) try {
        let id = "d" + i;
        let text = await fs.readFile(input + id + ".coffee", 'utf-8');
        data.data.push({
            id,
            type: "deposit",
            generate: text.trim()
        })
    }
    catch (e) {}

    fs.writeFile(path + "manifest.json", JSON.stringify(data, null, '\t'));
}

exportData("RTX Modules", "Robounko", "Robonuko_RTXModules");