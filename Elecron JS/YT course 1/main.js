const { app, BrowserWindow, Menu, ipcMain } = require("electron");

ipcMain.on("message", (event, arg) => {
  event.reply("reply", "Thank you for the Data");
  console.log(arg);
});

let template = [
  { label: "item 1" },
  { label: "item 2" },
  { label: "item 3" },
  { label: "item 4" },
  { label: "item 5" },
];

let contextMenu = Menu.buildFromTemplate(template);

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  win.loadFile("index.html");
  win.webContents.on("context-menu", () => {
    contextMenu.popup();
  });
}
app.whenReady().then(createWindow);

//...............................................................................

// const { app, BrowserWindow, Menu } = require("electron");

// let isMac = process.platform === "darwin";
// let template = [
//   ...(isMac
//     ? {
//         label: "About us",
//         submenu: [
//           { label: "Products" },
//           { label: "Locations" },
//           { label: "Achievments" },
//         ],
//       }
//     : []),
//   {
//     label: "Contact us",
//     submenu: [
//       { label: "Products" },
//       { label: "Locations" },
//       { label: "Achievments" },
//     ],
//   },
//   { label: "Projects" },
//   {
//     label: "Operations",
//     submenu: [
//       isMac
//         ? { role: "close", label: "Exit" }
//         : { role: "quit", label: "Exit" },
//       { label: "zoom" },
//     ],
//   },
// ];

// let menu = Menu.buildFromTemplate(template);
// Menu.setApplicationMenu(menu);

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 900,
//     height: 600,
//   });
//   win.loadFile("index.html");
// }
// app.whenReady().then(createWindow);

//.........................................................................

// const { app, BrowserWindow, Tray, Menu } = require("electron");

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 900,
//     height: 600,
//   });
//   win.loadFile("index.html");
//   let tray = new Tray("./nature.jpg");
//   tray.setToolTip("Tray to Electron App");
//   // tray.on("click", () => {
//   //   win.isVisible ? win.hide() : win.show();
//   // });

//   let template = [
//     { label: "item 1", type: "radio" },
//     { label: "item 2" },
//     { label: "item 3" },
//   ];

//   const contextMenu = Menu.buildFromTemplate(template);
//   tray.setContextMenu(contextMenu);
// }
// app.whenReady().then(createWindow);
//.....................................................................................................

// const { app, BrowserWindow, dialog, globalShortcut } = require("electron");

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 900,
//     height: 600,
//   });
//   win.loadFile("index.html");
//   globalShortcut.register("K", () => {
//     dialog.showOpenDialog({
//       defaultPath: app.getPath("desktop"),
//       buttonLabel: "Select File ",
//     });
//   });
//   win.webContents.on("did-finish-load", () => {});
// }
// app.whenReady().then(createWindow);

//..............................................................................................//

// const { app, BrowserWindow, Menu, globalShortcut } = require("electron");
// const windowStateKeeper = require("electron-window-state");
// console.log("Main Process");

// let win;
// function createWindow() {
//   let mainWindowState = windowStateKeeper({
//     defaultWidth: 800,
//     defaultHeight: 600,
//   });
//   win = new BrowserWindow({
//     title: "ELECTRON APP",
//     width: mainWindowState.width,
//     height: mainWindowState.height,
//     x: mainWindowState.x,
//     y: mainWindowState.y,
//     frame: true,
//     // backgroundColor: "#ff00ff",
//     alwaysOnTop: false,
//     resizable: true,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });
//   // const child = new BrowserWindow({ parent: win, width: 600, height: 400 });
//   // child.loadFile("child.html");
//   // child.show();
//   win.loadFile("index.html");
//   mainWindowState.manage(win);

//   const wc = win.webContents;
//   wc.on("dom-ready", () => {
//     console.log("App Dom is Ready");
//   });
//   wc.on("did-finish-load", () => {
//     console.log("did-finish-load");
//   });
//   wc.setWindowOpenHandler(() => {
//     console.log("New Window Opened");
//     return { action: "allow" };
//   });
//   wc.on("before-input-event", () => {
//     console.log("Some key is pressed");
//   });

//   globalShortcut.register("shift+K", () => {
//     win.loadFile("./other.html");
//     console.log("K key is pressed");
//   });
// }

// app.whenReady().then(createWindow);
// console.log(app.isReady()); //false

// app.on("before-quit", (e) => {
//   console.log("Call this Before quitting the app");
//   e.preventDefault();
// });

// app.on("will-quit", (e) => {
//   console.log("Will quit the app");
//   e.preventDefault();
// });

// app.on("browser-window-focus", () => {
//   console.warn("Focused");
// });

// app.on("browser-window-blur", () => {
//   console.warn(" Not Focused");
// });

// app.on("ready", () => {
//   createWindow();
//   console.log(app.isReady()); //true
//   console.log("Application is Ready");
// });
