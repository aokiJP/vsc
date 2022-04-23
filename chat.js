import { world } from "mojang-minecraft";
const prefix = "?";

world.events.beforeChat.subscribe((eventData) => {
  const { sender, message } = eventData;
  const command = message.slice(prefix.length).split(' ');
  const massageSend = message.slice(command.length).split(' ');
  if (command[0] == "team" && messageSend[0].length > 0) {
    sender.runCommand(`tellraw @a [$[sender]] $[messageSend]`);
    event.cancel;
  }
});