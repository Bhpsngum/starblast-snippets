# Starblast Map Editor tutorial and links
made by Bhpsngum
## Links
* **Main version:** Main version of the tool: https://bhpsngum.github.io/starblast/mapeditor/
* **Beta version:** Beta version and early access to new features before they appear in the main version: https://bhpsngum.github.io/starblast/mapeditor/beta/

  *Note:* This version isn't always stable.
* **Old version:** For anyone who can't use the main version: https://bhpsngum.github.io/starblast/mapeditor/old.html

  *Big Note:* All of those versions are using the data from the same origin, so consider before accessing the beta version if you don't want to accidentally lose your map data.
* **Feedback Link:** https://bhpsngum.github.io/starblast/mapeditor/?feedback
* **Tutorial link (this page):** https://github.com/Bhpsngum/starblast/blob/master/MapEditorTutorial.md
* **Changelog link:** https://bhpsngum.github.io/starblast/mapeditor/changelog.html
## All UIs information and tutorials
### Menu Bar
**Position:** Always in the top position of the tool and divides into 4 Tabs:
#### Map Tab
![MapTab](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu0.png)

A: Show/Hide the Map Menu
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1 | Export Map as Text | Export map as a text/plain (\*.txt) file | Ctrl + S |
| 2 | Copy Map | Copy current map pattern to clipboard | Ctrl + C |
| 3 | Import Map | Import map from file (accept text/plain (\*.txt/\*.text) and text/javascript (\*.js) format) | Ctrl + O |
| 4 | Export Map as Image | Export map screenshot as a PNG (\*.png) file | Ctrl + I |
| 5 | Copy Map screenshot | Copy Map screenshot as as a PNG (\*.png) file to Clipboard (May not work in some browsers) | No |
| 6 | Permalink | Copy map permalink to clipboard | No |
#### Edit Tab
![MapTab](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu1.png)
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1 | Map size Input | Toggle map size (from 20 to 200 and must be even) | No |
| 2 | Asteroid selection Area | Choose Asteroid size (from 0 to 9) | 0 to 9 |
| 3 | Random asteroid drawer | Enable random asteroid size drawer | R |
| 3a | Minium Random Size | Toggle minimum Asteroid size (0 to Maximum Asteroid Size) | No |
| 3b | Maximum Random Size | Toggle maximum Asteroid size (Minimum Asteroid Size to 9) | No |
| 3c | Random Asteroid in Brush | When brush size is larger than 1, fill a block of same asteroid size or all randomly | No |
| 4 | Brush size Input | Toggle Brush size (from 0 to current map size, fill up a square of size 2\*n+1 with your mouse cursor at the center) | No |
| 5 | Mirror Options Area | Toggle asymmetrical drawing (from left to right: horizontal, vertical and secret feature | No |
| 6 | Undo | Undo previous actions in the map | Ctrl + Z |
| 7 | Redo | Redo undid actions in the map | Ctrl + Y |
| 8 | Clear Map | Clear all asteroids in the current map | No |
| 9 | Random Maze Generator | Generate Random Maze according to the current map size. By [rvan-der](https://github.com/rvan-der) | No |

| Index | Name | Description | Shortcut |
| - | - | - | - |
| 6 | Color Inputs Area | Map Editor Color Selection (from left to right: Asteroid, background and border color) | No |
| 14 | Feedback | Give us a feedback | No |
| 18 | Tutorial | View Map Editor Tutorial (this site) | No |
| 19 | Changelog | View the update's log of Map Editor from the beginning | No |
## Information section
**Position:** Always at the bottom position of the tool.
![InfoPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEInfo.png)
| Index | Description |
| - | - |
| 1 | View the (x;y) position ((0;0) at the top left of the map and (map size - 1; map size -1) at the bottom right of the map) and asteroid size in that cell (or no asteroids)) |
| 2 | Whenever you hover the sections that are containing information, it will be displayed here |

**Note:** Undo and redo's information will not be shown if they're unavailable at that time
## Map
**Position:** You can spot it position obviously, so this info is not needed
![MapPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMap.png)

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
