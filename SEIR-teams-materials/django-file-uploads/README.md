# Django User File Uploads

Many applications allow users to upload files, such as photos and documents. Though we've learned how to persist data through our backend work, if we attempted to implement file uploads with our current Django application, the uploaded files would be lost when our Heroku dynos go to sleep. 

In order to persist our user's file uploads, we will learn how to set up user file storage for our backend application using [AWS's S3 cloud storage service](https://aws.amazon.com/s3/), as well as a collection of helpful Django packages. 

S3 is just one of MANY services that AWS offers, from serverless backends to machine learning to cloud platforms. [Exploring these technologies](https://acloudguru.com/blog/engineering/which-aws-certification-should-i-take?utm_campaign=12519326767&utm_source=google&utm_medium=cpc&utm_content=505726475234&utm_term=b_&adgroupid=118779662363&gclid=CjwKCAjw2bmLBhBREiwAZ6ugo__lNmD6Meica5dPDqSsm2_VUSX_2SDjn6AXuYdjiEbH1yyRETJD7xoC6GoQAvD_BwE) is a highly-recommended next step in your software engineering journey.

## Django Model Image Fields

We'll start by updating our DRF Restaurants application to accept file uploads. 

Add an ImageField to your Restaurants Model and tell it where to store the [file](https://www.geeksforgeeks.org/imagefield-django-forms/):

```py
photo = models.ImageField(upload_to='images/')
```

Set a default image with:
```py
models.ImageField(upload_to='images/', default='images/default.jpg')
```

Setting the default (or `blank=True`) is also especially helpful if you've already migrated the model. 

Migrations will fail if [Pillow](https://pypi.org/project/Pillow/), an image processing package for Python interpreters, is not installed so install it in your virtual envrionment with:

```cli
$ pipenv install Pillow
```

Then make migrations and migrate.

```cli
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```

For DRF APIs, add the new field to the serializer, so that `photo` is sent back as a field in the JSON API response for `Restaurant` resources:

```py
fields = (…, 'photo')
```

Set the base media directory with `MEDIA_URL = '/media/'` in `settings.py`. 

This means that you need to create add your default image into this directory such as:
`your-project-outer-directory/media/images/default.jpg`

If you want to see the images in development set a `MEDIA_ROOT` directory in `settings.py` to the absolute path (which means it starts with a ‘/’) on your machine where the media folder exists such as:

```py
MEDIA_ROOT = os.path.join(BASE_DIR, "media/") 
```

**OR** on MacOS, you can get this by navigating to the directory in the Finder and then right-click on the folder in the footer and choose `Copy "media" as Pathname`: 

```py
MEDIA_ROOT = '/Users/esinator/seir-809/sandbox/drf-restaurants/media' 
```

In the project root `urls.py` import `settings` and `static` per the [documentation](https://docs.djangoproject.com/en/3.1/howto/static-files/#serving-files-uploaded-by-a-user-during-development):

```py
from django.conf import settings
from django.conf.urls.static import static

# Then add this to the end of the urlpatterns list:
urlpatterns = [ … ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

## Django File Uploads to AWS S3

Install boto3 (the official S3 Python library) with `pipenv install boto3`. 
Make sure you have your credentials file configured correctly:

```cli
~/.aws/credentials
[default]
aws_access_key_id=YOUR_ACCESS_KEY
aws_secret_access_key=YOUR_SECRET_KEY
```

Install django-storages with `pipenv install django-storages` to your virtual environment. 

Set the storage backend per the [docs](https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html) in `settings.py`: 

```py
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
AWS_STORAGE_BUCKET_NAME = 'your-bucket-name'
```

OPTIONAL WITH BOTO3: Add the key values to your `settings.py`. 

```py
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
```

Then Set the credentials in your `.env` file make sure the names are SCREAMING_SNAKE_CASE, which is conventional for global variables:

```
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
```

Depending on your use case, you may want to set the default ACL (access control list) to public read (for example if you want images that are uploaded by users to be visible for all users):
```py
AWS_DEFAULT_ACL = 'public-read'
```

EXIT AND RESTART terminal completely so the new environment variables are read in.

Optionally, you can set `AWS_QUERYSTRING_AUTH = False` if your bucket is public.  This will make your urls shorter because they won't have any query strings appended to them.

## Bonus: Deploy 🚀

Revisit the [Heroku-Django deployment guide](../../../heroku-django-deployment) and deploy your application! 

Make sure that you set the credentials in the config vars on Heroku after deployment!

## Solution Code

See [here](https://git.generalassemb.ly/esin87/drf-restaurants-uploads) for solution code and [here](https://esin-drf-restaurants.herokuapp.com/) for an example deployed application. 
