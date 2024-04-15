const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');
connectDB(process.env.MONGO_URI)
async function deleteData() {
    const pastDate = new Date(Date.now() - 60 * 60 * 24 * 1000 )
    const files = await File.find( { cratedAt: { $lt: pastDate } } )
    if(files.length) {
        for(const file of files) {
            try {
                fs.unlinkSync(file.path)
                await file.remove()
            } catch (error) {
                console.log(`Error while deleting file ${error}`);
            }
        }
        console.log('Job Done');
    }
}
deleteData().then(process.exit)