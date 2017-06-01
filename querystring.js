var queryString = {
	init : function() {
		this.string = window.location.search.substring(1);
		this.object = this.parseQueryString(this.string);
	},

	string : '',
	object : {},

	parseQueryString : function(queryString) {
		var params = {}, queries, temp, i, l;

		if (queryString === '') {
			return params;
		}

		// Split into key/value pairs
		queries = queryString.split("&");

		// Convert the array of strings into an object
		for (i = 0, l = queries.length; i < l; i++) {
			temp = queries[i].split('=');
			params[temp[0]] = decodeURIComponent(temp[1]);
		}

		return params;
	},

	insertParam : function(key, value) {
		key = encodeURI(key);
		value = encodeURI(value);
		var kvp = document.location.search.substr(1).split('&');
		var i = kvp.length;
		var x;
		while (i--) {
			x = kvp[i].split('=');
			if (x[0] == key) {
				x[1] = value;
				kvp[i] = x.join('=');
				break;
			}
		}

		if (i < 0) {
			kvp[kvp.length] = [ key, value ].join('=');
		}

		//this will reload the page, it's likely better to store this until finished
		document.location.search = kvp.join('&');
	},
};

queryString.init();
