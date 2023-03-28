let form = document.getElementById('form'),
    question = document.getElementById('question'),
    message = document.getElementById('message'),
    video = document.getElementById('video');


let storage = window.localStorage,
    complete = storage.getItem('quizzes') || [];

// Currently using arbitrary key, each video will contain a unique key that will
// be used to identify the quiz. Once implemented it's just a matter of replacing '1'
// with the video key.
if (complete.includes(1)) {
    message.style.display = 'block';
    video.style.display = 'none';
}
else {
    setTimeout(() => {
        form.style.display = 'block';
    }, 3000);
}


async function data(d) {
    const response = await fetch(`/question/answer`, {
        body: JSON.stringify(d),
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'cors'
    });
    const json = await response.json();

    return json;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    data(
        Object.fromEntries( new FormData(form) )
    ).then(response => {
        question.innerHTML = `${response.text}`;

        if (response.text.toLowerCase().includes('congratulations')) {
            form.style.display = 'none';
            video.style.display = 'none';

            message.style.display = 'block';

            complete.push(1);

            storage.setItem('quizzes', complete);
        }
    });
});
