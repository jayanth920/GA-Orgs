# Atom

## Learning Objectives

* List common shortcuts for manipulating text
* List common shortcuts for navigating files
* Install and use common plugins to increase efficiency

## Framing (5 min)
There are 3 tools we use the most as web developers:

1. Web Browser
2. Terminal / Shell
3. Text Editor

Today, we're going to focus on the preferred text editor for WDI, **Atom**.

<!--Anyone Know Who Created Atom?  -->
<!--Atom is created by Github  -->

As programmers, our main jobs really is to write and manipulate lots of text
across lots of files. Thus, you'll be spending a lot of time in your text
editor, and productivity gains in using it will have a very large impact in
your efficiency.

It's not just about raw speed though, getting comfortable using our text editor
will allow us to enter and stay in 'flow', where our code output keeps up with
our thoughts.

## Useful Shortcuts (10 min)

My advice would be to pick 2 or 3 new shortcuts at the beginning of each week,
and making it a goal to use those shortcuts as often as possible for that week.

Maybe even put them on a sticky note on your computer or some other method that
will frequently remind you of them.

### Modifier Keys

Here are the primary modifier keys for Macs:

* ⇧ - Shift  
* ⌘ - Command / CMD
* ⌥ - Option  / OPT / ALT
* ⌃ - Control / CTRL

Note that many of these cursor shortcuts work in almost any Mac application, so
try them outside of Atom!

### Text Manipulation

#### Cursor

| Shortcut | Action |
|----------|--------|
| ⌘ + Left/Right | Move the cursor to the beginning / end of the line |
| ⌘ + Up/Down | Move the cursor to the beginning / end of the document |
| fn + Up/Down | Move the cursor page up / page down |
| ⌥ + Left/Right | Move the cursor between words |
| ⌥ + backspace | delete to the beginning of the word |

**Note**: Add SHIFT to select in addition to moving the cursor.

#### Multi-Cursor

| Shortcut | Action |
|----------|--------|
| ⌘ + click | Create a new cursor where you clicked |
| ⇧ + ⌃ + Up/Down | Create a new cursor above below the current one |

#### Selection

| Shortcut | Action |
|----------|--------|
| ⌘ + l | Select the current (l)ine. Press again to select the next line |
| ⌘ + d | Select the current wor(d). Press again to select the next instance of that word |
| ⌘ + ⌃ + g | Select all instances of the current word |

#### Text Manipulation

| Shortcut | Action |
|----------|--------|
| ⌘ + / | Comment out the current line |
| ⌘ + ⌃ + Up/Down | Move the current line up / down |
| ⌘ + f | Find in the current file |
| ⇧ + ⌘ + f | Find in all files in the current project |

#### General Navigation

| Shortcut | Action |
|----------|--------|
| ⌘ + , | Open preferences |
| ⌃ + g | Go to line |
| ⌘ + p | Go to file |
| ⌘ + r | Go to symbol |
| ⌘ + ⇧ + p | Toggle Command Palette |
| ⌘ + ⌥ + Left/Right | Toggle Files/Tabs | 
| ⌘ + w | Close Current Window/File if Saved |
| ⌘ + s | Save current file |
| ⌘ + ] | Tab Right | 
| ⌘ + [ | Tab Left |
| ⌘ + z | Undo Change |
| ⌘ + y | Redo Change |

### Cheatsheet

If you want to see more shortcuts, check out this great [cheatsheet for Atom
shortcuts](http://d2wy8f7a9ursnm.cloudfront.net/atom-editor-cheat-sheet.pdf).

## You Do - Practice Shortcuts (5 min)

## Atom Packages & Customization (30 min)

Atom allows you to customize and add packages/plugins to add new or modify existing
functionality. It's open source, so you can contribute and even create your own! 

### Installing Packages (5 min)

**Atom GUI:**

Shortcut:
```text 
⌘ + ,
```
OR


1. Click from top menu ***Atom --> Preferences***

2. Open ***Packages***


**Terminal/CLI:**

Atom comes with "apm", or Atom Package Manager

```
$ apm search <keyword>
```

```
$ apm install <package_name>
```
### Recommended Packages (5 min)

**[emmet](https://atom.io/packages/emmet)** allows us to use the emmet system for quickly typing out HTML.

**[file-icons](https://atom.io/packages/file-icons)** improves the file icons in the sidebar

**[linter](https://atom.io/packages/linter)** is a general package to allow 'linting', or error checking our code in Atom.
  * [linter-jshint](https://atom.io/packages/linter-jshint) adds support for JS
  * [linter-ruby](https://atom.io/packages/linter-ruby) adds support for Ruby
  * [csslint](https://atom.io/packages/csslint) adds support for CSS
**[ruby-block](https://atom.io/packages/ruby-block)** adds highlighting based on where our cursor is to help us see the structure of our code

**[csscomb](https://atom.io/packages/csscomb)** helps us keep our CSS neat and tidy by sorting our properties within each rule according to convention.

**[auto-complete+](https://atom.io/packages/autocomplete-plus)** is a core package in Atom, but you should look at this and see about installing more 'providers' which enhance the auto-complete functionality.

### You-Do - Atom Packages (20 min)

Additional Plugins:
* [Color-Picker](https://atom.io/packages/color-picker)
* [Merge-Conflicts](https://atom.io/packages/merge-conflicts)
* [Stack-OverFlow](https://github.com/Chris911/Ask-Stack-Atom)
* [Pigments](https://atom.io/packages/pigments)
* [MiniMap](https://atom.io/packages/minimap)

Instructions: Let's Break up into Groups, take 5 minutes to research a chosen plugin from the above list. Each group will present on a plugin, specifically focusing on why would it be useful for us as developers and a brief demo of the feature of the plugin. 

## Additional Resources

* [Atom Source Code](https://github.com/atom/atom)
* [Atom Documentation](https://atom.io/docs)
* [Atom Packages Blog](https://atom.io/docs)
* [Customizing Keybindings](https://atom.io/docs/latest/using-atom-basic-customization#customizing-key-bindings)

### Bonus: Customize Keybindings 

Wouldn't it be nice if we could have an Auto Indent Shortcut? 

1. ` ⌘ + ⇧ + p` (Toggle Command Palette)
2. Search keymap and `enter` to open your keymap.cson file 

OR 

1. Click from top menu ***Atom --> Preferences***
2. Open ***Keybindings***
3. Click `your keymap file` (keymap.cson)


**At the bottom of your keymap.cson file, add the following:**

```cson
'atom-workspace atom-text-editor:not([mini])':
  'cmd-i': 'editor:auto-indent'
```

Try it Out:

1. Hightlight the code you want to indent.
  - Pro-tip: Use `cmd + a` to Select All
- `cmd + i` (Auto Indent the selected code)
