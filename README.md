# TintUp test theme

This project is a test theme for the TintUp.com platform and is a created as a test concept.

I have created a theme wrapped in a small functional app in `ReactJS`

## Design Concept
The purpose of this effort is not focusing on the creation of a css base theme from scratch but rather the implementation of an existing html template and tailoring it to be used as TintUp (theme / app)

The project leverages an existing 3rd party authored CSS base template as a starting point and after removing all the extra unused elements, it is integrated into a ReactJS front end app.

The core application is designed to allow a Tint to be rendered and displayed along with all the `TAGS` associated with them and allows for filtering based on the Tint `TAGS` 

The React app also leverages the React Router to allow for a smooth single page app design with minimum load times between navigation pages.

## Libraries and frameworks used
* `ReactJS` base reactjs framework.
* `JQuery / UI`
* `create-react-app` boilerplate
* `bootstrap`
* `font-awesome`
* `jquery mixitup` plugin

## Installation

```sh
git clone https://github.com/edster9/tintup-theme.git
cd tintup-theme
npm install
```
### Running as local app
```sh
npm start
```
### Build for production
```sh
npm run build
```
### TODO:
* Search by free text
* Multiple tags filter
* Pagination
* FLUX implementation

