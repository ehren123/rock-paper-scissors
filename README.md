# Rock paper scissors

## Features
* Player versus Player
* Player versus Computer
* Games automatically saved
* Games can be continued or deleted in the "See results" menu

## Choice of application type
While I was given the option to use any combination of front-end or back-end implementations, I went with a purely front-end solution for the following reasons:

1. Although I am a full stack engineer, I am more experienced with C# than python. I'm decent at python as well, but for this challenge, I didn't think this would be an effective use of time.

2. All requirements are possible using browser storage. I didn't see much reason to build a backend in order to meet the requirements.

3. I have been using angular for many years, and I am efficient with it.

## Technologies

* Angular material for UX related css.
* Bootstrap grid for layout.

## Architecture
The architecture was kept basic and simple. All components are in a componentns folder. 

The game logic is contained within src/app/utilities/game.utility.ts.

State is managed through the service src/app/services/game.service.ts. The components interact with this service.

## UX
The UX uses angular material. While functional, the UX is unpolished.

## Ideas for further improvement
If our goal was to improve the application, there is room for some improvements:
* Add unit testing
* Consider improving architecture, maybe seperate components and pages.
* There are likely some public methods that could be made private.
* UX needs some work
* We could implement a backend to allow users to save their scores remotely.
