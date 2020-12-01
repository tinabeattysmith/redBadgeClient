let APIURL = '';

switch (window.location.hostname) {
    case 'localhost'|| '192.168.1.68':
        APIURL = 'http://localhost:3000/';
        break;
    case 'tbs-dowehaveit-client.herokuapp.com':
        APIURL = 'https://tbs-dowehaveit-client.herokuapp.com'
}

export default APIURL;