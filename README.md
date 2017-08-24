# h
A super small javascript framework based on hyperscript.

## example (click the button to +1)

```javascript
app('app', 0, function(state, rerender) {
	return h(
		"button",
		{
			onclick: function() {
				console.log(rerender);
				rerender(state + 1);
			}
		},
		state.toString()
	)
})
```
