import { HttpHeaders } from '@angular/common/http';

// let httpHeaders: HttpHeaders = new HttpHeaders({
// 	'Content-type': 'application/json',
// 	Authorization: `bearer ${localStorage.getItem('token')}`
// });

export const Config = Object.freeze({
	GEO_API_KEY: 'AIzaSyDB1BGQ2MJ6NrKcNlbrAkOdr2H4Hcd0_Bk',
	API_BASE: 'http://localhost:3000/api'
	// API_BASE: "https://wearesw1.herokuapp.com/api",
	// HEADERS: { headers: httpHeaders }
	// refresh: function() {
	// 	httpHeaders = new HttpHeaders({
	// 		'Content-type': 'application/json',
	// 		Authorization: `bearer ${localStorage.getItem('token')}`
	// 	});
	// }
});
