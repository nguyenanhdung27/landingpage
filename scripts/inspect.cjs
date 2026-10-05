const sharp = require('sharp');

async function main() {
  const { data, info } = await sharp('public/reference.png').raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const c = info.channels;
  
  // Find where logo and navbar are:
  for (let y = 105; y <= 250; y += 3) {
    for (let x = 80; x <= 940; x += 3) {
      const idx = (y * w + x) * c;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r < 230 || g < 230 || b < 230) {
        // Sample color
        const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
        if (x < 150) {
          console.log(`Logo icon around (${x}, ${y}): ${hex}`);
          x += 20;
        } else if (x < 250) {
          console.log(`Logo text around (${x}, ${y}): ${hex}`);
          x += 50;
        } else if (x > 750) {
          console.log(`Get Started button around (${x}, ${y}): ${hex}`);
          x += 50;
        }
      }
    }
  }

  // Find BUSINESS title
  for (let y = 200; y <= 350; y += 5) {
    for (let x = 100; x <= 400; x += 5) {
      const idx = (y * w + x) * c;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r < 100 && g < 100 && b < 150) {
        const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
        console.log(`Title font pixel at (${x}, ${y}): ${hex}`);
        break;
      }
    }
  }
}

main().catch(console.error);
