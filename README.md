# react-native-quick-look

[![License](https://img.shields.io/cocoapods/l/ReactNativeAutoUpdater.svg?style=flat)](http://cocoapods.org/pods/ReactNativeAutoUpdater) [![npm version](https://img.shields.io/npm/v/react-native-quick-look.svg?style=flat)](http://npmjs.com/package/react-native-quick-look)

## About

To show file previews on iOS, you can use the [QuickLook Framework](https://developer.apple.com/library/ios/documentation/FileManagement/Conceptual/DocumentInteraction_TopicsForIOS/Articles/UsingtheQuickLookFramework.html). Apple introduced a specialized view presented by QuickLook Preview Controller. However, this view is not available to be instantiated and presented directly (well, at least in a straight forward way).

However, you can access the view encapsulated by the QuickLook Preview Controller, and add it as a subview for any other instance of NSView. To make `QuickLookView` available on React Native, we instantiated the QuickLook Preview Controller, then customized and returned the view inside the controller.

##### NOTE: QuickLook Framework is only available on iOS.

## Installation

### iOS

1. `npm install react-native-quick-look --save`
2. In the Xcode's "Project navigator", right click on your project's Libraries folder ➜ Add Files to _"Your Project Name"_
3. Go to `node_modules` ➜ `react-native-quick-look` ➜ `iOS` ➜ select `ReactNativeQuickLook.xcodeproj`
4. In the Xcode Project Navigator, click the root project, and in `General` tab, look for `Linked Frameworks and Libraries`. Click on the `+` button at the bottom and add `libReactNativeQuickLook.a` and `QuickLook.framework` from the list.

### Android

​	Not available

## Usage

### iOS

```javascript
// style it like any other View
// url is the url of the file you want to preview
<QuickLook style={{ flex: 1 }} url={ url } />
// or 
// provide the filename of the asset included with the app
<QuickLook style={{ flex: 1 }} assetFileName={ 'demo.pdf' } />
```

### Android

​	Not available

## Running the Example App

1. Clone/download the repo
2. Run `npm install` from the Example folder
3. Open `Example.xcodeproj` and run the app from Xcode

### Screenshot

![Screenshot](https://raw.githubusercontent.com/aerofs/react-native-quick-look/master/screenshot.gif)

## License

`react-native-quick-look` is available under the MIT license. See the LICENSE file for more info.