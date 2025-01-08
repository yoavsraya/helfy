const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../storage'); // Save files in the "uploads" directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

exports.POSTuploadPicToServer = (req, res) => 
{
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = path.resolve('../storage', req.file.filename); // Full path of the saved file
    const fileName = req.file.filename;

    // Respond with file information
    res.status(200).json({
        message: 'File uploaded successfully',
        file: {
            name: fileName,
            path: filePath,
        },
    });

}