const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/themes", require("./routes/themes"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
