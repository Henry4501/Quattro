const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/musicdatabase',
    file: (req, file) => {
        return {
            filename: file.originalname,
            bucketName: 'uploads' // Bucket name in MongoDB
        };
    }
});

const upload = multer({ storage });

module.exports = upload;