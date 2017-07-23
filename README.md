# React With TypeScript Demo
[![forthebadge](http://forthebadge.com/images/badges/certified-steve-bruhle.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/check-it-out.svg)](http://forthebadge.com)

For now this repo serves as a sandbox to experiment with building a React "app" (or random assortment of components) that employs TypeScript.

Starting point based on process outlined in [this blog post from Tom Duncalf](http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/), with some supplemental Googling to make the webpack config compliant with the Webpack 2 API and solve a recent dependency issue with webpack dev server.

## Running Locally

1. `npm install` or `yarn`
2. `npm run start` or `yarn start`
3. Open [http://localhost:3000/](http://localhost:3000/) in your browser

## Developing/Extending

If you wanted to fork this or use it as a template for your own (possibly nefarious?) purposes, you "need" typescript installed globally*:

```
npm install -g typescript@next
```

<small>*TypeScript was at version 2.5.0-dev.20170719 at the time of repo creation)</small><br>
<small>**It really bothers me that the "Certified By Steve Bruhle" [sic] badge misspells Dr. Brule's name. What the actual heck.</small>