# Week 1

## Agenda

1. Syllabus & Class Expectations
2. Introductions
3. Short history of the web
4. Setting up our computers
5. Introduction to HTML

---

## Syllabus & Expectations

1. Read through the [syllabus](https://docs.google.com/document/d/1NTZ2gEmvB-g2OaupG_gClahu6uv2dPmE0JICbYRa4wE/edit?tab=t.0)
2. If I am ever going too fast through material, please interrupt me.
    - Good questions to ask in class:
        - Will you repeat the last thing you said?
        - Could you give another example?
        - Could you go through that again, slower?
        - Will you explain “blah” in a different way?
        - Can you explain that word “blah” you said?
        - Can you please speak a little slower?
3. Always review class notes, as they may contain more than what I cover through the demo.
    - Check out [Learning to Learn (to program)](https://teachinglondoncomputing.org/learning-to-learn-to-program/)
    - Or [So you want to be a wizard](https://wizardzines.com/zines/wizard/)
4. Treat coding as a *craft*.
5. Try your best and experiment with what interests you
6. Always follow along with class demos, as they will be submitted by the end of class.
7. Questions? Needs? Comments? Concerns? Send me an email. I cannot help you if I don't know you need help.

You are not required to have any formal Javascript or HTML/CSS experience, _but it does make the class easier_

**_In short, do not compare yourself to others_**, the burden rests with you to make projects you are proud of.

## Introductions

**Instructor: Sam Heckle (they/she)**  
* software engineer to creative technologist pipeline
* things you can ask me about: creative coding, software engineering, net art, permacomputing, networks, media theory, portfolio review, resume review, games, keyboards, galleries. please ask me about these things in [office hours](https://calendly.com/samanthaheckle/30min)

![sam mood board](https://github.com/samheckle/images/raw/main/intro.png?raw=true)

**GA: nujum★ they/them**
* mechanical engineer, designer, educator, artist
* things you can ask me about: how to make things (3d printing, laser cutting, woodworking, CNC, fiber arts), coding (pseudocode, organizing code, thinking like a computer, how to debug), feedback, links to readings and resources and references, collaboration skills, spirituality, work-life balance
* [office hours](https://calendar.app.google/FkQpaq8yftMuoLh1A)

![nujum mood board](https://github.com/samheckle/networked-media-fa-26/blob/main/class_01/nujum.png?raw=true)


## Short history of the web

<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/cables.png" style="width: 600px">  
<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/telephone.png" style="width: 600px">  
<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/gameboy.png" style="width: 600px">  
<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/cloud.png" style="width: 600px">  

### DARPA

[Defense Advanced Research Projects Agency](https://en.wikipedia.org/wiki/DARPA) "expands techology and science, and able to reach far beyond immediate military requirements". This includes Moderna's COVID vaccine, weather satellites, GPS, drones, stealth technology, the personal computer and the internet.  

<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/arpanet.png" style="width: 600px">  

> [JCR Licklider](https://en.wikipedia.org/wiki/J._C._R._Licklider) and [ARPANET](https://en.wikipedia.org/wiki/ARPANET)

# internet = INTERconnected NETworks

<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/undersea.png" style="width: 600px">  

### HTML?


<table>
<tbody>
<tr>
<td>

<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/tbl.png" style="width:400px">

</td>

<td>
<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/first.png" style="width:400px">
</td>
</tr>
</tbody>
</table>

> Tim Berners-Lee in 1989

### Some definitions

| html | http | url |
|---|---|---|
| what files are being sent | how is it getting there | where is the file located | 

<img src="https://github.com/samheckle/networked-media-sp-26/raw/main/images/client-server.png" style="width:600px">

## Setting Up our Computers

### Some installation setup

For the demo in this class, we will need a few things from the [Required Course Tools](https://brightspace.nyu.edu/d2l/le/lessons/607341/units/13881226).

1. Download a text editor if you don't already have one installed
2. Create a Github account
3. Download Github Desktop (although if you are handy with the CLI you don't need this).

Once you have completed all three, you can move on to the next steps.

### What is Github?

Github is a public site for hosting repositories of code. This is very similar to sharing a folder in Google Drive, but for code. For this class, you will have a public repository. 

1. Open up Github Desktop. It may ask if you are sure you want to open it → Press "Open"
2. Click "Sign in to GitHub.com"
3. You don't need to change anything on the "Configure Git", just press "Finish".
4. It will prompt you to `Move GitHub Desktop to the Applications Folder`. If you want to do that you can.
5. In your browser, go to [https://github.com/samheckle/networked-media-starter/fork](https://github.com/samheckle/networked-media-starter/fork)
6. Rename the folder to `networked-media` (remove `-starter`) and press "Create Fork".
7. It should automatically redirect you to that repository, which should have a url that looks like `https://github.com/[your username]/networked-media`.
8. Copy that URL.
9. Back in GitHub Desktop, click `Clone a Repository from the Internet`
10. In the pop up window, select the `URL` tab. 
    - In the first text box, paste *YOUR* URL (it should have *your* username in the URL link)
    - In the second text box, choose where you want this folder to live. **This will be where all your work will live for the semester, so if you have a location for all your class work find that folder and select it**.

And now you have the folder synced between github.com and your computer. Similar to downloading the Google Drive app, we are creating a way to sync our files to the GitHub server (or the cloud, if you will). This will be the folder you will work in for the whole semester!

Now open up your text editor (VSCode / VSCodium), and go to File → Open Folder → Select your new `networked-media` folder.

Every class, you will create a folder inside the `class-demos` folder. On a computer, folders and file names *should never have spaces*. Let's create a `class1` folder now...

And your folder hierarchy should look something like this:

```
networked-media
├── class-demos
│   ├── class1
├── project3
├── project4
├── project5
├── webserver
```

## Introduction to HTML

Hyper-Text Markup Langauage (HTML) isn't a programming language, but a way to taxonimize (organize) words on a page.

To make an HTML page, we can create a new file in VS Code by clicking the +Document button, or right clicking in the file explorer and pressing New File. Let's start by making an `index.html` file inside our `class1/`.


### Comments

The syntax of a comment in HTML is `<!-- -->`. We write comments to explain things that are happening in the code. It is good practice so that we can understand what is happening if we look at the code in the future.

```html
<!-- this is a comment in HTML -->
<!-- comments are a useful way to take notes while writing code -->
<!-- to quickly write comments, we can use the hotkey ⌘+/ (Mac) or CTRL+/ (PC) -->
```

### The HTML Tag

HTML follows a particular structure. The first tag we always use in an HTML file is `<html>`. All of our code will be written between the opening and closing tags. Every HTML tag can also be called an `element`, or the thing that exists on the page.

```html
<!-- opening -->
<html>
  <!-- closing -->
</html>
```

Then we get into parent and child tags. An element that contains elements inside of it is called the `parent element`, whereas the elements inside are called `child elements`. We can have infinite nesting inside of elements.

### Head and Body Tags

The typical children of the `<html>` element are `<head>` and `<body>` elements.

![image](https://kagi.com/proxy/Document.jpg?c=h8JCMe5cYLVbQGUI8h4mf7rgrW8NI2w--6vBMX9vZpfXO6UiFxDqWEFyflaL0FTSB7ZUc1FYoXDOrrqAD_5mVwH157My1rt4Gr5w2EVxa08LSWT2VXbF_NqJ-W_uQUE-)

The `<head>` tag contains content and meta information about the webpage the browser might need to know, like language, character set (ie alphabet), and the `<title>` tag, which allows us to set what the name of the tab is in our browser.

It might look something like

```html
<html>
  <head>
    <title>my homepage</title>
  </head>
</html>
```

The `<body>` tag contains all the content that actually shows up in the webpage.

So the typical order of an HTML page would look like this:

```html
<html>
  <head>
    <title>my homepage</title>
  </head>
  <body></body>
</html>
```

***A note on indentation***: We always want to indent new lines in our code to make it easier for us to read. We can quickly see which tag has an opening/closing tag if we identify whether or not they have the same indentation. This is also true for *syntax highlighting*. If something looks to be a funky color, or the color does not match other parts of your code, or there is a red squiggly, there is likely something wrong with your code. 

### Content Tags

These are tags that will always live inside the `<body>` tag.

- `<p>...</p>` → paragraph
- `<h1> ... </h1>` → headings (also h2, h3, ... h6)
- `<strong>...</strong>` → bolded text
- `<em>...</em>` → italicized text
- `<small> ... </small>` → small text
- `<br />` → line break (notice that this tag doesn’t have any content and therefore is both an begin and end tag, with the slash)
- `<hr />` horizontal rule → a line break which draws a line \
- `<a href="http://...">...</a>` → a link to another page. The “`href=""`” portion is an **attribute**. Many tags have optional attributes, further details below.
- `<img>` → images, uses `src` attribute which can contain a local file path or url to an image, no closing tag
- **Grouping & information organization:**
  - `<div> ... </div>` → [Block-level](https://www.w3schools.com/html/html_blocks.asp)
  - `<span> ... </span>` → [Inline](https://www.w3schools.com/html/html_blocks.asp)
    - These will come in handy as we start working with styles and Javascript.

#### Flow Layout

The way html is structured is through the flow layout: each page comprises `block` and `inline` elements to construct each page. This is like a stack of documents, it reads from the top to the bottom according to how big the page is and how much content you have.

<!-- prettier-ignore -->

|block | inline |
|---|---|
|`block` elements are stacked vertically, so they typically won't have content next to it. Think of it in like a word document where you have images "break" text. | `inline` elements are stacked horizontally, so they will usually have content side-by-side. In a word document, it is also called inline. |
![block](https://github.com/samheckle/images/blob/main/wp1/block.png?raw=true) | ![inline](https://github.com/samheckle/images/blob/main/wp1/inline.png?raw=true) | 
`<p>`, `<div>` | `<em>`, `<strong>`, `<a>`, `<span>`

#### **Attributes**

Most HTML tags can have **attributes**. In the case of the `<a>` above, `href` is an attribute which indicates the URL that the link should point to. Other common attributes are `id`, `class` or `src`

- `id` allows a specific tag/element on the page to be referenced through JavaScript or CSS
  (which we’ll cover later).

- `class` is useful when using CSS to define the design of the page.

- `src` is specific to media elements (images, audio, video, iframes) and point to the actual file being embedded into the webpage.

There are more attributes out there, most of them specific to certain tags. We will cover them as we discover other tags.


##### Pathing

As stated earlier, a path is the location on which our files exist on our computer. We can access the files by specifying the path in different attributes (like `src` or `href`). We need to know where we are in the file structure and where we need to go in order to determine the path from one file to another.

For example, if we want to include an image in our `index.html`, we need to know that our path to `index.html` is

```
file:///Users/samheckle/dev/networked-media/week1/index.html
```

Our images exist in a folder called `images/`, and if we drag our image to the browser, we can also see it's path

```
file:///Users/samheckle/dev/networked-media/week1/images/guywithguitar.jpg
```

We need to note the difference between these two paths -- we know that everything up to the end of week1 is the same, so we can ignore that part of the path. Since we need to get into the images folder, we need to specify the folder `images/` + our file name `guywithguitar.jpg`. So the path from `index.html` to our image is `images/guywithguitar.jpg`.

So, to determine paths we need to determine the difference between to file locations. If we need to go up a folder, we can use `../`. Say we put our images not in `week1/` but in `networked-media/images/`, in order to retrieve images we need to use `../images/guywithguitar.jpg`.

##### **Links**

You can define links in HTML using the `<a>` tag, as follows:

    <a href="http://www.google.com">Go to Google</a>

Links are the connective tissue of the web, without them every website would be an isolated island in the middle of the ocean. The example above is a link to an external website. You can also link to pages within your own website, like this:

    <a href="/page-2.html">Go to Page #2</a>

_Local links_, like the one above, need a web server in order to work (i.e. if you simply opened your `html` page in the web browser, this will not work properly.) We will cover that in the next tutorial.

_Email links_ are somewhat rare, but websites use them occasionally. They take a special value within the href property — the mailto: prefix, followed by an email address —, and clicking on them leads to the computer opening the default email client with the address filled in for the recipient field:

    <a href="mailto:sam.heckle@nyu.edu">Email Sam</a>

_Anchor links_ are used to point to a different section of the current webpage. They work in conjunction with an `id` attribute attached to a different tag on the same page.

In order to see them in action, we actually need a webpage long enough that it needs scrolling, so clicking on our anchor link will take us to the bottom of the page. The example below inserts a few filler `h1` and `br` tags, and attaches the anchor to the `p` tag at the very end of the page.

    <a href="#bottomElement"> Go to bottom of the page </a>

    <!-- Filler content, so we have a long enough page -->
    <h1> Text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <!-- End of filler content, so we have a long enough page -->

    <p id="bottomElement"> This is the end of the page </p>

Notice the syntax of the `href` attribute: a `#`, followed by the `id` of the element we want to create an anchor to.

Sometimes you will see a `Back to top` button on blogs, websites, etc. Anchors are the mechanism behind the back to top functionality.

**Opening links in a new tab**
If we wanted to force the opening of a link in a new tab — which is commonly done for links that point to different websites than the current one —, we need to use the `target` attribute, with the value set to `_blank`. It looks like this:

    <a href="http://www.google.com" target="_blank"> Open Google in a new tab </a>

---

#### **Images**

To place an image in a page, you use a URL in the src attribute of the img tag:

    <img src="/animage.jpg" />
    <!-- This is a "local" URL, hosted on your server -->

    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" />
    <!-- This is a "global" URL, hosted anywhere on the internet. It's global because it starts with "http://" or "https://" -->

You can control the dimensions of the image by using the `width` and/or `height` attributes on the image tag:

    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" width="500" />
    <!-- or -->
    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" height="500" />
    <!-- or -->
    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" width="500" height="500" />

The unit of measurement for the width and height attributes is pixels. Once we get into CSS, we will learn more granular ways of controlling the dimensions of an image.


#### **Special characters — HTML entities**

Certain characters are reserved in HTML, for reasons having to do with its structure as a markup language. For example, `<` and `>` are used to define tags. If we want to use these characters as part of our content, we need to write them differently, using _HTML entities_.

A character entity looks like this:`&entity_name;` or `&#entity_number;`

For example, if we write `&lt;` in our HTML file, the browser will display that as the lower-than sign, `<`. `&gt;` gets displayed as the greater-than sign, `>`. A few other useful entities below:

- `&nbsp;` → non-breaking space; You need to use this entity if you want more than one space between your words; If you simply add multiple regular spaces in your HTML file, the browser will reduce them to one single space.
- `&amp;` → the `&` symbol
- `&copy;` → the `©` symbol
- `&cent;` → the `¢` symbol
- `&ndash;` → En dash, –
- `&mdash;` → Em dash, —

For a full list of entities, go [here](https://www.freeformatter.com/html-entities.html). You will notice that any character can also be written as an HTML entity.

#### **Nesting**

As you noticed in all previous examples, HTML tags are nested within each-other. For instance all of the content you want inside the body of the page is nested within the `body` start and end tags.

For example, if you want an image to act as a link, you can nest an `img` tag inside of an `a` tag, like this:

    <a href="http://www.google.com">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" width="200"/>
    </a>

### View Source and Inspect Element

One of the very fundamental things that made web publishing very successful in the beginning was the inclusion of a View Source feature in most web browsers. This allows people to look at the HTML of a page they are viewing so as to understand how it was constructed and learn how to do similar things themselves.

Different browsers have different ways of accessing the source — you will likely find it in the Right-Click context menu, or under the Tools or Developer menus of the browser itself.

Inspect Element is a more recent addition to web browsers, which is, in some ways, an interactive version of View Source. It’s a great prototyping tool, as it allows for on-the-fly changes to the HTML and CSS of a page. (Important note: These changes are not saved, we’re just modifying how the page is displayed.)

## Uploading your changes to GitHub

At the end of every class, you will submit the demo you followed along as a part of your participation grade for the course. To do so, you can either use GitHub Desktop or the "Version Control" tab in the left menu.

1. Open GitHub Desktop
2. It will show which files are changed. If these are the files you want to add, then you don't need to modify anything. If you would like to *not* add a file, uncheck it. 
3. Write in the textbox on the bottom left that says "Summary (required)". This is a short comment about the changes you made to the files. This is what names the "version", so if you need to go back in time to a previous version you have a somewhat detailed description.
4. Press the blue `Commit to main` button.
5. It may ask for you to publish your branch. Press `Publish Branch`.
6. Otherwise, press `Push origin`. You can also press the third button in the nav bar.
7. Check your repository to see your changes: `https://github.com/[your username]/networked-media`
8. Copy the folder link (`https://github.com/[your username]/networked-media/class_xx/`) and submit it to the daily assignment.

### Further Resources

- [W3Schools HTML Tutorial](https://www.w3schools.com/htmL/)
- [HTML Tags Reference](https://www.w3schools.com/tags/default.asp)
- [HTML Special Characters (entities)](https://www.w3schools.com/html/html_entities.asp)
- [HTML Block vs Inline Elements](https://www.w3schools.com/html/html_blocks.asp)
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  - This website offers a more accurate & comprehensive reference than W3Schools, but it can be more intimidating in the beginning. Use whichever you are most comfortable with.
