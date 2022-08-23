import glob from 'glob';
import path from 'path';
import cliSelect from 'cli-select';

export function fileSwapper(): void {
        // Swap Files
        glob(`./${path.basename(__dirname)}/sandboxes/**/*.*`, async (err, files) => {
            if(err) throw err;

            // The "index" file of a project has to have the word index in it somewhere!
            files = files.filter(f => ((f.endsWith(`.js`) || f.endsWith(`.ts`)) && f.toLowerCase().includes(`index`)) &&! f.includes(`sandbox-template`));
            let formattedFiles = files.map(f => f.replace(`./${path.basename(__dirname)}/sandboxes/`, ``));
            console.log(`[SANDBOX] Please select a file to run: `);
            cliSelect({
                values: formattedFiles
            }, (valueIndex: any) => {
                let valSplit = valueIndex.value.split(`/`);
                console.log(`[SANDBOX] Launching File: ${valSplit[valSplit.length - 1]}`);
                console.log(`---------------------`);
                console.log(``);
                // Run the file
                require(`./sandboxes/${valueIndex.value.replace(`.ts`, ``).replace(`.js`, ``)}`);
            });
        });
}