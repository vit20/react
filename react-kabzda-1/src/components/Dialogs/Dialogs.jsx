import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Witold' },
        { id: 2, name: 'Sergio' },
        { id: 3, name: 'Andre' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Den' },
    ]
    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is yor?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;