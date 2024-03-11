import { createServer, IncomingMessage, ServerResponse  } from "http";
import { ProductController } from "./controllers/productController";
import { parse } from "url";

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    const { pathname } = parse(req.url, true);
    const productController = new ProductController();
    const paths = ['/product'];
    paths.map((path) => {
        if (pathname === path) {
            switch (req.method) {
                case 'GET':
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(productController.products()));
                    break;
                default:
                    res.statusCode = 405;
                    res.end(`Method ${req.method} not allowed`);
            }
        }
        else {
            res.statusCode = 404;
            res.end('Not Found');
        }
    });
    
};

const server = createServer(requestListener);

server.listen(8080, 'localhost', () => {
    console.log('Server is running on http://localhost:8080');
});