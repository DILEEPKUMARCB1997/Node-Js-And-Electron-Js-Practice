const electron = require("electron");
const { app, BrowserWindow, Menu, globalShortcut, ipcMain } = electron;
const isMac = process.platform === "darwin";
let mainWindow;
let addWindow;

app.on("ready", () => {
  console.log("App is ready");
  mainWindow = new BrowserWindow({
    title: "TODO APP",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  // globalShortcut.register("Q", () => {
  //   app.quit();
  // });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("closed", () => app.quit());
  // mainWindow.webContents.openDevTools();
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 500,
    height: 300,
    frame: true,
    title: "Add New Todo",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  addWindow.loadURL(`file://${__dirname}/add.html`);
  // addWindow.webContents.openDevTools();
  addWindow.on("closed", () => (addWindow = null));
}

ipcMain.on("todo:add", (event, todo) => {
  mainWindow.webContents.send("todo:add", todo);
  // addWindow.close();
});

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add a New Todo",
        click() {
          createAddWindow();
        },
      },
      {
        label: "Clear Todos",
        click() {
          mainWindow.webContents.send("todo:clear");
        },
      },
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "ctrl+Q",
        // click() {
        //   app.quit();
        // },
        role: isMac ? "close" : "quit",
      },
    ],
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      {
        label: "Toggle Developer Tools",
        accelerator:
          process.platform === "darwin" ? "Command+Alt+I" : "Ctrl+Shift+I",
        click(item, focusedWindow) {
          focusedWindow.openDevTools();
        },
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

if (process.platform === "darwin") {
  menuTemplate.unshift({});
}
// if (process.platform !== "darwin") {
//   menuTemplate.push({
//     label: "View",
//     submenu: [
//       { role: "reload" },
//       {
//         label: "Toggle Developer Tools",
//         accelerator:
//           process.platform === "darwin" ? "Command+Alt+I" : "Ctrl+Shift+I",
//         click(item, focusedWindow) {
//           focusedWindow.openDevTools();
//         },
//       },
//     ],
//   });
// }
//'production'
//'development'
//'statging'
//'test'
