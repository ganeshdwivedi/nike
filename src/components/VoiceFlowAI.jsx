import React, { useEffect } from 'react';

const VoiceflowChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.onload = () => {
            window.voiceflow.chat.load({
                verify: { projectID: '65ae3cc23c89c82eea6545e4' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
            });
        };
        script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        return () => document.head.removeChild(script);
    }, []);

    return <div id="voiceflow-chat-container"></div>;
};

export default VoiceflowChat;
