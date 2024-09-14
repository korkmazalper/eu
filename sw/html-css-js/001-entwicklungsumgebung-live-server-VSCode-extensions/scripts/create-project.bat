@echo off

mkdir project-root-w
cd project-root-w

type nul > index.html

mkdir css
type nul > css\main.css
type nul > css\reset.css

mkdir js
type nul > js\main.js

mkdir images
type nul > images\logo.png
type nul > images\background.jpg

mkdir fonts
type nul > fonts\OpenSans-Regular.ttf

mkdir libs
type nul > libs\jquery.js
type nul > libs\bootstrap.css

mkdir assets\videos
type nul > assets\videos\intro.mp4

mkdir assets\docs
type nul > assets\docs\test.pdf

echo Die Projektverzeichnisstruktur wurde erfolgreich erstellt.
