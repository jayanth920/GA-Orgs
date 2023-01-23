Playbooks
=========

Shameless ripped off from others. Modified from [phred/5minbootstrap.git](https://github.com/phred/5minbootstrap.git) for ease of customization and deployment.

In addition to setting up a newly provisioned Ubuntu server, this playbook adds the `postgresql` repository and sets up keys.

## Instructions

1. Change the default root password provided by your host.
1. If you want to add your SSH public key to the server, add your public key to the `files` subdirectory for the `new` role and edit the `deploy_user` task with the name of the file.
1. Run the playbook. You may need to run with the `--ask-pass` flag. Password authentication will be disabled after the `new` role is is run.

    yourmachine$ ansible-playbook -i hosts.ini new.yml --user root --extra-vars "hosts=your_host"


[`site.yml`](site.yml)
----------------------

This playbook makes sure our app can run by installing dependencies. For example, it installs `chruby` and our desired `ruby`, and makes sure that is our default `ruby`. It also installs `nginx` and uploads the configuration, linking them into `sites-available` before restarting `nginx`. Finally, it sets up our database server and initializes a database, if `db=true` is passed. Other options include `ruby`, `nginx`, and `apt`.

    yourmachine$ ansible-playbook -i hosts.ini new.yml --user root --extra-vars "hosts=your_host"
