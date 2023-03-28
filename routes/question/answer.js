module.exports = function(app) {
    app.post('/question/answer', async (req, res) => {
        let answer = req.body.answer,
            // Honeypot hidden Field
            question = req.body.question,
            text = 'Unfortunately you answered incorrectly. Try again later';

        if (answer == 3) {
            text = 'Congratulations you just earned x DASH!';
        }

        if (question) {
            text = 'Triggered honeypot ( hidden field contains value, you must be a bot ). Normal quiz will not return a message for bots';
        }

        res.status(200).json({ text });
    });
};
