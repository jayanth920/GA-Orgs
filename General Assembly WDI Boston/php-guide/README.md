[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# PHP Guide

## Prerequisites

-   None

## Objectives

By the end of this, developers should have:

-  PHP 7.0 installed
-  VirtualBox installed
-  Vagrant Installed
-  Homestead installed and configured
-  Laravel installed through Composer

## Preparation

1.  None. These are preparation steps for getting your PHP development
 environment set up.

## Installing/Updating PHP

We should be working with PHP 7. Test which version is installed on your
machine by running `php -v` from the command line. It is likely lower than 7,
therefore we'll use [php-version](https://github.com/wilmoore/php-version) to
manage our PHP versions (similar to `rbenv` and `nvm`).

First, let's install PHP 7.0 onto our machines:

```bash
curl -s http://php-osx.liip.ch/install.sh | bash -s 7.0
```

Then, run the following from the command line:

**MacOS**

```bash
brew tap homebrew/homebrew-php
brew install php-version
```

**Linux**

```bash
mkdir -p $HOME/local/php-version
cd !$
curl -# -L https://github.com/wilmoore/php-version/tarball/master | tar -xz --strip 1
```

Then add the following to your `~/.bashrc` (open with `atom ~/.bashrc`):

**MacOS**

```bash
# php-version
source $(brew --prefix php-version)/php-version.sh && php-version 7.0
```

**Linux**

```bash
# php-version
source $HOME/local/php-version/php-version.sh && php-version 7.0
```

Quit and reopen Terminal. Then, from the command line, run:

```bash
php -v
```

If your output doesn't indicate 7.0, please run the following:

```bash
php-version 7.0
```

Confirm that you are now running PHP 7.0 with `php-v`.

## Installing Homestead

### Virtual Box and Vagrant

-  Download and Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
-  Download and Install [Vagrant](https://www.vagrantup.com/downloads.html)
-  Add Homestead to your Vagrant box by running the following from the command
 line:

```bash
vagrant box add laravel/homestead
```

Now, install Homestead itself by doing the following:

-  `cd ~`
-  `git clone https://github.com/laravel/homestead.git Homestead`
-  `cd Homestead`
-  `bash init.sh`

Now run:

```bash
atom ~/.homestead/Homestead.yaml
```

and **change**:

```yaml
folders:
    - map: ~/Code
      to: /home/vagrant/Code

sites:
    - map: homestead.app
      to: /home/vagrant/Code/Laravel/public
```

to:

```yaml
folders:
    - map: ~/wdi/training/php-laravel
      to: /home/vagrant/Code

sites:
    - map: homestead.app
      to: /home/vagrant/Code/public
```

> Note: `vagrant up` will not launch successfully until a Laravel installation
> is found at `~/wdi/training/php-laravel`. Hang tight for that.

Feel free to read the [Laravel docs on Homestead](https://laravel.com/docs/5.3/homestead)
to learn more about configuration options.

### Virtual Hosts

We'll need to modify our machine's hosts. From the command line run:

```bash
atom /etc/hosts
```

Below:

```sh
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
```

Paste the following:

```bash
192.168.10.10  homestead.app
```

**If you did not have `/etc/hosts`**, please `touch /etc/hosts` and paste all of the above.

## Installing Laravel

Laravel is the most popular choice for application development in PHP.

### Composer Installation

To install Laravel, we'll use `composer` (the PHP equivalent to `bundle` or `npm`).

From the command line, run the following:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

### Laravel Installation

-  From the command line, run `composer global require "laravel/installer"`
-  Then, `atom ~/.bashrc` and paste the following:

```ruby
# Laravel
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:$HOME/.composer/vendor/bin/"
```

You now have access to the Laravel CLI. Test this by running `laravel` from the
command line. You should see output containing "Usage", "Options", etc.

The `laravel new <directory-name>` command is what we would be interested in to
generate a new Laravel application.

## Additional Resources

- [PHP Docs](http://php.net/manual/en/)
- [Laravel 5.3 Installation Docs](https://laravel.com/docs/5.3#installing-laravel)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
