# Author: Michelalangelo Zampieri

## This repository holds all files for programming assignments and takehome exams I created for COSI 153, Mobile App Development, at Brandeis Univeristy in Summer 2024.

### The Exams and Videos folder, is hidden from github view in order to not allow any cheating or copying of code.

### This repository includes the following projects:

----------------------------------------------------------------

- Exam1: Files for takehome exam 1, recreating the area of triangle app, given the image of an app I recreated it to be as similar as possible, both styles and functionality.  

- Exam2: File for takehome exam 2, adding a username and passowrd global variable to be accessible on all parts of the site. 

- Flower_shop_app: File for the flower_shop_app that is the main project for the class. 

### Flower Shop App Edit History 

1. 6-11-24
- As of right now, it features a home page with navigation to other pages, and an occation page that lets peeople choose the given occasion and propmts them to fill out a survery form. Will continue to work on this project throughout the course. 

2. 6-13-24 
- Updated the main page, added global variables "username" and "password" and a log in botton, which takes users to a services page, with more bottons to the other six pages. Tried to make a scroll view but was not able will try again at a later date. Also created a header that displayed username that will be applied to all the pages. Also began on working on the gallery. The idea is for it to look like a scrap book that user's can flip through to see pictures of flowers, got the main book to work need to keep working with the pages themselves to add pictures. 

3. 6-17-24 
- Finalized the book and bookPage component, now there are two images one on top of the other, and the images zoom in into the screen when pressed. Each image also has an associated descrioption. This was done by mapping an index to each image path and then the corresponding index to a description of the image. Also added two bottons to the occasions screen. Added the type of occasion each imahe represents, for users to get an idea of the type of flower. Need to figure out why images 5 and 6 are in the slot where 3 and 4 should be. 

4. 6-19-24
- Worked more on home page, got persistence to work, username and password will be rememebered when page reloads. Also changed it so user needs to enter soemthing for username and password (in the future would like to have some sort of verification). Also fixed the book coponent so the correct images show up on the correct spot, it was an indexing issue. Also added a cover and back page to then add text to it. Did a bit of work on the occasions page, rearranged the buttons and added header, will continue to work on this next. 

5. 6-24-24
- Worked on Survey page, added toggle boxes for colors, decorations, and wrapping paper, when toggled they each give more options to choose from. Also began working on a Open AI API where users can enter keywords and the they will get a response back from Chat GPT to give them inspration for a bouquet to be made. Need to continue wokring on this, API key does not work will try to acquire own key. 