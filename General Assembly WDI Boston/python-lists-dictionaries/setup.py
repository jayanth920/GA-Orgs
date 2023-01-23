# -*- coding: utf-8 -*-

# Learn more: https://github.com/kennethreitz/setup.py

from setuptools import setup, find_packages

with open('README.md') as f:
    readme = f.read()

with open('LICENSE.md') as f:
    license = f.read()

setup(
    name='python-lists-dictionaries',
    version='0.1.0',
    description='Python lesson on Lists and Dictionaries',
    long_description=readme,
    author='General Assembly SEI',
    author_email='<email>',
    url='https://git.generalassemb.ly/ga-wdi-boston/python-lists-dictionaries',
    license=license,
    packages=find_packages(exclude=('tests', 'docs'))
)
