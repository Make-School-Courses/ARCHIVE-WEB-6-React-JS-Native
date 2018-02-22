# Styling Components 

## Intro

React offers a very different way of working. It forces us to rethink many of the 
standard strategies we use. 

In particular CSS requires new strategies when using React.

## Class Competencies

By the of this class students should be able to:

- Organize CSS styles to work with component architecture
- Identify patterns for applying CSS in React
- Analyze 

## Schedule 

|    | Time    | Type       | Description                          |
|----|---------|------------|--------------------------------------|
| 1  | 5 min   | Intro      | Class introduction                   |
| 2  | 10 min  | lecture    | CSS and React                        |
| 3  | 10 min  | Discuss    | Discuss the pros and cons w/partner  |
| 4  | 20 min  | Discussion | Class discussion pros and cons       |
| -  | 10 min  | Break      | Meditate on the things in life that bring you joy |
| =  | 110 min | Total time | -                                    |

### Overview 

CSS is required, but React is so far off from the standard methods used with the web
the usual best prsctices for CSS don't always apply. 

Discuss the pros and cons of class name styles vs inline styles with your neighbor. 

#### Stylesheets and class names 

This is the usual best practice. While it works with React and may be the best choice 
for a given situation, this strategy often feels awkward in practice. 

In my opinion this is best practice for most web projects. I say most because every 
project has unique requirements. 

#### Inline styles 

In non-React projects this would be considered least optimal for many reasons. In React 
inline styles have some advatages. Using an inline style you can make a self contained component.
That is a component that contains all of it's styles in it's definition. 

That said inline styles have a few disadvantages. They lack a separation of concerns, styles 
are mixed with logic and structure. Some styles are not possible to apply inline and 
require JS solutions. For example hover and other pseudo classes are not available 
as inline styles. 

#### Use a grid

Define a grad and map elements to the grid with `grid-area`.

