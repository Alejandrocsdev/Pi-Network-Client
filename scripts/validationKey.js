import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const filePath = path.resolve('public', 'validation-key.txt');
fs.writeFileSync(filePath, process.env.VALIDATION_KEY);
console.info('✅ validation-key.txt created');
