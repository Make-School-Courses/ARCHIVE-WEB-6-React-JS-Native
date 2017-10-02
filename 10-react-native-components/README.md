# React Native Components

React projects are built on components and components are composable. That is components
are built from a hierarchy of other components. 

## Simple and Stateful

Simple components are defined by a function that returns JSX. A stateful component is 
defined as a class that extends React.component. 

## Simple Component

Make a simple component. Make a new file with the following: 

```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});
```

# props 

All components take in `props`. Props are always a JavaScript object. Use `props` to 
configure a component. Here is an example imagine Title bar Component. The title bar 
component will take a property to set it's title. 

```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export default TitleBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0 // Whoa!
  },
  title: {
    fontSize: 22,
    color: '#ddd',
    flex: 0, // Whoa!
  }
});
```

**Challenge** 

- Destructure the title prop in the function parameter. 
- Add another param or params that add other features. 
    - Try adding styles param with styles that overwrite the default styles. 

## React Native Components

React Native supplies a set of built in components. These components cover a wide
range of the common UI elements you find in iOS and Android apps. These include: 

- Text
- View 
- Button
- ActivityIndicator 
- Image
- ListView 
- ScrollView 
- ...

And many more. Some of these components are specific to iOS or Anrdoid. 

## React native components

React Native supports many of the Components found on mobile. These elements 
contain built in functionality. 

### ScrollView 

ScrollView is a component that creates scrolling content. It is very easy to 
use. Keep in mind that ScrollView displays content that overflows the 
ScrollView while the ScrollView itself must limit the area it covers. 
Usually you will want to make sure the view containing the ScrollView takes 
up the whole screen usually this is means that container view has a a flex 
value of 1. Scroll view can horizontal and vertical (set the horizontal prop).

#### Challenge 

Try the ScrollView in your app. 

- Create a ScrollView that contains all of your weather data. 
- Use the Daily forcast data to display in a scrollView. 
- Add daily data to a scrollView set to horizonal.

### Images

Add images to your project folder. To display an image in your app you'll 
need to require it. 

Import the Image component: 

`import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';`

Require the image:

`<Image source={require('../images/Cloud-rain.png')} />`

Here the image file would need to be in a folder named `images` in the root 
of the project. 

#### Challenge

- Import an image and display it as part of your app. 
- Import an image that matches the "icon" for the weather. 

### JavaScipt Dates and formatting

You'll need to format dates. Darkskys provides the date as a Unix Timestamp. 
You will need to convert this to a JS Date. JS time stamps are tracked in 
miliseconds while Uniz Timestamps are tracked in Seconds. 

Make a new Date Object with: 

`new Date()`

Make a new Date Object with a Unix timestamp like this: 

`new Date(timestamp * 1000)`

With a Date object you can produce dates in various default formats, make a custom
date, or extract a feature of the date like the hours, minutes, seconds, day, month, 
or year. 

Take a look at

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

#### Challenges 

- Format the Date provided by DarkSkys. 
    - Use of the default date formats like `date.toLocaleString()`

### Organizing Components

React projects are built on components. With well planned structure and organization 
your projects components will make your projects more flexible and easier to 
manage. Here are a few ideas to make your work easier. 

**Simple vs Stateful components**

Whenever possible use simple components. Simple components have better performance
and are easier to write and maintain. 

**More Smaller components**

As a general rule perfer creating more simple components rather than larger 
monolithic components. This will have the effect of simplifying the process of styles, 
and make your work more modular.

****







