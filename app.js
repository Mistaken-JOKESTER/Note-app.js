const chalk = require('chalk');
const yargs = require('yargs')
const notesUtilites= require('./notes.js')

//coustimize yargs version
yargs.version('1.2.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe: 'Notes Written by whom',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        
            notesUtilites.addNote(argv.title, argv.body)
            
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
                describe: 'Title of Note',
                demandOption: true,
                type: 'string'
              }
        },
    handler(argv){

        notesUtilites.removeNotes(argv.title)
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder:{
        title:{
                describe: "Title of note to get its body",
                demandOption: true,
                type: 'string'
             }
    },
    handler(argv) {
        notesUtilites.readNotes(argv.title)
    }
})

//Creat list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        notesUtilites.listNotes()
    }
})
// add, remove, read, list



yargs.parse()
//console.log(yargs.argv)
