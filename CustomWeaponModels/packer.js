const fs = require('fs').promises;

const enums = {
    "Space_Mine": "Mine",
    "Heavy_Mine": "Mine2",
    "Defense_Pod": "Defence_Pod"
}

const list = [
    "Rocket",
    "Missile",
    "Torpedo",
    "Space_Mine",
    "Heavy_Mine",
    "Mining_Pod",
    "Attack_Pod",
    "Defence_Pod"
]

const exportData = async function (name = "", author = "", path = "./") {

    const data = {
        name,
        author,
        data: []
    };

    path = path.replace(/([^\/])$/, "$1/");

    let input = path + "codes/";

    for (name of list) try {
        let text = await fs.readFile(input + name + ".coffee", 'utf-8');
        data.data.push({
            type: enums[name] || name,
            data: text.trim()
        })
    }
    catch (e) {}

    await fs.writeFile(path + "manifest.json", JSON.stringify(data, null, '\t'));
    console.log("Packed successfully!");
}

exportData(...process.argv.slice(2));