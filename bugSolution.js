```javascript
// Solution: Use $or operator to handle null values separately.
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });

//Alternative solution: Check for null explicitly using $eq if null is not part of the $in values. 
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });
```