This is a project I made in order to reproduce an issue found in trying to lint my Stories in Storybook JS.

Basically,
1) I Installed the latest version of Next JS using `npx create-next-app@latest`. The screenshot below displays the options I chose
![image](https://github.com/JSON-FS/repro-sb-gts-nopub-issue/assets/107381769/a4ecb7f5-46f6-4e2b-96c0-c309fadba9f4)

2) I Installed [gts](https://github.com/google/gts) using `npm i gts`. This installed a lower version so I had to modify `package.json` to install a newer version `^4.0.1`. I ran `npm i` afterwards.
3) I create and configured `.eslintrc.js` so that it extends `gts`. I deleted the old `.eslintrc.json` to give priority to `.eslintrc.js`
4) I Installed Storybook using `npx storybook@latest init`
5) I ran prettier to format the code base. I made a npm script for this called `format`. So I can just do `npm run format`
6) I ran `npm run lint` to attempt to lint the project - this is where i encountered the errors. Note that these components and stories are the default files made by Storybook when I ran `npx storybook@latest init`.
![image](https://github.com/JSON-FS/repro-sb-gts-nopub-issue/assets/107381769/4e3a20c4-c781-4e01-be39-f99fff404e52)
