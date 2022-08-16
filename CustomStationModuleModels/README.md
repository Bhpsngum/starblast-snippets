# Custom Station Module Models Open Project
Having custom station modules' models in your game

## Requirements
* Support ES6 or higher
* Support `fetch()` function

TL/DR; just use latest browser version
## How to use it
Load the file `loader.user.js` to your UserScript Loader. The shortcut is `Ctrl + Shift + M` (all OS) to open URL import box

## What's the URL?
It's an URL to the packed manifest file (in JSON format).
There's a few one available in the directory, those are `manifest.json` files under every subfolder in this project. Use the Raw button to generate raw git links of the file (of course)
## How to generate a file like that
Welp, it needs a bit help of NodeJS

1. Prepare Ship Editor code files (of course, 1 - 14 files)

2. Rename them to an id matching with the model name + `.coffee`

For example: if the model's name is `deposit-1`, the file name for that must be `d1.coffee`
You must look at existing examples (the folder `codes` under those subfolders in this project) to properly match the correct name with id

3. Create a folder with this structure:
```
<folderName>
  |-- codes
        |--- All your .coffee files go here
```
3. Download the `packer.js` file (also in that link)

4. Open Terminal/Command Prompt/Shell and run this command

```bash
node packer.js '<Name>' '<Author>' '<path>'
```
Where `path` is the relative path of where you are executing the command or permanent path to the folder `folderName` above

5. If it runs successfully (there should be a "Packed successfully!" message), go to the folder you created before again, take the `manifest.json` file there, and upload it somewhere on the internet so that you can get the file URL to import

## Ship Editor extended variables
There are also some variables that have been added in Ship Editor too (although they're not in there, you need to add them manually by yourself):
* **`seed`:** a unique seed for each game, 0 <= seed < 1360
* **`(new) SeedRandomizer(seed, hash)`**: a seed-based randomizer function. For more stuff please read here: https://github.com/pmgl/microstudio/blob/master/static/js/languages/microscript/random.js and https://github.com/pmgl/microstudio/blob/master/static/js/languages/microscript/random.coffee (nerd level required)

## Contributing
Feel free to create PR, or contact me through Discord Bhpsngum#2623