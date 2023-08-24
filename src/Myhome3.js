import React, { useState } from 'react';
import axios from 'axios';

const Myhome3 = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async () => {
        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
                prompt: input,
                max_tokens: 150
            }, {
                headers: {
                    'Authorization': 'Bearer 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', // Note: Bearer token added
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);

            setMessages([...messages, { text: input, type: 'user' }, { text: response.data.choices[0].text.trim(), type: 'gpt' }]);
            setInput('');
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            } else {
                console.log('Error', error.message);
            }
        }
    };

    return (
        <div>
            <div>
                {messages.map((message, idx) => (
                    <div key={idx} className={message.type}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default Myhome3;
