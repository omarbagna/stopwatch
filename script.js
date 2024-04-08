let seconds = 0;
let minutes = 0;
let hours = 0;
let secondsContainer = document.getElementById('second');
let minutesContainer = document.getElementById('minute');
let hoursContainer = document.getElementById('hour');
let interval = null;
let pauseTimer = true;

const play = () => {
	if ((interval && !pauseTimer) || !pauseTimer) {
		return;
	} else {
		pauseTimer = false;
		interval = setInterval(() => {
			seconds += 1;

			if (seconds.toString().length === 1) {
				secondsContainer.innerText = `0${seconds}`;
			} else if (seconds === 60) {
				seconds = 0;
				minutes += 1;
				secondsContainer.innerText = `0${seconds}`;
				if (minutes.toString().length === 1) {
					minutesContainer.innerText = `0${minutes}`;
				} else if (minutes === 60) {
					seconds = 0;
					minutes = 0;
					hours += 1;
					secondsContainer.innerText = `0${seconds}`;
					minutesContainer.innerText = `0${seconds}`;
					if (hours.toString().length === 1) {
						hoursContainer.innerText = `0${hours}`;
					} else {
						minutesContainer.innerText = `${hours}`;
					}
				} else {
					minutesContainer.innerText = `${minutes}`;
				}
			} else {
				secondsContainer.innerText = `${seconds}`;
			}
		}, 1000);
	}
};

const pause = () => {
	if (interval) {
		clearInterval(interval);
	} else {
		return;
	}
	pauseTimer = true;
};

const stop = () => {
	if (interval) {
		clearInterval(interval);
		seconds = 0;
		minutes = 0;
		hours = 0;

		secondsContainer.innerText = `0${seconds}`;
		minutesContainer.innerText = `0${minutes}`;
		hoursContainer.innerText = `0${hours}`;
	} else {
		return;
	}
	pauseTimer = true;
};
