# Animated Lottie React Native Component

Animated Lottie is a React Native component that allows you to easily display Lottie animations in your mobile applications.

## Installation

To use this component, you need to install the following dependencies:

- [lottie-react-native](https://www.npmjs.com/package/lottie-react-native)
- [react-native-animated-icons-json](https://www.npmjs.com/package/react-native-animated-icons-json)

You can install them via npm:

```bash
npm install lottie-react-native react-native-animated-icons-json
```
## Usage
After installing the dependencies, you can import and utilize the AnimatedLottie component in your React Native application.

```
import React from 'react';
import { View } from 'react-native';
import AnimatedLottie from 'react-native-animated-icons-json';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedLottie animationName="location" width={100} height={200} />
    </View>
  );
};

export default App;
```

In this example, AnimatedLottie is imported and used within a React Native component. Replace 'location' with the name of the Lottie animation you want to display. Adjust the width and height props according to your requirements.

## Demo Video
For a visual demonstration on how to use the Animated Lottie React Native Component, you can watch this demo video.
- [Link](https://www.youtube.com/watch?v=DCftPBnYy3Y&ab_channel=MatheshYogeswaran)

## Website
To access additional resources and documentation, visit the official website:
- [Website](https://json-saver.onrender.com/)

By following this guide, you can seamlessly integrate Lottie animations into your React Native applications and enhance user experience.