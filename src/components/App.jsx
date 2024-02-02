import React,{useState} from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';



function App (){
    const [notes, setNotes] = useState([]);


    function addNote(newNote) {
        setNotes((prev) => {
            return [...prev, newNote];
        })
    }

    function deleteNote(id){
        setNotes( prev => {
            return prev.filter((note, index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes && notes.map((noteItem, index) => {
                return <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer /> 
        </div>
    );
}

export default App;