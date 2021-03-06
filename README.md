# remx-rnn-uilib-bootstrap

## Bootstrap for a `remx` `react-native-navigation` and `ui-lib` based project

Clone this repository to start a project based on

```
"react-native": "0.44.2",
"react": "16.0.0-alpha.6",
"react-native-navigation": "1.x.x"
```


Check the following libraries for usage details:

* [remx](https://github.com/wix/remx)
* [react-native-navigation](https://github.com/wix/react-native-navigation/wiki)
* [react-native-ui-lib](https://github.com/wix/react-native-ui-lib)


### preparing your project

Download npm dependencies:

```sh
npm i -g react-native-cli
npm install
```

### Running your project

From project dir, run:

#### iOS
1. Build and run (this will start a simulator if not already started)

	```sh
	react-native run-ios
	```
	This would also start a packager if not already started

2. Set your Simulator to live reload changes `⌘`+`d`  (`cmd`+`d`) => `Enable Live Reload`



#### Android
1. Start an emulator
2. Build and run

	```sh
	react-native run-android
	```
	This would also start a packager if not already started


3. Set your Emulator to live reload changes `⌘`+`m`  (`cmd`+`m`) => `Enable Hot Reloading`

To open packager manually, from project dir run:

```sh
react-native start
```

