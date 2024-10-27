# Wake-on-LAN App (React Native + Expo)

A mobile app built with JavaScript, React Native, and Expo, allowing users to remotely start their PC from an iPhone using Wake-on-LAN (WoL) functionality. This app provides a simple UI where users can enter their PC’s MAC address, IP address, and port, then send a WoL packet to power on their PC.

Current Features
Wake-on-LAN Functionality: Sends a WoL packet to a specified PC on the network.
Simple UI: Users input the MAC address, IP address, and port for the target device.

Dependencies
* Expo: For cross-platform mobile development.
* Node.js: Backend server for handling WoL packets, using the wake_on_lan package.
  
# Known Issues
* Incomplete Functionality: The app does not fully work yet, as there are ongoing issues with Expo’s compatibility with certain network requests and dependencies. Testing is also limited by network configuration and platform restrictions.

Installation
1. Clone the repository.
2. Run npm install in the root directory.
3. Start the backend server: node server.js.
4. Launch the app with npx expo start.
