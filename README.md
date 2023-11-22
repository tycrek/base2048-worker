<div align="center">

# base2048-worker

</div>

This is the source code to [base2048-worker](https://base2048.tycrek.dev), a Cloudflare Worker that will encode or decode the provided input to [Base2048](https://github.com/qntm/base2048).

## Examples

A Base2048 encode for `Hello, world!` looks like this `ԋϠɲණరѻఋԵړƶ` ([link](https://base2048.tycrek.dev/encode/Hello,%20world!)).  
Decoding the result of `ԋϠɲණరѻఋԵړƶ` returns to `Hello, world!` ([link](https://base2048.tycrek.dev/decode/ԋϠɲණరѻఋԵړƶ)).

## Usage

You are free to use this service however you like. Example JavaScript:

```js
const url = 'https://base2048.tycrek.dev/encode/Hello,%20world!';

fetch(url)
  .then(response => {
    if (!response.ok)
      throw new Error(`Response not ok: ${response.statusText}`);
    return response.text();
  })
  .then(data => console.log(data)) // ԋϠɲණరѻఋԵړƶ
  .catch(error => console.error('Fetch error:', error));
```

## License

Licensed under [ISC](https://github.com/tycrek/pagery/blob/master/LICENSE)

Copyright (c) 2023 [tycrek](https://github.com/tycrek)
