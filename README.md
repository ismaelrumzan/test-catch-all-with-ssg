This is an example for implementing GetStaticPath with Catch all routes
Reference:
https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required

The main thing to consider is if the name of your slug catch all file is
[...myslug].js

Your paths in your getStaticPaths function should be defined as follows:
        paths: [
            { params: { myslug: ['foo', 'bar'] } },
        ],

In my example, myslug = post