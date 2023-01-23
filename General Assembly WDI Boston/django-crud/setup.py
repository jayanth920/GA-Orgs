# -*- coding: utf-8 -*-

# Learn more: https://github.com/kennethreitz/setup.py

from setuptools import setup, find_packages

with open('README.md') as f:
    readme = f.read()

with open('LICENSE.md') as f:
    license = f.read()

setup(
    name='django-crud',
    version='0.1.0',
    description='Django CRUD lesson',
    long_description=readme,
    author='General Assembly Boston SEI',
    author_email='wdi.boston@gmail.com',
    url='https://git.generalassemb.ly/ga-wdi-boston/django-crud',
    license=license,
    packages=find_packages(exclude=('tests', 'docs'))
)
