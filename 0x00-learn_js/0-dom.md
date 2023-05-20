# DOM

* Document Object Model
* used to manipulate content, style and structure of a website
* think of it like a tree of nodes viz

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
* 