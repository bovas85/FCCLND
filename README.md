# FCCLND
Freecodecamp portal for Londoners campers

Hey guys,
I have been starting developing our portal.
The aim of this site is keeping track of people working at Freecodecamp track in London in order to have an easy tools to keep in touch with each other, meet new people and track at which point of the FCC track others are..so we can connect easily with others are at the same point of the track if we are willing to pair programming.

#Brief..so far..
You can find the portal live at http://artitudinale.org.uk/FCCLND/app/#/

Basically the idea is to have a mansory layout with pics of us, once you rollover (or click on mobile - didn't take of that yet!!) campers info will appear. So we can have name, a short bio, link to social networks and freecodecamp profile, last challenge done or in progress and date of last update.

I thought all that having in mind we can share the project and code so all updates will be made by you, modify the code.

So don't be shy and pull request!! :)

I used http://isotope.metafizzy.co/ to achive mansory layout and that gave me possibility of filtering.

I divided filters in the 3 main session of FCC - once you click on those you can filter even forward - I have follow the FCC map.
I believe this can be useful if people are looking to coding in pair with others are almost at the same stage in the FCC track.

#Tech..so far..
I start to develop the frontend part of the portal using : SASS, AngularJS (1) and Isotope.

To scaffold all that I needed I used http://yeoman.io/ - and the angular generator, all node modules and bower files are not in the repo so you may want to use yeomen to quickly have those.

If you can't chekout and make run this repo pls let me know...so we can sort that out.

I didn't touch any backend, so far it's just an ajax call to a json supposed to contain in the end our data.

#Move forward...
We obviously need a backend.

I d like to use MEAN stack or similar and don't loose the JS print that FCC trying to gave us. (no PHP and possibly no Ruby)

One question is: which backend we have in mind? we could have even an admin login and start to build a little CMS..just an idea.

For the next moment I have in mind to use Firebase as DB - I used it before and I know how to integrate it with AngularJS, but if someone is feeling bold or simple is able and wants go for any other No-SQL databaes...knock yourself out :)

Keep in mind that we would like to have this online so if we can open source / free ...it would be better.

We also , of course , going to need an integration with NodeJS and ExpressJS...if someone feels can make a contribution in those direction please do...I'm really a newbie with those...and I barely know where to start! 

#TO DOs
- Tidy up / rareffactor code;
- Weird rollover animation - I know :) ..I know why ...and I ll clean it up :) LOL
- Mobile view needs to be improved and media query jump to make sense ;
- Sometimes when you load page, pics are collapsed with each other - I guess some problem with angularjs retrive pic path and isotope looking for height and weight of images;
- Study a way to get off JQuery : I have to call it because I used Isotope out of the box but there s other resources: http://mankindsoftware.github.io/angular-isotope/ - I wasn't able to implement;
- I guess it would be better implement a LazyLoading kind of things...if portal grows big we sure need that..possibly in angularjs..no jQuery..(but see above);
- Cross browser and devices testing - I just testing on Chrome and with a desktop not using other devices / obviusly then flags issues or resolve them;
- Obviously all backend/security matter to sort out....

I will stop here for the moment and look forward you comments/feedback :)

I have created a Trello board for this project where I will create small tickets to break in small parts what we need to do and to be clear who is looking after what : https://trello.com/b/wrbJkZPc/fcc-lnd-portal

Any other ideas/input or whatsnot pls let me know.
Thanks!



