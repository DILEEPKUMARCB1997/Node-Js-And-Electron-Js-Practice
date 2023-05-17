const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
  console.log("Application is Ready");
  mainWindow = new BrowserWindow({
    title: "VIDEO APP",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  // mainWindow.loadFile("index.html");
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:submit", (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send("video:duration", metadata.format.duration);
    // console.log("Video duartion is : ", metadata.format.duration, "Seconds");
  });
});
