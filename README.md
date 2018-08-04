# Kasper Keinänen Software Developer test


## Instructions for part I:
The easiest way to to test the function is to open the `part1.js` file and copy the code. 
Then open a JavaScript console in your web browser (e.g. Google Chrome, Mozzilla Firefox).
Paste the code into the console and try using the code like this:

```
wordsInaBox("Hello world! How are you today?")
```
The function `wordsInaBox()`will the log into the console:

```
********
*Hello *
*world!*
*How   *
*are   *
*you   *
*today?*
********
```

## Instructions for part II:

### Test Part II

Clone the repository
```
$ git clone https://github.com/kasperkeinanen/Megaklinikka-Software-Developer-test.git
```
Run the Main.java


Then you can test the webservice end point by using the command line tool `curl`.

```
~ $ curl --header "Content-Type: application/json" \
 --request POST \
 --data '{"text":"Hello!"}' \
   http://localhost:4567/hash 
```

Returns HTTP status code 200 and:
```JSON
{"hash":"334d016f755cd6dc58c53a86e183882f8ec14f52fb05345887c8a5edd42c87b7"}
```
If the request is falsy then the webservice will return HTTP status code 400 and:
```JSON
{"errorMessage":"Bad Input"}
```

## The test:

### Megaklinikka Software Developer test

Publish your solution along with instructions to compile and run the solution on a public
code hosting site like GitHub or Bitbucket and send a link to the repository.

#### Part I

Write a JavaScript-function that takes a string and prints its words, one per
line, in a rectangular frame. For example the string "Hello World in a frame"
gets printed as:

```
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
```

#### Part II

Using [Spark](http://sparkjava.com/) or [Play framework](https://www.playframework.com/)
create a webservice endpoint that accepts the request described below and responds according
to the specification.

Request:

```
POST /hash
```

Request body:

```
{"text": "XXX"}
```

where the value of text is a string. 

Return a HTTP 200 response with a request body that contains the SHA-256 hash of the
value of text in a JSON object, as described below.

 Response body:
 
```
{"hash": "sha-256-hash-of-the-value-of-text"}
```

If the input is invalid return an error.
