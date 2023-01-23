# Static Deployment to Github Pages

- Create files
- Checkout gh-pages branch `git checkout gh-pages`
- Update gh-pages from master `git rebase master`
- Push to the gh-pages branch: `git push origin gh-pages`

More information [in this blog post](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/) and [on Github](https://help.github.com/categories/github-pages-basics/)

If you need to deploy a subfolder, use the `git subtree push` command as [documented here](https://gist.github.com/cobyism/4730490)
