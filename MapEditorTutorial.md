# Starblast Map Editor tutorial and links
made by Bhpsngum
## Links
* **Main version:** Main version of the tool: https://bhpsngum.github.io/starblast/mapeditor/
* **Beta version:** Beta version and early access to new features before they appear in the main version: https://bhpsngum.github.io/starblast/mapeditor/beta/

  *Note:* This version isn't always stable.
* **Old version:** For anyone who can't use the main version: https://bhpsngum.github.io/starblast/mapeditor/old.html

  *Big Note:* All of those versions are using the data from the same origin, so consider before accessing the beta version if you don't want to accidentally lose your map data.
* **Feedback Link:** https://docs.google.com/forms/d/e/1FAIpQLSe-NQ8QTj0bnX65LMT8NbO9ppEYRtgQ1Fa3AwJX-GfTFHUQSw/viewform?usp=sf_link
* **Tutorial link (this page):** https://github.com/Bhpsngum/starblast/blob/master/MapEditorTutorial.md
## All UIs information and tutorials
### Menu Bar
**Position:** Always in the top position of the tool.
![MenuPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu.png)
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1 | Map size Input | Toggle map size (from 20 to 200 and must be even) | No |
| 2 | Asteroid selection Area | Choose Asteroid size (from 0 to 9) | 0 to 9 |
| 3 | Random asteroid drawer | Enable random asteroid size drawer | R |
| 3a | Random asteroid drawer's options | Random Asteroid drawer's options (from left to right: min and max) | No |
| 3b | Random Asteroid in Brush | When brush size is larger than 1, fill a block of same asteroid size or all randomly | No |
| 4 | Brush size Input | Toggle Brush size (from 0 to current map size, fill up a square of size 2\*n+1 with your mouse cursor at the center) | No |
| 5 | Mirror Options Area | Toggle asymmetrical drawing (from left to right: horizontal, vertical and secret feature | No |
| 6 | Color Inputs Area | Map Editor Color Selection (from left to right: Asteroid, background and border color) | No |
| 7 | Clear Map | Clear all asteroids in the current map | No |
| 8 | Export Map as Text | Export map as a text/plain (\*.txt) file | Ctrl + S |
| 9 | Copy Map | Copy current map pattern to clipboard | No |
| 10 | Import Map | Import map from file (accept text/plain (\*.txt/\*.text) and text/javascript (\*.js) format) | No |
| 11 | Random Maze Generator | Generate Random Maze according to the current map size. By [rvan-der](https://github.com/rvan-der) | No |
| 12 | Feedback | Give us a feedback | No |
| 13 | Permalink | Copy permalink to clipboard | No |
| 14 | Export Map as Image | Export map screenshot as a PNG (\*.png) file | Ctrl + I |
| 15 | Copy Map screenshot | Copy Map screenshot as as a PNG (\*.png) file to Clipboard | No |
| 16 | Tutorial | View Map Editor Tutorial (this site) | No |
| 17 | Changelog | View the modify log of Map Editor from the beginning | No |
## Information section
**Position:** Always at the bottom position of the tool.
![InfoPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEInfo.png)
| Index | Description |
| - | - |
| 1 | View the (x;y) position ((0;0) at the top left of the map and (map size - 1; map size -1) at the bottom right of the map) and asteroid size in that cell (or no asteroids) |
| 2 | Whenever you hover the sections that are containing information, it will be displayed here |
## Map
**Position:** You can spot it position obviously, so this info is not needed
[!MapPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMap.png)

**Introduction:**
* Left-Click in any cell in the map to apply the asteroid to that cell
* Right-click in any cell to remove existing asteroid from that cell
* You can hold and drag your mouse for asteroid trails
* Use these keyboard shortcuts for navigation:

| Button | Moving direction |
| - | - |
| W / Arrow Up Button | Up |
| S / Arrow Down Button | Down |
| A / Arrow Left Button | Left |
| D / Arrow Right Button | Right |
