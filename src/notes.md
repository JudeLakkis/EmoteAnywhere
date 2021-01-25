get text
var text = document.body.innerText

split text
text.split(' ')

strip text
text.replace(/(\r\n|\n|\r)/gm, "")

search for terms
```javascript
for (i = 0; i < split.length; i++) { 
	if (split[i][0] == 'a') {
		console.log(split[i])
	}
}
```

