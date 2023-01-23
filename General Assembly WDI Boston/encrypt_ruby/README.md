## Install the [gibberish](https://github.com/mdp/gibberish) gem.

gem install gibberish

## Encrypt ruby files.

Given a directory and a password the below command will:

* Encrypt all of the ruby files, \*.rb, in the directory into encrypted files, \*.enc
* Create a ruby_files.tar.gz archive containing the ruby files that it has encrypted. <strong>Remove this before check in</stong>

<code>
  ruby encrypt_ruby.rb  './ga-wdi-boston/ga-ruby-modules/done/' 'some password'
</code>

## Decrypt encrypted files into ruby files.
Given a directory and a password the below command will:

* Decrypt all of the encrypted files, *.enc, in the directory into ruby files, *.rb

<code>
  ruby decrypt_ruby.rb  './ga-wdi-boston/ga-ruby-modules/done/' 'some password'
</code>
