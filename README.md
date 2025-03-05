# dragonfly(eye) cascading style system

https://d-r-a-g-o-n-f-l-y.org

influenced by tachyons-verbose and various bespoke css. this is meant to be for
humans to write code but it's probably good for the machines too, idk. i do not
care at all about legacy browser support, if it's new and over 90%, i'm using
it.

currently dragonfly is focused on producing base html and does not include any
javascript or component css. this may change in the future although frankly i'm
not sure i want to support maintaining components. css is quite static apart
from new additions so this framework will require little maintenance when
complete.

## build

`npm run dev` will build the css and html and serve it with browser-sync for
local development.

`npm run build:prod` will build the css and put it in the `dist` folder. use
this if you just want to configure and extract styles for your project.

## how to customize

`src/dragonfly.css` is the entry point, configure things here.

## debugging classes

there are two debugging classes, `.pesticide` and `.pesticide-depth` you can add
to your HTML element to give you different colors per element. if you're early
on in dev or debugging a weird layout issue, it can be helpful.
