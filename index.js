const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const defaultPage = require("./routes/default_page");
const question = require("./routes/question");
const ai = require("./routes/ai");

app.use(cors());
app.use(express.json());
app.use("/", defaultPage);
app.use("/question", question);
app.use("/ai", ai);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
