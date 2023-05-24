import path from 'path';
import { promises as fs } from 'fs';

type Record = {
    id: number;
    name: string;
    uid: string;
    language: string;
}

export default async function Page() {
    const jsonDirectory = path.join(process.cwd(), 'server-data');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'data.json'), 'utf8');
    const data: {record: Record} = JSON.parse(fileContents);
    return (
        <div>
            <h1>Page</h1>
            <ul>
                <li>name: {data.record.name}</li>
                <li>id: {data.record.id}</li>
                <li>uid: {data.record.uid}</li>
                <li>lang: {data.record.language}</li>
            </ul>
        </div>
    )
}
