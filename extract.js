import fs from 'fs';

const svg = fs.readFileSync('./public/Rectangle.svg', 'utf8');
const base64Match = svg.match(/data:image\/png;base64,([^"]+)/);
if (base64Match && base64Match[1]) {
  const base64Data = base64Match[1];
  fs.writeFileSync('./public/Rectangle.png', Buffer.from(base64Data, 'base64'));
  console.log('Successfully extracted Rectangle.png');
} else {
  console.error('Could not find base64 data in svg');
}
