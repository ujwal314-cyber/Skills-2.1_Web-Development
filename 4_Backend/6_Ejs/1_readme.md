ejs website

Bootstrap for readymade templates

to use ejs you save your html files as .ejs under views

ejs is basically you are using the same template but for different things
> imagine you have a website in which there are different sections like adidas puma etc 
> the navbar,footer and somme elements will be same for all the sections and you cnat sit and write the nav html for all sections so we use ejs to pass variables to a single template

> You can also pass objects, arrays and iterate on them => refer ejs website

> Using ejs u can split your html into parts and at last include them in the main file


> Here in index.ejs when you are including the nav you can override the variables being passed like nprnally the siteName being Passed is 'Adidas' now but in index if you write <%- include('nav', {siteName: 'Puma'}) %>  instead of Adidas Puma will be displayed