export default {
  methods: {
    scroll(e) {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
      }
    },
  },
};
