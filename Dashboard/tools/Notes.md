# Notes about application development
* You cant export & import between (not nodeJS/ExpressJS) scripts
** instead you have to write functions in seperate scripts and then import them into app.js by require()  

#! IMPORTANT !#
* It's not possible to collect data from db and return them.
** Instead you have to use the callback scopes to use te collected data to manipulate them and to 