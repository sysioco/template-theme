export default () => ({
  current: 0,
  announcements: [],
  init() {
    // get elements from DOM
    this.announcements = Array.from(document.querySelectorAll('#announcement'));
    // set initial state
    this.announcements[this.current].classList.replace('hidden', 'flex');

    // process elements on interval
    setInterval(
      () => {
        // Handle current value
        this.current = (this.current + 1) % this.announcements.length;

        // Handle elements display
        this.announcements.forEach((element, i) => {
          element.classList.toggle('flex', this.current === i);
          element.classList.toggle('hidden', this.current !== i);
        });
      },
      5000 // the duration of the animation
    );
  },
});
