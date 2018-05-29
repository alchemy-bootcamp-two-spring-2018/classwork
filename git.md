Git Commands
===

## Add and Commit

(Note: Will seem redundant at first to add and commit!)

command | notes
---|---
`git status` | to make sure you have changes to the repo
`git add -A` | to "stage" the changes
`git status` | this time, to check that everything has been staged
`git commit -m "commit message"` | to "take the snapshot". "why" (not "what")
`git status` | this time, to check everything is committed
`git push origin master` | to share the changes with your remote repo
`git status` | overkill, to check that local in sync with origin

## Create a Branch

List branches:

```sh
> git branch
* master
```

Create a new branch (based on what current branch you are in):

```sh
> git checkout -b name-of-new-branch
```

Push new branch to GitHub (and "link" as an "upstream"):

```sh
> git push -u origin name-of-new-branch
```

Future pushes, just use:

```sh
> git push
```