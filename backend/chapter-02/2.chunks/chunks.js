//When a client sends data (like in a POST request), Node.js does NOT receive the whole request body at once.

// that is If the client sends a 5 MB file, Node does not load all 5 MB into memory at once.
// Instead, it receive the data in small small chunk(packet)


// Chunk 1 → Chunk 2 → Chunk 3 → ... → Chunk N

// What does a chunk look like?

// If the request body is very small, maybe only one chunk will be printed.

{ <Buffer 6e 61 6d 65 3d 73 68 61 68 69 64> }



//If the request body is big, you might get:

<Buffer 6e 61 6d 65>
<Buffer 3d 73 68 61 68 69>
<Buffer 64 26 61 67 65>


// This is because Node receives the chunk in binary form (Buffer).
