const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const multer = require('multer')
cloudinary.config({
    cloud_name: "axelsaucedo8",
    api_key: "553615386127743",
    api_secret: "TEZcFheOGw1F-o3exS3v_jZZ6do",
    secure:true
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: (req, file) => new Date().toISOString() + '-' + file.originalname,

    }
});
exports.parser = multer({ storage: storage });
exports.uploader = cloudinary.uploader;