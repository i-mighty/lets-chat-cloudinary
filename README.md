# Let's Chat - Cloudinary Plugin

Add Cloudinary  file storage support to [Let's Chat](http://sdelements.github.io/lets-chat/).

### Install

```
npm install lets-chat-cloudinary
```

### Configure

##### YAML

Add (and customize) these settings to your ```settings.yml``` or ```defaults.yml```  file:

```yml
files:
  enable: true
  provider: cloudinary

  cloudinary:
    cloud_name: 'YOUR_CLOUD_NAME'
    api_key: 'YOUR_API_KEY'
    api_secret: 'YOUR_API_SECRET'
```

##### Environment Variables

###Note:
Currently settings with environment variables are currently not supported. 
Feel free to add it and a make a pull request.