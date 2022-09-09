import glob from 'glob';
import path from 'path';
import fs from 'fs';
import unzipper from 'unzipper';
import {fileSwapper} from './swapper';

console.log(`[SANDBOX] Scanning for new sandbox files...`);
// Check for any new sandboxes
glob(`./${path.basename(__dirname)}/sandboxes/*.zip`, async (error, matches) => {
    if(matches.length > 0) {
        console.log(`[SANDBOX] Found ${matches.length} new enviroments. Setting up....`);
        for (let i = 0; i < matches.length; i++) {
            let currentFileDir = matches[i];
            let matchSplit = currentFileDir.split(`/`);
            let fileName = matchSplit[matchSplit.length - 1].toLowerCase().replace(`.zip`, ``);

            // Extract the data
            await fs.createReadStream(currentFileDir).pipe(unzipper.Extract({ path: `./${path.basename(__dirname)}/sandboxes` }));

            // Delete the ZIP
            fs.unlinkSync(currentFileDir);
            console.log(`[SANDBOX] Setup enviroment '${fileName}'!`);
            console.log(``);
        }
    } else {
        console.log(`[SANDBOX] No matches found.`);
        console.log(``);
    }
});

setTimeout(fileSwapper, 1500);