[![Build Status](https://travis-ci.org/telemark/micro-status-vigo.svg?branch=master)](https://travis-ci.org/telemark/micro-status-vigo)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-status-vigo

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-status-vigo.svg)](https://greenkeeper.io/)

Shows status for the vigo bot

## API

### **/raw**

Returns json of unformatted data.

#### GET

```bash
$ curl https://vigo.status.t-fk.win/raw
```

### **/json**

Returns json of formatted data.

#### GET

```bash
$ curl https://vigo.status.t-fk.win/json
```

### **/html**

Renders formatted data to html. 

#### GET

```bash
$ curl https://vigo.status.t-fk.win/html
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-status-vigo.png "Robohash image of micro-status-vigo")
