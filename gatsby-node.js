const Promise = require('bluebird')
const path = require('path')
const remark = require('remark')
const remark_html = require('remark-html')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  
  const result = await graphql(`
    {
      aamu {
        BlogPostCollection {
          title
          slug
        }
      }
    }
  `);

  if (result.errors) {
    return reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const posts = result.data.aamu.BlogPostCollection || [];
  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: post.slug
      },
    })
  });
}

exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions;

  createResolvers({

    // Turn Aamu_BlogPost.body into html
    Aamu_BlogPost: {
      body: {
        type: 'String',
        resolve(source, args, context, info) {
          const file = remark()
            .use(remark_html)
            .processSync(source.body);

          return String(file);
        }
      }
    },

    // Handle images
    Aamu_GraphQLMediaItem: {
      image: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
