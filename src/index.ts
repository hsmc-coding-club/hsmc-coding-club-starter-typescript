import glob from 'glob';
import path from 'path';
import cliSelect from 'cli-select';

let autoRunFile = {
    enable: false,
    fileDir: `./sandboxes/google-questions/google-questions.ts`
};

if(autoRunFile.enable) {
    let fSplit = autoRunFile.fileDir.split(`/`);
    console.log(`[SANDBOX] Auto-Launching File: ${fSplit[fSplit.length - 1]}`);
    console.log(`---------------------`);
    console.log(``);
    console.log(``);
    require(autoRunFile.fileDir.replace(`.ts`, ``).replace(`.js`, ``)).run();
} else {
    // Swap Files
    glob(`./${path.basename(__dirname)}/sandboxes/**/*.*`, async (err, files) => {
        if(err) throw err;

        files = files.filter(f => (f.endsWith(`.js`) || f.endsWith(`.ts`)) &&! f.includes(`sandbox-template`));
        let formattedFiles = files.map(f => f.replace(`./${path.basename(__dirname)}/sandboxes/`, ``));
        console.log(`[SANDBOX] Please select a file to run: `);
        cliSelect({
            values: formattedFiles
        }, (valueIndex: any) => {
            let valSplit = valueIndex.value.split(`/`);
            console.log(`[SANDBOX] Launching File: ${valSplit[valSplit.length - 1]}`);
            console.log(`---------------------`);
            console.log(``);
            console.log(``);

            // Run the file
            require(`./sandboxes/${valueIndex.value.replace(`.ts`, ``).replace(`.js`, ``)}`);
        });
    });
}
