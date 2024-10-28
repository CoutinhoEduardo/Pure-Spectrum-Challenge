# Pure Spectrum Challenge Code

> A simple project that can convert your files and merge them, this project was made using SOLID principles.

### Ajustes e melhorias

Here are some things the project is able to do:

- [x] Merge multiples .pdf files into one file
- [x] Convert .txt to .pdf
- [x] Convert .pdf to .txt
- [x] Convert .html to .pdf

## How to run the project

- You need to have nodejs in your computer
- Run this command at your terminal to install all dependencies:

```
npm install
```

After all the dependencies are finished, run this command at your terminal to start the aplication:

```
npm run dev
```

## How can i merge my files?

You need to send a post request to the following endpoint:

```
http://localhost:3000/merge-files
```

Sending your files with the fieldname "files", the system will merge then and send you the path where the new merged file is created.

- The system is now able to merge only pdf files for example and test.

## How can i convert a .txt file?

Sending a post request to the following endpoint:

```
http://localhost:3000/convert-txt/<extension-you-want>
```

Here you can convert your .txt into another extension, you choose the extension at the <extension-you-want>.

- The system is now able to convert a txt to a pdf file for example and test.

## How can i convert a .html file?

Sending a post request to the following endpoint:

```
http://localhost:3000/convert-html/<extension-you-want>
```

Here you can convert your .html into another extension, you choose the extension at the <extension-you-want>.

- The system is now able to convert a .html to a pdf file for example and test.

## Here you can find a technical documentation about the project at the "diagram.jpg"
