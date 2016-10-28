# Gulp + Livereload + S3 Deployment Setup

This is a gulp setup with the following components in the app.

- gulp 4 task runner (you must run this in gulp 4^)
- BrowserSync to live reload the static page
- html injection
- Sass with watchers
- JS concat and uglifier with watchers
- Direct S3 Bucket Uploading using the aws-sdk (AWS API)

To start, install dependencies:

```bash
npm install
```

Run gulp to create a build folder and start live reload for the app.

```bash
export NODE_ENV=dev && node ./node_modules/gulp/bin/gulp.js
```

To simply build for production without live reload:

```bash
export NODE_ENV=dev && node ./node_modules/gulp/bin/gulp.js prod
```

## Sass

main.scss is the entry point for your styling and all other _.scss_ files should be imported into that file.

## Libs and customJS built via sources.json

All custom js should be included in sources.json in the order that they will be concatenated.

All css and js libs should be included in sources.json.
- First install the dependency (should be installed into a local package folder, such as node_modules)
- Then add the path in sources.json in the order that they should be injected.

## Deploying static app to S3

- If using s3 for deployment, have a credential file in ~/.aws (~/.aws/credential) with aws keys. Per the [Javascript AWS-SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS)

```
[default]

aws_access_key_id = #

aws_secret_access_key = #
```

- Crate a config [env].json file like (dev.json) with a key of 's3Bucket' and a value of your bucket name. Then set the NODE_ENV environment variable when running gulp.

- The file example.json is added as an example for your configs if you had an _example_ environment.

- Upload to S3 bucket using gulp:

```bash
export NODE_ENV=dev && node ./node_modules/gulp/bin/gulp.js s3:deploy
```

- __CAUTION__ Only do this if you know what you are doing!  If you need to empty your bucket after adding stuff into it:

```bash
export NODE_ENV=dev && node ./node_modules/gulp/bin/gulp.js s3:empty
```

## Todo

- Make the lib addition more intuitive
- Add testing
