# Author: Michelalangelo Zampieri

## This repository holds all files for programming assignments and takehome exams I created for COSI 153, Mobile App Development, at Brandeis Univeristy in Summer 2024.

### The Exams and Videos folder, is hidden from github view in order to not allow any cheating or copying of code.

### This repository includes the following projects:

----------------------------------------------------------------

- Exam1: Files for takehome exam 1, recreating the area of triangle app, given the image of an app I recreated it to be as similar as possible, both styles and functionality.  

- Exam2: File for takehome exam 2, adding a username and passowrd global variable to be accessible on all parts of the site. 

- Flower_shop_app: File for the flower_shop_app that is the main project for the class. 

The flower shop app is an app I created for an online flower shop that includes many features, including: a log in system (no user authentication currently), a book style gallery, a server backed survey to send and fetch responses, fully styleized user interface, and an admin page to pull responses from server, as well as a database for persistance. This app was my first project in mobile app development and it taught me alot about mobile app development, styling, react native, server maintaince, push and pull requests, databases and app deployment. 

- Flower-shop-server: Files for a local host server, this server is used to upload the orders into a JSON file and then they are pulled down in a composite form. The local server is then launched using ngrok. 

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

6. 6-26-24
- Continued wokring on the survey, tried to get establish a local host server but was not able to get it working. The app is able to send infomration up to professors's ngrok server that was used in class (I had access since I was creating it in class alongside the professor). I think the isssue is the server and app comunicating, will try creating a ngrok server and seeing if that helps. Also began to make an admin page to easily view the orders pulled from the server. After coming back from it, was able to get the ngrok server to work, now the app can take orders from the users, sends them up to the server, and then takes them back down in the admin page. For some reason this only works when running expo on the phone and not when running the app through the site. Also need to manually update the server name eveytime a new ngrok server is created, both in Survey and AdminPage. Got Open-Ai api key and got chat gpt to work in the app, having som trouble exporting the response so it can be viewed in the order summary, I think it is an exporting issue will continue to work on it. 

7. 6-27-24
- Was able to get the ChatGPT reponse to be visible and portable to the server. FIxed it by making the API response a global variable and using it in the different components, now the information is visible in the admin page as well. Next and last feature I want to add would be the idea to have user's "create" their own bouquets by having the emojis. This would allow me to fullt use the phone's capabilities. I finally added some style to the app, this style is most likely temporary as I want my girlfriend to choose how the app is styled as this is for her, for now I added a background image which I created to all the pages, and changed all the text to white (as the image is black) and tweaked the buttons a bit. I would say right now I reached a viable profuct version of my app. I am very satisfied with my work so far and look forward to adding the last feature and finishing style as well. 

8. 6-30-24
- Made a few last style changes, changed the gitignore, and made three videos to showcase the app, one video explaining the code, explaining the storage, global varibales, server pulls and pushes and overall structure. Second video explains the ideas behind the app and the overall design and big picture plan for the future. Last video is the app running on the phone and showing the order push and pull systems. Final Videos desrcibed are hidden to github since I would not to upload otherwise. 

9. 7-2-24
- Last minute changes, this will probably be the last major and noteworthy update made. Added a comments feture to add comments on the gallery page, like the survey the comments are sent to the server, different room, and are then pulled down into the admin page. The admin page shows 5 most recent orders and comments with option to view 5 more of each. Overall Im satisfied with the app and was able to get all of the features I wanted and some I didnt know I would like. What is left is the pricing, carrers, story, and account pages, the first three I think I will leave empty as they would be mostly text anyways. The last, account, I might revisit in the future if I decide to maybe connect a firebase or database for user verification and account information, that is a work in progress for now. 