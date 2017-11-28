This loops through an array of images by a random time in milliseconds, creating a seemingly organic slideshow that cycles at different times. Works nice with a few elements side by side to see the time difference. 

This is still a work in progress and subject to perf tests, restructure, and additional functionality.

To use, create an element with the class "MORPH" and a child img element inside there.

Afterwards, create an array with your images in the format `[{ image: url }]`:

```
[
  { image: 'image.jpg' },
  { image: 'image2.jpg' },
  { image: 'image3.jpg' }
]
``` 

You can create the array in your js file or send as a data-attribute. With the current version, it only supports the array retrived through the attribute `data-imgs`. 

To run just require the file and run the function: 

```
const morph = require('/morph')
morph()
```