export default () => ({
  current: 0,
  announcements: [],
  init() {
    this.announcements = Array.from(document.querySelectorAll('#announcement')); // get elements from DOM
    // this.announcements[this.current].classList.replace('hidden', 'flex'); // set initial block state
    setInterval(
      () => (this.current = (this.current + 1) % this.announcements.length), // change block
      5000 // the duration of the animation
    );
  },
  nextAnnouncement() {
    this.current = (this.current + 1) % this.announcements.length;
  },
  previousAnnouncement() {
    this.current = this.current === 0 ? this.announcements.length - 1 : this.current - 1;
  },
});
