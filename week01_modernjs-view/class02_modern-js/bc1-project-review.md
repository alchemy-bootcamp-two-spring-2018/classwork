Bootcamp I - Project Review
===

## Process

* Make sure group and individual canvas submissions always have github and live links
* README should contain dev facing instructions including setup and high-level architecture

## Design & Architecture

* Only scope variables to class (`this.prop`) if needs to live outside of one method call. Start with a local function (method) variable.
* Rarely ever use `document.` in components because now component is dependent on entire DOM. It is a sign (or smell) that elements are not correctly divided into components.
* Yes some of these pages are small, but eventually everything needs to be part of components

## Anti-n00b

* Stop putting type names in variables
* Name things consistently. Especially required on a team.
* Use objects, not arrays, for arbitrary key/value pairs
* We don't really use classes to model app data anymore. Particularly when class adds no value and just copies properties. Use classes for libraries (and games).
