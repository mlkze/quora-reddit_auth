# Quora/Reddit Authorization Magic

An extension for Google Chrome that allows user to bypass forced authorization on Quora and Reddit (including NSFW/18+ pages). Browse anonymously without logging in.

## Download
Download and extract zip file for direct adding the extenstion in Google Chrome. <br />
Link to download: <br />
https://downgit.github.io/#/home?url=https://github.com/mlkze/quora-reddit_auth/tree/c2b163053fd448db18fdc84091c60f9529b0c2ba/Quora-Reddit-Authorization-Magic <br />

## How it works

### Reddit
 - Reddit.com often marks some pages as 18+ and requires user authorization. If the user is not logged in, the page will be blurred and the user will receive a notification. After this, browsing will not be possible.
 - Reddit uses GET request for initiate screen blurring and notice showing. Client sends a request to server to check user's authorization status to initiate .js visual scripts. If the GET request is blocked by the client, these .js scripts (blur and notification) are not rendered.
 - Chrome DevTools can show what requests initiates this scripts. In this extenstion all GET request with some keywords was blocked.

### Quora
- Quora.com has same force log-in scripts as Reddit but in this case, appropriate to add "?" SQL placeholder to end of the URL to bypass authorization and redirect a page.

### Images
![Alt Image 1](https://github.com/mlkze/quora-reddit_auth/blob/81cd159399e516c4ae7667bf73e90b26c0f79204/readme_images/explanation1.png)
![Alt Image 2](https://github.com/mlkze/quora-reddit_auth/blob/365f427f830f4e8c1eec6d109ff0221e1cbe06de/readme_images/explanation2.png)

## Appendix
In fact, it is more convenient to use a system similar to Reddit bypassing authorization by blocking GET requests for Quora. This was done for variety.
The extension was created on version Manifest 2 due to problems in the new version of the API, which does not allow full use of the webRequest in Manifest v3.
