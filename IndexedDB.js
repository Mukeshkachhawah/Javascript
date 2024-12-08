// 1. Database open karna ya create karna
let request = indexedDB.open("MyDatabase", 1);

// 2. Jab database successfully open ho jaye
request.onsuccess = function (event) {
  let db = event.target.result;
  console.log("Database opened successfully!");

  // 3. Transaction start karna
  let transaction = db.transaction("MyObjectStore", "readwrite");

  // 4. Object store access karna
  let store = transaction.objectStore("MyObjectStore");

  // 5. Data add karna
  store.add({ id: 1, name: "Mukesh", score: 100 });
  console.log("Data added!");
};

// 6. Agar koi error ho
request.onerror = function (event) {
  console.error("Error opening database:", event.target.errorCode);
};

// 7. Agar pehli baar database ban raha hai, to object store create karna hoga
request.onupgradeneeded = function (event) {
  let db = event.target.result;

  // 8. Object store create karna
  db.createObjectStore("MyObjectStore", { keyPath: "id" });
  console.log("Object store created!");
};
