---
slug: "projects/my-unsplash"
nameOfClass: "projects-items"
title: "My Unsplash"
added: "2021-10-01"
listName: "📸 /My-Unsplash"
video: "/myUnsplash.mp4"
popupImageSrc: "My-Unsplash-ss.png"
popupImageAlt: "App screenshot"
popupLiveLink: "https://my-unsplash-mu.vercel.app/"
popupGithubLink: "https://github.com/Kielx/my-unsplash"
techIcons: [
        "react",
        "firebase",
        "redux",
        "html5",
        "css3",
        "tailwindcss",
        "materialdesign",
      ]
---

My Unsplash is my solution to [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP). This is my version of the application based on the popular Unsplash website. The application is a digital gallery that allows you to add and remove photos and display them in a Masonry layout.

Does that mean all I had to do was copy the finished design and called it my project? Not at all. For this project, I had design files at my disposal, but I had to translate their implementation into TailwindCSS. In addition, I had to choose a solution responsible for Masonry Layout and create all facilities responsible for adding and storing photos.

### What features does My Unsplash have

- The application presents the added photos in the Masonry layout - It is a system in which one axis uses a strict grid system - most often in the case of columns, while the other axis (rows) are matched to the gaps formed by shorter elements. The items in the following lines float up to fill the gaps completely.
- Users can add photos to the gallery using a dedicated drag'n'drop component
- New photos are displayed immediately after being added at the very top of the gallery
- A progress bar is displayed while adding images
- Users can delete photos from the gallery
- Users can search photos by name
- Photos are dynamically loaded using the infinite scroll
- Dark and light mode, the photos adjust the contrast accordingly for easier viewing against a dark background
- The website works as an SPA (Single Page Application)
- The application is responsive and should look correct on all types of devices that support modern browsers
- IP Tracker can be operated with just the keyboard

### What features does My Unsplash not have

- The site does not have login and user accounts, so each user can add photos with a maximum size of 5MB
- Due to the above, in theory, anyone can remove all photos from the gallery (the question remains, what for?). I do not aspire to compete with professional websites such as Unsplash or Pexels, and the project is only a hobby solution, so I did not implement login and user accounts.
- Due to the fact that the page loads only a certain number of photos when searching, it is limited to searching only among those that have already been downloaded. Due to time constraints, I did not create another option, although in the future I may solve it by creating a separate search window and displaying results based on the searched phrase.
