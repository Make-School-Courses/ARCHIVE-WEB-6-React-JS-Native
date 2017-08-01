# React 

## Intro

React is a library made to create User Interfaces in JavaScript Applications. In the 
context of MVC architecture React would represent the V or View layer. I think that 
React represents more I feel that React represents a new way of thinking and is an 
alternative to traditional MVC architecture. 

React has a few concepts at it's core. 

- Components
- Virtual DOM
- JSX
- Transpile

## Schedule 

|    | Time    | Type       | Description                          |
|----|---------|------------|--------------------------------------|
| 1  | 5 min   | Intro      | Class introduction                   |
| 2  | 5 min   | lecture    | Tutorial introduction                |
| 3  | 30 min  | Challenges | Work on React Tutorial               |
| -  | 10 min  | Break      | Ignore social media                  |
| 4  | 10 min  | Group      | Components, Virtual DOM, JSX         |
| 5  | 30 min  | Present    | Groups present to class              |
| 6  | 20 min  | Challenges | Continue the challenges!             |
| =  | 110 min | Total time | -                                    |

### Overview 

After a short introduction to the tutorial. 

After working on the tutorial students form groups and discuss the tutorial and React. 
Each group is tasked to focus on one of the concepts below. After discussion groups 
present to the class.

Break 

After the break students continue working on the challenges. 

## React Concepts 

- [React Concepts](./react-concepts.md)

## Challenges

Open the [example](./index.html) in a browser and a text editor. 
Read the source code and compare it to the notes here. Then work your way 
through the challenges. 

- [Example React Components Intro](./index.html)

## The Sample Code

The sample code contains two Components: Title and Clock. These are used in the example to create 
a simple clock. 

- Title - A simple component that displays a text string in an H1
- Clock - A smart component that owns and updates a timer, and displays the time in a Title. 

Near the end of the page there is a call to ReactDOM.render(). ReactDOM keeps track of your 
components in a virtual DOM and renders this to the page.

## Challenges 

To start the challenges copy the file `index.html` in this folder. Solve the challenges by 
adding your code solutions to this file. This file has all of the boilerplate React 
code set up. You can open this file in any browser to test your solutions. 

Try these challenges.

- Make a component that displays a title and a subtitle.
  - Pass the title string and subtitle string into the component as props.
  - Use this new component the to display:
    - title: "React Timer"
    - subtitle: "Counts in seconds"
    - Bonus: Did you reuse the existing Title component as a subcomponent? 
    The Title component can be the title of the in your new component. 
    - Bonus: add some CSS to style the title and subtitle in the new component.
- Make a timer that counts down from 10 to 0.
  - Start by making a new component. You can use the existing Clock component 
  as a starting point. This component displays the time by updating the time 
  every second. Notice setInterval() in the constructor calls the tick method().
  The Clock component defines a state with a property: date. This holds the date/time. 
  When state change the component will redraw. Your Timer component will need to
  define a count on state, decrement the count on each tick.
  props. 
- Make a timer that counts down from any value to 0.
  - You'll want to pass in the starting count as a prop where the component is created.
  Inside the component get this value from props in the constructor.
    - Bonus: Set a default count of 10 in cases where the starting count is not set via 
- The timer counts to 0 then heads into negative numbers. Make your timer return to the
starting count after it reaches 0.
- Add a property to the state of timer that determines whether the timer is running or not. 
You can call this something "on" or "isRunning". 
  - The timer should only increment when the "isRunning" value is true. 
  - This new property should be added to state. 
  - Set the initial value for isRunning via props. 
  - Bonus: Assign an initial value when isRunning is not passed into the component via props. 
  - Make two timers on the page. One should be running and the other not. 
- Make a new component that is a Stopwatch. The Stopwatch is a Timer with a stop and start button. 
  - The Stopwatch should count like the Timer but you should be able to start and stop it by 
  clicking the button.
    - The button should use onClick, something like this: 
    ```
<button onClick={ () => {
        this.startStop(); // Call a method here...
      } }>start</button>```
    - Bonus: The label changes to say start when the Stopwatch is stopped and Stop when the 
    Stopwatch is running. 
    - Bonus: Build this component by composing other components. To make this work the 
    `isRunning` state should be held by the parent component and passed down to the child 
    components via props. 
- Make a timer that displays a message while the timer is running, and displays another 
message when the timer reaches 0. Hint: Use state to hold the messages. 






