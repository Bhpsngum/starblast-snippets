# Starblast Map Editor tutorial and links
made by Bhpsngum

<details>
  <summary markdown="span">Table of contents</summary>

  **[Links](#links)**

  **[All UIs information and tutorials](#all-uis-information-and-tutorials)**
  
  **[Advanced](#advanced)**

  **[Commonly asked questions](#commonly-asked-questions)**

</details>

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

<details>
  <summary markdown="span">Table of contents</summary>

  <details>
 <summary markdown="span">Menu Bar</summary>

   **[Menu Bar](#menu-bar)**

   * **[Map Tab](#map-tab)**

   * **[Edit Tab](#edit-tab)**
   
   * **[Advanced Tab](#advanced-tab)**

   * **[Decoration Tab](#decoration-tab)**

   * **[Miscellaneous Tab](#miscellaneous-tab)**

  </details>

  **[Information section](#information-section)**

  **[Map](#map)**

</details>

### Menu Bar
**Position:** Always in the top position of the tool and divides into 4 Tabs:
#### Map Tab
![MapTab1](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu0.png)

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
![MapTab2](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu1.png)
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1 | Map size Input | Toggle map size (from 20 to 200 and must be even) | No |
| 2 | Asteroid selection Area | Choose Asteroid size (from 0 to 9) | 0 to 9 |
| 3 | Random asteroid drawer | Enable random asteroid size drawer | R |
| 3a | Minium Random Size | Toggle minimum Asteroid size (0 to Maximum Asteroid Size) | No |
| 3b | Maximum Random Size | Toggle maximum Asteroid size (Minimum Asteroid Size to 9) | No |
| 3c | Random Asteroid in Brush | When brush size is larger than 1, fill a block of same asteroid size or all randomly | No |
| 4 | Mirror Options Area | Toggle asymmetrical drawing (from left to right: horizontal, vertical and secret feature | No |
| 5 | Undo | Undo previous actions in the map | Ctrl + Z |
| 6 | Redo | Redo undid actions in the map | Ctrl + Y |
| 7 | Clear Map | Clear all asteroids in the current map | No |
| 8 | Random Maze Generator | Generate Random Maze according to the current map size. By [rvan-der](https://github.com/rvan-der) | No |
#### Advanced Tab
**Note:** Instructions for this tab can be found in the [Advanced](#Advanced) section

![MapTab4](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu2.png)
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1a | Default Brush(es) | Brush(es) that are initially installed in the tool | No |
| 1b | Custom Brush(es) | Brush(es) that are added by user | No |
| 2 | Add Custom Brush | Add your custom brush | No |
| 3 | Edit Custom Brush | Edit the selected custom brush | No |
| 4 | Remove Custom Brush | Remove the selected custom brush | No |
| 5 | Brush Size Input | Toggle Brush size (0 to current map size) | No |

**Note:** Default brushes cannot be modified or removed
#### Decoration Tab
![MapTab4](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu3.png)
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1 | Asteroid Color input | Toggle Asteroid Color | No |
| 2 | Background Color input | Toggle Background Color | No |
| 3 | Upload custom background image from file | Upload your own background image from file (accepts all image formats) | No |
| 4 | Upload custom background image from URL | Upload your own background image from URL | No |
| 4a | Toggle full tool / map only image display | Adjust background image for map only or the whole tool | No |
| 4a1 | Export Settings with background image | Export the map with or without the background image | No |
| 4a2 | Opacity input | Toggle background image opacity (0 to 1) | No |
| | | ***Note:*** 4a1 and 4a2 features are only available in Map Only Selection |
| 4b | Clear background image | Clear current custom background image | No |
| 5 | Line Color input | Toggle Line Color | No |
#### Miscellaneous Tab
![MapTab5](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMenu4.png)
| Index | Name | Description | Shortcut |
| - | - | - | - |
| 1 | Feedback | Give us a feedback | No |
| 2 | Tutorial | View Map Editor Tutorial (this site) | No |
| 3 | Changelog | View the update's log of Map Editor from the beginning | No |
## Information section
**Position:** Always at the bottom position of the tool.
![InfoPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEInfo.png)
| Index | Description |
| - | - |
| 1 | View the (x;y) position ((0;0) at the top left of the map and (map size - 1; map size -1) at the bottom right of the map) and asteroid size in that cell (or no asteroids)) |
| 2 | Whenever you hover the sections that are containing information, it will be displayed here |

**Note:** Undo and redo's information will not be shown if they're unavailable at that time
## Map
### Position
You can spot it position obviously, so this info is not needed
![MapPreview](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MEMap.png)

*A blank 20x20 map with custom background image applied*

### Introduction
**PCs/Tablets:**
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

**Mobile/Touch devices:**
* Touch in any cell in the map to apply the asteroid to that cell
* Touch and move with one finger for asteroid trails
* Touch and move with more than one finger to navigate in the map
## Advanced
(Beta)
### Custom Brush
Feel boring with the default brushes? Map Editor now provides the ability to create your own custom brush (with coding skill required).

You can submit your own custom brush through the feedback link so that it will has a chance to be added in the tool as default brushes.
#### Interface
![MECBInterface](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MECBInterface.png)

Select the brush from the list

To create a new brush, click the create button ([Advanced Tab](#advanced-tab) option 2)

To edit the existing **custom** (not default) brush, select it and choose edit (option 3)

and to remove, click Remove (option 4)

Whenever you are editing or creating, it will show you the interface shown in the picture above with those infos:

(Notes: * means that it's a required section)

* **Name:** Brush name
* **Icon:** Brush icon with a Font Awesome Free name ([click here to search](https://fontawesome.com/icons?d=gallery))
* **Author:** Brush author
* **Code:**\* The code to be executed

Click **Save** to save the edits, **Cancel** to discard them
#### Features
**Note:** If the option does not reference to any tab, it's automatically referenced to [Advanced Tab](#advanced-tab)

Whenever user clicks or drags to one cell, brush commands will be fired with these parameters:

**`Cell` Object:** an object represent the selected cell, contains these values:
| Values | Description |
| - | - |
| x | X Coordinate |
| y | Y Coordinate |
| size | Asteroid size to be applied to that cell (changable through the execution) |

**`StarblastMap` Object:** an object that contains most of the features, containing these properties:
* **`Asteroids`:** access asteroid properties and values:
  * **`set(x,y,size)`:** Set a cell at position (`x`;`y`) with asteroid size `size`
  * **`get(x,y)`:** Get asteroids size at a cell at position (`x`;`y`), returns a number representing the asteroid size at that cell
  
  *Note:* 0<=`x`,`y`<current map size and 0<=`size`<=9, should be integers
  
  For example: `StarblastMap.Asteroids.set(0,8,3)` will set a cell at position (0;8) with asteroid size 3
  
  and `StarblastMap.Asteroids.get(0,8)` will return 3 (in the next user action)
  * **`size`:** User's selection of predefined asteroid size range for randomization:
  
    **`min`**: minimum randomized size ([Edit Tab](#edit-tab) option 3a)
    
    **`max`**: maximum randomized size ([Edit Tab](#edit-tab) option 3b)
* **`size`:** A number represents the current map size
* **`Brush`:** An object represent some brush's properties:
  * **`size`:** brush size (option 5)
  * **`isRandomized`:** A boolean value represents the value from option 3c in [Edit Tab](#edit-tab)
* **`Utils`:** An object containing some functions that makes your life easier:
  * **`random(n)`:** Random an integer x with 0<=x<n
  * **`randomInRange(a,b)`:** Random an interger between a and b
### Errors & Warnings
![MECBErrors](https://raw.githubusercontent.com/Bhpsngum/img-src/master/MECBErrors.png)
#### How to see them
Press F12 to open DevTools, Navigate to Console and evrything will be displayed there as the image above
#### Execution Errors & Warnings
These happen when your code runs failed or violate some rules, this can be any types.
#### Modification Errors & Warnings
These happens if Map Editor fails, partially or completely, to set/get a cell's data.
* **Invalid argument(s): (Error)** Will come along with more detailed information, happens when you passed something wrong (usually non-numbers or numbers that excess the map size limit) into the function
* **Cannot modify the Asteroid: (Error)** This is a rare case of the error above, happens when Map Editor cannot parse your input values for processing. (It always includes the values inputed in the error)
* **Found non-integer argument(s): (Warning)** Detailed as above, usually happens when you passed non-integer values, but it doesn't excess the limit (e.g: 0.5;1.25). In that case the values will be modified:

  If it's the coordinates, it will be rounded **down** to the nearest integer, e.g 1.5 ---> 1; 6.9 ---> 6
  
  If it's an asteroids size, it will be rounded to the nearest interger, e.g 8.5 ---> 9, 6.1 ---> 6
#### Example: Made a simple brush
## Commonly asked questions

### 1. Why i can't see the asteroids in my map although the map isn't blank?
**Answer:** This problem occurs when your asteroid color is set to - intentionally or somehow unintentionally - the same color as the background.

**How to fix**: Navigate to the [Decoration Tab](#decoration-tab) and change the asteroid color (the first box from left to right).
### 2. Why my tool doesn't have "Copy Image" features although it's listed above?
**Answer:** Copy Image feature requires higher technic than text copying, if "Copy Image" button doesn't appear in your site, it means that your browser doesn't meet the requirements for this feature to operate (usually there's a notification in the Menu Bar if it happens).

**How to fix:** Switch to another browser, or, update your browser to the latest version.
### 3. Why can't I use the tool in IE (Internet Explorer)?
**Answer:** We've stopped supporting this browser since ME 2.0 as IE will be ~~killed~~stopped on 17 August, 2021 by Microsoft. If you're a fan of it, sorry about that :(

**How to fix:** Switch to another browser.
### 4. How can i contact or give you a feedback?
**Answer:** We recommend you to use the feedback link listed in [links](#links) or you can use these contact information below:
* Email: bhpsngumtrongwikipediatiengvie@gmail.com
* Discord: @Bhpsngum#2623
### 5. Can i help developing this tool?
**Answer:** Yes. This tool is still in development, so if you have enough Web Making Skills (HTML, CSS, JS) and think that you can do this work, use the feedback to tell us to apply :)

**Remember:** You *won't receive any payments or cash for your work*. This tool is a *community resource* and contributed by the community. You will be credited if you've done fair enough contributions in this tool.
