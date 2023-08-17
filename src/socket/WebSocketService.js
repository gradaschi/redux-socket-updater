import io from "socket.io-client";
import { setUpdateUser } from "../redux/containers/User/action";

const socket = io("http://localhost:9999");

let isSocketConnected = false;

export const initSocket = (dispatch) => {
  socket.on("connect", () => {
    isSocketConnected = true;
    console.log("WebSocket connected");
  });

  socket.on("message_from_server", (data) => {
    dispatch(setUpdateUser(data));
  });

  socket.on("disconnect", () => {
    isSocketConnected = false;
    console.log("WebSocket disconnected");
  });
};

export const sendMessage = (data) => {
  if (isSocketConnected) {
    socket.emit("message_from_client", data);
  } else {
    console.log("Socket is not connected. Message not sent.");
  }
};

export const requestUpdatesFromServer = () => {
  if (isSocketConnected) {
    socket.emit("get_updates");
  }
};
