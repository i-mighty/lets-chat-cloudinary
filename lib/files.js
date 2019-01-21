'use strict';
var cloudinary = require('cloudinary');

function Cloudinary(options) {
    this.options = options;

    this.getUrl = this.getUrl.bind(this);
    this.save = this.save.bind(this);
    cloudinary.config(options);
}

Cloudinary.defaults = {
    cloud_name: '',
    api_key: '',
    api_secret: ''
};

Cloudinary.prototype.getUrl = function (file) {
    return 'https://res.cloudinary.com/#{cloud_name}/image/upload/#{file}'
        .replace('#{cloud_name}', this.options.cloud_name)
        .replace('#{file}', file._id);
};

Cloudinary.prototype.save = function (options, callback) {
    var that = this,
           file = options.file,
           doc = options.doc,
           fileFolder = doc._id,
           filePath = fileFolder + '/' + doc.name,
           cloud_name = this.options.cloud_name,
           api_key = this.options.api_key,
           api_secret = this.options.api_secret;
    
    if (!cloud_name || !api_key || !api_secret) {
        return callback('lets-chat-cloudinary: Mandatory configuration fields are missing. ')
    }

    cloudinary.v2.uploader.upload(file.path, {
        public_id: doc._id,
        resource_type: "auto",
        tags: ['lets-chat']
    }, function (error, result) {
        console.log(result, error);
        if (!error && result) {
            callback(null, result.secure_url, doc);
        }
    })
};

module.exports  = Cloudinary;
