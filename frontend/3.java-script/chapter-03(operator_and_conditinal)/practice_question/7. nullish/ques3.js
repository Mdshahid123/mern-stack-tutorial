//Q29. Why was ?? introduced?

//The || operator returns the right-hand operand if the left-hand operand is falsy (i.e., false, 0, "", null, undefined, NaN). This can lead to unintended behavior when you want to treat certain falsy values (like 0 or "") as valid. The ?? operator was introduced to specifically handle null and undefined, allowing other falsy values to be treated as valid.