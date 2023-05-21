# DOM

* Document Object Model
* used to manipulate content, style and structure of a website
* think of it like a tree of nodes viz

    ~~~text
    |--window
    |    |--Document
    |    |   |--Element <html>
    |    |   |   |--Element <head>
    |    |   |   |   |--Element <title>
    |    |   |   |   |   |--Text "This is a website"
    |    |   |   |--Element <body>
    |    |   |   |   |--Element <h1>
    |    |   |   |   |   |--Text "This is a header"
    |    |   |   |   |--Element <p>
    |    |   |   |   |   |--Text "This is a para"
                         |--Class Attribute "className"
    ~~~                     

* `Class Attribute` does not participate in the parent-child relationship of the rest; it is accessed through property names (_props_) inside the `<p>` element
* five methods of accessing/selecting elements on the DOM
    * `GetElementById()` --> select an element using its unique id
    * `GetElementByClassName()` --> select a collection of all the elements in a document that have the specified class name. it returns an array-like object that contains all the child elements of the elements having the specified class name
    * `GetElementByTagName()` --> elect a collection of all the elements in a document that have the specified tag name. it returns an array-like object that contains all the child elements of the elements having the specified tag name
    * `querySelector()` --> select the first element that has the specified parameters (id, class name, tag name etc). accepts all CSS selectors
    * `querySelectorAll()` --> select all the elements that have the specified parameters (id, class name, tag name etc). accepts all CSS selectors. returns a NodeList
* inline styling works for a single element only. see [2-movies.js](./2-movies.js)
* three ways to manipulate elements
    * create elements using `createElement`
    * add elements using `append`
        * add content to an element:
            * modify text using `innerText`
            * modify/manipuate attributes & classes using `setAttribute`, `removeAttribute`, `add` and `remove`
    * remove an element using `remove`
* elements are a type of node
    * `parentElement`, for example loooks for specific elements one level above
    * `parentNode` looks for a node (a node can be anything) one level above
* event propagation --> how an object travels through the DOM tree
    * three phases
        * event capture --> starts at the root; travels to/towards the target 
        * target -->
        * event bubling --> starts at the target; travels to/towards the root
    * say you click a button. said button is a child of `<div>` --> ``<body>` --> `<html>` --> `document` and it has a click event attached to it
        * capture: `document` informs its immediate child element that an event (the click) has occurred. this happens all the way to the `<button>` itself
        * target --> the `<button>`
        * bubble --> `<button>` informs its immediate parent element that an event (the click) has occurred. this happens all the way to the `document`
    * use `stopPropagation` to control how far the capture and/or bubble will travel
        * say you stop propagation at ad `<div>`
            * capture perspective: event stops at `<body>`; that is, it gets to `<body>` and no further
            * bubble perspective: event stops at `<div>`; that is, it gets to `<div>` and no further
            * long story short: the capture perspective is _exclusive_ and the bubble perspective is _inclusive_ of the target element
        * use the prop `{once: true}` as the third param in `stopPropagation` to capture/bubble an element once and once only. **Disclaimer**: it causes `stopPropagation` to act atypically; capture/bubble simply skips the targted element
            
            ~~~javascript
            document.querySelector('.div').addEventListener('click', (e) => {
                e.stopPropagation()
                console.log('stopped propagation at div')
                alert('div object clicked')
            }, {once: true})
            ~~~

* use `preventDefault` to, well, prevent an element's default behaviour
* event delegation --> attaching an event to an element in such a way that the existing and future children (and descendant) elements will have said event