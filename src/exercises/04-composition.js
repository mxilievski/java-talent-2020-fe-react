import React from 'react';
import PropTypes from 'prop-types';
import './04-composition.css';

function Note(props) {
    // Exercise:
    //
    // We need to create a Note component that can render title in it's header, content in its body and button for editing in its footer 
    // compose the <NoteHeader />, <NoteContent />, <NoteFooter /> components together to create this <Note /> component
    // all styles are already defined and imported in a separate file 04-composition.css
    // pass props.title to <NoteHeader />
    // pass props.content to <NoteContent />
    return <div className="note">{/* render stuff in here */}</div>;
}

Note.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

function NoteHeader({ title }) {
    return (
        <div className="note-header">
            {title}
        </div>
    );
}

NoteHeader.propTypes = {
    title: PropTypes.string.isRequired
};

function NoteContent({ content }) {
    return (
        <div className="note-content">
            {content}
        </div>
    );
}

NoteContent.propTypes = {
    content: PropTypes.string.isRequired
};

function NoteFooter({ onEdit }) {
    return (
        <div className="note-footer">
            <button onClick={onEdit}>Edit</button>
        </div>
    );
}

NoteFooter.propTypes = {
    onEdit: PropTypes.func.isRequired
};

const onEdit = () => alert('Edit was clicked');

export const Example = () => (
    <div>
        Render a {`<Note />`} component here with all the required props (specify
        your own info if you want).
    </div>
);
