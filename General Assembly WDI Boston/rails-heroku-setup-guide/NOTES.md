# NOTES

## Code Along Tips

1. **Ask everyone to sign up for a Heroku account well before the lesson**.  Heroku must throttle sign-ups at their site because cohort 30 had to keep trying, which added time to the lesson and frustration for the devs.
1. **Ensure devs set their campus API origin remote**. Devs need an app to push.  Using the campus API they had been working on was okay, *but* you have to have them `git remote set-url origin <new-ssh-from-newly-created-repo>` because they will have forked and cloned.
1. **Merge work into master, before deploying**. Don't do what I did and skip the step for merging.  Devs were working in a training branch, but pushed master.  It would have been better to have had them merge into master first.


## Git Push Tips
Sometimes it's difficult to conceptualize what is happening with git push to
various origins and what is happening with the various databases we now have to
manage.

![](https://media.git.generalassemb.ly/user/5694/files/62a15a36-97c6-11e8-9655-1aed3ac4ec80)
