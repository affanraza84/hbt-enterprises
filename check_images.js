
const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/services/product.service.ts', 'utf8');
const regex = /https:\/\/images\.unsplash\.com\/[^'"]+/g;
const urls = content.match(regex) || [];

console.log(`Found ${urls.length} URLs.`);

const checkUrl = (url) => {
    return new Promise((resolve) => {
        const req = https.request(url, { method: 'HEAD' }, (res) => {
            resolve({ url, status: res.statusCode });
        });
        req.on('error', () => resolve({ url, status: 'ERROR' }));
        req.end();
    });
};

async function checkAll() {
    const results = [];
    const uniqueUrls = [...new Set(urls)];

    // Check in chunks to avoid rate limiting
    for (let i = 0; i < uniqueUrls.length; i += 5) {
        const chunk = uniqueUrls.slice(i, i + 5);
        const chunkResults = await Promise.all(chunk.map(checkUrl));
        results.push(...chunkResults);
        console.log(`Checked ${Math.min(i + 5, uniqueUrls.length)}/${uniqueUrls.length}`);
    }

    const broken = results.filter(r => r.status !== 200);
    console.log('--- BROKEN IMAGES ---');
    broken.forEach(b => console.log(`${b.status} : ${b.url}`));
    console.log(`Total Broken: ${broken.length}`);
}

checkAll();
