import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { websocketUrl } from '../env';

export const WebsocketConnection = (function () {
    let instance: Stomp.Client;

    function createInstance(): Stomp.Client {
        const sock = new SockJS(websocketUrl);
        return Stomp.over(sock);
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
