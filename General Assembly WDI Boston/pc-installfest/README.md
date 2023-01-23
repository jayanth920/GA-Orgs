# Linux Dual-Boot Setup

These instructions will walk you through setting up students who have PCs with
the ability to boot into either their pre-existing Windows installation, or into
Ubuntu. They will use Ubuntu for everything SEI related.

## Preparation

Before the students come in for PC installfest, you will need:

- Several USB drives formatted as an installer for the latest stable version
  of Ubuntu (currently 18.04). More of these is better -- students frequently
  have to wait for a USB drive. If you need to create this USB, [read this](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0).
- Some familiarity with [BIOS](https://www.howtogeek.com/179789/htg-explains-what-is-bios-and-when-should-i-use-it/) and how to interact it with it.
- Optional: USB mouse and WiFi card, if you have them. Sometimes
  you'll have issues with drivers on Ubuntu, causing the built-in WiFi or
  touchpad not to work. It's easier to fix these if you can plugging in a working
  USB version

The students will need:

- A relatively modern PC with at least 30GB of free space. 50 or 60GB is better.
- To backup any important files on their computer.

## Partitioning

The first step here is to create a [partition](https://www.computerhope.com/jargon/p/partitio.htm) on each
student's hard drive for us to install Ubuntu into. After booting into Windows:
- Open the start menu, type "partition" into the search bar, and click the
  result that says something like "Manage Hard Disk Partitions"
- You should see something like this:

  ![Windows Parition Manager](https://www.howtogeek.com/wp-content/uploads/2017/07/xwmp_topa.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.FfPe-DiuIy.png)

- Look for the main drive, usually labelled `C:`. This will almost always be the
  largest drive. Check the "Free Space" column to ensure that the drive has
  enough free space. If it doesn't, the student will need to delete some stuff.
- Right click and the drive and select "Shrink Volume". This doesn't actually do
  anything yet, but it will query the drive to see how much space it's willing
  to let go of.
- You will see something like this:

![Shrink Menu](https://www.howtogeek.com/wp-content/uploads/gg/up/sshot-2009-08-27-15-56-05.png)

- Select an amount to shrink in megabytes. This needs to be at least 30GB
  (30,000MB), but more is better. Don't use the full shrink space though, unless
  you have to, because then the Windows partition will be out of free space.
  60GB is great if you can get it.
  - If the drive won't release enough space, you may have to do a [disk defrag](https://support.microsoft.com/en-us/help/4026701/windows-defragment-your-windows-10-pc). This takes forever, so hopefully you won't have to do it.
- Click "Shrink". This can be nearly instantaneous, or it can take half an hour.
  **Do not stop it, or restart the computer!** This can corrupt the hard drive.
  When this is done, the partition manager should now show the amount you chose
  to shrink as "Unallocated". This means it worked.

## Booting from the USB

The next step is to boot into the USB drive, instead of into Windows. There's a
few steps here. It's usually straightforward but occasionally quite difficult.

- Plug in the USB drive and restart the computer.
- As soon as the computer turns off, start pressing the key to enter the BIOS
  boot menu. This is different on every computer, but it's generally F10, F11,
  or F12. Just press the key rapidly as the computer starts to boot up.
  - Some computers have very odd procedures for getting into the BIOS/boot menu.
    Try googling the specific model of the computer if you can't figure it out.
    I've had good luck with Youtube here.
  - If you get into the main BIOS instead of the boot menu, that's fine too.
    Look for any setting related to boot order, put the USB stick at the
    top of the boot order list, then reboot.
- Select the USB drive you have inserted from the boot menu and press enter.

If everything is working, you should see something like this:

![image](https://media.git.generalassemb.ly/user/6926/files/415b3e80-59f1-11e9-82c1-0f82ecc39a1b)

It may look a bit different, but those options should be present.

## Installing Ubuntu

The next step is easy! You'll just be helping them click through the Ubuntu
installer and then waiting while it installs.

- On the screen in the above image, choose "Install Ubuntu"
- You'll be prompted to choose a keyboard layout first. It should default to
  English.
- Next you should see a menu like this:
![Install Options](./images/ubuntu-installation-type.png)
    - You'll want to choose "Normal installation" and check both boxes. The 3rd
      party drivers can help you avoid some WiFi/touchpad issues.
- When you get to this menu:

  ![Intallation Type](https://www.computerhope.com/issues/pictures/install-ubuntu-03-alongside-windows.jpg)

  Choose "Install Ubuntu alongside Windows 10". **NOTE**: If you don't see this
  option, something has gone wrong, probably the Ubuntu USB not seeing the
  partition. See troubleshooting section below for details.
- You should see something like this:

  ![Confirmation](https://media.git.generalassemb.ly/user/6926/files/0f97a700-59f4-11e9-9778-d59149d7d3ff)

  You can generally just hit continue. If you saw the option to install alongside
  Windows in the last step, this operation is safe. If you have any doubts, you
  can go back and click "Something Else", which will show you a partition table.
- You'll be prompted for time zone. It should default to New York, which is fine.
- They'll be prompted to enter a username and password. The username should be
  short, lowercase, and without spaces. The password should be strong but
  also easy to remember, since they'll use it frequently for `sudo`.
- Now, just wait for the installer to finish!

## Verifying the Installation

The last step is to make sure that we can boot into Ubuntu and that all hardware
is working. When the installation is complete, take out the USB drive and
reboot. You should see a screen like this:

![GRUB Bootloader](./images/grub-bootloader.png)

Choose Ubuntu.

Verify that the WiFi, keyboard, and touchpad is working. Some students will ask
about getting a touch screen working, if there laptop supports a touchscreen.
You can choose whether or not to spend time getting this working if it doesn't
working. It's generally not really necessary.

Finally, restart, and choose Windows Boot Manager to ensure that they can still
boot into Windows.

If anything doesn't work, see the troubleshooting section!

## Troubleshooting

#### Problem: "Install Ubuntu Alongside Windows" option not available

This usually indicates that the Ubuntu installer can't see a free partition.
That could mean that the partition didn't get properly freed up, or that the
Ubuntu installer can't see the hard disk at all.

You can figure out which one of these is happening by selecting the "Something
Else" option. This will open a partition editor. If you see multiple partitions
listed here, especially the main windows partition, that means the installer
**is** able to see the hard disk, and the problem is with the partition.

A likely cause is that most computers can
[only have four paritions](https://superuser.com/questions/370016/why-can-i-only-have-four-partitions). Windows sometimes uses two or three partitions for various backup
functionality. Some of these partitions can be safely deleted, and you will
likely have to remove one to be able to install Ubuntu. Google the name of each
partition along with something like "safe to delete" to read up on which of them
can be removed.

If you **can't** see the Windows partitions in the partition editor, there are a
few things you can try. Start
[here](https://superuser.com/questions/370016/why-can-i-only-have-four-partitions).
If you change any BIOS settings, it's a good idea to note down somewhere exactly
what you've changed, because changing things like the SATA/RAID mode can make
the computer unbootable, and the only fix is to go back into the BIOS and
reverse your changes.

Disk encryption can be involved here too, which is particuliarly difficult to
fix. If you can't solve this issue with any of the above advice, try Googling
different terms related to the problem and the specific make/model of the
laptop. Don't panic if someone's computer becomes unbootable as a result of
changing some BIOS settings. It's usually just a matter of changing the setting
back.

#### Problem: Ubuntu installed but wifi/mouse/something isn't working

It's fairly common for drivers to not work out of the box with Ubuntu. This is
almost always fixable, but it can occasionally take a lot of work. If if it's a
touchpad issue, the fix is going to dependent on the model of computer, since
there are seemingly lots of different touchpad manufacturers, each with their
own drivers. It's often as simple as just installing a certain package with `apt`.
This issue can usually be sidestepped (hopefully temporarily) by
plugging in a USB mouse.

Fixing wifi can be a bit more difficult, since you generally need internet to
download drivers. There are ethernet cables at front lines, and ethernet ports
in the classrooms near the projectors' HDMI plugins. Generally speaking, you'll
need to look up solutions relative to the specific model of the computer. For a
temporary fix, you can use a USB wifi adapter if the student has one.

#### Important tip: Using a later version of Ubuntu

Installfest is currently set up to run on Ubuntu 18.04, because that's Ubuntu's
current long-term stable version. However, Ubuntu 18.10 is also available, and
installing Ubuntu 18.10 can often fix driver issues. **If you can't fix driver
issues, you should probably try installing 18.10**. The downside here is that
some of the installfest scripts won't work (usually because of missing
dependencies), so if you go with 18.10, be ready to sit with that student during
installfest and install any missing dependencies.

To do this, you'll need to download the `.iso` file for 18.10 and follow
instructions for
[making a bootable USB](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0).
This takes a little while, so definitely try fixing the driver issues on 18.04
first.
