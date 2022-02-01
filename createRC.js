const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

function react(name) {
    return `import React from 'react';

export const ${name} = (props) => {
    return (
        <div>${name} works</div>
    );
}`

};

const argv = yargs
    .command(['create <filename> [content]','c'], 'Create a new file and write a passed content to it', {}, (argv)=>{
        const filepath = path.resolve(argv.filename);
        const name = `${argv.content.split('_')}`;
        fs.writeFile(filepath, react(argv.content))
            .then(()=>console.log('Your React.Component has been saved'))
            .catch(e => console.log('An error has occured:', e));
    })
    .argv;

