
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from "next-http-proxy-middleware";
// boobies
export default (req: NextApiRequest, res: NextApiResponse) => (
    httpProxyMiddleware(req, res, {
        target: 'https://next-esper.myshopify.com',
        changeOrigin: true,
        followRedirects: true,
        cookieDomainRewrite: 'localhost',
        pathRewrite: [{
            patternStr: '^/api',
            replaceStr: ''
        }],
    })
);
