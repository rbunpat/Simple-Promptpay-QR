# Simple-Promptpay-QR
Deploy with Vercel [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frbunpat%2FSimple-Promptpay-QR)

# Express QR Code Generator

This is a simple Express project that generates QR codes for promptpay payments. It utilizes the `qrcode` library to generate QR codes and the `promptpay-qr` library to create the payload for promptpay payments.

## Development

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rbunpat/Simple-Promptpay-QR.git
   cd Simple-Promptpay-QR
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node index.js
   ```

   The server will start running on `http://localhost:3000`.

## API Endpoint

The main functionality is exposed through the `/qr` endpoint. You can generate a promptpay QR code by making a GET request to this endpoint with the required parameters.

### Example:

```http
GET http://localhost:3000/qr?amount=100&number=0812345678
```

- `amount`: The amount for the promptpay payment.
- `number`: The mobile number associated with the promptpay account.

The response will be a PNG image containing the generated QR code for the specified promptpay payment.

## Dependencies

- `express`: Web framework for Node.js.
- `qrcode`: QR code generation library.
- `promptpay-qr`: Library for generating promptpay QR code payloads.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
