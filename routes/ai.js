const express = require("express");
const { getJsonResponeFromPayload } = require("../utils/ai.utils");
const { AI_SERVER_VN, AI_SERVER_GLOBAL } = require("../consts/ai_server");
const router = express.Router();


router.get("/", async (req, res) => {
    let prompt = req.query.prompt;

    try {
        let data = await getJsonResponeFromPayload(prompt, AI_SERVER_VN);
        res.send(data);
    } catch (error) {
        try {
            let data = await getJsonResponeFromPayload(prompt, AI_SERVER_GLOBAL);
            res.send(data);
        } catch {
            res.send({ "status": "501" });
        }
    }
});

module.exports = router;