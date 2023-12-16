import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver'

function getRandomPrompt(prompt){
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}


async function downloadImage(id, photo){
FileSaver.saveAs(photo,`download-${id}.jpg`);

}












export {getRandomPrompt, downloadImage}