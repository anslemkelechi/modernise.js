
<h1 align="center"> MODERNIZE.JS </h1>

<hr/>

<p>Creating config files for webpack and babel can be an hell of stress, this NPM package helps you get started with writing code as soon as possible by abstracting the whole process of creating config files for webpack and babel. Get started with using modern javascript tooling easier and faster.</p>

<h3> List of features </h3>

<ul>
  <li>No Extra Installation Needed</li>
  <li>All Webpack & Babel Packages & Plugins Pre-Installed</li>
  <li>All Configurations Already Pre-Written</li>
  <li>Get On With Coding As Quick As Possible</li>
</ul>

<h3>Installation & Usage </h3>
<h4>You need Node.js & NPM installed before making us of this package, easily do so here <a href="https://nodejs.org/en/">Install Here</a></h4>

<h3>Initialize NPM to create <code>Package.json</code>file</h3>

```shell
$ npm init
```
<h3>Install Package</h3>

```shell
$ npm i modernize.js
```

<h3>Configure using <code>COMMON.JS</code> create a javascript file <code>(test.js)</code> and copy code below</h3>

```shell
const modernize = require('modernize.js')
modernize()
```

<h3>Using <code>ES6 IMPORTS</code> create a javascript file <code>(test.js)</code> and copy code below</h3>

```shell
import modernize from 'modernize.js'
modernize()
```

<h3>Add the following scripts to your <code>Package.json</code> file.</h3>

```code
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
```
<h3>Run the javascript file in the terminal for the magic</h3>

```shell
$ node test.js
```
<h3>Start Building/h3>

```shell
$ npm run start
```


<h3>Contributing</h3>
Contribution is highly welcomed
<ul>
<li>Fork the code to your repository</li>
<li>Make Changes and Send PR</li>
</ul>

<h3>Authors or Acknowledgments</h3>
<ul>
  <li><a href="https://github.com/anslemkelechi">Kelechi Okoronkwo - (Blakcoder) </a> </li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
