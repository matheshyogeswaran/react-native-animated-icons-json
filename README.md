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