const progressBar = document.querySelector('.progress_bar_internal');
const love_icon = document.querySelector('.love_icon');
const pink_rose = document.querySelector('.pink_rose');
const img_container1 = document.querySelector('.img1_container');
const img_container2 = document.querySelector('.img2_container');
const heart_container = document.querySelector('.heart_container');
const container = document.querySelector('.container');
const my_feelings = document.querySelector('.feelings_container');
const lower_container = document.querySelector('.lower_text');

let value = 0;

// initial state
container.style.display = 'none';
pink_rose.style.display = 'none';
img_container1.style.display = 'none';
img_container2.style.display = 'none';
heart_container.style.display = 'block';
my_feelings.style.display = 'none';
lower_container.style.display = 'none';

// start on click
love_icon.addEventListener('click', () => {
    heart_container.style.display = 'none';
    container.style.display = 'block';

    startProgress();   // 👈 start only after click
});

function startProgress() {
    const interval = setInterval(() => {

        if (value < 100) {
            value++;
            progressBar.style.width = value + '%';
        }

        // 🌹 25%
        if (value >= 25 && pink_rose.style.display === 'none') {
            pink_rose.style.display = 'block';
            pink_rose.classList.add('fade_in');
        }

        // 🖼 50%
        if (value >= 50 && img_container1.style.display === 'none') {
            img_container1.style.display = 'flex';
            img_container2.style.display = 'flex';

            img_container1.classList.add('fade_in');
            img_container2.classList.add('fade_in');
        }

        // 💌 75%
        if (value >= 75 && my_feelings.style.display === 'none') {
            my_feelings.style.display = 'block';
            my_feelings.classList.add('fade_in');
            container.style.display = 'none';
        }

        // ❤️ 100%
        if (value >= 100) {
            lower_container.style.display = 'block';
            lower_container.classList.add('fade_in');

            clearInterval(interval);  // ✅ stop loop
        }

    }, 100);
}

// Optional: Add fade-in animation via CSS

