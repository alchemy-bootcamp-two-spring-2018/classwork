Pairing
===

* In pair programming there are two developers working on a single body of code on a single computer.
* One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. Their job is to work the machinery.
* The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts. Their job is to decide where to go.
* The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
* Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.
* You **must** use a timer of 20 minutes to switch roles. When switching:
    1. current driver pushes code up to their github repo and opens a PR to new drivers fork
    1. new driver merges PR, then pulls that code to their machine

## Setup

1. Both partners fork and clone the assignment repo
1. Driver starts and when turn is done, pushes to github
1. Navigator merges the pull request
1. Navigator does a `git pull` on their local machine

## Submission

By the end, both forks should be the same. Submit **1** PR (make sure other person is referenced), but two canvas submissions