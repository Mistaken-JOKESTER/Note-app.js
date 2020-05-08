const fs = require('fs')
const chalk = require('chalk')

const getNotes  =() =>{
    return 'Your Notes.......'
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })

        console.log(chalk.green.inverse('New note is being added'))
        saveNotes(notes)
        
    }
    else{
        console.log(chalk.red.inverse('Note title taken!!!!'))
    }

    
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const data = notes.filter((note) =>!(note.title === title))

    if(data.length != notes.length){
        {
            saveNotes(data)
            console.log(chalk.green.inverse('Notes is being removed'))
        }
    } else {
        console.log(chalk.red.inverse('There is no note with given title'))
    }

}


const listNotes= () => {
    console.log(chalk.white.bgBlue.bold("Your Notes"))
    const notes = loadNotes()
    notes.forEach(note => console.log(chalk.cyanBright(note.title)))

}

const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if(note){
        console.log(chalk.bgBlueBright(`Title: ${note.title}`))
        console.log(chalk.white(`Body: ${note.body}`))
    } else {
        console.log(chalk.bgRed('There is no notes with given title'))
    }
}

const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =() =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    } 
}


//expoted modules from notes.js file
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}