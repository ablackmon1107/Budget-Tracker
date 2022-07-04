let db;

const request = indexedDB.open('budget', 1);

request.onupgradeneeded = function(event) {
	db = event.target.result;
	db.createObjectStore('pending', { autoIncrement: true });
};
request.onsuccess = function (event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkIndexdb();
    }
};
request.onerror = function(event) {
    console.log("ERROR" + event.target.errorCode);
  };
  