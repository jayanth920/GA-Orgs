# -*- coding: utf-8 -*-

# Learn more: https://github.com/kennethreitz/setup.py

from setuptools import setup, find_packages

with open('README.md') as f:
    readme = f.read()

with open('LICENSE.md') as f:
    license = f.read()

setup(
    name='python_tech_talk',
    version='0.1.0',
    description='Repository for Python Tech Talk',
    long_description=readme,
    author='<author>',
    author_email='<email>',
    url='<github repository>',
    license=license,
    packages=find_packages(exclude=('tests', 'docs'))
)
