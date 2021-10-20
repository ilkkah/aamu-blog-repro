# aamu-blog

Gatsby sources for [Aamu.app blog](https://blog.aamu.app).

If you want to try this out yourself, you first need to set up a project on Aamu.app which will host your data. 

# Installation

### Create an Aamu.app account

To use this website, you need an [Aamu.app](https://aamu.app/) account. Create one/log into your account and then create a database from the template **gatsby-aamu-starter**: 

After that, you need an **API key**. Go to database settings for your newly created database and create an API key. Copy-paste that to somewhere safe.

### Deployment to Netlify

You can use this repository on Netlify. After creating an Aamu.app database, click this:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AamuApp/aamu-blog)

Netlify will ask your permission to clone this repository — First click *Connect to GitHub*, then click *Authorize*. 

You will be then taken to a page which asks your *secret token*. Enter your API key here. 

Submit the form and Netlify will start building your site. This cloned repository will be on your GitHub account.

#### Common Netlify errors

```
2:33:39 PM: error "gatsby-source-graphql" threw an error while running the sourceNodes lifecycle:
2:33:39 PM: not finished source and transform nodes - 0.593s
```

Your Aamu.app API key is wronng or missing.
# Development on your local machine

### Get the source code and install dependencies.

```
git clone git@github.com:AamuApp/gatsby-aamu-starter.git
cd gatsby-aamu-starter
npm install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new aamu-starter https://github.com/AamuApp/gatsby-aamu-starter
```

### Set up of the needed content model and create a configuration file

This project comes with a Aamu.app setup command `npm run setup`.

### Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

Run in the project locally:

```
npm run dev
```

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer:

```
npm run build
```

Run a production build into `./public` and publish the site to GitHub pages:
```
npm run deploy
```

Removes all dependencies, scripts and data from the installation script.:
```
npm run cleanup-repository
```

